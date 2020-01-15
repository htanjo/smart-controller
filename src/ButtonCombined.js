import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  buttonSize,
  buttonCombinedSize,
  buttonOuterStyles,
  buttonInnerStyles,
  buttonBorderColorActive,
  buttonColorActive,
  buttonForegroundColorActive,
  buttonIconStyles,
  buttonTextStyles,
} from './styles';

const styles = StyleSheet.create({
  buttonCombined: {
    ...buttonOuterStyles,
    flexDirection: 'row',
    width: buttonCombinedSize,
    height: buttonSize,
  },
  buttonCombinedInnerFirst: {
    ...buttonInnerStyles,
    flex: 1,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonCombinedInnerLast: {
    ...buttonInnerStyles,
    flex: 1,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonCombinedInnerActive: {
    borderTopColor: buttonColorActive,
    borderLeftColor: buttonBorderColorActive,
    borderRightColor: buttonBorderColorActive,
    borderBottomColor: buttonColorActive,
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

function InnerButton({ icon, text, firstChild, onPress }) {
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
    >
      <View style={[
        firstChild ? styles.buttonCombinedInnerFirst : styles.buttonCombinedInnerLast,
        active && styles.buttonCombinedInnerActive
      ]}>
        {icon && <Ionicons name={icon} style={[styles.buttonIcon, active && styles.buttonIconActive]} />}
        {text && <Text style={[styles.buttonText, active && styles.buttonTextActive]}>{text}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function ButtonCombined({ buttons = [] }) {
  return (
    <View style={styles.buttonCombined}>
      {buttons.map((button, index) => (
        <InnerButton key={index} icon={button.icon} text={button.text} firstChild={index === 0} onPress={button.onPress} />
      ))}
    </View>
  );
}
