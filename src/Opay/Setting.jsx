import { View,Text,FlatList, StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useNavigation } from "@react-navigation/native";
import { FONTS,Colors } from "../constants/Theme";
import {MaterialCommunityIcons,Feather,SimpleLineIcons,MaterialIcons,Octicons,Ionicons,} from "@expo/vector-icons"

const itemBar=[
{name:'Login Settings',Icon:<Feather name="key" size={22} color="black" />,
screen:"LoginSet",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4}/>,
},
{name:'Payment settings',Icon:<SimpleLineIcons name="lock" size={22} color="black" />,
screen:'PaymentSet',
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
},
{name:'Saving Settings',Icon:<Feather name="hard-drive" size={22} color="black"/>,
screen:"SavingSet",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />,
}]
const itemBur=[
{same:"Homepage Settings", acon:<Feather name="home" size={22} color="black" />,
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
},
{same:"Secuity Questions",acon:<Octicons name="shield" size={22} color="black" />,
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
},
{same:"SMS Alert Subscription",acon:<MaterialIcons name="chat" size={22} color="black" />,
screen:'SMS',
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
},
{same:"Access to Clipboard",acon:<MaterialCommunityIcons name="clipboard-text-multiple-outline" size={22} color="black" />,
screen:"Access",
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
},
{same:"Themes", acon:<MaterialIcons name="brightness-6" size={22} color="black" />,
arrow:<MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
}
]

export default function Setting () {
    const navigation = useNavigation();
    
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
                            <TouchableOpacity activeOpacity={0.9} 
                            style={{
                                width:"100%",
                                height:40,
                                paddingHorizontal:'4%',
                                marginVertical:"2%",
                                flexDirection:'row',
                                justifyContent:"space-between",
                                alignItems:'center',
                                }} onPress={() => navigation.navigate(item.screen)}>
                                <View style={{
                                    flexDirection:"row",
                                    gap:"10%",
                                    }}
                                >
                                 <Text >{item.Icon}</Text>
                                 <Text style={{
                                    ...FONTS.body7,
                                    color:"black",
                                    fontWeight:"400"}}>{item.name}</Text>
                                </View>
                                 <Text style={{alignSelf:"flex-end"}}>{item.arrow}</Text>
                            </TouchableOpacity>
                        )}}/>
                    </View>
                    
                    <View style={styles.Flat2}>
                     <FlatList 
                            scrollEnabled={false}
                            data={itemBur}
                            renderItem={({item,}) =>{
                            return(
                            <TouchableOpacity activeOpacity={0.9}
                            style={{
                                width:"100%",
                                height:40,
                                paddingHorizontal:'4%',
                                marginVertical:"2%",
                                flexDirection:'row',
                                justifyContent:"space-between",
                                alignItems:'center',
                                }} onPress={() => navigation.navigate(item.screen)}>
                                <View style={{
                                    flexDirection:"row",
                                    gap:"10%",
                                    }}
                                >
                                 <Text >{item.acon}</Text>
                                 <Text style={{
                                    ...FONTS.body7,
                                    color:"black",
                                    fontWeight:"400"}}>{item.same}</Text>
                                </View>
                                 <Text style={{alignSelf:"flex-end"}}>{item.arrow}</Text>
                            </TouchableOpacity>
                        )}}/>
                    </View>

              <TouchableOpacity activeOpacity={0.9} style={styles.Centre}>
                    <View style={{
                        flexDirection:"row",
                        gap:"10%"
                        }}>
                        <Octicons name="shield-check" size={22} color="black" />
                        <Text style={{
                        ...FONTS.body7,
                        color:"black",
                        fontWeight:"400"}}>Security Center</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9} style={styles.Centre}>
                    <View style={{
                        flexDirection:"row",
                        gap:"9%"
                    }}>
                    <Ionicons name="power-sharp" size={22} color="black" />
                    <Text style={{
                        ...FONTS.body7,
                        color:"black",
                        fontWeight:"400"}}>Close Account</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
              </TouchableOpacity>

               <TouchableOpacity activeOpacity={0.9} style={styles.Centre}>
                    <View style={{
                        flexDirection:"row",
                        gap:"12%",
                        alignItems:"center"
                    }}>
                    <Feather name="alert-circle" size={22} color="black" />
                    <Text style={{
                        ...FONTS.body7,
                        color:"black",
                        fontWeight:"400"}}>About</Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}>
                        <Text>Version 7.23.1</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={30} color={Colors.gray4} />
                    </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9}
                 style={{
                 width:"89%",  
                 marginHorizontal:"5%",
                 paddingHorizontal:"4%",
                 borderRadius:"4%",
                 flex:1,
                 backgroundColor:"white",
                 paddingVertical:"4%",
                 marginTop:"2%",
                 marginBottom:"10%"
                  }}>
                <Text style={{
                ...FONTS.body3a,
                textAlign:"center"
                }}>Sign Out</Text>
              </TouchableOpacity>
          </ScrollView>
        </View>
    )};

    const styles = StyleSheet.create ({
        Flat:{
        width:"89%",
        flex:1,
        backgroundColor:"white",
        borderRadius:"4%",
        marginVertical:"3%",
        marginHorizontal:"5%",
        paddingVertical:"1%"
        },
        Centre:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"89%",
        marginHorizontal:"5%",
        paddingHorizontal:"4%",
        borderRadius:"4%",
        flex:1,
        backgroundColor:"white",
        paddingVertical:"3%",
        marginVertical:"2%"
        },
        Flat2:{
        width:"89%",
        flex:1,
        backgroundColor:"white",
        borderRadius:"4%",
        marginVertical:"2%",
        marginHorizontal:"5%",
        paddingVertical:"1%"
        },
    });