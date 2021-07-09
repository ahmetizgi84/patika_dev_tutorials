import React from 'react'
import { StyleSheet, Text, Pressable, Image } from 'react-native'

const CategoryCard = ({ category, onPress }) => {
    return (
        <Pressable style={styles.listItemContainer} onPress={onPress}>
            <Image source={{ uri: category.strCategoryThumb }} style={styles.thumbnail} />
            <Text style={styles.listItemTitle}>{category.strCategory}</Text>
        </Pressable>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#ECEFF1',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#C3B4AF'
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: "contain"
    },
    listItemTitle: {
        fontSize: 18,
        marginLeft: 10
    },

})