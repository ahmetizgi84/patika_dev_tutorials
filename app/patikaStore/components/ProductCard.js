import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'

const { width, height } = Dimensions.get("window")

const ProductCard = ({ product }) => {

    const { title, imgURL, price, inStock } = product

    return (
        <View style={styles.cardContainer}>
            <View style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 10,
                marginBottom: 5,
            }}>
                <Image source={{ uri: imgURL }} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>

            <View style={{
                flex: 1,
                justifyContent: "flex-end"
            }}>
                <Text style={styles.price}>{price}</Text>
                {
                    !inStock &&
                    <Text style={styles.notinstock}>STOKTA YOK</Text>
                }
            </View>

        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#eceff1",
        flex: 1,
        margin: 5,
        borderRadius: 10,
        padding: 10
    },

    image: {
        width: "100%",
        height: height / 3,
        resizeMode: "contain",
        borderRadius: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    price: {
        color: "#808080",
        fontWeight: "bold",
    },
    notinstock: {
        color: "#ff0000",
        fontWeight: "bold"
    }
})
