import React, { Component } from 'react';
import { Modal, TouchableHighlight, TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native'
import LoginForm from '../../Components/LoginForm'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Themes/Colors'

class SignInModal extends Component { 
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Sign In'
    });


    constructor(props){
        super(props)

        this.state = {
            modalVisible: true
        }
    }

    showSignIn(){
        console.log("showing sign in ")
        this.setState({ modalVisible : true })
    }

    hideSignIn(){
        const { navigation } = this.props;
        console.log("closing sign in ")
        this.setState({ modalVisible: false })
        navigation.navigate('Login')
    }

    signIn(){
        console.log("user has signed in!")
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log("user has signed in!")
                    }}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={{paddingLeft: 10}}>
                                <TouchableOpacity onPress={() => this.hideSignIn()}>
                                    <Icon name="close" size={24} color="gray"/>
                                </TouchableOpacity>
                                <Text style={styles.textStyle}>Sign in to myUpside</Text>
                            </View>
                        </View>
                        <LoginForm/>
                        

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.signIn()}>
                                <Text style={[styles.buttonTextStyle, {color: 'white'}]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default SignInModal;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    header: {
        height: Dimensions.get('window').height/8,
        borderColor: 'black',
        borderBottomWidth: 0.5
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 15
    },
    buttonWrapper: {
        backgroundColor: Colors.jaffa, 
        padding: 20,
        justifyContent: 'center',
        width: Dimensions.get('window').width / 4 * 3,
        borderRadius: 75
      },
      buttonTextStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center'
      }

})