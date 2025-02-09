import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
import { Link } from "expo-router";
import { View } from "react-native";

const Contact = () => {
	const { contacts } = useData();
	return (
		<ThemedView style={[styles.page, styles.page4]} key="4">
			<ThemedText type="title" style={styles.title}>
				Contact
			</ThemedText>
			{contacts.map((item, index) => (
				<ThemedView style={styles.contactContainer} key={index}>
					<>
						<View
							style={[styles.contactCircle, { backgroundColor: item.color }]}
						>
							<ThemedText
								type="title"
								style={{
									color: "white",
								}}
							>
								{item.name.charAt(0)}
							</ThemedText>
						</View>
						<ThemedView style={styles.contactCard}>
							<ThemedText>{item.name}</ThemedText>
						</ThemedView>
					</>
					<Link href={item.link}>
						<ThemedIcon name="external-link" size={20} />
					</Link>
				</ThemedView>
			))}
		</ThemedView>
	);
};

export default Contact;
