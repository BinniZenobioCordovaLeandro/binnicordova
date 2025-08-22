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
					alignItems: "center",
					paddingHorizontal: 10,
				}}
			>
				{skills.map((item, index) => (
					<ThemedView
						style={{
							width: "30%",
							aspectRatio: 1,
							backgroundColor: `${item.color}20`,
							marginVertical: 10,
							padding: 15,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
						}}
						key={index}
					>
						<ThemedText type="caption" style={{ textAlign: "center" }}>
							{item.name}
						</ThemedText>
						{item.localIcon ? (
							<ThemedIcon
								name={item.localIcon as any}
								size={40}
								color={item.color}
							/>
						) : (
							<Image
								resizeMode="contain"
								source={{ uri: item.icon }}
								style={{ width: 40, height: 40 }}
							/>
						)}
					</ThemedView>
				))}
			</ThemedView>
		</ThemedView>
	);
};
export default Skills;
