import { StyleSheet, Text, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';
import React from 'react'

const Carousel = () => {

    const images = [
        "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
      ];



  return (
    <View>
      <SliderBox
      images={images} autoplay circleLoop dotColor = "#13274f" inactiveDotColor = "#90a4ae" imageComponentStyle={{
        borderRadius: 6,
        width: "94%"
      }}
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})