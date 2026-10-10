import {View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList} from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import general from "../constants/General";
import { FONTS,Colors } from "../constants/Theme";
import {FontAwesome,MaterialCommunityIcons,Ionicons,FontAwesome6,MaterialIcons,SimpleLineIcons,Octicons} from  "@expo/vector-icons/"
import { useState } from "react";

const itemBar=[
    {id:"1", 
        name:"Transaction History",
        icon:<MaterialCommunityIcons name="clipboard-text" size={24} color="#04b471" />,
        screen:""
    },
    {id:"2",
        name:"Account Limits", subname:"View your transaction limits",
        icon:<Ionicons name="speedometer-sharp" size={24} color="#04b471"/>,
        screen:"Account"
    },
    {id:"3",
        name:"Bank Card/Account", subname:"Add payment option",
        icon:<FontAwesome name="credit-card-alt" size={20} color="#04b471" />,
        screen:""
    },
    {id:"4",
        name:"My BizPayment", subname:"Recieve payment for business",
        icon:<FontAwesome6 name="store" size={24} color="#04b471" />,
        screen:""
    },
    {id:"5",
        name:"OJunior",subname:"Create an account for your child/ward",
        icon:<MaterialIcons name="groups" size={24} color="#04b471" />,
    },
]

const itemBur=[
    {id:"6",
        name:"Opay USSD", 
        icon:<Ionicons name="call" size={24} color="#04b471" />,
        screen:""
    },
    {id:"7",
        name:"Customer Service", 
        icon:<SimpleLineIcons name="earphones-alt" size={24} color="#04b471" />,
        screen:""
    },
    {id:"8",
        name:"Refer Friends", subname:"Invite friends and earn up to #5,600 bonus",
        icon:<MaterialIcons name="celebration" size={24} color="#04b471" />,
        screen:""
    },
    {id:"9",
        name:"Report Scam", subname:"Protect your funds", 
        icon:<Ionicons name="shield-checkmark-sharp" size={24} color="#04b471" />,
        screen:""
    },
    {id:"10",
        name:"Rate Us", 
        icon:<Octicons name="star-fill" size={20} color="#04b471"/>,
        screen:""
    }
]
export default function User () {

   const [isEyeOpen,setIsEyeOpen]= useState (false);
   const secretText="****";

    const navigation = useNavigation ();
    return(
    <View style={general.container}> 
      <StatusBar backgroundColor="white" barstyle={"dark-content"}/>
      <View style={styles.Head}>

            <TouchableOpacity 
                activeOpacity={0.9} 
                style={styles.header} 
                onPress={()=>navigation.navigate("Account")}>
                <View style={styles.iconholder}>
                   <FontAwesome name="opera" size={24} color="#04b471" />
                </View>

                <View style={{marginBottom:5,}} >
                 <Text style={FONTS.body2a} >Hi,EDWARD </Text>
                 <View style={styles.hi}>
                     <MaterialCommunityIcons name="medal" size={20} color="#a98d38dc" />
                     <View style={styles.tierholder}>
                         <Text style={styles.tiertext}>Tier 1</Text>
                     </View>
                 </View>
             </View>   
         </TouchableOpacity >

         <TouchableOpacity 
          activeOpacity={0.9} 
          onPress={()=> navigation.navigate("Setting")}><Ionicons name="settings-outline" size={25} color="black"/>
          </TouchableOpacity>
      </View>

      <ScrollView 
            showsVerticalScrollIndicator={false}>
                
            <View style={styles.Balance}>
                <View style={styles.balanceholder}>
                    <Text style={FONTS.h5}>Total Balance</Text>
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        onPress={()=> setIsEyeOpen(!isEyeOpen)}><Ionicons name={isEyeOpen? "eye-off-outline": "eye"} size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.hi}>
                    <FontAwesome6 name="naira-sign" size={20} color="black" marginTop={"1%"} />
                    <Text style={styles.secrettext}>{isEyeOpen ? secretText:"00.00"}</Text>
                </View>
                <View style={styles.cashback}>
                    <Text style={FONTS.body4}>& Cashback</Text>
                    <Text style={FONTS.body4}> {isEyeOpen ? secretText:"#00.00"}</Text>
                </View>
                <View style={styles.Security}>
                    <View style={styles.securityholder}>
                        <View style={styles.securitytext}>
                            <Ionicons name="shield-checkmark-sharp" size={15} color="white" />
                            <Text style={styles.sectext}>Security Check is not turned on</Text>
                        </View>
                        <Text style={styles.safetext}>Make your account more secure with extra safety checks.</Text>
                    </View>
                    <TouchableOpacity 
                     activeOpacity={0.9}
                     style={styles.turn} 
                     onPressIn={() => navigation.navigate("")}>
                        <Text style={FONTS.body4}>Turn On</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.holder}>
                <FlatList 
                scrollEnabled={false}
                data={itemBar}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>{
                return(
                <TouchableOpacity 
                  activeOpacity={0.9}
                  style={styles.flat}
                  onPress={()=>navigation.navigate(item.screen)}>
                    <View style={styles.account} >
                        <Text>{item.icon}</Text>
                        <View style={{alignItems:"flex-start"}} >
                            <Text style={styles.accounttext}>{item.name}</Text>
                            {item.subname ? <Text style={FONTS.body5}>{item.subname}</Text> : null}
                        </View>
                    </View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                </TouchableOpacity>
            )}}/>
            </View>

            <View style={styles.holder}>
                <FlatList 
                scrollEnabled={false}
                data={itemBur}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>{
                return(
                <TouchableOpacity 
                  activeOpacity={0.9}
                  style={styles.flat}
                  onPress={()=>navigation.navigate(item.screen)}>
                    <View style={styles.account} >
                        <Text>{item.icon}</Text>
                        <View style={{alignItems:"flex-start"}} >
                            <Text style={styles.accounttext}>{item.name}</Text>
                            {item.subname ? <Text style={FONTS.body5}>{item.subname}</Text> : null}
                        </View>
                    </View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                </TouchableOpacity>
            )}}/>
            </View>
         
       <View style={styles.footer}>
            <Text style={FONTS.body6}>Licensed by the</Text>
            <Text style={styles.cbn}>CBN</Text>
            <Text style={FONTS.body6}>and insured by the</Text>

            <View>
                <Text style={styles.ndic}>NDIC</Text>
                <Text style={styles.last}>Nigerian Deposit Insurance Corporation</Text>
            </View>
       </View>
      </ScrollView>
    </View>
)}

