import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './Navigation/AppNavigation';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
        }
    }


}, {
        tabBarOptions: {
            activeTintColor: '#222',
        }
});

export default tabNav;