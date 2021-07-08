import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, TouchableOpacity } from 'react-native'

import { Button } from '../components'

const fakeData = [
    {
        todo: "Çöpler atılacak",
        isDone: false,
    },
    {
        todo: 'Markete gidilecek',
        isDone: false
    }
]

function Home() {
    const [todoCount, setTodoCount] = useState(0)
    const [todoText, setTodoText] = useState("")
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        setTodoCount(todoList.length)
    }, [todoList])


    const renderItem = ({ item }) => {

        const isDoneHandler = (td) => {
            const newPayload = {
                todo: td,
                isDone: true
            }
            let newList = todoList.filter(item => item.todo !== td)
            newList.push(newPayload)
            setTodoList(newList)
        }

        return (
            <TouchableOpacity style={[styles.isNotDoneBtn, item.isDone && styles.isDoneBtn]}
                onPress={() => isDoneHandler(item.todo)}
            >
                <Text style={[styles.isNotDoneText, item.isDone && styles.isDoneText]}>{item.todo}</Text>
            </TouchableOpacity>
        )
    }

    const itemSeperator = () => <View style={styles.seperator} />

    function updateTodoListHandler() {
        const payload = {
            todo: todoText,
            isDone: false
        }
        setTodoList([...todoList, payload])
        setTodoText("")
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#102027' />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Yapılacaklar</Text>
                <Text style={styles.headerTitle}>{todoCount}</Text>
            </View>

            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 15 }}
                    data={todoList}
                    keyExtractor={(_, i) => `item-ind-${i}`}
                    renderItem={renderItem}
                    ItemSeparatorComponent={itemSeperator}
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholderTextColor="#808080"
                        placeholder="Yapılacak..."
                        style={{ borderBottomWidth: 1, borderColor: '#808080', color: "white" }}
                        onChangeText={txt => setTodoText(txt)}
                        value={todoText}
                    />
                    <Button disabled={todoText.length <= 0 ? true : false} onPress={updateTodoListHandler} />
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#102027',
        padding: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 10
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFA500'
    },

    inputContainer: {
        backgroundColor: '#37474F',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    seperator: {
        height: 10
    },

    isNotDoneBtn: {
        backgroundColor: '#7DA453',
        padding: 10,
        borderRadius: 10,
    },
    isDoneBtn: {
        backgroundColor: '#37474F',
    },

    isNotDoneText: {
        color: "white"
    },

    isDoneText: {
        textDecorationLine: "line-through",
        color: "#808080"
    }

})
