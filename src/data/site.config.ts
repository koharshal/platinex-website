interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://platinex.in/',
	author: 'Platinex Industries Private Limited',
	title: 'Platinex Industries — Electroplating Services in Nashik, India',
	description:
		'Platinex Industries offers precision copper, nickel, zinc, and tin electroplating services in Nashik MIDC for electrical, switchgear, automobile, and electronics industries. Fast 1-day turnaround with strict QA.',
	lang: 'en-IN',
	ogLocale: 'en_IN',
	shareMessage: 'Share this post',
	paginationSize: 6
}