const styles=StyleSheet.create ({
    Head:{
        paddingHorizontal:"4%",
        backgroundColor:Colors.green13,
        flexDirection:"row",
        alignItems:"center",
        height:"13%",
        justifyContent:"space-between",
        paddingTop:"10%"
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    iconholder:{
        width:45,
        height:45,
        borderRadius:25,
        backgroundColor:"white",
        alignItems:'center',
        justifyContent:"center"
    },
    hi:{
        flexDirection:'row',
        alignItems:"center",
    },
    tierholder:{
        width:45,
        height:18,
        borderEndEndRadius:10,
        borderStartEndRadius:10,
        backgroundColor:"#fff8df",
        alignItems:"center",
        justifyContent:"center"
    },
    tiertext:{
        color:"#6e550be6",
        fontSize:12
    },
    Balance:{
        backgroundColor:Colors.green13,
        paddingHorizontal:"4%",
        borderBottomEndRadius:20,
        borderEndStartRadius:20,
        paddingTop:"2%",
        height:"18%",
        marginBottom:"9%"
    },
    balanceholder:{
        flexDirection:"row",
        gap:"2%",
        alignItems:"center",
        marginVertical:"2%"
    },
    secrettext:{
        fontSize:30,
        fontWeight:"500"
    },
    cashback:{
        flexDirection:"row",
        alignItems:"center",
        gap:3,
        width:"42%",
        paddingVertical:"2%",
        paddingHorizontal:"3%",
        backgroundColor:"white",
        borderRadius:"10%",
        justifyContent:"center",
        marginTop:"4%"
    },
    Security:{
        flex:1,
        marginHorizontal:"1%",
        borderRadius:"5%",
        backgroundColor:"#06af6e8e",
        marginTop:"5%",
        paddingHorizontal:"4%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
   },
   securityholder:{
    maxWidth:"70%",
    paddingVertical:"3%"
    },
    securitytext:{
        flexDirection:"row",
        alignItems:"center",
        gap:"2%",
        marginBottom:"4%"
    },
    sectext:{
        ...FONTS.body4,
        color:"white",
        fontWeight:"500"
    },
    safetext:{
        ...FONTS.body4,
        color:"white",
        lineHeight:15,
    },
    turn:{
        width:"25%",
        height:"40%",
        borderRadius:"20%",
        backgroundColor:"white",
        alignItems:"center",
        paddingVertical:"2%"
    },
    flat:{
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
    },
    holder:{
        flexDirection:"row",
        paddingHorizontal:18,
        backgroundColor:"white",
        borderRadius:10,
        marginTop:"5%",
        marginHorizontal:"4%",
    },
    account:{
        flexDirection:"row",
        alignItems:"center",
        gap:"4%",
        flex:1
    },
    accounttext:{
        ...FONTS.body7,
        color:"black",
        fontWeight:"300"
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"5%"
    },
    cbn:{
        fontWeight:"500",
        color:"#040476",
        fontSize:15
    },
    ndic:{
        color:"#040476",
        fontWeight:"700",
        fontSize:17
    },
    last:{
        fontSize:2,
        lineHeight:2,
        width:"100%"
    }
//    Flat:{width:"89%",
//         flex:1,
//         backgroundColor:"white",
//         borderRadius:"4%",
//         marginVertical:"2%",
//         marginHorizontal:"5%",
//         paddingTop:"2%"
//     },
})