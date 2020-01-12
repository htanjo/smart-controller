import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, Switch } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Action from './Action';

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    backgroundColor: '#363636',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formGroup: {
    marginTop: 8,
    marginBottom: 8,
  },
  formGroupVertical: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  label: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    color: '#fff',
  },
  input: {
    padding: 4,
    borderBottomWidth: 1,
    borderColor: '#666',
    fontSize: 14,
    color: '#bbb',
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  inputFocus: {
    borderColor: 'hsl(190,50%,40%)',
    color: '#fff',
  },
  action: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: vw(4),
  },
});

function Input(props) {
  const [focus, setFocus] = useState(false);
  const handleFocus = useCallback(() => setFocus(true), []);
  const handleBlur = useCallback(() => setFocus(false), []);
  return (
    <TextInput
      style={[styles.input, focus && styles.inputFocus]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
}

export default function Setting({ settings, onChange, onClose }) {
  const [settingsState, setSettingsState] = useState(settings);
  const updateSetting = useCallback((name, value) => {
    setSettingsState(settingsState => {
      return { ...settingsState, [name]: value };
    });
  }, []);
  useEffect(() => onChange(settingsState), [settingsState]);
  return (
    <SafeAreaView style={styles.setting}>
      <ScrollView keyboardShouldPersistTaps="never" contentContainerStyle={styles.scrollView}>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>API</Text>
            <Input value={settingsState.api} onChangeText={text => updateSetting('api', text)} />
          </View>
          <View style={[styles.formGroup, styles.formGroupVertical]}>
            <Text style={styles.label}>Vibration</Text>
            <Switch value={settingsState.vibration} onValueChange={value => updateSetting('vibration', value)} />
          </View>
        </View>
        <View style={styles.action}>
          <Action icon="ios-arrow-down" onPress={onClose} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
