import { useThemeColor } from "@/hooks/useThemeColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import type { ComponentProps } from "react";

export type ThemedIconProps = ComponentProps<typeof FontAwesome> & {
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
		<FontAwesome
			style={{
				color,
			}}
			{...rest}
		/>
	);
}
