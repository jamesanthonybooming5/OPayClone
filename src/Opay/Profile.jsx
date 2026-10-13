import {Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { AntDesign, Entypo,EvilIcons,Feather,Octicons,Ionicons,MaterialCommunityIcons,MaterialIcons} from "@expo/vector-icons";
import { Colors, FONTS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";

export default function Profile ({imageUri,onCameraPress}) {
    const navigation = useNavigation ();

    const itemBar=[
        {id:"1",
            name:"Full Name", subname:"EDWARD SMITH MAGUIRE"
        },
        {id:"2",
            name:"Mobile Number", subname:"+2348000000000", arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
            screen:""
        },
        {id:"3",
            name:"Nickname", subname:"Enter Nickname", arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
            screen:""
        },
        {id:"4",
            name:"Gender", subname:"Male"
        },
        {id:"5",
            name:"Date of birth", subname:"**-**-10"
        },
        {id:"6",
            name:"Email", subname:"Enter Email", arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
            screen:""
        },
        {id:"7",
            name:"Address", screen:"", arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
        }
    ]

    return(
        <View style={general.container}>
            <CustomHeading title={"My Profile"}/>
            <ScrollView 
             showsVerticalScrollIndicator={false}
             style={{paddingHorizontal:"4%"}}>

               <View style={styles.head}>
                    <View>
                        <View style={{position:"relative"}}>
                            <Entypo name="mail" size={35} color={Colors.blue} />
                        </View>
                        <View style={styles.bell}>
                            <Octicons name="bell-fill" size={17} color="orange" />
                        </View>
                    </View>
                    <View style={{position:"relative"}}>
                        <Text  style={FONTS.body3a}>Take Control, Stay Informed</Text>
                        <Text style={styles.email}>Add your email to get the latest from OPay</Text>
                    </View>
               </View>

               <View style={styles.containerholder}>
                    <View style={styles.avatarholder}>
                        {imageUri ? (
                            <Image source={{uri: imageUri}}
                                style={styles.avatar}
                            />
                        ) : (
                            <Ionicons name="person" size={40} color={Colors.lightGray} 
                                style={styles.defaulticon}
                            />
                        )}
                        <TouchableOpacity 
                         style={styles.overlay}
                         activeOpacity={0.9}
                         onPress={onCameraPress}>
                            <Ionicons name="camera" size={20} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign:"center"}}>EDWARD</Text>

                    <View style={styles.upgradeholder}>
                        <Text style={styles.opaytext}>OPay Account Number</Text>
                        <View style={styles.copy}>
                            <Text style={styles.account}>8012345678</Text>
                            <TouchableOpacity>
                                <MaterialCommunityIcons name="content-copy" size={15} color={Colors.gray4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tierholder}>
                        <Text style={styles.opaytext}>Account Tier</Text>
                        <View style={styles.copy}>
                            <View style={styles.tier1}>
                                <MaterialCommunityIcons name="medal" size={23} color="#b5973bdc" />
                                <Text style={styles.tiertext}>Tier 1</Text>
                            </View>
                            <TouchableOpacity 
                              activeOpacity={0.9}
                              onPress={()=> navigation.navigate("Account")}
                              style={styles.upgrade}>
                                <Text style={{color:Colors.tomato}}>Upgrade</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.tomato} />
                            </TouchableOpacity>
                        </View>
                    </View>
               </View>

               <View style={styles.flat}>
                <FlatList 
                  scrollEnabled={false}
                  data={itemBar}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> {
                    return(
                        <TouchableOpacity 
                          style={styles.holder}
                          activeOpacity={0.9}
                          onPress={()=> navigation.navigate(item.screen)}>
                            <Text style={styles.opaytext}>{item.name}</Text>
                            <View style={styles.arrow}>
                                <Text style={styles.account}>{item.subname}</Text>
                                {item.arrow ? <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />: null}
                            </View>
                        </TouchableOpacity>
                    )
                  }}/>
               </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create ({
    head:{
        flexDirection:"row",
        alignItems:"center",
        gap:"5%",
        borderRadius:10,
        paddingHorizontal:"4%",
        backgroundColor:"white",
        paddingVertical:"7%",
        marginTop:"5%"
    },
    bell:{
        position:"absolute",
        left:20,
        top:5
    },
    email:{
        fontSize:13,
        fontWeight:"300"
    },
    containerholder:{
        backgroundColor:"white",
        borderRadius:10,
        paddingVertical:"4%",
        paddingHorizontal:"4%",
        marginTop:"5%",
    },
    avatarholder:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:Colors.gray11,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden",
        position:"relative",
        alignSelf:"center"
    },
    avatar:{
        width:"100%",
        height:"100%"
    },
    defaulticon:{
        marginTop:8
    },
    overlay:{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"40%",
        backgroundColor:"rgba(0,0,0,0.45)",
        alignItems:"center",
        justifyContent:'center'
    },
    upgradeholder:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:"10%"
    },
    copy:{
        flexDirection:'row',
        alignItems:"center",
        gap:3
    },
    opaytext:{
        fontSize:16,
        fontWeight:"300"
    },
    account:{
        color:Colors.gray4,
        fontSize:15,
        fontWeight:"300"
    },
    tierholder:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    tier1:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff8df",
        borderBottomRightRadius:10,
        borderTopRightRadius:10
    },
    tiertext:{
        fontSize:13,
        color:"#846300"
    },
    upgrade:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:8,
        backgroundColor:Colors.pink,
        borderRadius:10,
        paddingVertical:1,
        justifyContent:"center"
    },
    flat:{
        backgroundColor:"white",
        paddingHorizontal:"4%",
        borderRadius:10,
        marginVertical:"5%",
    },
    holder:{
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
    },
    arrow:{
        flexDirection:"row",
        alignItems:"center",
    }
});