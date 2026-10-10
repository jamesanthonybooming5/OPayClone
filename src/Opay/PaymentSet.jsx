import {View,Text,StyleSheet, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import general from '../constants/General';
import CustomHeading from '../components/CustomHeading';
import { useNavigation, } from '@react-navigation/native';
import { useState} from 'react';
import {MaterialIcons,Fontisto} from "@expo/vector-icons";
import { Colors } from '../constants/Theme';

const itemBar=[
    {id:"1",name:"Change Payment PIN",arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
screen:""},
    {id:"2",name:"Forgot Payment PIN",arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
screen:""},
]
export default function PaymentSet () {
    const navigation = useNavigation();
    const [isToggleOn,setIsToggleOn]= useState(false);

    return(
        <View style={general.container}>
            <CustomHeading title={"Payment Settings"}/>
            <ScrollView style={{paddingHorizontal:"4%"}}>

                <Text style={{fontSize:16, marginVertical:"4%"}}>Payment PIN</Text>
                <View style={styles.Pass}>
                    <FlatList
                    scrollEnabled={false}
                    data={itemBar}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item,})=>{
                        return(
                         <TouchableOpacity 
                         activeOpacity={0.9} 
                         onPress={()=>navigation.navigate()}
                         style={styles.flat}>
                            <Text>{item.name}</Text>  
                            <Text>{item.arrow}</Text>
                         </TouchableOpacity>
                        )
                    }}/>
                </View>

                <Text style={{fontSize:16,marginVertical:"4%"}}>Biometrics</Text>
                <View style={styles.Pattern2}>
                    <Text>Pay with Face ID</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>setIsToggleOn(!isToggleOn)}><Fontisto name={isToggleOn? "toggle-on":"toggle-off"} size={35} color={isToggleOn? "#04b471":"#ccc"} /></TouchableOpacity>
                </View>
                <Text style={{fontSize:16,marginVertical:"4%"}}>Card Payment</Text>
                <View style={styles.Pass}>
                    <TouchableOpacity activeOpacity={0.9} style={styles.Pattern} onPress={()=>navigation.navigate()}>
                    <Text>Manage Virtual Card PIN</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.Pattern} onPress={()=>navigation.navigate()}>
                    <Text>Manage Physical Card PIN</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                </TouchableOpacity>
                </View>
                
                
            </ScrollView>
        </View>
    )};

const styles = StyleSheet.create ({
    Pass:{
        flex:1,
        backgroundColor:"white",
        width:"100%",
        borderRadius:"4%",
        paddingHorizontal:"4%",
    },
    flat:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        marginVertical:"4%",
    },
    Pattern:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:"4%",
    },
    Pattern2:{
        flex:1,
        width:"100%",
        borderRadius:"4%",
        paddingHorizontal:"4%",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:"4%",
    }
})