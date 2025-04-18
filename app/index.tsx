import { HeadMeta } from "@/components/HeadMeta";
import { ScrollView } from "react-native";
import Contact from "./sections/contact";
import Home from "./sections/home";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

const Index = () => {
	return (
		<ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
			<HeadMeta
				domain="binnicordova.com"
				title="Binni Cordova | Senior Mobile Developer | React Native Expert"
				description="Binni Cordova, Senior Mobile Developer with 7+ years of experience in React Native, iOS, and Android. Expert in building high-performance mobile apps."
				image="https://binnicordova.com/assets/assets/images/person.6f11226723e7350d19338eaa47939bf5.png"
				keywords="Senior Mobile Developer, React Native Expert, iOS Developer, Android Developer, Mobile App Development, JavaScript, TypeScript, React, Node.js, Software Engineer, Lima Peru, Freelance Developer"
				url="https://binnicordova.com"
			/>
			<Home />
			<Projects />
			<Skills />
			<Contact />
		</ScrollView>
	);
};

export default Index;
