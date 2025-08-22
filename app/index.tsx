import { HeadMeta } from "@/components/HeadMeta";
import { useData } from "@/hooks/useData";
import { useMemo } from "react";
import { ScrollView } from "react-native";
import Contact from "./sections/contact";
import FAQs from "./sections/faqs";
import Home from "./sections/home";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

const Index = () => {
	const { projects, skills, contacts } = useData();

	const { structuredData, lastUpdated } = useMemo(() => {
		const dates: Date[] = [];
		for (const p of projects) {
			for (const d of [p.end, p.time, p.start]) {
				if (d) {
					const dd = new Date(d);
					if (!Number.isNaN(dd.getTime())) {
						dates.push(dd);
					}
				}
			}
		}
		const latest = dates.sort((a, b) => b.getTime() - a.getTime())[0];
		const isoDate = (latest || new Date()).toISOString().split("T")[0];

		const sameAs: string[] = contacts
			.map((c) => c.link)
			.filter((l) => /^https?:/i.test(l));

		const website = {
			"@context": "https://schema.org",
			"@type": "WebSite",
			"@id": "https://binnicordova.com/#website",
			url: "https://binnicordova.com/",
			name: "Binni Cordova Portfolio",
			description:
				"Senior React Native & Mobile Developer portfolio showcasing cross-platform apps, performance optimization, and scalable architecture.",
			potentialAction: {
				"@type": "SearchAction",
				target: "https://binnicordova.com/?q={search_term_string}",
				"query-input": "required name=search_term_string",
			},
			inLanguage: "en",
		};

		const person = {
			"@context": "https://schema.org",
			"@type": "Person",
			"@id": "https://binnicordova.com/#person",
			name: "Binni Cordova",
			jobTitle: "Senior Mobile Developer",
			url: "https://binnicordova.com/",
			image:
				"https://binnicordova.com/assets/assets/images/person.6f11226723e7350d19338eaa47939bf5.png",
			sameAs,
			description:
				"Senior React Native developer specializing in high-performance, scalable cross-platform mobile applications (iOS & Android).",
			knowsAbout: [
				"React Native",
				"Mobile Performance Optimization",
				"TypeScript",
				"CI/CD",
				"Firebase",
				"AWS",
			],
		};

		const projectItems = projects.map((p, idx) => ({
			"@type": "ListItem" as const,
			position: idx + 1,
			name: p.name,
			url: `https://binnicordova.com/#project-${p.id}`,
		}));

		const itemList = projects.length
			? {
					"@context": "https://schema.org",
					"@type": "ItemList",
					"@id": "https://binnicordova.com/#projects",
					name: "Highlighted Mobile Projects",
					itemListOrder: "Descending",
					itemListElement: projectItems,
				}
			: null;

		const projectSchemas = projects.map((p) => {
			const primaryLink =
				p.links?.web ||
				p.links?.android ||
				p.links?.apple ||
				p.links?.television ||
				"https://binnicordova.com/";
			return {
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				"@id": `https://binnicordova.com/#project-${p.id}`,
				name: p.name,
				applicationCategory: "MobileApplication",
				operatingSystem: "iOS, Android",
				description: p.description,
				url: primaryLink,
				image: p.photos?.[0],
				programmingLanguage: p.technologies,
				datePublished: p.start,
				dateModified: p.end || p.time,
				author: { "@id": "https://binnicordova.com/#person" },
				keywords: p.technologies?.join(", "),
			};
		});

		const skillsSchema = skills.length
			? {
					"@context": "https://schema.org",
					"@type": "DefinedTermSet",
					"@id": "https://binnicordova.com/#skills",
					name: "Professional Skills",
					termCode: skills.map((s) => s.name),
					inDefinedTermSet: "Mobile & Frontend Engineering",
				}
			: null;

		const structuredData: Record<string, unknown>[] = [website, person];
		if (itemList) structuredData.push(itemList);
		if (skillsSchema) structuredData.push(skillsSchema);
		structuredData.push(...projectSchemas);

		return { structuredData, lastUpdated: isoDate };
	}, [projects, skills, contacts]);

	return (
		<ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
			<HeadMeta
				domain="binnicordova.com"
				title="Binni Cordova | Senior Mobile Developer | React Native Expert"
				description="Binni Cordova, Senior Mobile Developer with 7+ years of experience in React Native, iOS, and Android. Expert in building high-performance mobile apps."
				image="https://binnicordova.com/assets/assets/images/person.6f11226723e7350d19338eaa47939bf5.png"
				keywords="Senior Mobile Developer, React Native Expert, iOS Developer, Android Developer, Mobile App Development, JavaScript, TypeScript, React, Node.js, Software Engineer, Lima Peru, Freelance Developer"
				url="https://binnicordova.com"
				lastUpdated={lastUpdated}
				structuredData={structuredData}
			/>
			<Home />
			<Projects />
			<Skills />
			<Contact />
			<FAQs />
		</ScrollView>
	);
};

export default Index;
