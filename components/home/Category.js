import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';

class Category extends Component { 
    render(){
        console.log("these are the props")
        console.dir(this.props)
        return (
            <View style={{ height: Dimensions.get('window').height/2 }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: Dimensions.get('window').width, resizeMode: 'cover' }}></Image>
                </View>
            </View>
        )
    }
}

export default Category;
