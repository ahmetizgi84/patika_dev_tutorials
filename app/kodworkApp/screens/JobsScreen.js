import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Pressable } from 'react-native'
import useFetch from '../hooks/useFetch'

import { Layout } from '../components'

const JOB_DATA_URL = "https://www.themuse.com/api/public/jobs?page=1"

const JobsScreen = ({ navigation }) => {
    const [page, setPage] = useState(1)
    const { data, loading, error } = useFetch(JOB_DATA_URL)


    function loadMoreHandler() {
        //setPage(page => page + 1)
    }

    function navigationHandler(name, item) {
        navigation.navigate("Details", { name, item })
    }


    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#EF5350" />
            </View>
        )
    }

    if (error) {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center' }}>
                <Text>{error}</Text>
            </View>
        )
    }

    const seperatorComponent = () => {
        return <View style={{ height: 12 }} />
    }


    const renderJobs = ({ item }) => {
        return (
            <Pressable style={{
                padding: 5,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#BDBDBD',
                borderRadius: 5,
            }}
                onPress={() => navigationHandler(item.name, item)}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                <Text>{item.company.name}</Text>
                <View style={{
                    flexDirection: 'row',

                }}>
                    <Text style={{
                        color: 'white', backgroundColor: '#EF5350', borderRadius: 10, paddingHorizontal: 5,
                    }}>{item.locations[0].name}</Text>
                </View>
                <Text style={{ color: '#EF5350', fontWeight: 'bold', fontSize: 12, textAlign: 'right' }}>{item.levels[0].name}</Text>
            </Pressable>
        )
    }

    return (
        <Layout>
            <FlatList
                data={data}
                keyExtractor={item => `id-${item.id}`}
                renderItem={renderJobs}
                ItemSeparatorComponent={seperatorComponent}
                contentContainerStyle={{ paddingBottom: 30 }}
            // onEndReachedThreshold={0.01}
            // onEndReached={loadMoreHandler}
            />
        </Layout>
    )
}

export default JobsScreen

const styles = StyleSheet.create({})
