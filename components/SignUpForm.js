import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'

class SignUpForm extends Component { 
    render(){
        const { fields } = this.props

        var formatFields = fields.map(function(field){
            //change from camelCase -> inserts a space before all caps -> makes the first word uppercase
            //changes firstName -> First Name
            var formatField = field.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })

            return ( <TextInput style={styles.input} placeholder={formatField}/> )
        })

        return (
            <View style={styles.container}>
                {formatFields}
            </View>
        )
    }
}

export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        height: 40, 
        marginBottom: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})