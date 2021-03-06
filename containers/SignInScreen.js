import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LoginForm from '../Components/LoginForm'
import Colors from '../Themes/Colors'
class SignInScreen extends Component { 
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign In'
    })

    constructor(props){
        super(props)
    }

    render(){
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <LoginForm/>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textStyle}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonWrapper: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: Colors.transparent
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 4 * 3, //Metrics.threeFourthWidth,
        height: 40,
        backgroundColor: Colors.jaffa,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16
    },
      textStyle: {
          fontSize: 16,
          fontWeight: 'bold', 
          color: 'white'
    }
})