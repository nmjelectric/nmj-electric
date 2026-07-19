import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

type ContactFields = {
	name: string;
	phone: string;
	email: string;
	service: string;
	location: string;
	message: string;
	website: string;
};

function getField(formData: FormData, name: string): string {
	const value = formData.get(name);

	return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function jsonResponse(
	body: Record<string, unknown>,
	status = 200,
): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();

		const fields: ContactFields = {
			name: getField(formData, "name"),
			phone: getField(formData, "phone"),
			email: getField(formData, "email"),
			service: getField(formData, "service"),
			location: getField(formData, "location"),
			message: getField(formData, "message"),
			website: getField(formData, "website"),
		};

		// Hidden honeypot field. Real visitors leave this blank.
		if (fields.website) {
			return jsonResponse({ success: true });
		}

		if (
			!fields.name ||
			!fields.phone ||
			!fields.email ||
			!fields.service ||
			!fields.location ||
			!fields.message
		) {
			return jsonResponse(
				{
					success: false,
					message: "Please complete all required fields.",
				},
				400,
			);
		}

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailPattern.test(fields.email)) {
			return jsonResponse(
				{
					success: false,
					message: "Please enter a valid email address.",
				},
				400,
			);
		}

		const apiKey = (
			env as {
				RESEND_API_KEY?: string;
			}
		).RESEND_API_KEY;

		if (!apiKey) {
			console.error("RESEND_API_KEY is unavailable.");

			return jsonResponse(
				{
					success: false,
					message: "The contact form is temporarily unavailable.",
				},
				500,
			);
		}

		const emailHtml = `
			<h1>New Website Service Request</h1>

			<p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
			<p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>
			<p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
			<p><strong>Service:</strong> ${escapeHtml(fields.service)}</p>
			<p><strong>Location:</strong> ${escapeHtml(fields.location)}</p>

			<h2>Customer Message</h2>
			<p>${escapeHtml(fields.message).replaceAll("\n", "<br>")}</p>
		`;

		const resendResponse = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
				"User-Agent": "NMJ-Electric-Website/1.0",
			},
			body: JSON.stringify({
				from: "NMJ Electric Website <website@nmjelectric.com>",
				to: ["info@nmjelectric.com"],
				reply_to: fields.email,
				subject: `Website Request: ${fields.service} — ${fields.name}`,
				html: emailHtml,
			}),
		});

		if (!resendResponse.ok) {
			const resendError = await resendResponse.text();
			console.error("Resend error:", resendError);

			return jsonResponse(
				{
					success: false,
					message:
						"We could not send your request. Please call or email NMJ Electric.",
				},
				502,
			);
		}

		return jsonResponse({
			success: true,
			message:
				"Thank you. Your request was sent successfully. NMJ Electric will contact you shortly.",
		});
	} catch (error) {
		console.error("Contact form error:", error);

		return jsonResponse(
			{
				success: false,
				message:
					"Something went wrong. Please call or email NMJ Electric.",
			},
			500,
		);
	}
};