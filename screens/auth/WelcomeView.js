import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

function WelcomeView(props) {
    return (
       <View style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../assets/ecoFloLogo.png")} />
                <Text>Make a greener world</Text>
            </View>
            <TouchableOpacity onPress={() => console.log("Login")} style={styles.loginButton}>
               <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => console.log("Register")} style={styles.registerButton}>
               <Text style={styles.buttonText}>Register</Text>
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
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'skyblue',
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 200,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue',
        justifyContent: "center",
        alignItems: "center"
    },
})

export default WelcomeView;