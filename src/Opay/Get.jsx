import {View,Text,StyleSheet,TouchableOpacity, TextInput} from "react-native";
import general from "../constants/General";
import { MaterialIcons, FontAwesome,MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors,FONTS,SCREEN_WIDTH,SCREEN_HEIGHT } from "../constants/Theme";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function Get () {
    const  navigation = useNavigation();
    const [text,setText] = useState ();
    const [isFocused,setIsFocused] = useState(false);
    return(
        <View style={general.container}>
            <View style={{paddingHorizontal:"4%"}}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{paddingTop:"13%"}}>
                    <MaterialIcons name="arrow-back-ios-new" size={20} color="black"/>
                </TouchableOpacity> 

                <View style={styles.header}>
                    <FontAwesome name="opera" size={23} color={Colors.green4} />
                    <Text style={styles.pay}>Pay</Text>
                </View>

                <Text style={FONTS.body2}>Get an OPay Account</Text>

                <View style={[isFocused? styles.inputwrapper : styles.inactivewrapper]}>
                    <View style={styles.get}>
                        <MaterialCommunityIcons name="diving-scuba-flag" size={30} color={Colors.green2} />
                        <Text>+234</Text>
                    </View>
                    
                    <TextInput
                        placeholder="Enter Phone Number"
                        value={text}
                        onChangeText={setText}
                        keyboardType="numeric"
                        style={styles.inputtext}
                        onFocus={()=> setIsFocused(true)}
                        returnKeyType="done"
                    />
                    {text && (
                        <TouchableOpacity
                        activeOpacity={0.9} 
                        onPress={()=>setText("")}>
                        <Ionicons name="close-circle" size={24} color={Colors.lightGray} />
                        </TouchableOpacity>
                    )}
                    
                </View>

                <View>
                    <View>
                        <Text></Text>
                    </View>
                    <CustomButton/>
                </View>
            </View>
        </View>
    );
}

const styles =StyleSheet.create ({
    header:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        paddingVertical:"10%"
    },
    pay:{
        color:Colors.primary2,
        fontWeight:"500",
        fontSize:30,
        paddingLeft:3
    },
    get:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        borderRightWidth:2,
        paddingRight:"2%",
        borderColor:Colors.grey4
    },
    inputtext:{
        fontWeight:"300",
        fontSize:15,
        maxWidth:"100%",
        flex:1,
        marginLeft:"2%"
    },
    inputwrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        marginBottom:"7%",
        borderWidth:1,
        borderColor:Colors.green7,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        marginVertical:"5%",
        alignItems:"center",
        backgroundColor:Colors.gray
    },
    inactivewrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        marginBottom:"7%",
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        backgroundColor:Colors.gray,
        alignItems:"center",
        flexDirection:"row",
        marginVertical:"5%",

    },
});