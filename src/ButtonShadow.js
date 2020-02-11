import React from 'react';
import { NeomorphBox } from 'react-native-neomorph-shadows';
import { vw } from 'react-native-expo-viewport-units';

export default function ButtonShadow({ width, height, borderRadius, children }) {
  return (
    <NeomorphBox
      darkShadowColor="#cdd4d6"
      lightShadowColor="#edf2f2"
      style={{
        width,
        height,
        borderRadius,
        shadowRadius: vw(1.5),
        shadowOpacity: 1,
      }}
    >
      {children}
    </NeomorphBox>
  );
}
