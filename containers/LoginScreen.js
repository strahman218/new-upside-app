import React, {Component} from 'react';
import {Button, Image, TouchableOpacity, StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import { getBrands } from '../constants/api';
import Header from '../components/Header'
import Category from '../components/home/Category';

export default class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <Button title="Sign In" onPress={() => navigation.navigate('SignIn')}/>
        )
    })

  constructor(props){
    super(props)

    console.log("these are the props")
    console.dir(props)
  }
  // static defaultProps = {
  //   getBrands
  // }

  state = {
    loading: false,
    brands: []
  }

  componentDidMount(){
    this.setState({ loading: true });
    const data = this.props.getBrands;
  }

  componentWillMount(){
    console.log("new data? ");
    console.dir(this.state)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    It's a great day for groceries
                </Text>

                <View>
                    <ScrollView>
                        <Category imageUri={require('../images/scanBackground.png')}/>
                        <Category imageUri={require('../images/pup1.jpg')}/>
                        <Category imageUri={require('../images/pup2.png')}/>
                        <Category imageUri={require('../images/pup3.png')}/>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>

        <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.textStyle}>Join now</Text>
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
  headerBackground: {
    height: 100,
    width: Dimensions.get('window').width
  },
  signinWrapper: {
    fontSize: 20,
    paddingTop: 50,
    paddingLeft: 10
  },
  buttonWrapper: {
    backgroundColor: "green", /* Green */
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 4,
    marginRight: 2,
    borderRadius: 75,
    bottom: 15, //Dimensions.get('window').height, 
    right: 10,
    position: 'absolute'
  },
  textStyle: {
      fontSize: 16,
      fontWeight: 'bold', 
      color: 'white'
  }
});