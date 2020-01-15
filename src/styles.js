import { vw } from 'react-native-expo-viewport-units';

export const gutterSize = vw(2 / 26 * 100);
export const roundSize = vw(3 / 26 * 100);
export const buttonSize = vw(6 / 26 * 100);
export const buttonGroupSize = vw(10 / 26 * 100);
export const buttonColor = '#363636';
export const buttonForegroundColor = '#aaa';
export const buttonColorActive = '#2c2c2c';
export const buttonForegroundColorActive = 'hsl(185,60%,70%)';
export const buttonBorderColorLight = '#3c3c3c';
export const buttonBorderColorDark = '#2e2e2e';
export const buttonBorderColorActive = 'hsl(190,50%,40%)';
export const buttonOuterStyles = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: vw(0.3),
  },
  shadowRadius: vw(1),
  shadowOpacity: 0.2,
  elevation: 4,
  borderRadius: roundSize,
  backgroundColor: buttonColor,
};
export const buttonInnerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: vw(0.8),
  borderTopColor: buttonBorderColorLight,
  borderLeftColor: buttonColor,
  borderRightColor: buttonColor,
  borderBottomColor: buttonBorderColorDark,
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
