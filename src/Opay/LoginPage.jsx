import {View,Text , StyleSheet,TouchableOpacity, TextInput} from "react-native";
import general from "../constants/General";
import CustomHeader from "../components/CustomHeader";
import { FontAwesome,Ionicons } from "@expo/vector-icons";
import { Colors, FONTS ,SCREEN_WIDTH} from "../constants/Theme";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

export default function LoginPage () {
    const navigation = useNavigation ();
    const [isFocused, setIsFocused] = useState (false);
    const [text,setText] = useState("");
    const [Password,setPassword] = useState("");

    const isFloating = (text && text.length > 0) || isFocused;
    
    return(
        <View style={general.container}>
            <CustomHeader/>
            <View style={{paddingHorizontal:"3%"}}>
                <View style={styles.header}>
                    <FontAwesome name="opera" size={23} color={Colors.green4} />
                    <Text style={styles.pay}>Pay</Text>
                </View>

                <View style={[isFocused? styles.inputwrapper : styles.inactivewrapper]}>
                    <Text 
                     pointerEvents="none"
                     style={[styles.label, isFloating? styles.floating : styles.placeholder,]}>
                        Enter your Mobile No./Email
                    </Text>
                    <TextInput
                    value={text}
                    onChangeText={(value)=>{setText(value)}}
                    keyboardType="numbers-and-punctuation"
                    style={styles.inputtext}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={()=> setIsFocused(false)}
                    
                    />
                    
                        <TouchableOpacity
                        style={[styles.clear,{opacity:text && text.length > 0 ? 1 : 0}]}
                        activeOpacity={0.9} 
                        onPress={()=>setText("")}
                        disabled={!text || text.length === 0}>
                        <Ionicons name="close-circle" size={24} color={Colors.lightGray} />
                        </TouchableOpacity>
                </View>
                <CustomInput 
                    value={Password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    inputStyle={styles.inputtext}
                    placeholder="Enter 6-digit Password"
                />
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={()=> navigation.navigate()}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <CustomButton title="Log in"
                 disabled={!text} 
                 onPress={()=> navigation.replace("BottomTab")}
                 buttonStyle={[text? styles.button: styles.inactivebutton ]}
                 textStyle={general.buttonText}
                />

                <Text style={styles.create}>Don't have an OPay Account yet?</Text>
                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate("Get")}>
                    <Text style={styles.click}>Click here to get one</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={FONTS.body6}>Licensed by the</Text>
                    <Text style={styles.cbn}>CBN</Text>
                    <Text style={FONTS.body6}>and insured by the</Text>
                    <View>
                    <Text style={styles.ndic}>NDIC</Text>
                    <Text style={styles.last}>Nigerian Deposit Insurance Corporation</Text>
                    </View>
                </View> 
          </View>
        </View>
    )
}
const styles = StyleSheet.create ({
    clear:{
        padding:4,
        justifyContent:"center",
        alignItems:"center"
    },
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
    inputwrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        marginBottom:"7%",
        borderWidth:1,
        borderColor:Colors.green7,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative",
    },
    inactivewrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        marginBottom:"7%",
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        backgroundColor:Colors.grey2,
        borderWidth:1,
        borderColor:Colors.gray4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative"
    },
    label:{
        position:"absolute",
        left:12,
        backgroundColor:Colors.grey2,
        paddingHorizontal:6
    },
    placeholder:{
        top:17,
        ...FONTS.body7,
        backgroundColor:"transparent",
    },
    floating:{
        top:-10,
        fontSize:12,
        color:Colors.green7,
        fontWeight:"400",
        zIndex:1,
    },
    inputtext:{
        fontWeight:"300",
        fontSize:15,
        maxWidth:"90%",
        flex:1,
    },
    forgot:{
        alignSelf:"flex-end",
        color:Colors.green7,
        fontSize:13
    },
     button:{
        width:"80%",
        alignSelf:"center",
        backgroundColor:Colors.green4,
        marginTop:"20%"
    },
    inactivebutton:{
        width:"80%",
        alignSelf:"center",
        backgroundColor:Colors.green7,
        marginTop:"20%"
    },
    create:{
        textAlign:"center",
        fontWeight:"300",
        marginTop:"80%"
    },
    click:{
        textAlign:"center",
        ...FONTS.body8,
        color:Colors.green4
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"5%"
    },
    cbn:{
        fontWeight:"500",
        color:"#040476",
        fontSize:15
    },
    ndic:{
        color:"#040476",
        fontWeight:"700",
        fontSize:17
    },
    last:{
        fontSize:2,
        lineHeight:2,
        width:"100%"
    }
});