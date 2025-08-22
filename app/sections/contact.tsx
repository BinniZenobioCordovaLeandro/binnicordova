import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
import { Link } from "expo-router";

const Contact = () => {
	const { contacts } = useData();
	return (
		<ThemedView style={[styles.page, styles.page4]} key="4">
			<ThemedText type="title" style={styles.title}>
				Contact me
			</ThemedText>
			{contacts.map((item, index) => (
				<Link
					href={item.link}
					key={index}
					style={[
						styles.contactContainer,
						{ borderColor: item.color, backgroundColor: `${item.color}20` },
					]}
				>
					<ThemedView
						style={[styles.contactCircle, { backgroundColor: item.color }]}
					>
						<ThemedIcon name={item.localIcon} size={20} color="white" />
					</ThemedView>
					<ThemedText type="subtitle" style={styles.contactCardText}>
						{item.name}
					</ThemedText>
					<ThemedIcon
						name="cursor-default-click"
						size={20}
						color={item.color}
						style={styles.floating}
					/>
				</Link>
			))}
		</ThemedView>
	);
};

export default Contact;
