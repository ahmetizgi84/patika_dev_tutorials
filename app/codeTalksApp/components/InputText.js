import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const InputText = ({ placeHolder, isSecure, onType, value, isEmail }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeHolder || ''}
            placeholderTextColor="#FFF"
            secureTextEntry={isSecure || false}
            onChangeText={onType}
            value={value}
            keyboardType={isEmail && "email-address"}
        />
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#FFF',
        color: 'white'
    }
})
