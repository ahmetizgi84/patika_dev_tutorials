import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from './'

const Card = ({ item, remover, onpress }) => {

    if (remover) {
        return (
            <View style={{
                padding: 5,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#BDBDBD',
                borderRadius: 5,
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                <Text>{item.company.name}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: 'white',
                        backgroundColor: '#EF5350',
                        borderRadius: 10,
                        paddingHorizontal: 5,
                        paddingVertical: 2
                    }}>{item.locations[0].name}</Text>
                </View>
                <Text style={{ color: '#EF5350', fontWeight: 'bold', fontSize: 12, textAlign: 'right' }}>{item.levels[0].name}</Text>

                <Button onPress={onpress} text="Remove" icon="delete" containerStyle={{ marginVertical: 10 }} />
            </View>
        )
    }

    return (
        <View style={{
            padding: 5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#BDBDBD',
            borderRadius: 5,
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
            <Text>{item.company.name}</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: 'white',
                    backgroundColor: '#EF5350',
                    borderRadius: 10,
                    paddingHorizontal: 5,
                    paddingVertical: 2
                }}>{item.locations[0].name}</Text>
            </View>
            <Text style={{ color: '#EF5350', fontWeight: 'bold', fontSize: 12, textAlign: 'right' }}>{item.levels[0].name}</Text>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
