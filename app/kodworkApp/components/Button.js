import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Button = ({ onPress, text, icon, containerStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.btnContainer, containerStyle]}
            onPress={onPress}
        >
            <View style={styles.btnContent}>
                <Icon size={24} name={icon} color="white" />
                <Text style={styles.btnText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#EF5350',
        paddingVertical: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5
    }
})
