// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducers/reducer';
import RepoList from './containers/RootContainer';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './containers/LoginScreen'
import HomeScreen from './containers/HomeScreen'
import SignInScreen from './containers/SignInScreen'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStackNavigator />
        </View>
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  SignIn: SignInScreen
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
