import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

const Button = ({ text, onPress, containerStyle, secondary, loading }) => {
    return (
        <TouchableOpacity style={[styles.btnContainer, containerStyle, secondary && styles.secondaryContainer]} onPress={onPress}>
            {
                loading ? <ActivityIndicator size="small" color="white" /> :
                    <Text style={[styles.btnText, secondary && styles.secondaryText]}>{text || 'Primary'}</Text>
            }
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        height: 38,
        backgroundColor: '#FFA040',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    secondaryContainer: {
        backgroundColor: 'white'
    },

    secondaryText: {
        color: '#FFA040'
    }
})


