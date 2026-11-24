import {View,Text,StyleSheet,ScrollView,FlatList} from "react-native"
import general from "../constants/General";
import { Colors,FONTS } from '../constants/Theme';
import { StatusBar } from 'react-native';
import {MaterialIcons,FontAwesome6,Feather} from '@expo/vector-icons';

const itemBar=[
    {id:"1",
        name:"Access Bank", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="white" />
    },
    {id:"2",
        name:"United Bank Of Africa", percent:"99%",icon:<FontAwesome6 name="user-large" size={20} color="blue" />
    },
    {id:"3",
        name:"MONIE POINT", percent:"99%",icon:<FontAwesome6 name="user-large" size={20} color="green" />
    },
    {id:"4",
        name:"PalmPay", percent:"99%",icon:<FontAwesome6 name="user-large" size={20} color="red" />
    },
    {id:"5",
        name:"First Bank Of Nigeria", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="darkolivegreen" />
    },
    {id:"6",
        name:"Guaranty Trust Bank", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="orange" />
    },
    {id:"7",
        name:"Wema Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="purple" />
    },
    {id:"8",
        name:"Zenith Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="sandybrown" />
    },
    {id:"9",
        name:"KeyStone Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="black" />
    },
    {id:"10",
        name:"Stanbic Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="tomato" />
    },
    {id:"11",
        name:"Vdf Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="sienna" />
    },
    {id:"12",
        name:"Edward Bank PLC", percent:"100%",icon:<FontAwesome6 name="user-large" size={20} color="brown" />
    },
]
export default function Transfer () {
    return(
        <View style={general.container}>
            <View style={styles.Head}> 
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />  
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black" onPress={() => navigation.goBack('')} style={{zIndex:10}}/>
                <Text style={styles.headtitle}>Transfer Success Rate</Text>
                <View style={styles.refresh}>
                    <Feather name="refresh-ccw" size={15} color={Colors.green15} />
                    <Text style={FONTS.h4}>Re...sh</Text>
                </View>
            </View>

            <ScrollView 
                style={{paddingHorizontal:"4%"}}
                showsVerticalScrollIndicator={false}>
                    <Text style={styles.text}>Check the real-time transfer success rate of the recipient 
                        bank to avoid transfer failures or delays.</Text>

                    <View style={styles.holder}>
                        <Text style={styles.holdertext}>Banks with Stable Network</Text>

                        <FlatList
                            scrollEnabled={false}
                            data={itemBar}
                            keyExtractor={(item)=> item.id}
                            renderItem={({item})=> (
                                <View style={styles.container}>
                                   <View style={styles.view}>
                                     <View style={styles.iconholder}><Text>{item.icon}</Text></View>
                                     <Text>{item.name}</Text>
                                   </View>
                                   <Text>{item.percent}</Text>
                                </View>
                            )}
                        />
                    </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create ({
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
        fontWeight:'600',
        color:"black",
    },
    refresh:{
        flexDirection:"row",
        alignItems:"center"
    },
    text:{
        fontSize:12.9,
        paddingVertical:"5%"
    },
    holder:{
        borderRadius:10,
        backgroundColor:"white",
        paddingHorizontal:"4%",
    },
    holdertext:{
        fontSize:16,
        paddingVertical:"4%"
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:Colors.grey2,
        paddingVertical:"5%"
    },
    view:{
        alignItems:"center",
        flexDirection:"row",
        gap:15
    },
    iconholder:{
        borderRadius:20,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.grey2
    }
});