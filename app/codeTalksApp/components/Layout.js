import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF6F00" />
            {children}
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6F00',
        padding: 10
    }
})
