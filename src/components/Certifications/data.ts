export type Certification = {
	title: string;
	issuer?: string;
	date?: string;
	description?: string;
	url?: string;
};

export const certifications: Certification[] = [
	{
		title: "Data Analytics and Visualization Job Simulation",
		issuer: "Accenture",
		date: "Jun 17, 2024",
		description:
			"Completed a hands-on simulation focused on analyzing data and communicating insights through clear visualizations.",
		url: "https://drive.google.com/file/d/1ERXUB2NNTP-TE-4mIcLMcc8ww8wullor/view?usp=drive_link",
	},
	{
		title: "Full Stack Development",
		issuer: "Felix ITS Institute (Ahmedabad, Gujarat)",
		date: "Sep 25, 2025",
		description:
			"Training covering frontend + backend development with practical project work and modern web development workflows.",
		url: "https://drive.google.com/file/d/1ERXUB2NNTP-TE-4mIcLMcc8ww8wullor/view?usp=drive_link",
	},
	{
		title: "Introduction to Machine Learning",
		issuer: "IIT Kharagpur",
		date: "Jul–Sep 2024",
		description:
			"Covered ML fundamentals, core concepts, and a practical understanding of common supervised learning approaches.",
		url: "https://drive.google.com/file/d/1gH2mZARoYLRK9TtGznhxva4VJudwMvY2/view?usp=drive_link",
	},
	{
		title: "SQL (HackerRank)",
		issuer: "HackerRank",
		date: "Nov 6, 2024",
		description:
			"Validated SQL fundamentals including querying, filtering, joins, and working with relational datasets.",
		url: "https://drive.google.com/file/d/14mNr7Q0FgI80KYEuzsG3Ba2yM0ZM3EjT/view?usp=drive_link",
	},
	{
		title: "Prompt Engineering for Developers",
		issuer: "DeepLearning.AI",
		date: "2024",
		description:
			"Learned practical prompt patterns and workflows to build reliable LLM-powered features and developer tooling.",
		url: "https://learn.deeplearning.ai/accomplishments/67f00f0e-f76c-48cc-912e-11a37b13915a?usp=sharing",
	},
	{
		title: "Postman API Student Expert",
		issuer: "Postman",
		date: "2024",
		description:
			"Demonstrated API fundamentals including requests, collections, environments, and testing workflows in Postman.",
		url: "https://api.badgr.io/public/assertions/oLvjtIbmQVyiz3hx6krZzQ",
	},
];
