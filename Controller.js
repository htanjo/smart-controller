import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Indicator from './Indicator';
import Button from './Button';
import ButtonStacked from './ButtonStacked';
import ButtonCombined from './ButtonCombined';
import Action from './Action';
import { gutterSize } from './styles';
import { apiUrl } from './config';

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
    paddingTop: vw(8),
    paddingBottom: vw(2),
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
  action: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: vw(4),
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

export default function Controller({ connected, onPressSetting }) {
  const [sending, setSending] = useState(false);
  const handlePress = useCallback(async command => {
    if (connected && !sending) {
      setSending(true);
      setTimeout(() => setSending(false), sendInterval);
      Vibration.vibrate(60);
      await sendCommand(command);
    }
  }, [connected, sending]);
  return (
    <View style={styles.controller}>
      <View style={styles.indicator}>
        <Indicator sending={sending} error={!connected} />
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
      <View style={styles.action}>
        <Action icon="ios-settings" onPress={onPressSetting} />
      </View>
    </View>
  );
}
