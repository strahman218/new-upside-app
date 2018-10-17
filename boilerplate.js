import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class BoilerPlate extends Component { 
    render(){
        return (
            <View style={styles.container}>
                <Text>BoilerPlate</Text>
            </View>
        )
    }
}

export default BoilerPlate;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})