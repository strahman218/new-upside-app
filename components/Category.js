import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions } from 'react-native';

class Category extends Component { 
    render(){
        return (
            <View style={styles.halfScreenHeight}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri} style={styles.imageStyle}></Image>
                </View>
            </View>
        )
    }
}

export default Category;

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1, 
        width: Dimensions.get('window').width,
        resizeMode: 'cover'
    },
    halfScreenHeight: {
        height: Dimensions.get('window').height/2
    }
})
