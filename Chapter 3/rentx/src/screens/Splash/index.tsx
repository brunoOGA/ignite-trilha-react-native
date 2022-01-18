// import React from "react";
// import { Button, Dimensions, StyleSheet } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   Easing
// } from "react-native-reanimated";

// const WIDTH = Dimensions.get('window').width;

// import { Container } from "./styles";

// const Splash: React.FC = () => {
//   const animation = useSharedValue(0);

//   const animatedStyles = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: withTiming(animation.value, {
//               duration: 500,
//               easing: Easing.ease
//           }),
//         },
//       ],
//     };
//   });

//   function handleAnimationPosition() {
//     animation.value = Math.random() * (WIDTH - 100);
//   }

//   return (
//     <Container>
//       <Animated.View style={[styles.box, animatedStyles]}></Animated.View>

//       <Button title="Mover" onPress={handleAnimationPosition} />
//     </Container>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "red",
//   },
// });
import React, { useEffect } from "react";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
} from "react-native-reanimated";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/core";

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 3000 }, () => {
      "worklet" 
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, , { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
