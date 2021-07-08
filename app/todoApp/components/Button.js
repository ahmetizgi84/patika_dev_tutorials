import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ disabled, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, disabled && styles.disabled]}
            disabled={disabled && true}
            onPress={onPress}
        >
            <Text style={styles.btnText}>Kaydet</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginBottom: 15
    },

    disabled: {
        backgroundColor: '#808080',
    },

    btnText: {
        color: 'white'
    }
})
