import {View,Text,StyleSheet,ScrollView,TouchableOpacity,FlatList} from "react-native";
import general from "../constants/General";
import {MaterialCommunityIcons,MaterialIcons,Ionicons,Fontisto,SimpleLineIcons,FontAwesome,FontAwesome6} from "@expo/vector-icons/";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Colors,FONTS } from "../constants/Theme";

const itemBar=[
    {name:"Airtime",icon:<FontAwesome6 name="mobile" size={24} color="#04b471"/>,
screen:"Airtime",iconType:"single"},
    {name:"Data",icon:<FontAwesome6 name="mobile" size={24} color="#04b471"/>,
screen:"",iconType:"single"},
    {name:"Betting",icon: <FontAwesome name="soccer-ball-o" size={24} color="#04b471" />,
screen:"",iconType:"single"},
    {name:"Tv",icon:<MaterialCommunityIcons name="youtube-tv" size={24} color="#04b471"/>,
screen:"",iconType:"single"},
    {name:"SafeBox",icon:<MaterialCommunityIcons name="wallet" size={24} color="#04b471"/>,
screen:"",iconType:"single"},
    {name:"Loan",icon:<FontAwesome6 name="hands-holding-circle" size={24} color="#04b471"/>,
screen:"",iconType:"single"},
    {name:"Invitation",icon:<Ionicons name="megaphone" size={24} color="#04b471"/>,
screen:"",iconType:"single"},
    {name:"More", isMore:true,icon:[<FontAwesome6 name="graduation-cap" size={17} color="#04b471" />,
    <MaterialCommunityIcons name="lightbulb-variant" size={17} color="#04b471" />,
    <MaterialCommunityIcons name="youtube-tv" size={17} color="#04b471"/>
    ],
screen:"More"},   
]

export default function Landing  () {
    const [isEyeOpen,setIsEyeOpen]= useState (false);
       const secretText="****";

    const navigation=useNavigation();
    return(
        <View style={general.container}>
           <View style={styles.Head}> 
             <StatusBar backgroundColor="white" barStyle={'dark-content'} />
             <TouchableOpacity
              style={styles.first} 
              onPress={()=> navigation.navigate("Account")} 
              activeOpacity={0.9}>
                 <View style={styles.sec}>
                 <FontAwesome name="opera" size={20} color="#04b471"/>
                 </View>
                 <MaterialCommunityIcons name="medal" size={23} color="#b5973bdc" />
                 <Text style={FONTS.body9}>Hi,EDWARD </Text>
             </TouchableOpacity>
             <View style={styles.operate}>
                 <SimpleLineIcons name="earphones-alt" size={18} color="black" onPress={()=>navigation.navigate()}/>
                  <MaterialCommunityIcons name="line-scan" size={20} color="black" onPress={()=>navigation.navigate()}/>
                 <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate("Notif")}><Fontisto name="bell" size={20} color="black" /></TouchableOpacity>
             </View>
          </View>

          <ScrollView style={{paddingHorizontal:15}}>
              <View style={styles.Box}>
                 <View style={styles.history}>
                     <TouchableOpacity
                         style={styles.available} 
                         onPress={()=> navigation.navigate("Available")} 
                         activeOpacity={0.9}>
                          <Ionicons name="shield-checkmark-sharp" size={18} color="white" />
                          <Text style={FONTS.body10}>Avaiable Balance</Text>
                          <TouchableOpacity 
                           activeOpacity={0.9} 
                           onPress={()=>setIsEyeOpen(!isEyeOpen)}><Ionicons name={isEyeOpen? "eye-off-outline": "eye"} size={18} color="white" /></TouchableOpacity>
                     </TouchableOpacity>
                     <TouchableOpacity
                         activeOpacity={0.9} 
                         style={{flexDirection:'row',}}>
                         <Text style={FONTS.body10}>Transact...n History</Text>
                         <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                      </TouchableOpacity>
                  </View>
                  <View style={styles.history}>
                     <TouchableOpacity 
                         activeOpacity={0.9} 
                         style={styles.first} 
                         onPress={()=> navigation.navigate("Available")}>
                         <FontAwesome6 name="naira-sign" size={15} color="white"/>
                         <Text style={FONTS.body2c}>{isEyeOpen ? secretText:"00.00"}</Text>
                         <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity 
                         activeOpacity={0.9} 
                         style={styles.add} 
                         onPress={()=> navigation.navigate("Add")}>
                         <Text style={{color:'#04b471eb',fontWeight:'300'}}>+ Add Money</Text>
                     </TouchableOpacity>
                  </View>
              </View>

              <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate("")}
                 style={styles.Short}>
                 <View style={styles.history}>
                     <View style={styles.numb}>
                         <View style={styles.arrow}>
                            <Ionicons name="arrow-up" size={20} color="#04b471" /></View>
                         <View>
                             <Text style={styles.name} 
                             numberOfLines={1}>Transfer to ABCDEF GHIJK LMNOPQ</Text>
                             <Text style={FONTS.body11}>Aug 24th, 00:00:00</Text>
                         </View>
                     </View>
                      <View>
                         <Text style={FONTS.body3c}>-#0.00</Text>
                          <View style={styles.holder}>
                          <Text style={FONTS.body6a}>Successful</Text></View>
                     </View>
                 </View>
                 <View style={styles.history}>
                     <View style={styles.numb}>
                         <View style={styles.percent}>
                            <MaterialCommunityIcons name="percent-outline" size={24} color="#5900cebd" /></View>
                         <View>
                             <Text style={styles.small}>Owealth Interest Earned</Text>
                             <Text style={FONTS.body11}>Aug 24th, 00:00:00</Text>
                         </View>
                     </View>
                     <View>
                         <Text style={FONTS.body3d}>+#0.00</Text>
                          <View style={styles.holder}>
                            <Text style={FONTS.body6a}>Successful</Text></View>
                     </View>
                 </View>
              </TouchableOpacity>

              <View style={styles.Transact}> 
                 <View style={styles.air}>
                     <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={()=> navigation.navigate('ToOpay')}
                      style={styles.centre}>
                         <View style={styles.pay}>
                         <MaterialCommunityIcons name="comment-account" size={25} color="#04b471" /></View>
                         <Text style={styles.small}>To OPay</Text>
                     </TouchableOpacity>
                     <TouchableOpacity 
                     activeOpacity={0.9}  
                     onPress={()=>navigation.navigate("")}
                     style={styles.centre}>
                         <View style={styles.pay}>
                         <MaterialCommunityIcons name="bank" size={25} color="#04b471"/></View>
                         <Text style={styles.small}>To Bank</Text>
                     </TouchableOpacity>
                     <TouchableOpacity
                      activeOpacity={0.9} 
                      style={styles.centre} 
                      onPress={()=> navigation.navigate("Withdraw")}>
                         <View style={styles.pay}>
                         <MaterialCommunityIcons name="arrow-top-right-bold-box" size={25} color="#04b471" /></View>
                         <Text style={styles.small}>Withdraw</Text>
                     </TouchableOpacity>
                 </View>
              </View>

             <View style={styles.Utilities}>
                 <FlatList
                 numColumns={4}
                 data={itemBar}
                 scrollEnabled={false}
                 renderItem={({item})=>{
                    return(
                        <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate(item.screen)}
                        style={styles.content}>
                        {item.isMore ? 
                        (<View style={styles.icon}>
                            <View style={styles.mini}>
                                <View style={[styles.iconslot,{width:"100%",height:"50%"}]}>{item.icon[0]}</View>
                                <View style={styles.iconslot}>{item.icon[1]}</View>
                                <View style={styles.iconslot}>{item.icon[2]}</View>
                            </View> 
                            </View>):
                            (<View style={styles.icon}>{item.icon}</View>)}
                        <Text style={styles.small}>{item.name}</Text>
                    </TouchableOpacity>
                    );
                 }}
                 />
             </View>
           </ScrollView>
        </View>
    )
};

