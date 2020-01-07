import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Controller from './Controller';

const backgroundColor = '#202020';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: backgroundColor,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Controller />
    </View>
  );
}
