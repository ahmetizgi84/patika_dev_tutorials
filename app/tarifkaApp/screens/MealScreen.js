import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, Dimensions, Pressable, ActivityIndicator } from 'react-native'
import useFetch from '../hooks/useFetch'

import { Layout } from '../components'

const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?"
const { width, height } = Dimensions.get("window")

const MealScreen = ({ route, navigation }) => {
    const { categoryName } = route.params
    const { data, loading, error } = useFetch(`${MEAL_URL}c=${categoryName}`)

    const navigationHandler = (idMeal) => {
        navigation.navigate("Detail", { idMeal });
    }


    const renderMeal = ({ item }) => {
        return (
            <Pressable style={styles.listItemContainer} onPress={() => navigationHandler(item.idMeal)}>
                <Image source={{ uri: item.strMealThumb }} style={styles.listItemImage} />
                <View style={styles.listItemTitleContainer}>
                    <Text style={styles.listItemTitle} ellipsizeMode="tail" numberOfLines={1} >{item.strMeal}</Text>
                </View>
            </Pressable>
        )
    }


    function seperatorComponent() {
        return <View style={styles.seperator} />
    }


    if (loading) {
        return (
            <Layout>
                <ActivityIndicator size="large" color="white" />
            </Layout>
        )
    }

    if (error) {
        return (
            <Layout>
                <Text>{error}</Text>
            </Layout>
        )
    }

    return (
        <Layout>
            <FlatList
                data={data.meals}
                keyExtractor={item => item.idMeal}
                renderItem={renderMeal}
                ItemSeparatorComponent={seperatorComponent}
                contentContainerStyle={{ paddingBottom: 30 }}

            />
        </Layout>
    )
}

export default MealScreen

const styles = StyleSheet.create({
    listItemContainer: {
        borderRadius: 10
    },
    listItemImage: {
        width: width - 10,
        height: height / 3.5,
        resizeMode: "cover",
        borderRadius: 10,
    },
    listItemTitleContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: "flex-end",
        paddingHorizontal: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    listItemTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white"
    },
    seperator: {
        height: 15
    },
})
