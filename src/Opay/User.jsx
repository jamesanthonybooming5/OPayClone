import {View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import general from "../constants/General";
import { FONTS,Colors,Sizes } from "../constants/Theme";
import {FontAwesome,MaterialCommunityIcons,Ionicons,FontAwesome6,MaterialIcons,SimpleLineIcons,Octicons} from  "@expo/vector-icons/"
import { useState } from "react";

const itemBar=[
{name:'Transaction History',Icon:<MaterialCommunityIcons name="clipboard-text" size={20} color="#04b471" />,
screen:"",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
center:"Security Center",
rate:"Protect your funds",
emoji:<Ionicons name="shield-checkmark-sharp" size={20} color="#04b471" />,
id:"1"},
{name:'Account Limits',Icon:<Ionicons name="speedometer-sharp" size={20} color="#04b471"/>,
screen:"Account",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
price:'View your transaction limits',
center:"Customer Service Center",
emoji:<SimpleLineIcons name="earphones-alt" size={20} color="#04b471" />},
{name:'Bank Card/Account',Icon:<FontAwesome name="credit-card-alt" size={18} color="#04b471" />,
screen:"",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
price:'Add payment option',
center:"Invitation",
rate:"Invite friends and earn up to #5,600 Bonus",
emoji:<MaterialIcons name="celebration" size={20} color="#04b471" />},
{name:'My BizPayment',Icon:<FontAwesome6 name="store" size={20} color="#04b471" />,
screen:"",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
price:'Recieve payment for business',
center:"Opay USSD",
emoji:<Ionicons name="call" size={20} color="#04b471" />},
{name:'OJunior',Icon:<MaterialIcons name="groups" size={20} color="#04b471" />,
screen:"",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
price:'create an account for your child/ward',
center:"Rate Us" ,
emoji:<Octicons name="star-fill" size={20} color="#04b471"/>}
]

export default function User () {

   const [isEyeOpen,setIsEyeOpen]= useState (false);
   const secretText="****";

    const navigation = useNavigation ();
    return(
    <View style={general.container}> 
      <StatusBar backgroundColor="white" barstyle={"dark-content"}/>
      <View style={styles.Head}>
         <TouchableOpacity activeOpacity={0.9} style={{flexDirection:'row',alignItems:'center',gap:5}} onPress={()=>navigation.navigate("Account")}>
             <View style={{width:45,height:45,borderRadius:30,backgroundColor:'#edf8f5',alignItems:'center',paddingVertical:"6%"}}>
                   <FontAwesome name="opera" size={23} color="#04b471" />
             </View>
             <View style={{marginBottom:5,}} >
                 <Text style={FONTS.body2a} >Hi,EDWARD </Text>
                 <View style={{flexDirection:'row',alignItems:"center",}}>
                     <MaterialCommunityIcons name="medal" size={20} color="#a98d38dc" />
                     <View style={{width:45,height:18,borderEndEndRadius:10,borderStartEndRadius:10,backgroundColor:"#fff8df",alignItems:"center",}}>
                         <Text style={{color:"#6e550be6",fontSize:12}}>Tier 1</Text>
                     </View>
                 </View>
             </View>   
         </TouchableOpacity >
         <TouchableOpacity activeOpacity={0.9} onPress={()=> navigation.navigate("Setting")}><Ionicons name="settings-outline" size={25} color="black"/></TouchableOpacity>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}>
        <View style={styles.Balance}>
            <View style={{flexDirection:"row",gap:"2%",alignItems:"center",marginVertical:"2%"}}>
             <Text style={FONTS.h5}>Total Balance</Text>
             <TouchableOpacity activeOpacity={0.9} onPress={()=> setIsEyeOpen(!isEyeOpen)}><Ionicons name={isEyeOpen? "eye-off-outline": "eye"} size={18} color="black" /></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <FontAwesome6 name="naira-sign" size={20} color="black" marginTop={"1%"} />
                <Text style={{fontSize:30,fontWeight:"500"}}>{isEyeOpen ? secretText:"00.00"}</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",gap:3,width:"39%",height:"18%",backgroundColor:"white",borderRadius:"10%",justifyContent:"center",marginTop:"2%"}}>
              <Text style={{...FONTS.body4,
                color:"black",
              }}>& Cashback</Text>
              <Text style={FONTS.body4}> {isEyeOpen ? secretText:"#00.00"}</Text>
           </View>
           <View style={styles.Security}>
            <View style={{width:"70%",paddingVertical:"3%"}}>
                <View style={{
                flexDirection:"row",
                alignItems:"center",
                gap:"2%",
                marginBottom:"4%"
            }}>
                <Ionicons name="shield-checkmark-sharp" size={15} color="white" />
                <Text style={{
                    ...FONTS.body4,
                    color:"white",
                    fontWeight:"500"
                }}>
                Security Check is not turned on</Text>
            </View>
            <Text style={{
                ...FONTS.body4,
                color:"white",
                lineHeight:15,
            }}>Make your account more secure with extra safety checks.</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9}
              style={{
                width:"20%",
                height:"40%",
                borderRadius:"23%",
                backgroundColor:"white",
                alignItems:"center",
                paddingVertical:"2%"
            }} onPressIn={() => navigation.navigate("")}>
             <Text style={{
                ...FONTS.body4,
             }}>Turn On</Text>
            </TouchableOpacity>
           </View>
        </View>
        <View style={styles.Flat}>
         <FlatList 
         scrollEnabled={false}
                data={itemBar}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item}) =>{
                return(
                <TouchableOpacity activeOpacity={0.9}
                  style={{
                    width:"100%",
                    height:40,
                    paddingHorizontal:'4%',
                    marginVertical:"3%",
                    flexDirection:'row',
                    justifyContent:"space-between",
                    alignItems:'center',
                    
                    }} onPress={()=>navigation.navigate(item.screen)}>
                    <View style={{flexDirection:"row",gap:"7%"}} >
                        <Text >{item.Icon}</Text>
                    <View style={{alignItems:"flex-start"}} >
                        <Text style={{...FONTS.body7,color:"black",fontWeight:"300"}} >{item.name}</Text>
                        <Text style={FONTS.body5}>{item.price}</Text>
                    </View>
                    </View>
                     <Text style={{alignSelf:"flex-end"}}>{item.arrow}</Text>
                </TouchableOpacity>
            )}}/>
        </View>
        
         <View style={styles.Flat}>
         <FlatList
         scrollEnabled={false} 
                data={itemBar}
                keyExtractor={(item,index )=>index.toString()}
                renderItem={({item,}) =>{
                return(
                <TouchableOpacity activeOpacity={0.9}
                  style={{
                    width:"100%",
                    height:40,
                    paddingHorizontal:'4%',
                    marginVertical:"3%",
                    flexDirection:'row',
                    justifyContent:"space-between",
                    alignItems:'center',
                    }}>
                    <View style={{flexDirection:"row",gap:"7%"}}>
                        <Text>{item.emoji}</Text>
                    <View style={{alignItems:"flex-start"}}>
                        <Text style={{...FONTS.body7,color:"black",fontWeight:"300"}}>{item.center}</Text>
                        <Text style={FONTS.body5}>{item.rate}</Text>
                    </View>
                    </View>
                     <Text style={{alignSelf:"flex-end"}}>{item.arrow}</Text>
                </TouchableOpacity>
            )}}/>
        </View>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:"5%"}}>
         <Text style={{
            ...FONTS.body4,
            color:"black"
         }}>
            Licensed by the
         </Text>
        <Text style={{
            fontWeight:"500",
            color:"#040476",
            fontSize:15
        }}>CBN</Text>
        <Text style={{
            ...FONTS.body4,
            color:"black"
        }}>
            and insured by the
             </Text>

        <View>
            <Text style={{
                ...FONTS.h2,
                color:"#040476",
                fontWeight:"700",
                fontSize:17
            }}>NDIC</Text>
            <Text style={{
                ...FONTS.body6,
                fontSize:2,
                lineHeight:2,
                width:"100%"
            }}>Nigerian Deposit Insurance Corporation</Text>
        </View>
       </View>
      </ScrollView>
    </View>
)}

const styles=StyleSheet.create ({
    Head:{
        paddingHorizontal:"4%",
        backgroundColor:"#c1f5cd60",
        flexDirection:"row",
        alignItems:"center",
        height:"13%",
        justifyContent:"space-between",
        paddingTop:"10%"
    },
    Balance:{
        backgroundColor:"#c1f5cd60",
        paddingHorizontal:"4%",
        borderBottomEndRadius:20,
        borderEndStartRadius:20,
        paddingTop:"2%",
        height:"17%",
        marginBottom:"13%"
    },
    Security:{
        width:"97%",
        marginHorizontal:"1%",
        flex:1,
        borderRadius:"4%",
        backgroundColor:"#06af6e8e",
        marginTop:"4%",
        paddingHorizontal:"4%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
   },
   Flat:{width:"89%",
        flex:1,
        backgroundColor:"white",
        borderRadius:"4%",
        marginVertical:"2%",
        marginHorizontal:"5%",
        paddingTop:"2%"
        
    },
})