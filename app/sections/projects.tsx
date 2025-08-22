import Carousel from "@/components/Carousel";
import { ThemedIcon } from "@/components/ThemedIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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
			<ThemedText type="title" style={styles.title}>
				Projects
			</ThemedText>
			<ThemedView style={{ flex: 1 }}>
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
						>
							<ThemedView style={[styles.timelineCard, { marginBottom: 5 }]}>
								{!isFocused && (
									<ThemedIcon
										name="cursor-default-click"
										size={20}
										style={styles.floating}
									/>
								)}
								{rowData.photos.length > 0 && isFocused && (
									<Carousel
										images={rowData.photos}
										style={[styles.carouselContainer]}
									/>
								)}
								<ThemedView style={[styles.timelineContent]}>
									<ThemedView style={{ flexDirection: "row" }}>
										<ThemedView style={styles.iconTimelineCardContainer}>
											<Image
												source={{ uri: rowData.icon }}
												style={[styles.iconTimelineCard]}
											/>
											<ThemedText
												type="caption"
												style={{ alignSelf: "center", marginTop: 2 }}
											>
												{years} year{years > 1 ? "s" : ""}
											</ThemedText>
										</ThemedView>
										<ThemedView style={{ flex: 0.8 }}>
											<ThemedText type="subtitle">{name}</ThemedText>
											<ThemedText type="caption">{description}</ThemedText>
										</ThemedView>
									</ThemedView>
									{isFocused && (
										<ThemedText type="caption">
											Skills: {rowData.technologies.join(", ")}
										</ThemedText>
									)}
									{isFocused &&
										rowData.links &&
										Object.keys(rowData.links).length > 0 && (
											<ThemedView
												style={{
													flexDirection: "row",
													alignItems: "center",
												}}
											>
												<ThemedText type="caption">Demo: </ThemedText>
												{Object.entries(rowData.links).map(
													([platform, url]) => (
														<Link href={url} key={platform}>
															<ThemedView style={styles.linkCard}>
																<ThemedIcon name={platform} size={12} />
															</ThemedView>
														</Link>
													),
												)}
											</ThemedView>
										)}
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
