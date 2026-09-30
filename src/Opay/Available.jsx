import {View,Text,ScrollView,StyleSheet, TouchableOpacity} from "react-native"
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { Colors, FONTS } from "../constants/Theme";
import {MaterialIcons,Ionicons,FontAwesome6,MaterialCommunityIcons} from "@expo/vector-icons";
import { useState } from "react";
import { loop } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

export default function Avaiable () {
    const [isEyeOpen,setIsEyeOpen] = useState (false);
    const secretText="****";
    return(
        <View style={general.container}>
            <CustomHeading title={"Available Balance Details"}/>
            <ScrollView 
             style={{paddingVertical:"3%",paddingHorizontal:"4%"}}>

                <View style={styles.box}>
                    <TouchableOpacity style={styles.number}>
                            <Text style={styles.acct}>Account Number</Text>
                            <View style={styles.holder}>
                            <Text style={styles.numb}>808 000 0000</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray4} />
                            </View>
                    </TouchableOpacity>
                  <View style={styles.number2}>
                     <View style={styles.eye}>
                          <Text style={styles.bal}>Avaiable Balance</Text>
                          <TouchableOpacity activeOpacity={0.9} onPress={()=>setIsEyeOpen(!isEyeOpen)}><Ionicons name={isEyeOpen? "eye-off-outline": "eye"} size={18} color="white" /></TouchableOpacity>
                     </View>
                     <View style={styles.naira}>
                         <FontAwesome6 name="naira-sign" size={15} color="white"/>
                         <Text style={FONTS.body2c}>{isEyeOpen ? secretText:"00.00"}</Text>
                     </View>
                  </View>
                </View>

                <View style={styles.number3}>
                   <TouchableOpacity 
                        onPress={()=>navigation.navigate()}
                        style={styles.wallet}>
                        <View style={styles.walletholder}>
                            <View style={styles.iconholder}><MaterialCommunityIcons name="wallet" size={17} color="#04b471"/></View>
                            <Text style={styles.acct}>Wallet</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray4} />
                   </TouchableOpacity>

                   <Text style={FONTS.body9}>#0.00</Text>
                   <TouchableOpacity 
                        style={styles.turnholder}
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate()}>
                        <Text style={styles.turn}>Turn on your Autosave and start making money every day on OWealth</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray4} />
                   </TouchableOpacity>

                   <Text style={{color:Colors.gray6}}>
                    --------------------------------------------------
                   </Text>

                    <TouchableOpacity 
                        onPress={()=>navigation.navigate()}
                        style={styles.wallet}>
                        <View style={styles.walletholder}>
                            <View style={styles.iconholder}><Ionicons name="logo-laravel" size={17} color="#04b471"/></View>
                            <Text style={styles.acct}>OWealth</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray4} />
                   </TouchableOpacity>

                   <Text style={FONTS.body9}>#0.00</Text>
                   <TouchableOpacity 
                        style={styles.turnholder2}
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate()}>
                        <Text style={styles.turn2}>Yesterday's Interest Earned #0.00</Text>
                   </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.lincense}>Licensed by the</Text>
                    <Text style={styles.cbn}>CBN</Text>
                    <Text style={styles.lincense}>and insured by the</Text>
                    <View>
                    <Text style={styles.ndic}>NDIC</Text>
                    <Text style={styles.last}>Nigerian Deposit Insurance Corporation</Text>
                    </View>
                </View> 
            </ScrollView>
        </View>
)};

const styles=StyleSheet.create({
    box:{
        backgroundColor:Colors.green5,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    acct:{
        fontSize:13,
        color:Colors.fadeblack,
        fontWeight:"300"
    },
    holder:{
        flexDirection:"row",
        alignItems:"center"
    },
    numb:{
        fontSize:14,
        fontWeight:"300"
    },
    number:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        flex:1,
        paddingHorizontal:"4%",
        paddingVertical:"3%"
    },
    number2:{
        width:"100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:Colors.green4,
        flex:1,
        paddingHorizontal:"4%",
        paddingTop:"6%"
    },
    eye:{
        flexDirection:'row',
        alignItems:"center",
        gap:3
    },
    bal:{
        color:'white',
        fontWeight:'300'
    },
    number3:{
        width:"100%",
        borderRadius:10,
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:"4%",
        paddingBottom:"2%"
    },
    wallet:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:"3%"
    },
    walletholder:{
        flexDirection:"row",
        alignItems:"center",
        gap:"5%"
    },
    iconholder:{
        width:26,
        height:26,
        borderRadius:16,
        backgroundColor:"#e3f7ed",
        alignItems:"center",
        justifyContent:"center"
    },
    naira:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:"7%"
    },
    turnholder:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:Colors.grey2,
        borderRadius:"3%",
        paddingHorizontal:"3%",
        paddingVertical:"2%",
        justifyContent:"space-between",
        marginVertical:"3%"
    },
    turn:{
        fontSize:11,
        fontWeight:"300",
        color:Colors.gray7,
        maxWidth:"90%"
    },
    turnholder2:{
        backgroundColor:Colors.grey2,
        borderRadius:"5%",
        paddingHorizontal:"3%",
        paddingVertical:"2%",
        marginVertical:"4%",
        maxWidth:"60%"
    },
    turn2:{
        fontSize:11,
        fontWeight:"300",
        color:Colors.gray7,
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"5%"
    },
    lincense:{
        ...FONTS.body4,
        color:"black"
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
        ...FONTS.body6,
        fontSize:2,
        lineHeight:2,
        width:"100%"
    }
});