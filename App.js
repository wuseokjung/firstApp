import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row", //horizontal
      justifyContent: "center", //main
      alignItems: "center", //secondary
      alignContent: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }}
      />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        top: 20,
        left: 20,
        position: "absolute"
      }}
      />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
