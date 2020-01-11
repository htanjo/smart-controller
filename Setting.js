import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Action from './Action';

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#363636',
  },
  action: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: vw(4),
  },
});

export default function Setting({ onPressBack }) {
  return (
    <SafeAreaView style={styles.setting}>
      <View style={styles.form}></View>
      <View style={styles.action}>
        <Action icon="ios-arrow-down" onPress={onPressBack} />
      </View>
    </SafeAreaView>
  );
}
