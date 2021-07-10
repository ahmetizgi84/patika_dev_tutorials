import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 5
    }
})
