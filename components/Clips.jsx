import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const buttons = () => {
  return (
    <View style = {styles.buttonContainer}>
     <Pressable style ={styles.pressOne}>
        <Text style = {styles.pressOneText}>
            <Ionicons name="filter" size={24} color="black" />
        </Text>
     </Pressable>
     <Pressable style ={styles.pressOne}>
        <Text>
            Sought By Rating
        </Text>
     </Pressable>
     <Pressable style ={styles.pressOne}>
        <Text>
            Sought By Style
        </Text>
     </Pressable>
    </View>
  )
}

export default buttons

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    pressOne: {
        marginHorizontal: 10,
        flexDirection: "row",
        alighItems: "center",
        borderWeight: 1,
        borderColor: "#d0d0d0",
        width: 100,
        padding: 10,
        borderRadius: 20,
        justifyContent: "center"
    },
    pressOneText: {
        marginRight: 20
    },
    pressTwoText: {
        marginRight: 20
    }
})