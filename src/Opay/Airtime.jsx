import {View,Text,StyleSheet,TouchableOpacity, ScrollView,TextInput,FlatList} from "react-native";
import general from "../constants/General";
import { StatusBar } from "react-native";
import {Colors,FONTS} from "../constants/Theme";
import {MaterialIcons,Entypo,FontAwesome6,Ionicons} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const itemBar=[
   {id:"1",
    name:"#50",pay:"Pay #50"},
   {id:"2",
    name:"#100",pay:"Pay #100"},
   {id:"3",
    name:"#200",pay:"Pay #200"},
   {id:"4",
    name:"#500",pay:"Pay #500"},
   {id:"5",
    name:"#1,000",pay:"Pay #1,000"},
   {id:"6",
    name:"#2,000",pay:"Pay #2,000"},
  ]

export default function Airtime () {
  const [text,setText] = useState (null);
  const [numb,setNumb] = useState ("");
  const navigation=useNavigation('');

  const isButttonActive = Number(numb) >= 50;

  return(
    <View style={general.container}>
      <View style={styles.Head}>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={{zIndex:10}}>
          <MaterialIcons name="arrow-back-ios-new" size={20} color={Colors.black}/> 
        </TouchableOpacity> 
        <Text style={styles.airtime}>Airtime</Text>
        <Text style={{color:Colors.green4}} onPress={()=> navigation.navigate()}>History</Text>
     </View>
          
      <ScrollView>
        <View style={ styles.container}>
          <View style={styles.holder}>
              <View style={styles.row}>
              <View style={styles.iconholder}>
                <Entypo name="cloud" size={15} color="white" />
                <Text style={styles.icontext}>airtel</Text>
              </View>
              <FontAwesome6 name="caret-down" size={15} color={Colors.gray4}/>
            </View>
            <TextInput 
              placeholder="0XX XXX XXXX"
              value={text}
              onChangeText={setText}
              keyboardType="numeric"
              style={styles.inputtext}/>

              <View style={styles.close}>
                {text && (
                <TouchableOpacity
                activeOpacity={0.9} 
                onPress={()=>setText("")}>
                <Ionicons name="close-circle" size={27} color={Colors.lightGray} />
                </TouchableOpacity>
              )}
              <TouchableOpacity activeOpacity={0.9}><Ionicons name="person-circle-sharp" size={35} color="#04b471" /></TouchableOpacity>
              </View>
         </View>
       </View>
      
        <View style={styles.Topup}>
                <Text style={styles.top}>Top up</Text>
                  <FlatList
                  numColumns={3}
                   scrollEnabled={false}
                   data={itemBar}
                   keyExtractor={(item) => item.id}
                   renderItem={({item})=> {
                    return(
                      <TouchableOpacity style={styles.textcontainer}>
                       <View style={styles.textholder}>
                         <Text style={styles.name}>{item.name}</Text>
                         <Text style={styles.pay}>{item.pay}</Text>
                       </View>
                      </TouchableOpacity>
                    )
                   }}
                  />

                 <View style={styles.Five}>
                     <View>
                        <View style={styles.num}>
                        <FontAwesome6 name="naira-sign" size={17} color="black"/>
                         <TextInput 
                          placeholder="50 - 50,000"
                          value={numb}
                          onChangeText={setNumb}
                          keyboardType="numeric"
                          returnKeyType="done"
                          style={[ styles.input, Number(numb) >= 1? styles.bold:styles.light]}/>
                      </View>
                   </View>
                   <TouchableOpacity
                    disabled={!isButttonActive}
                    onPress={() => setNumb("")}
                    activeOpacity={0.9} 
                    style={[styles.button, isButttonActive? styles.activebutton:styles.inactivebutton]}>
                    <Text style={styles.last}>Pay {numb}</Text>
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
    fontWeight:"600",
    textAlign:"center"
  },
  container:{
    backgroundColor:"white",
    paddingVertical:"3%",
    paddingHorizontal:'4%',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginBottom:"5%",
  },
  holder:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor:Colors.gray,
    paddingBottom:"4%",
    justifyContent:"space-between"
  },
  icon:{
    flexDirection:"row",
    alignItems:'center',
    marginBottom:2
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    borderRightWidth:2,
    paddingRight:"4%",
    borderColor:Colors.gray
  },
  iconholder:{
    width:35,
    height:35,
    borderRadius:30,
    backgroundColor:"#df0404",
    alignItems:"center",
    justifyContent:"center",

  },
  icontext:{
    fontSize:8,
    color:"white"
  },
  inputtext:{
    fontSize:19,
    fontWeight:"500",
    marginLeft:"3%",
    maxWidth:"70%",
    flex:1
  },
  close:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  Topup:{
    flex:1,
    backgroundColor:"white",
    marginHorizontal:"4%",
    paddingHorizontal:"4%",
    borderRadius:"3%",
  },
  top:{
    fontWeight:"500",
    fontSize:16,
    marginVertical:'5%'
  },
  textcontainer:{
    width:"25%",
    alignItems:"center",
    marginVertical:"1%",
    marginHorizontal:"4%",
  },
  textholder:{
   width:100,
    height:90,
    borderRadius:10,
    backgroundColor:Colors.gray,
    alignItems:"center",
    justifyContent:"center",
  },
  name:{
    fontWeight:"500",
    textAlign:"center",
    lineHeight:30,
    fontSize:15
  },
  pay:{
    fontSize:12,
    color:Colors.offblack
  },
  Five:{
    marginVertical:"1%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical:"4%", 
  },
  num:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    borderBottomWidth:1,
    borderColor:Colors.gray,
    paddingBottom:"4%"
  },
  input:{
    fontSize:16,
    width:"70%",
    margin:5
  },
    bold:{
      fontWeight:"500",
      color:"black",
    },
    light:{
      fontWeight:"300",
      color:Colors.gray4
    },
    button:{
      height:30,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      flex:1,
    },
  activebutton:{
    backgroundColor:Colors.green7,
   
  },
  inactivebutton:{
    backgroundColor:Colors.green6
  },
  last:{
    textAlign:"center",
    color:"white"
  },
});
