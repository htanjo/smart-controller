import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, AsyncStorage, StatusBar, SafeAreaView } from 'react-native';
import { NetworkProvider, NetworkConsumer } from 'react-native-offline';
import { getStatusBarHeight } from 'react-native-status-bar-height';
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
    flexGrow: 1,
    paddingTop: getStatusBarHeight(),
    backgroundColor: '#202020',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});

export default function App() {
  const [settingVisible, setSettingVisible] = useState(false);
  const [settings, setSettings] = useState(null);

  const showSetting = useCallback(() => {
    setSettingVisible(true);
  }, []);
  const hideSetting = useCallback(() => {
    setSettingVisible(false);
  }, []);
  const readSettings = useCallback(async () => {
    let storedSettings = null;
    try {
      storedSettings = JSON.parse(await AsyncStorage.getItem('settings'));
    } catch (error) {
      console.error(error);
    }
    const activeSettings = Object.assign({}, defaultSettings, storedSettings);
    setTimeout(() => setSettings(activeSettings), 10);
  }, []);
  const updateSettings = useCallback(throttle(async values => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(values));
    }
    catch (error) {
      console.error(error);
    }
    setSettings(values);
  }, 1000), []);

  useEffect(() => {
    readSettings();
  }, []);

  if (!settings) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
    );
  }

  return (
    <NetworkProvider pingServerUrl={settings.api}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
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
        hasBackdrop={true}
        useNativeDriver={true}
        onBackButtonPress={hideSetting}
        onBackdropPress={hideSetting}
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
