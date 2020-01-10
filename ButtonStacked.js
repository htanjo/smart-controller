import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  buttonSize,
  buttonStackedSize,
  buttonOuterStyles,
  buttonInnerStyles,
  buttonBorderColorActive,
  buttonColorActive,
  buttonForegroundColorActive,
  buttonIconStyles,
  buttonTextStyles,
} from './styles';

const styles = StyleSheet.create({
  buttonStacked: {
    ...buttonOuterStyles,
    flexDirection: 'column',
    width: buttonSize,
    height: buttonStackedSize,
  },
  buttonStackedInnerFirst: {
    ...buttonInnerStyles,
    flex: 1,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonStackedInnerLast: {
    ...buttonInnerStyles,
    flex: 1,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  buttonStackedInnerActive: {
    borderTopColor: buttonBorderColorActive,
    borderLeftColor: buttonColorActive,
    borderRightColor: buttonColorActive,
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
      // onPress={() => console.log('pressed')}
    >
      <View style={[
        firstChild ? styles.buttonStackedInnerFirst : styles.buttonStackedInnerLast,
        active && styles.buttonStackedInnerActive
      ]}>
        {icon && <Ionicons name={icon} style={[styles.buttonIcon, active && styles.buttonIconActive]} />}
        {text && <Text style={[styles.buttonText, active && styles.buttonTextActive]}>{text}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function ButtonStacked({ buttons = [] }) {
  return (
    <View style={styles.buttonStacked}>
      {buttons.map((button, index) => (
        <InnerButton key={index} icon={button.icon} text={button.text} firstChild={index === 0} onPress={button.onPress} />
      ))}
    </View>
  );
}
