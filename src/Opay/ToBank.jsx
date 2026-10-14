import {View,Text,StyleSheet, ScrollView, TextInput,TouchableOpacity} from "react-native";
import general from '../constants/General';
import {MaterialIcons,Ionicons,FontAwesome6,MaterialCommunityIcons, FontAwesome, AntDesign, Feather} from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { Colors,FONTS } from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SCREEN_WIDTH } from '../constants/Theme';
import CustomButton from "../components/CustomButton";

export default function ToBank () {
    const [text,setText] = useState ("");
    const navigation=useNavigation();
    const [isFocused, setIsFocused] = useState(false); 
    const[activeTab, setActiveTab] = useState ("Recents");

    const itemBar=[
    {id:"1",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOPQRS',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'800 123 4567'},
    {id:"2",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOP',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'801 234 5678'},
    {id:"3",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',},
    {id:"4",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',},
    
    ]

    const filteredData = itemBar.filter(item => item.type === activeTab);

    return(
        <View style={general.container}>
            <View style={styles.Head}> 
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />  
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black" onPress={() => navigation.goBack('')} style={{zIndex:10}}/>
                <Text style={styles.headtitle}>Transfer To Bank Account</Text>
                <Text style={FONTS.h4} onPress={()=>navigation.navigate('')}>History</Text>
            </View>

            <ScrollView
             showsVerticalScrollIndicator={false}
             style={{marginHorizontal:"4%"}}>

                <View style={styles.Free}>
                    <View style={styles.freecontainer}>
                    <FontAwesome6 name="naira-sign" size={10} color="white" />
                    </View>
                    <Text style={styles.zero}>Free transfers for the day: 3</Text>
                </View>

                <View style={styles.inputholder}>
                    <Text style={general.label}>Recipient Account</Text>
                    <View style={[styles.inputwrapper, {borderColor:isFocused? Colors.green7 : Colors.grey2,
                        backgroundColor:"white"}]}>
                        <TextInput 
                            value={text}
                            onChangeText={setText}
                            placeholder="Enter 10 digits Account Number"
                            keyboardType="numbers-and-punctuation"
                            returnKeyType="done"
                            onFocus={()=>setIsFocused(true)}
                            onBlur={()=> setIsFocused(false)}
                            style={styles.inputtext}
                        />
                       {text && (
                            <TouchableOpacity
                                activeOpacity={0.9} 
                                onPress={()=>setText("")}>
                                <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <CustomButton title="Next"
                        disabled={!text} 
                        onPress={()=> navigation.navigate("")}
                        buttonStyle={[styles.button, {backgroundColor: text? Colors.green15: Colors.green4} ]}
                        textStyle={general.buttonText}
                    />
                </View>

                <View style={styles.monitorholder}>
                    <View style={styles.monitoricon}>
                        <MaterialIcons name="monitor" size={20} color={Colors.green15}/>
                    </View>
                    <Text>Bank Transfer Success Rate Monitor</Text>
                    <MaterialIcons name="arrow-forward-ios" size={20} color={Colors.grey5}/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create ({
    Head:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:"5%",
        backgroundColor:Colors.white,
        height:"8%",
        paddingTop:"9%",
        alignItems:"center",
    },
    headtitle:{
        fontSize:17,
        fontWeight:'400',
        color:"black",
    },
    freecontainer:{
        width:20,
        height:20,
        borderRadius:20,
        borderWidth:2,
        backgroundColor:Colors.purple,
        borderColor:"#bb9beedc",
        alignItems:'center',
        justifyContent:"center"
    },
    zero:{
        ...FONTS.body4,
        color:Colors.purple
    },
    Free:{
        width:"100%",
        flex:1,
        borderRadius:"3%",
        backgroundColor:Colors.lightpurple,
        paddingVertical:'3%',
        flexDirection:'row',
        paddingHorizontal:"4%",
        gap:"2%",
        marginTop:"3%",
    },
    inputholder:{
        width:"100%",
        borderRadius:10,
        backgroundColor:'#fffefed5',
        paddingHorizontal:"4%",
        marginTop:"4%",
        paddingVertical:"4%",
    },
    inputwrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        marginBottom:"7%",
        borderBottomWidth:1,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // position:"relative",
    },
     inputtext:{
        fontSize:15,
        width:"80%",
        marginLeft:"2%",
        fontWeight:"300"
    },
    button:{
        width:"90%",
        alignSelf:"center"
    },
    monitorholder:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:"4%",
        paddingVertical:"4%",
        borderRadius:10,
        marginTop:"4%"
    }
});