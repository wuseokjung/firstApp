import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StatusBar } from 'expo-status-bar';

function WelcomeView(props) {
    return (
       <View style={styles.background}>
           <TouchableOpacity style={styles.loginButton}></TouchableOpacity>
           <TouchableOpacity onPress={() => console.log("Hello")} style={styles.registerButton}>
               <Text style={styles.registerText}>I love soojinie boojinie</Text>
           </TouchableOpacity>
           <StatusBar style="auto" />
       </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#defae1',
        justifyContent: "flex-end",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'skyblue',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        justifyContent: "center",
        alignItems: "center"
    },
    registerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default WelcomeView;