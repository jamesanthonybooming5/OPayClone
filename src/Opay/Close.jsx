import {View, Text,StyleSheet} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { Ionicons,Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Theme";
import CustomButton from "../components/CustomButton";

export default function Close () {
    return(
        <View style={general.container}>
            <CustomHeading title={"Close Account"}/>

            <View style={{paddingHorizontal:"4%",flex:1}}>
               
               <View style={styles.header}>
                 <Ionicons name="alert-circle" size={80} color={Colors.tomato} />
                 <Text style={{paddingVertical:"5%"}}>After Successful Account Cancellation:</Text>
               </View>

               <View style={styles.alert}>
                    <View style={styles.charges}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text style={styles.chargestext}>
                            Permanently Unable to Login or USe the Account
                        </Text>
                    </View>
                    <View style={styles.charges}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text style={styles.chargestext}>
                          ID,Account and Transaction Information will be cleared
                        </Text>
                    </View>
                    <View style={styles.charges}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text style={styles.chargestext}>
                          All Gained Benefits such as Cashback will be cleared
                        </Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footertext}>For more details on Account Cancellation, please refer to </Text>
                    <Text style={styles.footertext2}>'OPay Account Cancellation Notice'</Text>
                </View>
                <CustomButton title="Confirm and Continue" 
                  buttonStyle={styles.button}
                  textStyle={styles.text}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:"10%"
    },
    charges:{
        flexDirection:"row",
        paddingVertical:"1%"
    },
    alert:{
        marginVertical:"2%",
        borderRadius:"3%",
        backgroundColor:"white",
        paddingHorizontal:"1%",
        paddingVertical:"3%"
    },
    chargestext:{
        fontSize: 14,
        color: Colors.offblack,
    },
    footer:{
        marginTop:"90%",
        paddingHorizontal:"4%"
    },
    footertext:{
        fontSize:11,
        color:Colors.offblack
    },
    footertext2:{
        fontSize:12,
        color:Colors.green7
    },
    button:{
        width:"80%",
        alignSelf:"center",
        backgroundColor:Colors.green14
    },
    text:{
        fontSize:17
    }
})