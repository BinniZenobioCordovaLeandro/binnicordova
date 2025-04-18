import { useThemeColor } from "@/hooks/useThemeColor";
import {
	MaterialCommunityIcons as MaterialCommunityIconsType,
	createIconSet,
} from "@expo/vector-icons";
import type { ComponentProps } from "react";

const glyphMap = MaterialCommunityIconsType.glyphMap;

const MaterialCommunityIcons = createIconSet(
	glyphMap,
	"fontFamily",
	require("../assets/fonts/MaterialCommunityIcons.ttf"),
);

export type ThemedIconProps = ComponentProps<
	typeof MaterialCommunityIconsType
> & {
	lightColor?: string;
	darkColor?: string;
};

export function ThemedIcon({
	lightColor,
	darkColor,
	...rest
}: ThemedIconProps) {
	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	return (
		<MaterialCommunityIcons
			{...rest}
			style={{
				color: rest.color || color,
				...rest.style,
			}}
			color={rest.color || color}
		/>
	);
}
