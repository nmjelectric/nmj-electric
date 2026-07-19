declare module "cloudflare:workers" {
	interface CloudflareEnv {
		RESEND_API_KEY: string;
	}

	export const env: CloudflareEnv;
}