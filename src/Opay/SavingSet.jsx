import {View,Text,StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Colors,FONTS} from "../constants/Theme";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { SimpleLineIcons,Feather } from "@expo/vector-icons";

export default function SavingSet() {
    const navigation = useNavigation ();

    return(
        <View style={general.container}>
            <CustomHeading title={"Savings Settings"}/>

            <ScrollView style={{paddingHorizontal:"4%"}}>

                <View style={{marginVertical:"4%"}}>
                 <Text style={styles.save}>Savings settings</Text>
                 <Text style={FONTS.body5}>Manage your savings with the following options</Text>
                </View>
                
                <TouchableOpacity
                 activeOpacity={0.9}
                 onPress={()=>navigation.navigate("")}
                 style={styles.investcontainer}>
                    <SimpleLineIcons name="power" size={40} color={Colors.green7} />
                    <View>
                        <Text>Automatic investment</Text>
                        <Text style={styles.auto}>Turn on Auto invest and earn up to 15% annual interest</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                 activeOpacity={0.9}
                 onPress={()=>navigation.navigate("")}
                 style={styles.interestcontainer}>
                    <View style={styles.holder}>
                        <Text style={styles.new}>NEW</Text>
                    </View>
                    <View style={styles.inner}>
                        <Feather name="hexagon" size={40} color={Colors.green7} />
                        <View>
                            <Text>Interest setting</Text>
                            <Text style={FONTS.body5}>Enable or disable interest on your savings</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );}

const styles = StyleSheet.create ({
    save:{
        ...FONTS.body2,
        fontWeight:"500",
        color:Colors.green7
    },
    investcontainer:{
        width:"100%",
        borderWidth:1,
        borderColor:Colors.fadeblack,
        marginVertical:"2%",
        paddingHorizontal:"4%",
        borderRadius:10,
        alignItems:"center",
        flexDirection:"row",
        gap:"5%",
        paddingVertical:"7%"
    },
    auto:{
        maxWidth:"85%",
        ...FONTS.body5
    },
    interestcontainer:{
        width:"100%",
        borderWidth:1,
        borderColor:Colors.fadeblack,
        borderRadius:10,
        marginVertical:"4%"
    },
    holder:{
        width:"18%",
        backgroundColor:Colors.green7,
        alignItems:"center",
        alignSelf:"flex-end",
        borderStartStartRadius:10,
        borderStartEndRadius:9,
        borderEndStartRadius:10,
    },
    new:{
        ...FONTS.body8,
        color:"white"
    },
    inner:{
        flexDirection:"row",
        alignItems:"center",
        gap:"5%",
        marginHorizontal:"4%",
        marginBottom:"7%",
        marginTop:"4%"
    }
})