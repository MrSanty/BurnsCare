import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ButtonGradient from './ButtonGradient';
import { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAccordionAnimate } from 'src/hooks/useAccordionAnimate';

interface Props {
  title: string;
  text: string;
  maxHeigth: number;
  isAllwaysActive?: boolean;
}

const AccordionText: FC<Props> = ({ title, text, maxHeigth, isAllwaysActive = false }) => {
  const [ isActive, setIsActive ] = useState(false);
  const accordionAnimate = useAccordionAnimate(0, isActive, maxHeigth);

  if (isAllwaysActive) {
    return (
      <View style={styles.container}>
        <ButtonGradient
          text={title}
          isActive={true}
          isAnimated={false}
          onPress={() => { }}
        />
        <View style={styles.content}>
          <Text style={styles.textRegular}>
            {text}
          </Text>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ButtonGradient
          text={title}
          isActive={isActive}
          isAnimated={true}
          onPress={() => setIsActive(!isActive)}
        />
        <Animated.View style={[ styles.content, accordionAnimate ]}>
          <Text style={styles.textRegular}>
            {text}
          </Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    gap: 10
  },
  content: {
    marginLeft: 20,
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: '#2E2F32',
  },
  textRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 'auto',
    color: '#2E2F32'
  },
  itemIcon: {
    width: 10,
    height: 10
  }
})

export default AccordionText;