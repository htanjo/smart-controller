import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import Controller from './Controller';
import { apiUrl } from './config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});

export default function App() {
  return (
    <NetworkProvider pingServerUrl={apiUrl}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NetworkConsumer>
          {({ isConnected }) => (
            <Controller connected={isConnected} />
          )}
        </NetworkConsumer>
      </SafeAreaView>
    </NetworkProvider>
  );
}
