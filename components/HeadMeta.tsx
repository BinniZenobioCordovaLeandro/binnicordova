import Head from "expo-router/head";

export type HeadMetaProps = {
	domain: string;
	title: string;
	description: string;
	image: string;
	keywords: string;
	url: string;
	robots?: string;
	children?: React.ReactNode;
};

export const HeadMeta = (props: HeadMetaProps) => {
	if (!props) return null;
	return (
		<Head>
			<html lang="en" prefix="og: https://ogp.me/ns#" />
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="generator" content={props.domain.toUpperCase()} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, minimum-scale=1"
			/>
			<link rel="shortcut icon" href={props.image} type="image/x-icon" />
			<link rel="canonical" href={props.url} />

			<meta name="keywords" content={props.keywords} />
			<meta name="author" content={props.domain.toUpperCase()} />
			<meta name="robots" content={props.robots ?? "index, follow"} />
			<meta httpEquiv="X-Robots-Tag" content={props.robots ?? "index, follow"} />

			{/* HTML Meta Tags */}
			<title>{props.title}</title>
			<meta name="description" content={props.description} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={props.url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content={props.image} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:secure_url" content={props.image} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={props.domain} />
			<meta property="twitter:url" content={`https://${props.domain}`} />
			<meta name="twitter:title" content={props.title} />
			<meta name="twitter:description" content={props.description} />
			<meta name="twitter:image" content={props.image} />
			{props.children && props.children}
		</Head>
	);
};
