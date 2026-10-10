import {View,Text ,StyleSheet} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { FONTS,Colors } from "../constants/Theme";
import { Octicons,FontAwesome5,Entypo} from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function AutoSave () {
    return(
        <View style={general.container}>
            <CustomHeading title={"AutoSave to OWealth"}/>
            <View style={{paddingHorizontal:"4%"}}>

                <Text style ={styles.header}>Don't Miss Earning Any Daily Interest ?</Text>
                <View style={styles.container}>
                    <Text style={FONTS.h7}>Turn on AutoSave to OWealth</Text>

                    <Text style={styles.line}>--------------------------------------------------</Text>
                    
                    <View style={styles.holder}>
                            <View style={styles.balance}>
                                <Octicons name="file-directory-open-fill" size={20} color={Colors.green4} />
                                <View style={styles.walletholder}>
                                    <Text style={styles.walletext}>Wallet Balance</Text>
                                    <Text style={styles.zero}>0 interest</Text>
                                </View>
                            </View>
                           <View style={{marginTop:20}}><FontAwesome5 name="long-arrow-alt-right" size={10} color={Colors.green4}/></View>
                            <View style={styles.owealth}>
                                <FontAwesome5 name="google-wallet" size={20} color={Colors.green4} />
                                <View style={styles.walletholder}>
                                    <Text style={styles.walletext}>OWealth Balance</Text>
                                    <Text style={styles.zero}>Up to 15% annual interest</Text>
                                </View>
                            </View>
                    </View>

                    <Text style={FONTS.body5}>Any money sent to your Wallet Balance will be automatically deposited to your Owealth directly.</Text>
                </View>
                <View style={styles.remember}>
                    <Text style={FONTS.body3}>Remember, you can:</Text>
                    <View style={styles.remcontainer}>
                        <View style={styles.iconholder}><Entypo name="print" size={24}  color={Colors.green4}/></View>
                        <Text style={FONTS.body8}>Withdraw from Owealth for free at anytime</Text>
                    </View>
                    <View style={styles.remcontainer}>
                        <View style={styles.iconholder}><FontAwesome5 name="google-wallet" size={20} color={Colors.green4} /></View>
                        <Text style={FONTS.body8}>Use OWealth as a payment method for your transactions</Text>
                    </View>
                </View>

                <CustomButton title="Turn On" 
                  buttonStyle={styles.button}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    header:{
        fontSize:27,
        fontWeight:"500",
        paddingVertical:"8%"
    },
    container:{
        borderRadius:10,
        backgroundColor:"white",
        paddingVertical:"4%",
        paddingHorizontal:"4%",
    },
    line:{
        paddingVertical:"4%",
        color:Colors.grey4
    },
    holder:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        paddingBottom:10
    },
    walletholder:{
        justifyContent:"flex-start",
    },
    walletext:{
        color:Colors.green4,
        fontSize:14,
    },
    zero:{
        fontSize:10,
        color:Colors.gray4
    },
    balance:{
        backgroundColor:Colors.green13,
        paddingVertical:"4%",
        flexDirection:"row",
        paddingHorizontal:"3%",
        gap:"2%",
        borderEndEndRadius:30,
        borderTopEndRadius:10,
        borderStartStartRadius:10,
        borderEndStartRadius:10,
        width:"45%",
        
    },
    owealth:{
        backgroundColor:Colors.green13,
        paddingVertical:"4%",
        flexDirection:"row",
        paddingHorizontal:"3%",
        gap:"2%",
        borderStartStartRadius:30,
        borderEndStartRadius:10,
        borderEndEndRadius:10,
        borderTopEndRadius:10,
        width:"50%"
    },
    remember:{
        borderRadius:10,
        backgroundColor:"white",
        paddingTop:"4%",
        paddingHorizontal:"4%",
        marginVertical:"4%"
    },
    remcontainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:"4%",
        gap:10,
    },
    iconholder:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:Colors.grey2,
        alignItems:"center",
        justifyContent:"center"
    },
    button:{
        marginTop:"45%",
        width:"90%",
        alignSelf:"center",
        borderRadius:13,
        backgroundColor:Colors.green14
    }
});