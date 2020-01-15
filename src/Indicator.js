import React, { useState, useCallback, useImperativeHandle, forwardRef, Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { vw } from 'react-native-expo-viewport-units';

const activeColor = 'hsl(190,50%,40%)';
const errorColor = 'hsl(350,55%,50%)';
const styles = StyleSheet.create({
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorRow: {
    width: vw(30),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  indicatorLed: {
    width: vw(2),
    height: vw(2),
    borderRadius: vw(1),
    backgroundColor: activeColor,
  },
  indicatorLedError: {
    backgroundColor: errorColor,
  },
});
const flash = {
  0: {
    backgroundColor: activeColor,
    scale: 1,
  },
  0.25: {
    backgroundColor: 'hsl(70,70%,90%)',
    scale: 1.6,
  },
  0.5: {
    backgroundColor: 'hsl(50,65%,50%)',
  },
  0.75: {
    backgroundColor: 'hsl(-20,55%,50%)',
  },
  1: {
    backgroundColor: activeColor,
    scale: 1,
  },
};

function Indicator({ sending, error }, ref) {
  const [animating, setAnimating] = useState(false);
  // (Re)play animation when "animate()" method called.
  useImperativeHandle(ref, () => ({
    animate: () => {
      setAnimating(false);
      setTimeout(() => setAnimating(true), 0);
    },
  }));
  // Finish animation when "onAnimationEnd" triggered.
  const handleAnimationEnd = useCallback(() => {
    setAnimating(false);
  }, []);
  return (
    <View style={styles.indicator}>
      <View style={styles.indicatorRow}>
        {animating ?
          <Fragment>
            <Animatable.View animation={flash} duration={600} delay={100} style={styles.indicatorLed} onAnimationEnd={handleAnimationEnd} />
            <Animatable.View animation={flash} duration={600} delay={50} style={styles.indicatorLed} />
            <Animatable.View animation={flash} duration={600} delay={0} style={styles.indicatorLed} />
            <Animatable.View animation={flash} duration={600} delay={50} style={styles.indicatorLed} />
            <Animatable.View animation={flash} duration={600} delay={100} style={styles.indicatorLed} />
          </Fragment> :
          <Fragment>
            <View style={[styles.indicatorLed, error && styles.indicatorLedError]} />
            <View style={[styles.indicatorLed, error && styles.indicatorLedError]} />
            <View style={[styles.indicatorLed, error && styles.indicatorLedError]} />
            <View style={[styles.indicatorLed, error && styles.indicatorLedError]} />
            <View style={[styles.indicatorLed, error && styles.indicatorLedError]} />
          </Fragment>
        }
      </View>
    </View>
  );
}
export default forwardRef(Indicator);
