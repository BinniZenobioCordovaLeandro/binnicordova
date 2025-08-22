import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/styles";
import LottieView from "lottie-react-native";
import { Image, View } from "react-native";

const Home = () => {
	return (
		<ThemedView style={[styles.page, styles.page1]} key="1">
			<View style={styles.backgroundLottie}>
				<LottieView
					source={require("../../assets/animations/react-platform.json")}
					autoPlay
					loop
				/>
			</View>
			<Image
				style={styles.identityImage}
				source={require("../../assets/images/person.png")}
				resizeMode="contain"
			/>
			<ThemedView style={styles.cardIdentity}>
				<ThemedText type="subtitle">Hi, I'm </ThemedText>
				<ThemedText type="title" id="main-heading">
					Binni Cordova
				</ThemedText>
				<ThemedText type="subtitle">Expert Mobile Developer</ThemedText>
				<ThemedView
					style={{ visibility: "hidden", marginTop: 10, display: "none" }}
					accessibilityRole="summary"
					nativeID="tldr"
				>
					<ThemedText>
						I design & ship high-performance cross-platform mobile apps (iOS /
						Android) using React Native & Expo: faster startups, smoother video,
						secure onboarding, and resilient delivery pipelines.
					</ThemedText>
					<ThemedText>
						Core strengths: performance optimization, scalable architecture,
						CI/CD, secure auth, and measurable product impact.
					</ThemedText>
				</ThemedView>
			</ThemedView>
		</ThemedView>
	);
};

export default Home;
