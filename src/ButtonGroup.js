import React, { cloneElement, Children, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonShadow from './ButtonShadow';
import {
  roundSize,
  buttonSize,
  buttonGroupSize,
  buttonOuterStyles,
  buttonInnerStyles,
  buttonBorderColorActive,
  buttonColorActive,
} from './styles';

const styles = StyleSheet.create({
  buttonGroup: {
    ...buttonOuterStyles,
    flexDirection: 'row',
    width: buttonGroupSize,
    height: buttonSize,
  },
  buttonGroupVertical: {
    ...buttonOuterStyles,
    flexDirection: 'column',
    width: buttonSize,
    height: buttonGroupSize,
  },
  buttonGroupInnerFirst: {
    ...buttonInnerStyles,
    flex: 1,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonGroupInnerLast: {
    ...buttonInnerStyles,
    flex: 1,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonGroupInnerActive: {
    borderTopColor: buttonColorActive,
    borderLeftColor: buttonBorderColorActive,
    borderRightColor: buttonBorderColorActive,
    borderBottomColor: buttonColorActive,
    backgroundColor: buttonColorActive,
  },
  buttonGroupVerticalInnerFirst: {
    ...buttonInnerStyles,
    flex: 1,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonGroupVerticalInnerLast: {
    ...buttonInnerStyles,
    flex: 1,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  buttonGroupVerticalInnerActive: {
    borderTopColor: buttonBorderColorActive,
    borderLeftColor: buttonColorActive,
    borderRightColor: buttonColorActive,
    borderBottomColor: buttonBorderColorActive,
    backgroundColor: buttonColorActive,
  },
});

export default function ButtonGroup({ vertical = false, children }) {
  const width = useMemo(() => vertical ? buttonSize : buttonGroupSize, [vertical]);
  const height = useMemo(() => vertical ? buttonGroupSize : buttonSize, [vertical]);
  return (
    <ButtonShadow width={width} height={height} borderRadius={roundSize}>
      <View style={vertical ? styles.buttonGroupVertical : styles.buttonGroup}>
        {Children.map(children, (child, index) => {
          let newProps;
          if (vertical) {
            newProps = {
              style: index === 0 ? styles.buttonGroupVerticalInnerFirst : styles.buttonGroupVerticalInnerLast,
              activeStyle: styles.buttonGroupVerticalInnerActive,
              shadow: false,
            };
          } else {
            newProps = {
              style: index === 0 ? styles.buttonGroupInnerFirst : styles.buttonGroupInnerLast,
              activeStyle: styles.buttonGroupInnerActive,
              shadow: false,
            };
          }
          return cloneElement(child, newProps);
        })}
      </View>
    </ButtonShadow>
  );
}
