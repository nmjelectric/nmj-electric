import residentialImage from "../assets/images/services/residential.jpg";
import commercialImage from "../assets/images/services/commercial.jpg";
import lightingImage from "../assets/images/services/lighting.jpg";
import troubleshootingImage from "../assets/images/services/troubleshooting.jpg";
import panelUpgradeImage from "../assets/images/services/panel-upgrade.jpg";
import inspectionImage from "../assets/images/services/inspection.jpg";

import residentialHero from "../assets/images/services/residential.jpg";
import commercialHero from "../assets/images/services/commercial.jpg";
import lightingHero from "../assets/images/services/lighting.jpg";
import troubleshootingHero from "../assets/images/services/troubleshooting.jpg";
import panelUpgradeHero from "../assets/images/services/panel-upgrade.jpg";
import inspectionHero from "../assets/images/services/inspection.jpg";


export const services = [
	{
		slug: "residential",
		title: "Residential Electrical",
		image: residentialImage,
		shortDescription:
			"Electrical repairs, upgrades, installations, and troubleshooting for homes throughout the Dallas–Fort Worth area.",
		heroImage: residentialHero,
			heroTitle: "Residential Electrical Services",
		heroText:
			"Professional electrical work for homeowners who value clear communication, quality workmanship, and honest pricing.",
		items: [
			"Electrical troubleshooting and repairs",
			"Lighting and ceiling fan installation",
			"Panel and service upgrades",
			"Dedicated circuits",
			"EV charger installation",
			"Receptacle and switch replacement",
		],
	},
	{
		slug: "commercial",
		title: "Commercial Electrical",
		image: commercialImage,
		shortDescription:
			"Reliable electrical service for offices, retail spaces, facilities, and other commercial properties.",
			heroImage: commercialHero,
			heroTitle: "Commercial Electrical Services",
		heroText:
			"Dependable electrical support for businesses, commercial facilities, property managers, and contractors.",
		items: [
			"Commercial troubleshooting and repairs",
			"Lighting installation and upgrades",
			"Dedicated equipment circuits",
			"Tenant improvements",
			"Electrical maintenance",
			"Code corrections",
		],
	},
	{
		slug: "troubleshooting",
		title: "Troubleshooting & Repairs",
		image: troubleshootingImage,
		shortDescription:
			"Diagnosis and repair of tripping breakers, dead outlets, flickering lights, and other electrical problems.",
		
			heroImage: troubleshootingHero,
			heroTitle: "Electrical Troubleshooting and Repairs",
		heroText:
			"Careful diagnosis helps identify the actual cause of an electrical problem instead of simply treating the symptom.",
		items: [
			"Tripping breakers",
			"Dead outlets and circuits",
			"Flickering or dimming lights",
			"Partial power loss",
			"Overheating electrical equipment",
			"Intermittent electrical problems",
		],
	},
	{
		slug: "panel-upgrades",
		title: "Panel & Service Upgrades",
		image: panelUpgradeImage,
		shortDescription:
			"Electrical panel replacements, service upgrades, and equipment improvements for older or overloaded systems.",
		heroImage: panelUpgradeHero,
		heroTitle: "Electrical Panel and Service Upgrades",
		heroText:
			"Upgrade outdated or undersized electrical equipment to better support the needs of your home or business.",
		items: [
			"Electrical panel replacement",
			"Service capacity upgrades",
			"Subpanel installation",
			"Outdated equipment replacement",
			"Breaker replacement",
			"Load evaluations",
		],
	},
	{
		slug: "lighting",
		title: "Lighting Installation",
		image: lightingImage,
		shortDescription:
			"Interior, exterior, recessed, undercabinet, security, and commercial lighting installations.",
		heroImage: lightingHero,
		heroTitle: "Professional Lighting Installation",
		heroText:
			"Improve the appearance, usability, efficiency, and security of your property with professionally installed lighting.",
		items: [
			"Recessed lighting",
			"Undercabinet lighting",
			"Interior fixture installation",
			"Exterior and security lighting",
			"Commercial lighting upgrades",
			"Lighting controls and dimmers",
		],
	},
	{
		slug: "electrical-inspections",
		title: "Electrical Inspections",
		image: inspectionImage,
		shortDescription:
			"Professional inspections to identify safety concerns, maintenance needs, and potential electrical failures.",
		heroImage: inspectionHero,
		heroTitle: "Electrical Inspections and Evaluations",
		heroText:
			"Identify electrical concerns before they become larger safety, reliability, or maintenance problems.",
		items: [
			"Residential electrical evaluations",
			"Commercial electrical inspections",
			"Panel and equipment inspections",
			"Maintenance recommendations",
			"Code concern identification",
			"Thermal and visual observations",
		],
	},
];