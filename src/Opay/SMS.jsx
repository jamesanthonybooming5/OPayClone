import { View, Text, ScrollView, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FONTS, Colors,} from "../constants/Theme";
import CustomButton from "../components/CustomButton";


export default function SMS() {
    const itemBar=[
        {id:"1",
            name:"Credit Alerts", subname:"Money sent to your OPay Account."
        },
        {id:"2", 
            name:"Card Transaction Alerts", subname:"Payments & Cash Withdrawals made with your OPay Debit Card."
        },
        {id:"3",
            name:"Transfer & Withdrawal Alerts", subname:"Transfers & Cash Withdrawals made with the OPay App or USSD."
        },
        {id:"4",name:"Other Alerts", subname:"Transactions other than those listed above, such as Airtime, Data, etc."}
    ]

    const [isToggleOn, setIsToggleOn] = useState(false);

    return (
        <View style={general.container}>
            <CustomHeading title={"SMS Alert Subscription"} />
            <ScrollView style={{ paddingHorizontal: "5%" }}>

                <Text style={styles.header}>
                    Activates SMS alerts to get real-time transaction notifications (#6 per alert),
                    protect your funds. Cancel anytime
                </Text>

                <FlatList 
                 scrollEnabled={false}
                 data={itemBar}
                 keyExtractor={(item) => item.id}
                 renderItem={({item})=>{
                    return(
                        <TouchableOpacity 
                         activeOpacity={0.9}
                         style={[isToggleOn ===item.id && styles.activeholder, styles.holder ]}
                         onPress={()=> setIsToggleOn(isToggleOn === item.id ? null: item.id)}>
                           <View style={styles.textcontainer}>
                             <Text style={styles.subtext}>{item.name}</Text>
                            <Text style={styles.posttext}>{item.subname}</Text>
                           </View>
                           <MaterialCommunityIcons 
                             name={isToggleOn === item.id ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"} 
                             size={27} color={isToggleOn ===item.id ? Colors.green4 : "#ccc"} 
                             />
                        </TouchableOpacity>

                    )
                }}/>

                <View style={{marginVertical:"5%"}}>

                    <View style={styles.charges}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text style={styles.chargestext}>
                            SMS charges for each last month will be automatically debited at 10am on the 3rd of each new month.
                        </Text>
                    </View>
                    <View style={styles.charges}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text style={styles.chargestext}>
                            How are SMS charges deducted? Click Here to Learn More
                        </Text>
                        <Text></Text>
                    </View>
                </View>
    
                <CustomButton title="Subscribe Now"
                disabled={!isToggleOn} 
                  buttonStyle={[isToggleOn? styles.button: styles.inactivebutton ]}
                  textStyle={FONTS.body3a}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:16,
        fontWeight:"300",
        marginVertical:"5%"
    },
    holder:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        paddingVertical:"3%",
        paddingHorizontal:"4%",
        justifyContent:'space-between',
        backgroundColor:"white",
        marginVertical:8,
        borderRadius:10
    },
    activeholder:{
        borderWidth:1,
        borderColor:Colors.green4
    },
    textcontainer:{
        marginVertical:"2%",
        maxWidth:"90%"
    },
    subtext:{
        fontSize:15,
        marginBottom:5,
        fontWeight:"500"
    },
    posttext:{
        ...FONTS.body5a,
        lineHeight:16
    },
    charges:{
        flexDirection: "row",
     },
    chargestext:{
        fontSize: 13,
        color: Colors.fadeblack,
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
        backgroundColor:Colors.green6,
        marginTop:"20%"
    },
});