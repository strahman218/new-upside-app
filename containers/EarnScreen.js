import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EarnScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>EarnScreen</Text>
            </View>
        )
    }
}

export default EarnScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
});