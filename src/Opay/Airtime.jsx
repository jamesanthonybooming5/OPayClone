<<<<<<< Updated upstream
=======
import {View,Text,StyleSheet,TouchableOpacity, ScrollView,TextInput,FlatList} from "react-native";
import general from "../constants/General";
import { StatusBar } from "react-native";
import {Colors,FONTS} from "../constants/Theme";
import {MaterialIcons,Entypo,FontAwesome6,Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const itemBar=[
   {name:"#50",pay:"Pay #50"},{name:"#100",pay:"Pay #100"},{name:"#200",pay:"Pay #200"},
   {name:"#500",pay:"Pay #500"},{name:"#1000",pay:"Pay #1000"},{name:"#2000",pay:"Pay #2000"},
  ]

export default function Airtime () {
   const [text,setText] = useState ("");
   const [numb,setNumb] = useState ("");
    const navigation=useNavigation('');

    return(
        <View style={general.container}>
          <View style={styles.Head}>
            <StatusBar backgroundColor="white" barStyle={'dark-content'} />
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={{zIndex:10}}>
                 <MaterialIcons
                 name="arrow-back-ios-new"
                 size={20}
                 color={Colors.black}
                 /> 
             </TouchableOpacity> 
             <Text style={styles.airtime}>Airtime</Text>
             <Text style={{color:Colors.green4}} onPress={()=> navigation.navigate()}>History</Text>
          </View>
          
          <ScrollView>
             <View style={styles.Input}>
                <View style={styles.holder}>
                  <View style={styles.icon}>
                   <View style={styles.row}>
                   <View style={styles.row}>
                   <View style={styles.iconholder}>
                   <Entypo name="cloud" size={15} color="white" />
                   <Text style={{
                     fontSize:8,
                     color:"white"
                    }}>airtel</Text>
                   </View>
                   <FontAwesome6 name="caret-down" size={15} color={Colors.gray4}/>
                    <View style={{
                    width:"1%",
                    height:30,
                    backgroundColor:Colors.gray,
                   }}>
                   </View>
                   </View>
                   <TextInput 
                   placeholder="0XX XXX XXXX"
                   value={text}
                   onChangeText={setText}
                   keyboardType="numeric"
                   style={{fontSize:18,
                     fontWeight:"500",
                     width:"60%",
                   }}/>
                   </View>
                </View>
                <TouchableOpacity activeOpacity={0.9}><Ionicons name="person-circle-sharp" size={35} color="#04b471" /></TouchableOpacity>
                </View>
                 <View style={{
                    width:"100%",
                    height:"2%",
                    backgroundColor:Colors.gray,
                    marginVertical:"2%",
                    opacity:0.4
                   }}>
                </View>
             </View>

             <View style={styles.Topup}>
                <Text style={{
                  fontWeight:"500",
                  fontSize:16,
                  marginBottom:'3%'}}>Top up</Text>

                  <View style={{marginVertical:"3%"}}>
                     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}> 
                           #50
                         </Text>
                         <Text style={styles.Amount}>
                           Pay #50
                         </Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}>  
                           #100
                        </Text>
                        <Text style={styles.Amount}>
                           Pay #100
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}> 
                           #200
                         </Text>
                         <Text style={styles.Amount}>
                           Pay #200
                         </Text>
                      </TouchableOpacity>
                   </View>

                   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:'2%'}}>
                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}> 
                           #500
                         </Text>
                         <Text style={styles.Amount}>
                           Pay #500
                         </Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}> 
                           #1,000
                         </Text>
                         <Text style={styles.Amount}>
                           Pay #1,000
                         </Text>
                      </TouchableOpacity>

                      <TouchableOpacity activeOpacity={0.9} style={styles.pay}>
                         <Text  style={styles.Up}> 
                           #2,000
                         </Text>
                         <Text style={styles.Amount}>
                           Pay #2,000
                         </Text>
                      </TouchableOpacity>
                   </View>
                </View>

                 <View style={styles.Five}>
                     <View>
                        <View style={{
                        flexDirection:"row",
                        alignItems:"center"
                      }}>
                        <FontAwesome6 name="naira-sign" size={17} color="black"/>
                       
                         <TextInput 
                   placeholder="50 - 50,000"
                   value={numb}
                   onChangeText={setNumb}
                   keyboardType="numeric"
                   style={{fontSize:18,
                     fontWeight:"400",
                     width:"60%",
                     marginLeft:"4%"
                   }}/>
                      </View>
                      <View style={{
                       width:"110%",
                       height:"2%",
                       backgroundColor:Colors.gray,
                        }}>
                       </View>
                   </View>
                   <TouchableOpacity activeOpacity={0.9} style={{
                     height:35,
                     borderRadius:20,
                     alignItems:"center",
                     backgroundColor:"#04b471",
                     width:"19%",
                     justifyContent:"center",
                     
                   }}>
                     <Text style={{
                        textAlign:"center",
                        color:"white"}}>Pay {numb}</Text>
                   </TouchableOpacity>
                  </View>
             </View>
          </ScrollView>
        </View>
    )}

const styles = StyleSheet.create ({
  Head:{
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:"5%",
    backgroundColor:Colors.white,
    height:"9%",
    paddingTop:"5%",
    alignItems:"center",       
  },
  airtime:{
    ...FONTS.body3,
    color: Colors.black,
    fontWeight:"600",
    textAlign:"center"
  },
  Input:{
    flex:1,
    backgroundColor:"white",
    paddingVertical:"3%",
    paddingHorizontal:'4%',
    borderBottomLeftRadius:"5%",
    borderBottomRightRadius:"5%",
    marginBottom:"4%"
  },
  holder:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  icon:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-between",
    marginBottom:2
  },
  iconholder:{
    width:35,
    height:35,
    borderRadius:30,
    backgroundColor:"#df0404",
    alignItems:"center",
    justifyContent:"center"
  },
        Topup:{
         flex:1,
         backgroundColor:"white",
         marginHorizontal:"4%",
         paddingHorizontal:"4%",
         paddingVertical:"4%",
         borderRadius:"3%"
        },
  pay:{
    backgroundColor:Colors.gray,
    width:"32%",
    height:80,
    borderRadius:8,
    justifyContent:"center",
    paddingTop:"3%",
  },
       Five:{
         marginVertical:"1%",
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between"
       },
       Amount:{
        textAlign:"center",
         lineHeight:25,
         opacity:0.5,
         fontSize:12 
       },
       Up:{
         textAlign:"center",
         fontWeight:"500",
         fontSize:15
       },
       row:{
         flexDirection:"row",
         alignItems:"center",
         gap:10
       }
    });
>>>>>>> Stashed changes
