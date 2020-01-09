import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Controller from './Controller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Controller />
    </SafeAreaView>
  );
}