const styles= StyleSheet.create ({
    Head:{
        flexDirection:'row',
        paddingTop:"10%",
        backgroundColor:Colors.grey2,
        justifyContent:"flex-start",
        paddingHorizontal:"5%",
        gap:"28%"
    },                                                      
    first:{
        flexDirection:'row',
        alignItems:'center'
    },
    sec:{
        width:35,
        height:35,
        borderRadius:35,
        backgroundColor:"#c1f5cd60",
        alignItems:'center',
        justifyContent:"center"
    },
    air:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    pay:{
        width:42,
        height:42,
        borderRadius:10,
        backgroundColor:'#edf8f5',
        alignItems:'center',
        justifyContent:"center",
        marginBottom:5
    },
    Box:{
        width:"100%",
        backgroundColor:Colors.green7,
        borderRadius:'3%',
        paddingHorizontal:15,
        paddingBottom:15,
        marginBottom:15,
    },
    Short:{
        width:'100%',
        backgroundColor:'#fffefed5',
        borderRadius:'3%',
        paddingHorizontal:10,
        flex:1,
        marginBottom:15,
    },
    Transact:{
        width:'100%',
        backgroundColor:'#fffefed5',
        borderRadius:'3%',
        paddingTop:13,
        flex:1,
        marginBottom:15
    },
    Utilities:{
        width:'100%',
        backgroundColor:'#fffefed5',
        borderRadius:'3%',
        paddingTop:10,
        flex:1
    },
    content:{
        alignItems:"center",
        marginBottom:16,
        width:"25%",
        justifyContent:"center"
    },
    icon:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:Colors.green10,
        marginBottom:10,
        justifyContent:"center",
        alignItems:"center"
    },
    mini:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignContent:"space-between",
        padding:8
    },
    iconslot:{
        width:"45%",
        height:"45%",
        alignItems:"center",
        justifyContent:"center"
    },
    small:{
        ...FONTS.body5,
        color:'black',
        textAlign:"center",
    },
    centre:{alignItems:'center'},
    holder:{
        width:65,
        height:20,
        borderRadius:4,
        backgroundColor:'#edf8f5',
        alignItems:"center",
        justifyContent:"center",
        marginTop:5
    },
    arrow:{
        width:38,
        height:38,
        borderRadius:25,
        backgroundColor:'#edf8f5',
        alignItems:'center',
        justifyContent:"center"
    },
    percent:{
        width:38,
        height:38,
        borderRadius:25,
        backgroundColor:'#f3e6fc',
        alignItems:'center',
        justifyContent:"center"
    },
    operate:{
        flexDirection:'row',
        alignSelf:'flex-end',
        paddingVertical:20,
        gap:20
    },
    available:{
        flexDirection:'row',
        alignItems:"center",
        gap:3
    },
    history:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:15,
        alignItems:"center"
    },
    add:{
        width:"32%",
        height:30,
        borderRadius:25,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:"center"
    },
    numb:{
        flexDirection:'row',
        alignItems:'center',
        gap:12,
    },
    name:{
        fontWeight:'300',
        fontSize:13,
        maxWidth:"90%"
    }
})