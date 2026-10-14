import {View,Text , StyleSheet,TouchableOpacity, TextInput} from "react-native";
import general from "../constants/General";
import CustomHeader from "../components/CustomHeader";
import { FontAwesome,Ionicons } from "@expo/vector-icons";
import { Colors, FONTS ,SCREEN_WIDTH} from "../constants/Theme";
import CustomInput from "../components/CustomInput";
import { useState,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

export default function LoginPage () {
    const navigation = useNavigation ();
    const [isFocused, setIsFocused] = useState (false);
    const [text,setText] = useState("");
    const [Password,setPassword] = useState("");
    const inputRef = useRef (null);

    const isFilled = text && text.length > 0;
    const isActive = isFocused || isFilled;
    
    return(
        <View style={general.container}>
            <CustomHeader/>
            <View style={{paddingHorizontal:"3%"}}>
                <View style={styles.header}>
                    <FontAwesome name="opera" size={23} color={Colors.green4} />
                    <Text style={styles.pay}>Pay</Text>
                </View>

                <View 
                 onStartShouldSetResponder={() => {inputRef.current?.focus(); return true;}}
                 style={[styles.inputwrapper, {borderColor:isFocused? Colors.green7 : Colors.gray4,
                    backgroundColor:Colors.grey2}]}>
                   <Text 
                     pointerEvents="none"
                     style={[styles.label, isActive? styles.floating : styles.placeholder,{color:isFocused? Colors.green7 : Colors.gray4}]}>
                        Enter your Mobile No./Email
                    </Text>
                    <TextInput
                    value={text}
                    onChangeText={setText}
                    keyboardType="numbers-and-punctuation"
                    style={styles.inputtext}
                    onFocus={()=> setIsFocused(true)}
                    onBlur={()=> setIsFocused(false)}
                    
                    />
                    {isFocused && isFilled && ( 
                        <TouchableOpacity
                        style={{position:"relative"}}
                        activeOpacity={0.9} 
                        onPress={()=>setText("")}>
                        <Ionicons name="close-circle" size={24} color={Colors.lightGray} />
                        </TouchableOpacity>
                    )}
                </View>
                <CustomInput 
                    value={Password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    inputStyle={styles.inputtext}
                    placeholder="Enter 6-digit Password"
                />
                <View>
                    <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={()=> navigation.navigate()}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                </View>

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
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative",
    },
    label:{
        position:"absolute",
        left:12,
        backgroundColor:Colors.grey2,
        paddingHorizontal:6,
    },
    placeholder:{
        top:17,
        ...FONTS.body7,
        backgroundColor:"transparent",
    },
    floating:{
        top:-10,
        fontSize:12,
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
        color:Colors.green7,
        fontSize:13,
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