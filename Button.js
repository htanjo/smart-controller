import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  buttonSize,
  buttonOuterStyles,
  buttonInnerStyles,
  buttonBorderColorActive,
  buttonColorActive,
  buttonForegroundColorActive,
  buttonIconStyles,
  buttonTextStyles,
} from './styles';

const styles = StyleSheet.create({
  button: {
    ...buttonOuterStyles,
    ...buttonInnerStyles,
    width: buttonSize,
    height: buttonSize,
  },
  buttonActive: {
    borderTopColor: buttonBorderColorActive,
    borderLeftColor: buttonBorderColorActive,
    borderRightColor: buttonBorderColorActive,
    borderBottomColor: buttonBorderColorActive,
    backgroundColor: buttonColorActive,
  },
  buttonIcon: {
    ...buttonIconStyles,
  },
  buttonIconActive: {
    color: buttonForegroundColorActive,
  },
  buttonText: {
    ...buttonTextStyles,
  },
  buttonTextActive: {
    color: buttonForegroundColorActive,
  },
});

export default function Controller({ icon, text, onPress }) {
  const [active, setActive] = useState(false);
  const handlePressStart = useCallback(event => {
    setActive(true);
    if (onPress) onPress(event);
  }, [onPress]);
  const handlePressEnd = useCallback(() => {
    setActive(false);
  }, []);
  return (
    <TouchableWithoutFeedback
      activeOpacity={1}
      underlayColor={buttonColorActive}
      onPressIn={handlePressStart}
      onPressOut={handlePressEnd}
      // onPress={() => console.log('pressed')}
    >
      <View style={[styles.button, active && styles.buttonActive]}>
        {icon && <Ionicons name={icon} style={[styles.buttonIcon, active && styles.buttonIconActive]} />}
        {text && <Text style={[styles.buttonText, active && styles.buttonTextActive]}>{text}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}
