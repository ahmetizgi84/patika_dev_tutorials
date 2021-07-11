import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import { Layout, Card, Button } from '../components'
import { useSelector, useDispatch } from 'react-redux'

const { height } = Dimensions.get('window')

const AppliedJobsScreen = ({ navigation }) => {
    const { submittedJobs } = useSelector(state => state.app)

    const renderFavJobs = ({ item }) => {
        return <Card item={item} />
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
                <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Başvurduğunuz herhangi bir ilan bulunmuyor</Text>
                <Button text="Geri Dön" icon="arrow-top-left" onPress={() => navigation.navigate('Jobs')} containerStyle={{ marginTop: 15 }} />
            </View>
        )
    }

    return (
        <Layout>
            <FlatList
                data={submittedJobs}
                keyExtractor={item => `id-${item.id}`}
                renderItem={renderFavJobs}
                ItemSeparatorComponent={seperatorComponent}
                contentContainerStyle={{ paddingBottom: 30 }}
                ListEmptyComponent={listEmpty}
            />
        </Layout>
    )
}

export default AppliedJobsScreen

const styles = StyleSheet.create({})
