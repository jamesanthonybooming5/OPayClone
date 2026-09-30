import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useState } from "react";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FONTS, Colors, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";


export default function SMS() {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isTogOn, setIsTogOn] = useState(false);
    const [isToggOn, setIsToggOn] = useState(false);
    const [isToOn, setIsToOn] = useState(false);
    return (
        <View style={general.container}>
            <CustomHeading title={"SMS Alert Subscription"} />
            <ScrollView style={{ paddingHorizontal: "5%" }}>

                <Text 
                numberOfLines={3}
                style={
                    {
                        fontSize: 14,
                        fontWeight: "400",
                        marginTop: "5%"
                    }}>Activate SMS alerts to get real-time transanction notifications (#6 per alert),
                    protect your funds. Cancel anytime.
                </Text>

                <View style={styles.Credit}>
                    <View style={{
                        marginVertical: "7%",
                        paddingVertical: "2%"
                    }}>
                        <Text style={{ ...FONTS.body3a }}>Credit Alerts</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: Colors.gray7,
                            marginTop: "3%"
                        }}>Money sent to your OPay account.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setIsToggleOn(!isToggleOn)}><MaterialCommunityIcons name={isToggleOn ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} size={27} color={isToggleOn ? Colors.green4 : "#ccc"} /></TouchableOpacity>
                </View>
                <View style={styles.Credit2}>
                    <View style={{ marginVertical: "7%" }}>
                        <Text style={{ ...FONTS.body3a }}>Card Transaction Alerts</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: Colors.gray7,
                            marginTop: "3%",
                            maxWidth:SCREEN_WIDTH * 0.75,
                        }}>Payments & Cash Withdrawals made with your OPay Debit Card.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setIsToggOn(!isToggOn)}><MaterialCommunityIcons name={isToggOn ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} size={27} color={isToggOn ? Colors.green4 : "#ccc"} /></TouchableOpacity>
                </View>
                <View style={styles.Credit}>
                    <View style={{ marginVertical: "7%" }}>
                        <Text style={{ ...FONTS.body3a }}>Transfer & Withdrawals Alerts</Text>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "400",
                            color: Colors.gray7,
                            marginTop: "3%",
                            maxWidth:SCREEN_WIDTH * 0.75,
                        }}>Transfers & Cash Withdrawals made with the OPay App or USSD.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setIsTogOn(!isTogOn)}><MaterialCommunityIcons name={isTogOn ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} size={27} color={isTogOn ? Colors.green4 : "#ccc"} /></TouchableOpacity>
                </View>
                <View style={styles.Credit2}>
                    <View style={{ marginVertical: "7%", }}>
                        <Text style={{ ...FONTS.body3a }}>Other Alerts</Text>
                        <Text style={{
                            fontSize: 13,
                            fontWeight: "400",
                            color: Colors.gray7,
                            marginTop: "3%",
                            maxWidth:SCREEN_WIDTH * 0.70,
                        }}>Transactions other than those listed above, such as Airtime, Data, etc.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => setIsToOn(!isToOn)}><MaterialCommunityIcons name={isToOn ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"} size={27} color={isToOn ? Colors.green4 : "#ccc"} /></TouchableOpacity>
                </View>

                <View style={{marginVertical:"6%"}}>
                    <View style={{ flexDirection: "row", }}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text
                        
                        style={{
                            fontSize: 14,
                            color: Colors.gray7,
                        }}>SMS charges for each last month will be automatically debited
                            at 10am on the 3rd of each month.
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row"}}>
                        <Entypo name="dot-single" size={15} color={Colors.gray7} />
                        <Text 
                        style={{
                            fontSize: 14,
                            color: Colors.gray7,
                            maxWidth:"100%"
                        }}>How are SMS charges deducted? Click Here to Learn More
                        </Text>
                    </View>
                </View>

                <CustomButton title="Subscribe Now" buttonStyle={{width:"80%",
                    backgroundColor:Colors.green4,
                    marginBottom:"5%"
                }}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Credit: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: "4%",
        backgroundColor: "white",
        flex: 1,
        borderRadius: "3%",
        marginVertical: "5%",
    },
    Credit2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        width: "100%",
        paddingHorizontal: "4%",
        backgroundColor: "white",
        flex: 1,
        borderRadius: "3%",
        marginVertical: "1%",
    }
});