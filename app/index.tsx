import { ScrollView } from "react-native";
import Contact from "./sections/contact";
import Home from "./sections/home";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

const Index = () => {
	return (
		<ScrollView pagingEnabled showsVerticalScrollIndicator={false}>
			<Home />
			<Projects />
			<Skills />
			<Contact />
		</ScrollView>
	);
};

export default Index;
