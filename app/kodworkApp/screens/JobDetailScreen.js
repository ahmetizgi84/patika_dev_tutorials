import React, { useState } from 'react'
import { StyleSheet, Text, View, ToastAndroid } from 'react-native'
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux'
import { addToFavAction } from '../redux/Fav/actions'
import { submitAJobAction } from '../redux/Applied/actions'


import { Layout, Button } from '../components'

const JobDetailScreen = ({ route }) => {
    const { item } = route.params
    const [jobDetail, setJobDetail] = useState(item)
    const dispatch = useDispatch()
    const { favouriteJobs } = useSelector(state => state.fav)
    const { submittedJobs } = useSelector(state => state.app)


    function addToFavHandler() {
        const result = favouriteJobs.find(job => job.id == item.id)
        if (result) {
            ToastAndroid.showWithGravity(
                "Bu ilan zaten favori ilanınız olarak bulunuyor.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else {
            dispatch(addToFavAction(item));
            ToastAndroid.showWithGravity(
                "Favori ilanlara eklendi.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }

    function submitAJobHandler() {
        const result = submittedJobs.find(job => job.id == item.id)
        if (result) {
            ToastAndroid.showWithGravity(
                "Bu ilana daha önce başvuru yaptınız. Yeniden başvuru yapamazsınız",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else {
            dispatch(submitAJobAction(item));
            ToastAndroid.showWithGravity(
                "İlana başvuru yapıldı.",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }


    return (
        <Layout>
            <View style={styles.headerContainer}>
                <Text style={styles.jobTitle}>{jobDetail.name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: '#EF5350', fontWeight: 'bold' }}>Locations: </Text>
                    <Text style={{ fontWeight: 'bold' }}>{jobDetail.locations[0].name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ color: '#EF5350', fontWeight: 'bold' }}>Job Level: </Text>
                    <Text style={{ fontWeight: 'bold' }}>{jobDetail.levels[0].name}</Text>
                </View>
                <Text style={{ color: '#37474F', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 5 }}>Job Detail</Text>
            </View>

            <View style={{
                flex: 1,
                marginHorizontal: -5,
                borderWidth: 1,
                borderColor: '#DCDCDC',
            }}>
                <WebView
                    style={{ flex: 1 }}
                    scalesPageToFit={false}
                    source={{ html: jobDetail.contents }}
                />
            </View>

            <View style={{
                paddingVertical: 10,
                flexDirection: 'row',
            }}>
                <Button onPress={submitAJobHandler} text="Submit" icon="application-import" containerStyle={{ marginRight: 10, flex: 1 }} />
                <Button onPress={addToFavHandler} text="Favourite Job" icon="heart" containerStyle={{ flex: 1 }} />
            </View>

        </Layout>
    )
}

export default JobDetailScreen

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: -5,
        marginHorizontal: -5,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#DCDCDC',
        paddingHorizontal: 5,
    },
    jobTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#37474F'
    },
})
