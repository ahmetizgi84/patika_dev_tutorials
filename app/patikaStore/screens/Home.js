import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'

import { SearchBar, Layout, ProductCard } from '../components'
import { dummyData } from '../constants'


const numOfColumns = 2;
function Home() {


    const renderItem = ({ item }) => {

        return (
            <ProductCard product={item} />
        )
    }

    const formatData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRow = dataList.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns && totalLastRow !== 0) {
            dataList.push({
                id: 9999,
                title: '',
                imgURL: '',
                price: '',
                inStock: false,
                empty: true
            })
            totalLastRow++
        }
        return dataList

    }

    return (
        <Layout>
            <Text style={styles.title}>PATİKASTORE</Text>
            <SearchBar />

            <View style={{
                flex: 1,
                paddingVertical: 10,
            }}>
                <FlatList
                    //data={formatData(dummyData, 2)}
                    data={dummyData}
                    keyExtractor={item => `data-id-${item.id}`}
                    renderItem={renderItem}
                    numColumns={numOfColumns}
                />
            </View>
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: "#800080",
        marginVertical: 10,
    }
})
