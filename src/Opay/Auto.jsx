import {View,Text, FlatList, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useState } from "react";
import { MaterialCommunityIcons,Fontisto } from "@expo/vector-icons";
import { Colors,FONTS } from "../constants/Theme";

const itemBar=[
    {id:"1",
        name:"Password-Free Login", subname:"You can log into OPay without entering the password."
    },
    {id:"2",
        name:"60-minute Password-Free Login", subname:"You can log into OPay without entering the password in the next 60 mins."
    },
    {id:"3",
        name:"Password Always Needed Login", subname:"You need to enter password everytime you log into OPay."
    },
]

export default function Auto () {
const [isToggleOn, setIsToggleOn] = useState(false);
const [isToggOn, setIsToggOn] = useState(false);

    return(
        <View style={general.container}>
            <CustomHeading title={"Auto-logout Setting"}/>

            <View style={{paddingHorizontal:"4%", paddingVertical:"8%"}}>

                <FlatList
                scrollEnabled={false}
                 data={itemBar}
                 keyExtractor={(item) => item.id}
                 renderItem={({item}) => {
                    return(
                        <TouchableOpacity 
                         activeOpacity={0.9}
                         style={[isToggleOn ===item.id && styles.activeholder, styles.holder ]}
                         onPress={()=> setIsToggleOn(isToggleOn === item.id ? null: item.id)}>
                           <View style={styles.textcontainer}>
                             <Text style={styles.subtext}>{item.name}</Text>
                            <Text style={styles.posttext}>{item.subname}</Text>
                           </View>
                           <MaterialCommunityIcons 
                             name={isToggleOn === item.id ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} 
                             size={27} color={isToggleOn ===item.id ? Colors.green4 : "#ccc"} 
                             />
                        </TouchableOpacity>
                    )
                 }}/>

                 <Text style={styles.footer}>Biometrics Login Option</Text>
                <View style={styles.Pattern2}>
                    <Text>Log in with Face ID</Text>
                    <TouchableOpacity 
                      activeOpacity={0.9} 
                      onPress={()=>setIsToggOn(!isToggOn)}>
                        <Fontisto name={isToggOn? "toggle-on":"toggle-off"} size={37} color={isToggOn? "#04b471":"#ccc"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    holder:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        paddingVertical:"3%",
        paddingHorizontal:"4%",
        justifyContent:'space-between',
        backgroundColor:"white",
        marginVertical:8,
        borderRadius:10
    },
    activeholder:{
        borderWidth:1,
        borderColor:Colors.green4
    },
    textcontainer:{
        marginVertical:"2%",
        maxWidth:"90%"
    },
    subtext:{
        fontSize:14,
        marginBottom:5,
    },
    posttext:{
        ...FONTS.body5a,
        lineHeight:20
    },
    Pattern2:{
        width:"100%",
        borderRadius:"4%",
        paddingHorizontal:"4%",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:"4%",
        marginVertical:"4%"
    },
    footer:{
        fontSize:16,
        marginTop:"10%"
    }
});