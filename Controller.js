import React from 'react';
import { StyleSheet, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Button from './Button';
import ButtonStacked from './ButtonStacked';
import ButtonCombined from './ButtonCombined';
import { gutterSize } from './styles';

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
});

export default function Controller() {
  return (
    <View style={styles.controller}>
      <View style={styles.row}>
        <ButtonStacked buttons={[{ icon: 'ios-arrow-up' }, { icon: 'ios-arrow-down' }]} />
        <Button icon="md-tv" />
        <ButtonStacked buttons={[{ icon: 'md-add' }, { icon: 'md-remove' }]} />
      </View>
      <View style={styles.row}>
        <Button icon="ios-snow" />
        <Button icon="ios-flame" />
        <Button text="OFF" />
      </View>
      <View style={styles.row}>
        <ButtonCombined buttons={[{ text: 'OFF' }, { icon: 'md-sunny' }]} />
        <ButtonCombined buttons={[{ text: 'OFF' }, { icon: 'md-sunny' }]} />
      </View>
    </View>
  );
}
