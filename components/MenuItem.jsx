import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuItem = () => {
  return (
    <View style = {styles.menuItemContainer}>
      <Pressable style ={ styles.menuItemPress}>
        <View>
            <ImageBackground imageStyle={{borderRadius: 6}} style = {{height: 170,  aspectRatio: 5/6}} source ={{uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hiezygiuixjqjogg6w2b"}}>
                <AntDesign style={ styles.menuItemHeart} name="hearto" size={24} color="bwhite" />
            </ImageBackground>
        </View>
        <View style={styles.menuItemDetailContainer}>
            <Text style ={styles.menuItemName}>SandWiches</Text>
        </View>
            <View style={styles.menuItemRatingContainer}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text style={styles.menuItemRating}>5 Stars</Text>
                <Text style={{marginLeft: 3}}>.</Text>
                <Text style={styles.menuItemRating}>40 - 45 mins</Text>
            </View>
            <Text style={styles.menuItemAddress}>Alagomeji</Text>
           
            <View style={styles.menuItemPriceConatainer}>
                <View>
                    <Text>₦</Text>
                </View>
                <Text>1000</Text>
            </View>
            
        <View>
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text>FREE DELIVERY</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    menuItemContainer: {
        margin: 10,

    },
    menuItemPress: {
        flexDirection: "row",
        
    },
    menuItemHeart:{
        position: "absolute",
        top: 10,
        right: 10
    },
    menuItemDetailContainer:{
        marginLeft: 10
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    menuItemRatingContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,
    }, 
    menuItemRating: {
        marginLeft: 3,
        fontSize: 15,
        fontWeight: "400"
    },
    menuItemAddress: {
        fontSize: 16,
        color: 'grey',
        marginTop: 6,

    },
    menuItemPriceConatainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    }
})