import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export const useAccordionAnimate = (initialState: number, isActive: boolean, maxHeigth: number) => {
  const heightValue = useSharedValue(initialState);

  const heightStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
    overflow: 'hidden'
  }))

  useEffect(() => {
    heightValue.value = withTiming(isActive ? maxHeigth : 0, { duration: 200 });
  }, [ isActive ])

  return heightStyle;
}