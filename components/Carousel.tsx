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
	const opacity1 = useSharedValue(1);
	const opacity2 = useSharedValue(0);

	useEffect(() => {
		const interval = setInterval(() => {
			opacity1.value = withTiming(0, { duration: 500 });
			opacity2.value = withTiming(1, { duration: 500 });

			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
				opacity1.value = 1;
				opacity2.value = 0;
			}, 500);
		}, CAROUSEL_TIME);

		return () => clearInterval(interval);
	}, [images.length, opacity1, opacity2]);

	const animatedStyle1 = useAnimatedStyle(() => {
		return {
			opacity: opacity1.value,
		};
	});

	const animatedStyle2 = useAnimatedStyle(() => {
		return {
			opacity: opacity2.value,
		};
	});

	return (
		<Animated.View style={style}>
			<Animated.View style={[styles.imageContainer, animatedStyle1]}>
				<Image
					resizeMode="cover"
					source={{ uri: images[currentIndex] }}
					style={styles.image}
				/>
			</Animated.View>
			<Animated.View style={[styles.imageContainer, animatedStyle2]}>
				<Image
					resizeMode="cover"
					source={{ uri: images[(currentIndex + 1) % images.length] }}
					style={styles.image}
				/>
			</Animated.View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});

export default Carousel;
