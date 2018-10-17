import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import SignUpForm from '../Components/SignUpForm'
import LoginForm from '../Components/LoginForm'
import Colors from '../Themes/Colors';

class SignUpScreen extends Component { 
    static navigationOptions = ({ navigation }) => ({
        title: 'Sign Up'
    })

    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            zipCode: '',
            email: '',
            password: ''
        }
    }

    render(){
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.formHeader}> Personal Info </Text>
                    <SignUpForm fields={['firstName', 'lastName', 'zipCode']}/>
                </View>

                <View>
                    <Text style={styles.formHeader}> Security </Text>
                    <LoginForm/>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textStyle}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formHeader: {
        fontSize: 20, 
        fontWeight: 'bold',
        padding: 10
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