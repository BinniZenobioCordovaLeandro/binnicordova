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
		padding: spacing[2],
	},
	title: {
		paddingVertical: spacing[2],
		paddingBottom: spacing[4],
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
		paddingVertical: spacing[2],
		width: "100%",
		alignItems: "center",
		borderRadius: radius[1],
		borderWidth: 0,
		marginBottom: spacing[4],
		backgroundColor: "#FFFFFF20",
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
		marginBottom: spacing[2],
		borderWidth: 1,
		overflow: "hidden",
	},
	timelineContent: {
		padding: spacing[2],
	},
	floating: {
		position: "absolute",
		top: 10,
		right: 10,
		zIndex: 1,
	},
	carouselContainer: {
		width: "100%",
		aspectRatio: 16 / 9,
		marginBottom: 10,
		overflow: "hidden",
	},
	iconTimeline: {
		width: 20,
		height: 20,
		borderRadius: radius[1],
	},
	iconTimelineCardContainer: {
		flex: 0.2,
		marginRight: spacing[3],
		marginBottom: spacing[3],
		alignItems: "center",
	},
	iconTimelineCard: {
		width: 50,
		height: 50,
		aspectRatio: 1 / 1,
		borderRadius: radius[1],
	},
	linkCard: {
		padding: spacing[1],
		marginRight: spacing[2],
		borderRadius: radius[1],
		borderWidth: 1,
	},
	page4: {
		width: "100%",
	},
	skillCard: {
		width: "49%",
		minHeight: 180,
		padding: spacing[2],
		borderRadius: radius[1],
		marginBottom: spacing[3],
		borderWidth: 2,
		aspectRatio: 1 / 1,
	},
	skillImage: {
		width: "70%",
		height: undefined,
		borderRadius: radius[2],
		alignSelf: "center",
		aspectRatio: 1 / 1,
	},
	contactContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: spacing[3],
		borderWidth: 2,
		borderRadius: radius[1],
		padding: spacing[2],
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
	contactCardText: {
		flex: 1,
		padding: spacing[3],
		margin: spacing[3],
	},
	contactCardIcon: {
		alignSelf: "flex-end",
	},
});
