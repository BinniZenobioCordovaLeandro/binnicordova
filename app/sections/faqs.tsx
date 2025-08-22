import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
import { H2 } from "@expo/html-elements";

const FAQs = () => {
	const { faqs } = useData();
	if (!faqs.length) return null;
	return (
		<ThemedView style={styles.page} nativeID="faqs" key="5">
			<H2 id="faq-heading" style={{ marginBottom: 12 }}>
				<ThemedText type="title">FAQs</ThemedText>
			</H2>
			{faqs.map((f) => (
				<ThemedView
					key={f.id}
					style={[styles.timelineCard, styles.timelineContent]}
				>
					<ThemedText type="caption">{f.question}</ThemedText>
					<ThemedText type="caption">{f.answer}</ThemedText>
				</ThemedView>
			))}
		</ThemedView>
	);
};

export default FAQs;
