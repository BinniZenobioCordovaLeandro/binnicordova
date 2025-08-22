import { useThemeColor } from "@/hooks/useThemeColor";
import { A, H1, H2, P, Span, Strong } from "@expo/html-elements";
import {
	Platform,
	type StyleProp,
	StyleSheet,
	Text,
	type TextProps,
	type TextStyle,
} from "react-native";

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

	const textStyles: StyleProp<TextStyle> = [{ color }, styles[type], style];

	if (Platform.OS !== "web") {
		return <Text style={textStyles} {...rest} />;
	}

	switch (type) {
		case "default":
			return <P style={textStyles} {...rest} />;
		case "title":
			return <H1 style={textStyles} {...rest} />;
		case "subtitle":
			return <H2 style={textStyles} {...rest} />;
		case "link":
			return <A style={textStyles} {...rest} />;
		case "caption":
			return <Span style={textStyles} {...rest} />;
		case "defaultSemiBold":
			return (
				<P style={textStyles} {...rest}>
					<Strong>{rest.children}</Strong>
				</P>
			);
		default:
			return <P style={textStyles} {...rest} />;
	}
}

const styles = StyleSheet.create({
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
		lineHeight: 28,
		marginTop: 0,
		marginBottom: 0,
		wordWrap: "break-word",
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 0,
		marginBottom: 0,
		wordWrap: "break-word",
	},
	link: {
		lineHeight: 30,
		fontSize: 16,
		color: "#0a7ea4",
	},
	caption: {
		fontSize: 12,
		lineHeight: 16,
	},
});
