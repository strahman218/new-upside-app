import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class ScanScreen extends Component { 
    render(){
        return (
            <View style={styles.container}>
                <Text>ScanScreen</Text>
            </View>
        )
    }
}

export default ScanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})