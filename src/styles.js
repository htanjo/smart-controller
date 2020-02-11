import { vw } from 'react-native-expo-viewport-units';

export const gutterSize = vw(2 / 26 * 100);
export const roundSize = vw(3 / 26 * 100);
export const buttonSize = vw(6 / 26 * 100);
export const buttonGroupSize = vw(10 / 26 * 100);
export const buttonColor = '#e2e4e4';
export const buttonForegroundColor = '#6b5e5c';
export const buttonColorActive = '#d6dbdb';
export const buttonForegroundColorActive = 'hsl(190,50%,40%)';
export const buttonBorderColorActive = 'hsl(190,40%,50%)';
export const buttonOuterStyles = {
  borderRadius: roundSize,
  backgroundColor: buttonColor,
};
export const buttonInnerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: vw(0.8),
  borderTopColor: buttonColor,
  borderLeftColor: buttonColor,
  borderRightColor: buttonColor,
  borderBottomColor: buttonColor,
  borderRadius: roundSize,
  backgroundColor: buttonColor,
};
export const buttonIconStyles = {
  fontSize: vw(8),
  color: buttonForegroundColor,
};
export const buttonTextStyles = {
  fontSize: vw(3.5),
  fontWeight: 'bold',
  color: buttonForegroundColor,
};
