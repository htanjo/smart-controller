import React, { useState, useCallback } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import Modal from "react-native-modal";
import { throttle } from 'lodash';
import Controller from './Controller';
import Setting from './Setting';

const defaultSettings = {
  api: 'https://jsonplaceholder.typicode.com/posts',
  vibration: true,
};
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
  const [settings, setSettings] = useState(defaultSettings);
  const showSetting = useCallback(() => {
    setSettingVisible(true);
  }, []);
  const hideSetting = useCallback(() => {
    setSettingVisible(false);
  }, []);
  const updateSettings = useCallback(throttle(values => {
    setSettings(values);
  }, 1000), [])
  return (
    <NetworkProvider pingServerUrl={settings.api}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NetworkConsumer>
          {({ isConnected }) => (
            <Controller
              api={settings.api}
              vibration={settings.vibration}
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
        <Setting
          settings={settings}
          onChange={updateSettings}
          onClose={hideSetting}
        />
      </Modal>
    </NetworkProvider>
  );
}
