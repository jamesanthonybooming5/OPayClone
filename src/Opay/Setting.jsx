import { View,Text,FlatList, StyleSheet,TouchableOpacity,ScrollView,Modal} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useNavigation } from "@react-navigation/native";
import { FONTS,Colors } from "../constants/Theme";
import {MaterialCommunityIcons,Feather,SimpleLineIcons,MaterialIcons,Octicons,Ionicons,} from "@expo/vector-icons"
import { useState } from "react";

const itemBar=[
{id:"1",
    name:'Login Settings',icon:<Feather name="key" size={22} color="black" />,
screen:"LoginSet",
},
{id:"2",
    name:'Payment settings',icon:<SimpleLineIcons name="lock" size={22} color="black" />,
screen:'PaymentSet',
},
{id:"3",
    name:'Saving Settings',icon:<Feather name="hard-drive" size={22} color="black"/>,
screen:"SavingSet",
}]
const itemBur=[
{id:"1",
    name:"Homepage Settings", icon:<Feather name="home" size={22} color="black" />,
},
{id:"2",
    name:"Secuity Questions",icon:<Octicons name="shield" size={22} color="black" />,
},
{id:"3",
    name:"SMS Alert Subscription",icon:<MaterialIcons name="chat" size={22} color="black" />,
screen:'SMS',
},
{id:"4",
    name:"Access to Clipboard",icon:<MaterialCommunityIcons name="clipboard-text-multiple-outline" size={22} color="black" />,
screen:"Access",
},
{id:"5",
    name:"Themes", icon:<MaterialIcons name="brightness-6" size={22} color="black" />,
}
]

export default function Setting () {
    const navigation = useNavigation();
    const  [logoutModalVisible, setLogoutModalVisible] = useState(false);
    
    return(
        <View style={general.container}>
            <CustomHeading title={"Settings"}/>
            <ScrollView>  
                <View style={styles.Flat}>
                    <FlatList 
                     scrollEnabled={false}
                     data={itemBar}
                     renderItem={({item}) =>{
                     return(
                     <TouchableOpacity 
                      activeOpacity={0.9} 
                       style={styles.holder} 
                        onPress={() => navigation.navigate(item.screen)}>
                        <View style={styles.row}>
                            <Text >{item.icon}</Text>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                     </TouchableOpacity>
                    )}}/>
                </View>
                    
                <View style={styles.Flat}>
                    <FlatList 
                     scrollEnabled={false}
                     data={itemBur}
                     renderItem={({item,}) =>{
                     return(
                     <TouchableOpacity activeOpacity={0.9}
                     style={styles.holder} 
                     onPress={() => navigation.navigate(item.screen)}>
                     <View style={styles.row}>
                        <Text >{item.icon}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                     </View>
                     <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                     </TouchableOpacity>
                    )}}/>
                </View>

              <TouchableOpacity 
                    activeOpacity={0.9} 
                    style={styles.Centre}>
                    <View style={styles.row}>
                        <Octicons name="shield-check" size={22} color="black" />
                        <Text style={styles.name}>Security Center</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
              </TouchableOpacity>

              <TouchableOpacity 
                 activeOpacity={0.9} 
                 onPress={() => navigation.navigate("Close")}
                 style={styles.Centre}>
                 <View style={styles.row}>
                    <Ionicons name="power-sharp" size={22} color="black" />
                    <Text style={styles.name}>Close Account</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
              </TouchableOpacity>

               <TouchableOpacity 
                 activeOpacity={0.9} 
                 style={styles.Centre}
                 onPress={() => navigation.navigate("About")}>
                    <View style={styles.row}>
                        <Feather name="alert-circle" size={22} color="black" />
                        <Text style={styles.name}>About</Text>
                    </View>
                    <View style={styles.about}>
                        <Text>Version 7.23.1</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                    </View>
              </TouchableOpacity>

              <TouchableOpacity 
                activeOpacity={0.9}
                onPress={()=> setLogoutModalVisible(true)}
                 style={styles.footer}>
                <Text style={styles.name}>Sign Out</Text>
              </TouchableOpacity>
              
              <Modal 
                transparent={true}
                visible={logoutModalVisible}
                animationType="fade"
                onRequestClose={() => setLogoutModalVisible(false)}>
                    <View style={styles.modaloverlay}> 
                        <View style={styles.modalcontent}>
                         <Text style={styles.modalbody}>Are you sure you want to sign out of OPay? </Text>
                         <View style={styles.modalbutton}>
                                <TouchableOpacity
                                    activeOpacity={0.9} 
                                    style={styles.nobutton}
                                    onPress={() => setLogoutModalVisible(false)}>
                                    <Text style={styles.notext}>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.yesbutton}
                                    onPress={()=> {setLogoutModalVisible(false); navigation.reset({index:0, routes:[{name:"LoginPage"}]})}}>
                                    <Text style={styles.yestext}>Yes</Text>
                            </TouchableOpacity>
                         </View>
                        </View>
                    </View>
                </Modal>
          </ScrollView>

        </View>
    )};

    const styles = StyleSheet.create ({
    Flat:{
        flexDirection:"row",
        paddingHorizontal:"4%",
        backgroundColor:"white",
        borderRadius:10,
        marginVertical:"3%",
        marginHorizontal:"5%",
    },
    
    holder:{
        paddingVertical:"5%",
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
    },
    row:{
       flexDirection:"row",
        alignItems:"center",
        gap:"5%",
        flex:1
    },
    name:{
        ...FONTS.body7,
        color:"black",
    },
    Centre:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:"5%",
        paddingHorizontal:"4%",
        borderRadius:10,
        backgroundColor:"white",
        paddingVertical:"3%",
        marginVertical:"3%",
    },
    about:{
        alignSelf:"flex-end",
        flexDirection:"row",
        alignItems:"center"
    },
    footer:{  
        marginHorizontal:"5%",
        paddingHorizontal:"4%",
        borderRadius:10,
        flex:1,
        backgroundColor:"white",
        paddingVertical:"4%",
        marginTop:"2%",
        marginBottom:"10%",
        justifyContent:"center",
        alignItems:"center"
    },
    modaloverlay:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0, 0, 0, 0.45)"
    },
    modalcontent:{
        width:"90%",
        backgroundColor:"white",
        borderRadius:12,
        padding:20,
        alignItems:"center"
    },
    modalbody:{
        fontSize:13,
        color:Colors.fadeblack,
        textAlign:"center",
        marginBottom:20
    },
    modalbutton:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
    },
    nobutton:{
        flex:1,
        paddingVertical:"5%",
        borderRadius:"17%",
        alignItems:"center",
        marginHorizontal:"2%",
        backgroundColor:Colors.green9,
    },
    notext:{
        fontSize:15,
        color:Colors.green14
    },
    yesbutton:{
        flex:1,
        paddingVertical:"5%",
        borderRadius:"17%",
        alignItems:"center",
        marginHorizontal:"2",
        backgroundColor:Colors.green7
    },
    yestext:{
        fontSize:15,
        color:"white"
    }
});