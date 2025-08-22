import { useColorScheme } from "@/hooks/useColorScheme";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		MaterialCommunityIcons: require("../assets/fonts/MaterialCommunityIcons.ttf"),
	});
	const { width } = useWindowDimensions();

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	const isBigScreen = width > 600;

	if (!isBigScreen) {
		return (
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<StatusBar style="auto" hidden={false} />
				<Slot />
			</ThemeProvider>
		);
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<StatusBar style="auto" hidden={false} />
			<View style={styles.contentContainer}>
				<Image
					style={styles.backgroundImage}
					source={require("../assets/images/background.jpg")}
				/>
				<View style={styles.overImagePhone}>
					<View style={styles.contentSkin}>
						<Slot />
					</View>
				</View>
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
	},
	backgroundImage: {
		...StyleSheet.absoluteFillObject,
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	overImagePhone: {
		position: "absolute",
		top: "6%",
		justifyContent: "center",
		alignItems: "center",
		height: "80%",
		aspectRatio: 7.38 / 16,
	},
	contentSkin: {
		width: "100%",
		height: "100%",
		flex: 1,
		borderRadius: 50,
		overflow: "hidden",
	},
});
