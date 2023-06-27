import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodType from '../components/FoodType';
import QuickFood from '../components/QuickFood';
import Clips from '../components/Clips';
import MenuItem from '../components/MenuItem';



const HomeScreen = () => {
  return (
    <ScrollView style={styles.inputeContainer}>
      <View style= {styles.inputeContainer}>
        <TextInput placeholder='Search for Restaurants and More'/>
        <AntDesign name='Saerch1' size={24} color="green" />
      </View>
      <Carousel />
      <FoodType />
      <QuickFood />
      <Clips />
      <MenuItem />
      

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatiner: {
        marginTop: 50
    },
    inputeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 7,
        borderColor: "black"

    }
})