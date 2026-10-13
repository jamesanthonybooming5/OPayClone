import {View,Text,StyleSheet, TextInput, TouchableOpacity} from "react-native"
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useState } from "react";
import { FontAwesome6,Ionicons} from "@expo/vector-icons";
import { Colors, FONTS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";


export default function TopUp () {
    const navigation = useNavigation();
    const [text, setText] = useState ("");

    const isButttonActive = Number(text) >= 100;

    return(
        <View style={general.container}>
            <CustomHeading title={"Top Up With Card/Account"}/>

            <View style={styles.holder}>

                <Text>Amount</Text>
                <View style={styles.amountholder}>
                   <View style={styles.container}>
                       <FontAwesome6 name="naira-sign" size={14} color="black" />
                        <TextInput 
                        placeholder="100.00 - 9,999.00" 
                        keyboardType="numeric"
                        returnKeyType="done"
                        value={text}
                        onChangeText={setText}
                        style={[styles.input, text.length > 50 ? styles.bold : styles.light]}
                    />
                   </View>
                     {Number(text)>= 100 && (
                        <TouchableOpacity
                         activeOpacity={0.9} 
                         onPress={()=>setText("")}>
                            <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                        </TouchableOpacity>
                     )}
                </View>
                <View style={styles.for}>
                    <Text style={FONTS.h6}>For amount above #9,999.00,</Text>
                    <TouchableOpacity 
                     style={styles.text}
                     onPress={()=>navigation.navigate("Bank")}>
                        <Text style={styles.bank}>use bank transfer</Text>
                        <Ionicons name="chevron-forward" size={12} color={Colors.green7}/>
                    </TouchableOpacity>
                </View>
            </View>

            <CustomButton title="Next" 
                disabled={!isButttonActive}
                onPress={()=>{console.log("Button pressed with text:", text);}}
                buttonStyle={[isButttonActive? styles.activeButton:styles.inactiveButton]} 
                textStyle={FONTS.body3a}/>

            <View style={styles.footer}>
                <Text style={FONTS.body6}>Licensed by the</Text>
                <Text style={styles.cbn}>CBN</Text>
                <Text style={FONTS.body6}>and insured by the</Text>
                <View>
                <Text style={styles.ndic}>NDIC</Text>
                <Text style={styles.last}>Nigerian Deposit Insurance Corporation</Text>
                </View>
            </View> 
        </View>
        
);}

const styles = StyleSheet.create ({
    holder:{
        backgroundColor:"white",
        borderRadius:"3%",
        paddingHorizontal:"4%",
        paddingVertical:"5%",
        marginHorizontal:"4%",
        marginVertical:"3%",
    },
    amountholder:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:Colors.gray8,
        paddingVertical:"5%",
        paddingHorizontal:"4%"
    },
    input:{
        flex:1,
        fontSize:16
    },
    bold:{
        fontWeight:"400",
        color:"black"
    },
    light:{
        fontWeight:"300",
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:"3%"
    },
    for:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop:"4%"
    },
    text:{
        flexDirection:"row",
        alignItems:"center"
    },
    bank:{
        ...FONTS.h6,
        color:Colors.green7
    },
    inactiveButton:{
        width:"80%",
        alignSelf:"center",
        marginTop:"10%",
        justifyContent:"center",
        backgroundColor:Colors.green6
    },
    activeButton:{
        backgroundColor:Colors.green7,
        width:"80%",
        justifyContent:"center",
        alignSelf:"center",
        marginTop:"10% "
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"100%",
        flex:1
    },
    cbn:{
        fontWeight:"500",
        color:"#040476",
        fontSize:15
    },
    ndic:{
        ...FONTS.h2,
        color:"#040476",
        fontWeight:"700",
        fontSize:17
    },
    last:{
        fontSize:2,
        lineHeight:2,
        width:"100%"
    }
});