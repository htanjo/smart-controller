import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import Indicator from './Indicator';
import Button from './Button';
import ButtonStacked from './ButtonStacked';
import ButtonCombined from './ButtonCombined';
import { gutterSize } from './styles';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const sendInterval = 200;   // milliseconds
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

async function sendCommand(command) {
  const method = 'POST';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const payload = { command };
  const body = JSON.stringify(payload);
  try {
    const response = await fetch(apiUrl, { method, headers, body });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default function Controller() {
  const [sending, setSending] = useState(false);
  const handlePress = useCallback(async command => {
    if (sending) return;
    setSending(true);
    setTimeout(() => setSending(false), sendInterval);
    Vibration.vibrate(60);
    await sendCommand(command);
  }, [sending]);
  return (
    <View style={styles.controller}>
      <View style={styles.indicator}>
        <Indicator sending={sending} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <ButtonStacked buttons={[
            { icon: 'ios-arrow-up', onPress: () => handlePress('tvChannelUp') },
            { icon: 'ios-arrow-down', onPress: () => handlePress('tvChannelDown') }
          ]} />
          <Button icon="md-tv" onPress={() => handlePress('tvPowerToggle')} />
          <ButtonStacked buttons={[
            { icon: 'md-add', onPress: () => handlePress('tvVolumeUp') },
            { icon: 'md-remove', onPress: () => handlePress('tvVolumeDown') }
          ]} />
        </View>
        <View style={styles.row}>
          <Button icon="ios-snow" onPress={() => handlePress('acCoolingOn')} />
          <Button icon="ios-flame" onPress={() => handlePress('acHeatingOn')} />
          <Button text="OFF" onPress={() => handlePress('acOff')} />
        </View>
        <View style={styles.row}>
          <ButtonCombined buttons={[
            { text: 'OFF', onPress: () => handlePress('livingLightOff') },
            { icon: 'md-sunny', onPress: () => handlePress('livingLightOn') }
          ]} />
          <ButtonCombined buttons={[
            { text: 'OFF', onPress: () => handlePress('bedroomLightOff') },
            { icon: 'md-sunny', onPress: () => handlePress('bedroomLightOn') }
          ]} />
        </View>
      </View>
      <View style={styles.spacer} />
    </View>
  );
}
