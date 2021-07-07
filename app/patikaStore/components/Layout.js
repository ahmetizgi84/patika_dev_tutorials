import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Layout = ({ children }) => {
    return (
        <View style={styles.layoutContainer}>
            {
                children
            }
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        //marginHorizontal: 5,
        backgroundColor: "#ffffff"
    }
})
