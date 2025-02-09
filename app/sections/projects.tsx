import Carousel from "@/components/Carousel";
import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useData } from "@/hooks/useData";
import { styles } from "@/styles";
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
				{projects.map((rowData, index) => {
					const name = rowData.name;
					const description = rowData.description;
					const calculateYear = (start: string, end: string) => {
						const startDate = new Date(start);
						const endDate = end ? new Date(end) : new Date();
						const years = endDate.getFullYear() - startDate.getFullYear();
						const months = endDate.getMonth() - startDate.getMonth();
						return Math.round(years + months / 12);
					};
					const isFocused = focused === rowData.id;
					const years = calculateYear(rowData.start, rowData.end);
					return (
						<Pressable
							key={index}
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
										Technologies: {rowData.technologies.join(", ")}
									</ThemedText>
									<ThemedView style={{ flexDirection: "row" }}>
										<ThemedText type="caption">Demo: </ThemedText>
										{rowData.links.map((link) => (
											<Link href={link} key={link}>
												<ThemedView style={styles.linkCard}>
													<ThemedIcon name="external-link" size={8} />
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
