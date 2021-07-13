import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import { FloatButton, CustomModal } from '../components'
import contentDataParser from '../utils/contentDataParser';
import { formatDistance, parseISO, subDays } from 'date-fns'
import { tr } from 'date-fns/locale'

const ChatScreen = ({ route }) => {
    const { item } = route.params
    const [customModalVisible, setCustomModalVisible] = React.useState(false)
    const [chatList, setChatList] = React.useState([])


    React.useEffect(() => {
        database().ref(`rooms/${item.id}/messages`).on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = contentDataParser(contentData || {})
            setChatList(parsedData)
        })

    }, [])

    function handleCustomModal() {
        setCustomModalVisible(false)
    }

    function handleSendcontent(content) {
        sendContent(content)
        handleCustomModal();
    }

    function sendContent(content) {

        const userMail = auth().currentUser.email

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
        }

        database().ref(`rooms/${item.id}/messages`).push(contentObject)
    }

    const renderItem = ({ item }) => {
        const formattedDate = formatDistance(parseISO(item.date), new Date(), {
            addSuffix: true,
            locale: tr
        })
        return (
            <View style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={{ color: '#37474F' }}>{item.username}</Text>
                    <Text style={{ fontStyle: 'italic', color: '#37474F' }}>{formattedDate}</Text>
                </View>
                <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.text}</Text>
            </View>
        )
    }



    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.text} odası kuruldu!</Text>
            </View>

            <FlatList
                data={chatList}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<View style={{ height: 20 }} />)}
            />

            <CustomModal
                visible={customModalVisible}
                onClose={handleCustomModal}
                onSend={handleSendcontent}
                placeHolder="Mesajın..."
            />

            <FloatButton onPress={() => setCustomModalVisible(!customModalVisible)} />
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFB74D',
        padding: 10
    },

    titleContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        color: '#FFF',
        paddingVertical: 10
    }
})
