import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Switch } from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Action from './Action';

const styles = StyleSheet.create({
  setting: {
    borderTopLeftRadius: vw(2 / 26 * 100),
    borderTopRightRadius: vw(2 / 26 * 100),
    backgroundColor: '#dde0e0',
  },
  scrollView: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  form: {
    justifyContent: 'center',
    paddingVertical: vw(1 / 26 * 100),
    paddingHorizontal: vw(2 / 26 * 100),
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
    color: '#6b5e5c',
  },
  input: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRadius: 4,
    fontSize: 13,
    color: '#6b5e5c',
    backgroundColor: '#d0d6d6',
  },
  inputFocus: {
    borderBottomColor: 'hsl(190,40%,50%)',
    backgroundColor: '#e8ebeb',
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
  useEffect(() => {
    onChange(settingsState);
  }, [settingsState]);
  return (
    <View style={styles.setting}>
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
    </View>
  );
}
