import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import Modal from 'react-native-modal'

import { Button } from '../components'

const { height } = Dimensions.get("window")

const CustomModal = ({ visible, onClose, onSend, placeHolder }) => {

    const [text, setText] = React.useState("")


    return (
        <Modal
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection="down"
            style={styles.modal}
        >

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={placeHolder}
                        onChangeText={setText}
                        //value={text}
                        multiline
                    />
                </View>

                <Button text="Ekle" onPress={() => onSend(text)} />
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 15,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: height / 3

    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },

    inputContainer: {
        flex: 1
    }
})
