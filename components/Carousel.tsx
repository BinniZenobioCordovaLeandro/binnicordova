import type React from "react";
import { useEffect, useState } from "react";
import {
	Image,
	type StyleProp,
	StyleSheet,
	type ViewStyle,
} from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

interface CarouselProps {
	images: string[];
	style?: StyleProp<ViewStyle>;
}

const CAROUSEL_TIME = 3000;

const Carousel: React.FC<CarouselProps> = ({ images, style }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const opacity = useSharedValue(1);

	useEffect(() => {
		const interval = setInterval(() => {
			opacity.value = 0;
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
				opacity.value = withTiming(1, { duration: 500 });
			}, 500);
		}, CAROUSEL_TIME);

		return () => clearInterval(interval);
	}, [images.length, opacity]);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: opacity.value,
		};
	});

	return (
		<Animated.View style={[style, animatedStyle]}>
			<Image
				resizeMode="cover"
				source={{ uri: images[currentIndex] }}
				style={styles.image}
			/>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});

export default Carousel;
