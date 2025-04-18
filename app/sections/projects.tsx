import Carousel from "@/components/Carousel";
import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { spacing } from "@/constants/Spacings";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
import { calculateYear } from "@/utils/date";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

const Projects = () => {
	const { projects } = useData();
	const [focused, setFocused] = React.useState<number>(1);

	return (
		<ThemedView style={[styles.page, styles.page2]} key="2">
			<ThemedText type="title">Projects</ThemedText>
			<ThemedView>
				{projects.map((rowData) => {
					const name = rowData.name;
					const description = rowData.description;
					const isFocused = focused === rowData.id;
					const years = calculateYear(rowData.start, rowData.end);
					return (
						<Pressable
							key={rowData.id}
							onPress={() => {
								setFocused(rowData.id);
							}}
							style={{ width: "100%" }}
						>
							<ThemedText type="caption">
								{years} year{years > 1 ? "s" : ""}{" "}
							</ThemedText>
							<ThemedView style={styles.timelineCard}>
								{rowData.photos.length > 0 && isFocused && (
									<Carousel
										images={rowData.photos}
										style={styles.carouselContainer}
									/>
								)}
								<ThemedView style={styles.timelineContent}>
									<ThemedView style={{ flexDirection: "row" }}>
										<Image
											source={{ uri: rowData.icon }}
											style={styles.iconTimelineCard}
										/>
										<ThemedView style={{ flex: 1 }}>
											<ThemedText type="subtitle">{name}</ThemedText>
											<ThemedText type="caption">{description}</ThemedText>
										</ThemedView>
									</ThemedView>
									<ThemedText type="caption">
										Skills: {rowData.technologies.join(", ")}
									</ThemedText>
									<ThemedView
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: spacing[2],
										}}
									>
										<ThemedText type="caption">Demo: </ThemedText>
										{Object.entries(rowData.links).map(([platform, url]) => (
											<Link href={url} key={platform}>
												<ThemedView style={styles.linkCard}>
													<ThemedIcon name={platform} size={12} />
												</ThemedView>
											</Link>
										))}
									</ThemedView>
								</ThemedView>
							</ThemedView>
						</Pressable>
					);
				})}
			</ThemedView>
		</ThemedView>
	);
};

export default Projects;
