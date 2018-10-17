import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class SignUpModal extends Component { 
    render(){
        return (
            <View style={styles.container}>
                <Text>SignUpModal</Text>
            </View>
        )
    }
}

export default SignUpModal;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})