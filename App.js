import React, { useState, useCallback } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import Modal from "react-native-modal";
import Controller from './Controller';
import Setting from './Setting';
import { apiUrl } from './config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  modal: {
    margin: 0,
  },
});

export default function App() {
  const [settingVisible, setSettingVisible] = useState(false);
  const showSetting = useCallback(() => {
    setSettingVisible(true);
  }, []);
  const hideSetting = useCallback(() => {
    setSettingVisible(false);
  }, []);
  return (
    <NetworkProvider pingServerUrl={apiUrl}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NetworkConsumer>
          {({ isConnected }) => (
            <Controller
              connected={isConnected}
              onPressSetting={showSetting}
            />
          )}
        </NetworkConsumer>
      </SafeAreaView>
      <Modal
        isVisible={settingVisible}
        animationInTiming={250}
        animationOutTiming={250}
        hasBackdrop={false}
        onBackButtonPress={hideSetting}
        style={styles.modal}
      >
        <Setting onPressBack={hideSetting} />
      </Modal>
    </NetworkProvider>
  );
}
