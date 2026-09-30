import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors, FONTS, Sizes } from "../constants/Theme";
import { StatusBar } from "react-native";
<<<<<<< Updated upstream
import { useNavigation } from 'expo-router';
=======
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
>>>>>>> Stashed changes
const CustomHeading = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
<<<<<<< Updated upstream
        flexDirection: "row",
        backgroundColor: Colors.fund,
        height: Sizes.height* 0.1,
        width: Sizes.width * 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap:140,
        padding:10
=======
         flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        backgroundColor:Colors.white,
        height:"9%",
        paddingTop:"10%",
        alignItems:"center",
        
>>>>>>> Stashed changes
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'light-content'} />

<<<<<<< Updated upstream
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={Sizes.height* 0.03}
          color={Colors.white}
        />
      </TouchableOpacity> 
      <View style={{ width: Sizes.body2 * 4,
            height: Sizes.h1 * 1.5,backgroundColor:'white',borderRadius:5,justifyContent:'center',alignSelf:'center',marginTop:10}}>
=======
      <TouchableOpacity onPress={() => navigation.goBack()} style={{zIndex:10}}>
        <MaterialIcons
          name="arrow-back-ios-new"
          size={24}
          color={Colors.black}
        />
      </TouchableOpacity> 
      <View style={{
        position:"absolute",
        left:0,
        right:0,
        alignItems:"center",
        justifyContent:"center",
        zIndex:1
      }}>
>>>>>>> Stashed changes
        <Text
        numberOfLines={1}
        style={{
<<<<<<< Updated upstream
          ...FONTS.h3,
          textAlign: "center",
          color: Colors.black,
=======
          ...FONTS.body3,
          textAlign:'center',
          color: Colors.black,
          fontWeight:"600",
          maxWidth:'70%',
          marginTop:35
>>>>>>> Stashed changes
        }}
      >
        {title}
      </Text>
      </View>
    </View>
  );
};

export default CustomHeading;

const styles = StyleSheet.create({});
