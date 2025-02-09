import { radius } from "@/constants/Radius";
import { spacing } from "@/constants/Spacings";
import { Dimensions, StyleSheet } from "react-native";

const isBigScreen = Dimensions.get("window").width > 600;

export const styles = StyleSheet.create({
	page: {
		height: isBigScreen ? "100%" : Dimensions.get("window").height,
		width: isBigScreen ? undefined : Dimensions.get("window").width,
		aspectRatio: isBigScreen ? 7.38 / 16 : undefined,
		justifyContent: "flex-start",
		alignItems: "center",
		padding: spacing[5],
	},
	title: {
		paddingVertical: spacing[3],
		marginBottom: spacing[2],
	},
	page1: {
		justifyContent: "flex-end",
		alignItems: "center",
	},
	backgroundLottie: {
		position: "absolute",
		top: 0,
		resizeMode: "cover",
		width: 400,
		height: 400,
		zIndex: -1,
	},
	cardIdentity: {
		paddingVertical: spacing[5],
		width: "100%",
		alignItems: "center",
		borderRadius: radius[1],
		borderWidth: 1,
	},
	identityImage: {
		height: "50%",
		aspectRatio: 1 / 1,
	},
	page2: {
		justifyContent: "flex-start",
		alignContent: "flex-start",
	},
	timelineCard: {
		borderRadius: radius[1],
		marginBottom: spacing[3],
		borderWidth: 1,
		overflow: "hidden",
	},
	timelineContent: {
		padding: spacing[2],
	},
	carouselContainer: {
		width: "100%",
		height: 150,
		marginBottom: 10,
		overflow: "hidden",
	},
	iconTimeline: {
		width: 20,
		height: 20,
		borderRadius: radius[1],
	},
	iconTimelineCard: {
		width: 50,
		height: 50,
		borderRadius: radius[1],
		marginRight: spacing[3],
		marginBottom: spacing[3],
	},
	linkCard: {
		padding: spacing[2],
		marginRight: spacing[2],
		borderRadius: radius[1],
		borderWidth: 1,
	},
	page4: {
		width: "100%",
	},
	skillCard: {
		width: "49%",
		padding: spacing[2],
		borderRadius: radius[1],
		marginBottom: spacing[3],
		borderWidth: 1,
	},
	skillImage: {
		width: "70%",
		aspectRatio: 1 / 1,
		borderRadius: radius[2],
		alignSelf: "center",
	},
	contactContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: spacing[3],
		borderWidth: 1,
		borderRadius: radius[1],
		paddingHorizontal: spacing[2],
		justifyContent: "space-between",
	},
	contactCircle: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: "lightgray",
		justifyContent: "center",
		alignItems: "center",
	},
	contactCard: {
		flex: 1,
		padding: spacing[3],
		margin: spacing[3],
	},
});
