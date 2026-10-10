import {View,Text,StyleSheet, ScrollView,FlatList, TouchableOpacity } from 'react-native';
import general from '../constants/General';
import CustomHeading from '../components/CustomHeading';
import { useNavigation, } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import {MaterialIcons,Fontisto} from "@expo/vector-icons";
import { Colors } from '../constants/Theme';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const itemBar=[
    {name:"Change Password",arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
screen:""},
    {name:"Forgot Password",arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
screen:""},
    {name:'Auto-logout Setting',arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
screen:"Auto"}
]
export default function LoginSet () {
    const navigation = useNavigation();
    const [isToggleOn,setIsToggleOn]= useState(false);

    // const STORAGE_KEY = '@toggle_state_key';
    // useEffect(()=> {loadSavedState();},[]);
    // const loadSavedState = async ()=> {try{const savedValue = await AsyncStorage.getItem(STORAGE_KEY);
    //     if (savedValue !== null) {setIsToggleOn(JSON.parse(savedValue));}
    // } catch (error){console.log("Failed to load state",error);}};
    // const handleToggle = async () => {
    //     const newState= !isToggleOn; setIsToggleOn(newState); 
    //     try{AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(newState));} catch(error) {console.log("Failed to save state",error);}
    // };

    return(
        <View style={general.container}>
            <CustomHeading title={"Login Settings"}/>
            <ScrollView style={{paddingHorizontal:"4%",paddingVertical:"5%"}}>
                <Text style={{fontSize:16}}>Password</Text>
                <View style={styles.Pass}>
                    <FlatList
                    scrollEnabled={false}
                    data={itemBar}
                    renderItem={({item,})=>{
                        return(
                         <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate(item.screen)} style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:'center',
                            marginVertical:"4%"
                         }}>
                            <Text>{item.name}</Text>  
                            <Text>{item.arrow}</Text>
                         </TouchableOpacity>
                        )
                    }}/>
                </View>

                <Text style={{fontSize:16,marginTop:"1%"}}>Pattern</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.Pattern} onPress={()=>navigation.navigate()}>
                    <Text>Set Up Pattern</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                </TouchableOpacity>
                <Text style={{fontSize:16,marginTop:"1%"}}>Biometrics</Text>
                <View style={styles.Pattern2}>
                    <Text>Log in with Face ID</Text>
                    <TouchableOpacity activeOpacity={0.9} onPress={()=>setIsToggleOn(!isToggleOn)}><Fontisto name={isToggleOn? "toggle-on":"toggle-off"} size={35} color={isToggleOn? "#04b471":"#ccc"} /></TouchableOpacity>
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
        marginVertical:"4%",
    },
    Pattern:{
        flex:1,
        width:"100%",
        borderRadius:"4%",
        paddingHorizontal:"4%",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:"4%",
        marginVertical:"4%"
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
        marginVertical:"4%"
    }
    })