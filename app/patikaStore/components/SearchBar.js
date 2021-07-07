import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Ara..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 5,
    },
    input: {
        backgroundColor: "#eceff1",
        borderRadius: 10,
        paddingHorizontal: 15
    }
})


export default SearchBar
