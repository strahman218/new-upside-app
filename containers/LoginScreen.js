import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ScrollView} from 'react-native';
import Category from '../Components/Category';
import Colors from '../Themes/Colors'
import Ionicon from 'react-native-vector-icons/Ionicons'

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
    }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: ( 
            <View style={{ flex:1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Ionicon name='md-person' size={20} style={styles.icon}>
                        <Text style={styles.textStyle}> Sign In</Text>
                    </Ionicon>
                </TouchableOpacity>
            </View>
        )
    })

    componentDidUpdate(prevProps){
        console.log("thes are the prev props")
        console.dir(prevProps);

        console.log("these are the new props ")
        console.dir(this.props)
    }

  //the images here can come straight from our images or from the s3 asset bucket
  //probably the second one tbh
  render() {      
    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                <View>
                    <ScrollView>
                        <Category imageUri={require('../Images/scanBackground.png')}/>
                        <Category imageUri={require('../Images/pup1.jpg')}/>
                        <Category imageUri={require('../Images/pup2.png')}/>
                        <Category imageUri={require('../Images/pup3.png')}/>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={[styles.textStyle, {color: 'white'}]}>Join now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    backgroundColor: Colors.jaffa, 
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 4,
    marginRight: 2,
    borderRadius: 75,
    bottom: 20, 
    right: 10,
    position: 'absolute'
  },
  textStyle: {
      fontSize: 16,
      fontWeight: 'bold'
  },
  icon:{
      padding: 10
  }
});