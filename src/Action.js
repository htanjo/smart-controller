import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { vw } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
  action: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: vw(8),
    color: '#bbc7c9',
  },
});

export default function Action({ icon, onPress }) {
  return (
    <View style={styles.action}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
