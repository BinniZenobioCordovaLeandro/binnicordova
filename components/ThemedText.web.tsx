import { useThemeColor } from "@/hooks/useThemeColor";
import { A, B, H1, H2, I, P } from "@expo/html-elements";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
	lightColor?: string;
	darkColor?: string;
	type?:
		| "default"
		| "title"
		| "defaultSemiBold"
		| "subtitle"
		| "link"
		| "caption";
};

export function ThemedText({
	style,
	lightColor,
	darkColor,
	type = "default",
	...rest
}: ThemedTextProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	const componentMap = {
		default: P,
		defaultSemiBold: B,
		title: H1,
		subtitle: H2,
		link: A,
		caption: I,
	};

	const Component = componentMap[type] || Text;

	return (
		<Component
			style={[
				[{ color }, styles.base],
				type === "default" ? styles.default : undefined,
				type === "title" ? styles.title : undefined,
				type === "subtitle" ? styles.subtitle : undefined,
				type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
				type === "link" ? styles.link : undefined,
				type === "caption" ? styles.caption : undefined,
				style,
			]}
			{...rest}
		/>
	);
}

const styles = StyleSheet.create({
	base: {
		marginBottom: 0,
		marginTop: 0,
	},
	default: {
		fontSize: 16,
		lineHeight: 24,
	},
	defaultSemiBold: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "600",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: "#0a7ea4",
	},
	caption: {
		fontSize: 12,
		lineHeight: 16,
		fontStyle: "normal",
	},
});
