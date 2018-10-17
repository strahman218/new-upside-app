import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

class LoginForm extends Component { 
    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Password"/>
            </View>
        )
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    input: {
        height: 40, 
        marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})