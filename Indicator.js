import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { vw } from 'react-native-expo-viewport-units';

const activeColor = 'hsl(190,50%,40%)';
const styles = StyleSheet.create({
  indicator: {
    paddingTop: vw(8),
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
    // backgroundColor: '#2c2c2c',
  },
});
const flash = {
  0: {
    backgroundColor: activeColor,
    scale: 1,
  },
  0.25: {
    backgroundColor: 'hsl(70,80%,90%)',
    scale: 1.6,
  },
  0.5: {
    backgroundColor: 'hsl(50,70%,50%)',
  },
  0.75: {
    backgroundColor: 'hsl(-20,60%,50%)',
  },
  1: {
    backgroundColor: activeColor,
    scale: 1,
  },
};

export default function Indicator({ sending }) {
  return (
    <View style={styles.indicator}>
      <View style={styles.indicatorRow}>
        {sending ?
          <Animatable.View animation={flash} duration={600} delay={100} style={styles.indicatorLed} /> :
          <View style={styles.indicatorLed} />
        }
        {sending ?
          <Animatable.View animation={flash} duration={600} delay={50} style={styles.indicatorLed} /> :
          <View style={styles.indicatorLed} />
        }
        {sending ?
          <Animatable.View animation={flash} duration={600} delay={0} style={styles.indicatorLed} /> :
          <View style={styles.indicatorLed} />
        }
        {sending ?
          <Animatable.View animation={flash} duration={600} delay={50} style={styles.indicatorLed} /> :
          <View style={styles.indicatorLed} />
        }
        {sending ?
          <Animatable.View animation={flash} duration={600} delay={100} style={styles.indicatorLed} /> :
          <View style={styles.indicatorLed} />
        }
      </View>
    </View>
  );
}
