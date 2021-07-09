import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, ActivityIndicator, Linking } from 'react-native'
import useFetch from '../hooks/useFetch'


const MEAL_DETAIL_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?"
const { width, height } = Dimensions.get("window")

const DetailScreen = ({ route }) => {
    const { idMeal } = route.params
    const { loading, data, error } = useFetch(`${MEAL_DETAIL_URL}i=${idMeal}`)

    const handleClick = () => {
        Linking.canOpenURL(data.meals[0].strYoutube).then((supported) => {
            if (supported) {
                Linking.openURL(data.meals[0].strYoutube);
            } else {
                console.log("Don't know how to open URI: " + data.meals[0].strYoutube);
            }
        });
    };


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#FF0000" />
            </View>
        )
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{error}</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.layoutContainer} contentContainerStyle={{ paddingBottom: 30 }}>
            <Image source={{ uri: data.meals[0].strMealThumb }} style={styles.thumbnail} />
            <View style={styles.titleContainer}>
                <Text style={styles.h1}>{data.meals[0].strMeal}</Text>
                <Text style={styles.h3}>{data.meals[0].strArea}</Text>
            </View>

            <Text style={styles.instructions}>{data.meals[0].strInstructions}</Text>

            <TouchableOpacity style={styles.btn} onPress={handleClick}>
                <Text style={styles.btnTitle}>Watch On Youtube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    thumbnail: {
        width: width,
        height: height / 3,
        resizeMode: "cover"
    },

    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#BDBDBD',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    h1: {
        color: '#A52A2A',
        fontSize: 28,
        fontWeight: 'bold'
    },
    h3: {
        color: '#A52A2A',
        fontSize: 20,
        fontWeight: 'bold'
    },
    instructions: {
        padding: 5,
        marginBottom: 5
    },

    btn: {
        height: 40,
        borderRadius: 8,
        backgroundColor: '#FF0000',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTitle: {
        color: 'white',
        fontWeight: 'bold'
    }
})
