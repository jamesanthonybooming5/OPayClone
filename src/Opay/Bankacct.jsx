import {View,Text,StyleSheet,TextInput,TouchableOpacity,ScrollView} from  "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import general from "../constants/General";
import { StatusBar } from "react-native";
import { MaterialIcons,FontAwesome6,Ionicons } from "@expo/vector-icons";
import { Colors,FONTS,SCREEN_WIDTH } from "../constants/Theme";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function Bankacct () {
    const route = useRoute();
    const [numb,setNumb] = useState ("");
    const [text,setText] = useState ("");
    const [isTrue, setIsTrue] = useState(false);
    const navigation = useNavigation ();

    
    const isButttonActive = Number(numb) >= 10;

    const {beneficiaryName, beneficiaryAccount,beneficiaryIcon,beneficiaryBank} = route.params || {};
    const changeamount = (val) => {
        const cleanVal = val.replace(/[^0-9.]/g, '');
        setNumb(cleanVal);
    };

    const amounts = [500, 1000, 2000, 5000, 9000];


    return(
        <View style={general.container}>
            <View style={styles.Head}> 
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />  
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black" onPress={() => navigation.goBack('')} style={{zIndex:10}}/>
                <Text style={styles.headtitle}>Transfer To Bank Account</Text>
                <Text style={FONTS.h4}>Records</Text>
            </View>

            <View style={{paddingHorizontal:"4%"}}>

                <View style={styles.holder}>
                    <View style={styles.iconholder}>{beneficiaryIcon}</View>
                    <View>
                     <Text style={styles.name}>{beneficiaryName}</Text>
                     <View style={{flexDirection:"row",gap:5}}> 
                        <Text style={styles.subname}>{beneficiaryAccount}</Text>
                        <Text style={styles.subname}>{beneficiaryBank}</Text>
                     </View>
                   </View>
                </View>

                <View style={styles.container}>
                    <Text>Amount</Text>
                        <View style={[styles.house,{borderColor: isTrue? Colors.green : Colors.grey3}]}>
                            <View style={styles.wrapper}>
                                <FontAwesome6 name="naira-sign" size={20} color="black"/>
                                <TextInput 
                                    placeholder="10.00 - 5,000,000.00"
                                    value={numb}
                                    onChangeText={changeamount}
                                    keyboardType="numeric"
                                    returnKeyType="done"
                                    onFocus={()=>setIsTrue(true)}
                                    onBlur={()=> setIsTrue(false)}
                                    style={styles.input}
                                />
                            </View>
                            {numb && (
                                <TouchableOpacity
                                    activeOpacity={0.9} 
                                    onPress={()=>setNumb("")}>
                                    <Ionicons name="close-circle" size={24} color={Colors.lightGray}/>
                                </TouchableOpacity>
                            )}
                        </View>

                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.tabcon}>
                            {amounts.map((amount)=>(
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    key={amount}
                                    style={styles.chip}
                                    onPress={()=> setNumb(amount.toString())}>
                                    <FontAwesome6 name="naira-sign" size={10} color="black"/>
                                    <Text style={{fontSize:13,fontWeight:"300"}}>{amount.toLocaleString()}.00</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                <View style={styles.remark}>
                    <Text style={styles.header}>Remark</Text>
                    <View style={styles.nums}>
                         <TextInput 
                          placeholder="What's this for? (Optional)"
                          value={text}
                          onChangeText={setText}
                          keyboardType="default"
                          returnKeyType="return"
                          style={styles.inputs}/>
                        
                        {text && (
                        <TouchableOpacity
                         activeOpacity={0.9} 
                         onPress={()=>setText("")}>
                            <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                        </TouchableOpacity>
                        )}
                    </View>
                </View>

                <CustomButton
                 title={"Confirm"}
                 disabled={!isButttonActive}
                 buttonStyle={styles.button}
                 textStyle={general.buttonText}
                 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    Head:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:"5%",
        backgroundColor:'white',
        height:"8%",
        paddingTop:"9%",
        alignItems:"center",
    },
    headtitle:{
        fontSize:17,
        fontWeight:'600',
        color:"black",
    },
    holder:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        paddingVertical:"5%"
    },
    iconholder:{
        borderRadius:30,
        height:50,
        width:50,
        backgroundColor:Colors.grey3,
        alignItems:"center",
        justifyContent:"center"
    },
    name:{
        fontWeight:'500',
        fontSize:16,
    },subname:{
        color:Colors.offblack,
        fontSize:16,
        marginTop:5
    },
    container:{
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:"4%",
    },
    header:{
        paddingTop:"6%",
        paddingBottom:"2%"
    },
    nums:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:Colors.grey2,
        paddingVertical:"6%",
        paddingRight:"6%"
    },
    input:{
        fontSize:20,
        width:"80%",
        marginLeft:2,
  },
    remark:{
        borderRadius:10,
        backgroundColor:'white',
        paddingHorizontal:"4%",
        marginVertical:"4%",
        paddingBottom:"5%"
    },
    inputs:{
        width:"100%",
    },
    button:{
        width:"90%",
        alignSelf:"center",
        backgroundColor:Colors.green4,
        marginTop:"20%"
    },
    house:{
        flexDirection: "row",
        alignItems: "center",
        height: SCREEN_WIDTH * 0.12,
        justifyContent:"space-between",
        marginVertical:20,
        paddingBottom:"4%",
        borderBottomWidth:1
    },
    wrapper:{
        flexDirection:"row",
        alignItems:"center",
    },
    tabcon:{
    flexDirection:"row",
    paddingBottom:"5%",
    overflow:'hidden',
   },
   chip:{
    flexDirection:"row",
    alignItems:"center",
    borderWidth:1,
    borderColor:Colors.grey3,
    borderRadius:30,
    paddingHorizontal:"4%",
    paddingVertical:"2%",
    marginRight:8
   }
})