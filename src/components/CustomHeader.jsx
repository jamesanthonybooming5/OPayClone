import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, FONTS, Sizes } from "../constants/Theme";
import { StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';
const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection:'row',
               justifyContent:"space-between",
               paddingHorizontal:"5%",
               backgroundColor:Colors.grey2,
               height:"9%",
               paddingTop:"10%",
               alignItems:"center",
      }}
    >
    <StatusBar backgroundColor="white" barStyle={'dark-content'} />

      <TouchableOpacity 
        onPress={() => navigation.replace()}
        style={{zIndex:10}}>
        <MaterialIcons
          name="arrow-back-ios-new"
          size={20}
          color={Colors.black}
        />
      </TouchableOpacity> 
      <Text
        style={{
          ...FONTS.h2,
          textAlign: "center",
          color: Colors.white,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
