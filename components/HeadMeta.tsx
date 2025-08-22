import Head from "expo-router/head";

export type HeadMetaProps = {
	domain: string;
	title: string;
	description: string;
	image: string;
	keywords: string;
	url: string;
	robots?: string;
	lastUpdated?: string; // ISO date
	structuredData?: Record<string, unknown>[]; // array of JSON-LD objects
	children?: React.ReactNode;
};

export const HeadMeta = (props: HeadMetaProps) => {
	if (!props) return null;
	const {
		domain,
		title,
		description,
		image,
		keywords,
		url,
		robots,
		lastUpdated = new Date().toISOString(),
		structuredData = [],
		children,
	} = props;
	return (
		<Head>
			<html lang="en" prefix="og: https://ogp.me/ns#" />
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="generator" content={domain.toUpperCase()} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1"
			/>
			<link rel="shortcut icon" href={image} type="image/x-icon" />
			<link rel="canonical" href={url} />

			<meta name="keywords" content={keywords} />
			<meta name="author" content={domain.toUpperCase()} />
			<meta name="robots" content={robots ?? "index, follow"} />
			<meta httpEquiv="X-Robots-Tag" content={robots ?? "index, follow"} />
			{lastUpdated && (
				<>
					<meta property="og:updated_time" content={lastUpdated} />
					<meta name="last-modified" content={lastUpdated} />
				</>
			)}

			<title>{title}</title>
			<meta name="description" content={description} />

			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:secure_url" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={domain} />
			<meta property="twitter:url" content={`https://${domain}`} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{structuredData.map((obj, i) => {
				const key =
					typeof obj["@type"] === "string"
						? String(obj["@type"]) + i
						: `sd-${i}`;
				return (
					<script
						key={key}
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
						type="application/ld+json"
					/>
				);
			})}
			{children && children}
		</Head>
	);
};
