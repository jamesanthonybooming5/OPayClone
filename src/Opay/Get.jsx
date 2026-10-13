import {View,Text,StyleSheet,TouchableOpacity, TextInput,LayoutAnimation,Platform,UIManager,Image,ScrollView, StatusBar} from "react-native";
import general from "../constants/General";
import { MaterialIcons, FontAwesome,MaterialCommunityIcons, Ionicons,FontAwesome5,FontAwesome6,AntDesign} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors,FONTS,SCREEN_WIDTH} from "../constants/Theme";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental)
{UIManager.setLayoutAnimationEnabledExperimental(true);}

export default function Get () {
    const  navigation = useNavigation();
    const [text,setText] = useState ();
    const [isFocused,setIsFocused] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [referralCode, setReferralCode] = useState("");
    const [isToggleOn,setIsToggleOn]= useState(false);


    const toggleExpanded = () => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    return(
        <View style={general.container}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.head}>
                <StatusBar backgroundColor="white" barStyle={'dark-content'}/>
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black"/>
            </TouchableOpacity> 

            <ScrollView 
             showsVerticalScrollIndicator={false}
             style={styles.scroll}>
                <View style={styles.header}>
                    <FontAwesome name="opera" size={23} color={Colors.green4} />
                    <Text style={styles.pay}>Pay</Text>
                </View>
                <Text style={FONTS.body2}>Get an OPay Account</Text>

                <View style={[isFocused? styles.inputwrapper : styles.inactivewrapper]}>
                    <View style={styles.get}>
                        <MaterialCommunityIcons name="diving-scuba-flag" size={30} color={Colors.green2} />
                        <Text>+234</Text>
                    </View>
                    
                    <TextInput
                        placeholder="Enter Phone Number"
                        value={text}
                        onChangeText={setText}
                        keyboardType="numeric"
                        style={styles.inputtext}
                        onFocus={()=> setIsFocused(true)}
                        onBlur={()=> setIsFocused(false)}
                        returnKeyType="done"
                    />
                    {text && text?.length > 0 &&(
                        <TouchableOpacity
                            activeOpacity={0.9} 
                            onPress={()=>setText("")}>
                            <Ionicons name="close-circle" size={24} color={Colors.lightGray} />
                        </TouchableOpacity>
                    )}
                    
                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.heading}
                        activeOpacity={0.9}
                        onPress={toggleExpanded}>
                       <View style={styles.logocontainer}>
                         <Image source={require("../assets/images/avatar1.jpg")}
                        style={styles.logo}
                        />
                        <Text style={FONTS.body8}>Have an Invitation Code?</Text>
                       </View>
                        <Ionicons name={expanded? "chevron-up" : "chevron-down"} size={15} color={Colors.gray4}/>
                    </TouchableOpacity>

                    { expanded && (
                        <View style={styles.content}>
                            <TextInput
                                style={styles.input}
                                value={referralCode}
                                onChangeText={setReferralCode}
                                placeholder="Invitation Code (Optional)"
                                autoCapitalize="characters"/>
                        </View>
                    )}
                </View>

                <View style={styles.signholder}>
                    <Image source={require("../assets/images/avatar4.jpg")}
                        style={styles.logo}
                        />
                    <Text style={styles.signtext}>Sign up to get a #300 airtime voucher</Text>
                </View>
                <CustomButton 
                    title={"Sign Up"}
                    disabled={!text} 
                    onPress={()=> navigation.reset({index:0, routes:[{name:"BottomTab"}]})}
                    buttonStyle={[text? styles.button: styles.inactivebutton ]}
                    textStyle={general.buttonText}
                />

                <View style={styles.agree}>
                    <TouchableOpacity
                        onPress={()=> setIsToggleOn(!isToggleOn)}>
                        <FontAwesome name={isToggleOn? "check-square":"square-o"} size={17} color={isToggleOn? Colors.green4:Colors.black}/>
                    </TouchableOpacity>
                    <Text style={styles.agreetext}>I have read, understood and agreed 
                        to the Terms & Conditions and Privacy Policy.
                    </Text> 
                </View>

            </ScrollView>

            <View style={styles.footerhead}>
                <View style={styles.login}>
                    <Text>Already have an OPay Account?</Text>
                    <TouchableOpacity 
                        activeOpacity={0.9}
                        onPress={()=> navigation.reset({index:0, routes:[{name:"LoginPage"}]})}>
                        <Text style={styles.click}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={FONTS.body8}>Licensed by the</Text>
                    <Text style={styles.cbn}>CBN</Text>
                    <Text style={FONTS.body8}>and insured by the</Text>
                    <View>
                        <Text style={styles.ndic}>NDIC</Text>
                        <Text style={styles.last}>Nigerian Deposit Insurance Corporation</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles =StyleSheet.create ({
    head:{
        paddingHorizontal:"3%",
        backgroundColor:Colors.grey2,
        height:"9%",
        paddingTop:"10%"
    },
    scroll:{
        paddingHorizontal:"4%",
        flex:1,
        paddingTop:25
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        paddingVertical:"10%"
    },
    pay:{
        color:Colors.primary2,
        fontWeight:"500",
        fontSize:30,
        paddingLeft:3
    },
    get:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        borderRightWidth:2,
        paddingRight:"2%",
        borderColor:Colors.grey4
    },
    inputtext:{
        fontWeight:"300",
        fontSize:15,
        maxWidth:"100%",
        flex:1,
        marginLeft:"2%"
    },
    inputwrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        borderWidth:1,
        borderColor:Colors.green7,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        marginTop:"7%",
        alignItems:"center",
        backgroundColor:Colors.gray
    },
    inactivewrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        paddingHorizontal:SCREEN_WIDTH * 0.03,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        backgroundColor:Colors.gray,
        alignItems:"center",
        flexDirection:"row",
        marginTop:"7%",
    },
    container:{
        backgroundColor:Colors.green9,
        borderRadius:8,
        overflow:"hidden",
        marginTop:"5%"
    },
    heading:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:16,
        paddingVertical:14
    },
    logo:{
        width:25,
        height:25,
        resizeMode:"contain",
        borderRadius:30
    },
    logocontainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    content:{
        paddingHorizontal:"3%",
        paddingBottom:15,
        paddingTop:4
    },
    input:{
        height:48,
        borderRadius:8,
        paddingHorizontal:12,
        backgroundColor:"white"
    },
    signholder:{
        borderRadius:15,
        paddingVertical:"2%",
        backgroundColor:Colors.green11,
        marginTop:"35%",
        paddingHorizontal:5,
        alignSelf:"center",
        flexDirection:"row",
        alignItems:"center",
        gap:5
    },
    signtext:{
        fontSize:15,
        color:Colors.green4,
        fontWeight:"500"
    },
     button:{
        width:"90%",
        alignSelf:"center",
        backgroundColor:Colors.green4,
    },
    inactivebutton:{
        width:"90%",
        alignSelf:"center",
        backgroundColor:Colors.green14,
        height:55
    },
    agree:{
        flexDirection:"row",
        gap:10,
        paddingHorizontal:"4%",
        marginTop:"4%"
    },
    agreetext:{
        fontWeight:"300",
        fontSize:14,
        maxWidth:"95%",
        color:Colors.fadeblack,
        lineHeight:22
    },
    login:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        marginTop:"1%"
    },
    click:{
        color:Colors.green4
    },
    footerhead:{
        backgroundColor:Colors.grey2,
        paddingVertical:10,
        height:"20%"
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:"17%"
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