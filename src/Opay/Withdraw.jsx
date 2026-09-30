import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from "react-native"
import { FONTS,Colors } from "../constants/Theme"
import general from "../constants/General"
import { useNavigation } from "@react-navigation/native"
import CustomHeading from "../components/CustomHeading"
import {FontAwesome6, MaterialIcons,MaterialCommunityIcons,Octicons } from "@expo/vector-icons"

export default function Withdraw () {
    const navigation = useNavigation()
    return(
        <View style={general.container}>
            <CustomHeading title={"Withdraw"}/>
            <ScrollView style={{paddingHorizontal:"4%"}}>
              <TouchableOpacity activeOpacity={0.9} style={styles.Bank}>
                 <View style={{gap:10,flexDirection:"row",alignItems:"center"}}>
                    <View style={{width:45,height:46,borderRadius:13,backgroundColor:Colors.grey2,alignItems:'center',justifyContent:"center"}}>
                     <MaterialCommunityIcons name="storefront-outline" size={24} color="black" />
                 </View>
                 <View style={{marginBottom:5,width:"77%"}}>
                 <Text style={{marginVertical:"2%",fontSize:13}}>Withdraw via OPay merchants</Text>
                 <Text style={{...FONTS.body5,
                    lineHeight:12
                 }}>Send money to an OPay merchant's wallet and get cash equivalent</Text>
                 </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={styles.Cash}>
                 <View style={{gap:10,flexDirection:"row",alignItems:"center"}}>
                    <View style={{width:45,height:46,borderRadius:13,backgroundColor:Colors.grey2,alignItems:'center',justifyContent:"center"}}>
                     <Octicons name="credit-card" size={24} color="black" />
                 </View>
                 <View style={{marginBottom:5,width:"77%"}}>
                 <View style={{flexDirection:"row"}}>
                    <Text style={{marginVertical:"2%",fontSize:13}}>Withdraw with OPay Card</Text>
                 <View style={{width:27,height:15,backgroundColor:"#e8023cd2",borderBottomEndRadius:7,borderTopEndRadius:7,borderStartStartRadius:7,alignItems:'center',paddingVertical:"1%"}}> 
                        <Text style={{color:"white",fontSize:8,fontWeight:"700"}}>HOT</Text>
                    </View>
                 </View>
                 <Text style={{...FONTS.body5,
                    lineHeight:12
                 }}>Withdraw from any ATM or POS around you</Text>
                 </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={styles.Bank}>
                 <View style={{gap:10,flexDirection:"row",alignItems:"center"}}>
                    <View style={{width:45,height:46,borderRadius:25,backgroundColor:"#0007d58c",alignItems:'center',justifyContent:"center"}}>
                    <FontAwesome6 name="location-dot" size={24} color="white" />
                 </View>
                 <View style={{marginBottom:5,width:"77%"}}>
                 <View style={{flexDirection:"row"}}>
                    <Text style={{marginVertical:"2%",fontSize:13}}>Withdraw with OPay Card</Text>
                 <View style={{width:27,height:15,backgroundColor:"#e8023cd2",borderBottomEndRadius:7,borderTopEndRadius:7,borderStartStartRadius:7,alignItems:'center',paddingVertical:"1%"}}> 
                        <Text style={{color:"white",fontSize:8,fontWeight:"700"}}>HOT</Text>
                    </View>
                 </View>
                 <Text style={{...FONTS.body5,
                    lineHeight:12
                 }}>Withdraw from any ATM or POS around you</Text>
                 </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>
            </ScrollView>
        </View>
)}

const styles = StyleSheet.create ({
     Bank:{
        width:"100%",
        borderRadius:"3%",
        backgroundColor:'#fffefed5',
        flex:1,  
        paddingHorizontal:"4%",
        marginVertical:"5%",
        paddingVertical:"4%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    Cash:{
        width:"100%",
        borderRadius:"3%",
        backgroundColor:'#fffefed5',
        flex:1,  
        paddingHorizontal:"4%",
        marginVertica:"2%",
        paddingVertical:"4%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
});