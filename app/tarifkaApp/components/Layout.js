import React from 'react'
import { StyleSheet, View } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={styles.layoutContainer}>
            {children}
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#FFA500'
    }
})
