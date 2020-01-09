import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Indicator from './Indicator';
import Button from './Button';
import ButtonStacked from './ButtonStacked';
import ButtonCombined from './ButtonCombined';
import { gutterSize } from './styles';

const styles = StyleSheet.create({
  controller: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  indicator: {
    flexGrow: 1,
  },
  buttons: {
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
  spacer: {
    flexGrow: 1,
  },
});

export default function Controller() {
  const [sending, setSending] = useState(false);
  const handlePress = useCallback(() => {
    setSending(true);
    setTimeout(() => setSending(false), 600);
  }, []);
  return (
    <View style={styles.controller}>
      <View style={styles.indicator}>
        <Indicator sending={sending} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <ButtonStacked buttons={[{ icon: 'ios-arrow-up', onPress: handlePress }, { icon: 'ios-arrow-down', onPress: handlePress }]} />
          <Button icon="md-tv" onPress={handlePress} />
          <ButtonStacked buttons={[{ icon: 'md-add', onPress: handlePress }, { icon: 'md-remove', onPress: handlePress }]} />
        </View>
        <View style={styles.row}>
          <Button icon="ios-snow" onPress={handlePress} />
          <Button icon="ios-flame" onPress={handlePress} />
          <Button text="OFF" onPress={handlePress} />
        </View>
        <View style={styles.row}>
          <ButtonCombined buttons={[{ text: 'OFF', onPress: handlePress }, { icon: 'md-sunny', onPress: handlePress }]} />
          <ButtonCombined buttons={[{ text: 'OFF', onPress: handlePress }, { icon: 'md-sunny', onPress: handlePress }]} />
        </View>
      </View>
      <View style={styles.spacer} />
    </View>
  );
}
