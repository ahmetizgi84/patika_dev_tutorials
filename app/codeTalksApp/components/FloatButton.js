import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FloatButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <Icon size={24} name="plus" color="#FFF" />
        </TouchableOpacity>
    )
}

export default FloatButton

const styles = StyleSheet.create({
    btnContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#FFA040',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20
    }
})
