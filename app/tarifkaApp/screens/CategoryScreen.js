import React from 'react'
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native'

import useFetch from '../hooks/useFetch'

import { Layout, CategoryCard } from '../components'

const CATEGORY_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

const CategoryScreen = ({ navigation }) => {
    const { error, data, loading } = useFetch(CATEGORY_URL)

    const navigationHandler = (categoryName) => {
        navigation.navigate("Meals", { categoryName });
    }


    const renderCategory = ({ item }) => {
        return <CategoryCard category={item} onPress={() => navigationHandler(item.strCategory)} />
    }

    function seperatorComponent() {
        return <View style={styles.seperator} />
    }

    if (loading) {
        return (
            <Layout>
                <ActivityIndicator size="large" color="#ECEFF1" />
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
                data={data.categories}
                keyExtractor={item => item.idCategory}
                renderItem={renderCategory}
                ItemSeparatorComponent={seperatorComponent}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </Layout>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    seperator: {
        height: 10
    },

})
