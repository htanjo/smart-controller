import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonShadow from './ButtonShadow';
import {
  roundSize,
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

export default function Button({ icon, text, style, activeStyle, shadow = true, onPress }) {
  const [active, setActive] = useState(false);
  const handlePressStart = useCallback(event => {
    setActive(true);
    if (onPress) onPress(event);
  }, [onPress]);
  const handlePressEnd = useCallback(() => {
    setActive(false);
  }, []);
  const button = (
    <TouchableWithoutFeedback
      activeOpacity={1}
      underlayColor={buttonColorActive}
      onPressIn={handlePressStart}
      onPressOut={handlePressEnd}
    >
      <View style={[style || styles.button, active && (activeStyle || styles.buttonActive)]}>
        {icon && <Ionicons name={icon} style={[styles.buttonIcon, active && styles.buttonIconActive]} />}
        {text && <Text style={[styles.buttonText, active && styles.buttonTextActive]}>{text}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
  if (shadow) {
    return (
      <ButtonShadow width={buttonSize} height={buttonSize} borderRadius={roundSize}>
        {button}
      </ButtonShadow>
    )
  }
  return button;
}
