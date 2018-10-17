
import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginNav from './LoginNavigation'
import { ExperienceScreen, ScanScreen, EarnScreen, SettingScreen } from '../Containers/index'

//creating tab bar here so that it's show even for the login screens
//like in the Starbucks app (10/17/2018)
const AppNavigation = createBottomTabNavigator({
    Home: {
        screen: LoginNav,
        navigationOptions: () => ({
            tabBarIcon: <Icon name="home" color='gray' size={20}/>
        })
    },
    Experiences: {
        screen: ExperienceScreen,
        navigationOptions: () => ({
            tabBarIcon: <Icon name="star" color='gray' size={20}/>
        })    
    },
    Scan: {
        screen: ScanScreen,
        navigationOptions: () => ({
            tabBarIcon: <Icon name="barcode" color='gray' size={20}/>
        })
    },
    Earn: {
        screen: EarnScreen,
        navigationOptions: () => ({
            tabBarIcon: <Icon name="money" color='gray' size={20}/>
        })
    }, 
    Settings: {
        screen: SettingScreen,
        navigationOptions: () => ({
            tabBarIcon: <Icon name="gear" color='gray' size={20}/>
        })
    }
})

export default AppNavigation;