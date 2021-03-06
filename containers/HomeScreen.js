import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home"
    });

    render(){
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
});