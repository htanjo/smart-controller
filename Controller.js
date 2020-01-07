import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { vw } from 'react-native-expo-viewport-units';

const gutterSize = vw(2 / 26 * 100);
const roundSize = vw(3 / 26 * 100);
const buttonSize = vw(6 / 26 * 100);
const buttonStackedSize = vw(10 / 26 * 100);
const buttonCombinedSize = vw(10 / 26 * 100);
const buttonColor = '#363636';
const buttonForegroundColor = '#aaa';
const buttonOuterStyles = {
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
const buttonInnerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: vw(0.8),
  borderColor: buttonColor,
  borderTopColor: '#3c3c3c',
  borderBottomColor: '#2e2e2e',
  borderRadius: roundSize,
  backgroundColor: buttonColor,
};
const styles = StyleSheet.create({
  controller: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: gutterSize / 2,
    marginHorizontal: gutterSize,
  },
  button: {
    ...buttonOuterStyles,
    ...buttonInnerStyles,
    width: buttonSize,
    height: buttonSize,
  },
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
  buttonIcon: {
    fontSize: vw(8),
    color: buttonForegroundColor,
  },
  buttonText: {
    fontSize: vw(3.5),
    fontWeight: 'bold',
    color: buttonForegroundColor,
  },
});

export default function Controller() {
  return (
    <View style={styles.controller}>
      <View style={styles.row}>
        <View style={styles.buttonStacked}>
          <View style={styles.buttonStackedInnerFirst}>
            <Ionicons name="ios-arrow-up" style={styles.buttonIcon} />
          </View>
          <View style={styles.buttonStackedInnerLast}>
            <Ionicons name="ios-arrow-down" style={styles.buttonIcon} />
          </View>
        </View>
        <View style={styles.button}>
          <Ionicons name="md-tv" style={styles.buttonIcon} />
        </View>
        <View style={styles.buttonStacked}>
          <View style={styles.buttonStackedInnerFirst}>
            <Ionicons name="md-add" style={styles.buttonIcon} />
          </View>
          <View style={styles.buttonStackedInnerLast}>
            <Ionicons name="md-remove" style={styles.buttonIcon} />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <Ionicons name="ios-snow" style={styles.buttonIcon} />
        </View>
        <View style={styles.button}>
          <Ionicons name="ios-flame" style={styles.buttonIcon} />
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>OFF</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.buttonCombined}>
          <View style={styles.buttonCombinedInnerFirst}>
            <Text style={styles.buttonText}>OFF</Text>
          </View>
          <View style={styles.buttonCombinedInnerLast}>
            <Ionicons name="md-sunny" style={styles.buttonIcon} />
          </View>
        </View>
        <View style={styles.buttonCombined}>
          <View style={styles.buttonCombinedInnerFirst}>
            <Text style={styles.buttonText}>OFF</Text>
          </View>
          <View style={styles.buttonCombinedInnerLast}>
            <Ionicons name="md-sunny" style={styles.buttonIcon} />
          </View>
        </View>
      </View>
    </View>
  );
}
