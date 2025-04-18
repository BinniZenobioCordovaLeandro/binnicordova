import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
import { Image } from "react-native";

const Skills = () => {
	const { skills } = useData();
	return (
		<ThemedView style={styles.page} key="3">
			<ThemedText type="title" style={styles.title}>
				Skills
			</ThemedText>
			<ThemedView
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-between",
				}}
			>
				{skills.map((item, index) => (
					<ThemedView
						style={[styles.skillCard, { borderColor: item.color }]}
						key={index}
					>
						<ThemedView style={{ flex: 1 }}>
							<ThemedText type="subtitle">{item.name}</ThemedText>
							<ThemedText type="caption">{item.level} level</ThemedText>
						</ThemedView>
						{item.localIcon ? (
							<ThemedIcon
								name={item.localIcon}
								size={100}
								style={styles.skillImage}
								color={item.color}
							/>
						) : (
							<Image
								resizeMode="stretch"
								source={{ uri: item.icon }}
								style={styles.skillImage}
							/>
						)}
					</ThemedView>
				))}
			</ThemedView>
		</ThemedView>
	);
};
export default Skills;
