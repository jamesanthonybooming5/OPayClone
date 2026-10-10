import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors, FONTS, Sizes } from "../constants/Theme";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
const CustomHeading = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
         flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        backgroundColor:Colors.white,
        height:"9%",
        paddingTop:"10%",
        alignItems:"center",
        
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'dark-content'} />

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
        <Text
        numberOfLines={1}
        style={{
          ...FONTS.body3,
          textAlign:'center',
          color: Colors.black,
          fontWeight:"600",
          maxWidth:'70%',
          marginTop:35
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
