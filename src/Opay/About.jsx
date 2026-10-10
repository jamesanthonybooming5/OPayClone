import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { Colors,FONTS } from "../constants/Theme";
import { FontAwesome,Entypo,Feather,MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function About () {
    const navigation = useNavigation ();
    return(
        <View style={general.container}>
            <CustomHeading title={"About"}/>
            <View style={{paddingHorizontal:"4%"}}>
                <View style={styles.header}>
                    <FontAwesome name="opera" size={23} color={Colors.green4} />
                    <Text style={styles.pay}>Pay</Text>
                </View>

                <Text style={styles.version}>Version 7.23.1</Text>

                <View style={styles.holder}>
                    <TouchableOpacity
                     activeOpacity={0.9}
                     onPress={()=> navigation.navigate()}
                     style={styles.house}>
                        <View style={styles.container}>
                            <Entypo name="text-document" size={24} color="black" />
                            <Text>Terms & Conditions</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={Colors.gray4}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     activeOpacity={0.9}
                     onPress={()=> navigation.navigate()}
                     style={styles.house}>
                        <View style={styles.container}>
                            <Feather name="file-text" size={24} color="black" />
                            <Text>Privacy Policy</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={Colors.gray4}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate()}
                 style={styles.upgrade}>
                    <View style={styles.container}>
                        <MaterialCommunityIcons name="rocket-launch-outline" size={20} color="black" />
                        <Text>Version Upgrade</Text>
                    </View>
                    <View style={styles.newhouse}>
                        <View style={styles.newcontainer}>
                            <Text style={styles.newtext}>New</Text>
                        </View>
                        <MaterialIcons name="arrow-forward-ios" size={20} color={Colors.gray4}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    header:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        paddingVertical:"5%"
    },
    pay:{
        color:Colors.primary2,
        fontWeight:"500",
        fontSize:30,
        paddingLeft:3
    },
    version:{
        textAlign:"center",
        fontWeight:"300",
        color:Colors.gray4,
        fontSize:16,
        paddingBottom:"20%"
    },
    house:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    holder:{
        paddingHorizontal:"4%",
        backgroundColor:"white",
        borderRadius:10,
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:"5%",
        gap:15
    },
    upgrade:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white",
        paddingHorizontal:"4%",
        marginVertical:"10%",
        borderRadius:10,
        justifyContent:"space-between"
    },
    newhouse:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:"5%",   
    },
    newcontainer:{
        backgroundColor:Colors.tomato,
        alignItems:"center",
        justifyContent:"center",
        width:42,
        height:20,
        borderStartStartRadius:10,
        borderEndEndRadius:10,
        borderStartEndRadius:10
    },
    newtext:{
        color:"white",
        fontSize:12
    }
})