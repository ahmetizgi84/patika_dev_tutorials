import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { Layout, Button, Card } from '../components'
import { useSelector, useDispatch } from 'react-redux'

import { removeFromFavAction } from '../redux/Fav/actions'

const { height } = Dimensions.get('window')

const FavouriteJobsScreen = ({ navigation }) => {
    const { favouriteJobs } = useSelector(state => state.fav)
    const dispatch = useDispatch();


    function removeJobFromFavListHandler(job_id) {
        dispatch(removeFromFavAction(job_id))
    }


    const renderFavJobs = ({ item }) => {
        return <Card item={item} onpress={() => removeJobFromFavListHandler(item.id)} remover />
    }

    const seperatorComponent = () => {
        return <View style={{ height: 12 }} />
    }

    const listEmpty = () => {
        return (
            <View style={{
                height: height,
                justifyContent: 'center',
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Herhangi bir favori ilanınız bulunmuyor</Text>
                <Button text="Geri Dön" icon="arrow-top-left" onPress={() => navigation.navigate('Jobs')} containerStyle={{ marginTop: 15 }} />
            </View>
        )
    }
    return (
        <Layout>
            <FlatList
                data={favouriteJobs}
                keyExtractor={item => `id-${item.id}`}
                renderItem={renderFavJobs}
                ItemSeparatorComponent={seperatorComponent}
                contentContainerStyle={{ paddingBottom: 30 }}
                ListEmptyComponent={listEmpty}
            />
        </Layout>
    )
}

export default FavouriteJobsScreen

const styles = StyleSheet.create({})
