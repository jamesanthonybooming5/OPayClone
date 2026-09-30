import {View,Text, ScrollView,StyleSheet,TouchableOpacity} from "react-native";
import CustomHeading from "../components/CustomHeading";
import general from "../constants/General";
import { useState } from "react";
import {Fontisto} from "@expo/vector-icons";
import { FONTS,Colors } from "../constants/Theme";

export default function Access () {
    const[isToggleOn,setIsToggleOn] =useState(false);

    return(
        <View style={general.container}>
            <CustomHeading title={"Access To Clipboard"}/>
            <ScrollView style={styles.scroll}>

              <View style={styles.access}>
                    <View style={styles.toggle}>
                        <Text style={FONTS.body7a}>Allow OPay to access your clipboard</Text>
                        <TouchableOpacity activeOpacity={0.9} onPress={()=>setIsToggleOn(!isToggleOn)}>
                        <Fontisto name={isToggleOn? "toggle-on":"toggle-off"} size={35} color={isToggleOn? "#04b471":"#ccc"} /></TouchableOpacity>
                    </View>
                    <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>
                    <Text style={styles.text}
                    >OPay requires permission to obtain your clipboard in order 
                        to use OPay services more quickly ,such as one-tap transfers,etc.</Text>
              </View>
            </ScrollView>
        </View>
)};

const styles=StyleSheet.create({
    access:{
        width:"100%",
        flex:1,
        paddingHorizontal:"4%",
        paddingVertical:"5%",
        borderRadius:"3%",
        backgroundColor:"white"
    },
    scroll:{
        paddingTop:"4%",
        paddingHorizontal:"4%"
    },
    toggle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    line:{
        color:Colors.gray6,
        marginTop:"3%"
    },
    text:{
        lineHeight:18,
        color:Colors.gray7,
        fontWeight:"300",
        fontSize:16,marginVertical:"2%",
    }
});