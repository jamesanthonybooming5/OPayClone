import {View,Text,StyleSheet,TouchableOpacity,FlatList} from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { MaterialIcons,FontAwesome,FontAwesome5 } from "@expo/vector-icons";
import { Colors, FONTS } from "../constants/Theme";
import CustomButton from "../components/CustomButton";

export default function Bank () {

    const itemBar=[
        {id:"1",name:"OPay Account Number",Icon:<MaterialIcons name="123" size={30} color="black" />,number:"0808080800"},
        {id:"2",name:"Bank",Icon:<FontAwesome name="opera" size={20} color="#04b471"/>,number:"OPay Digital Services Limited (OPay)"},
        {id:"3",name:"Name",Icon:<FontAwesome5 name="user" size={20} color="black" />,number:"EDWARD OKIKIOLA BANJO"},
    ]
    return(
        <View style={general.container}>
            <CustomHeading title={"Bank transfer"}/>

            <View style={{paddingHorizontal:"4%"}}>

                <View style={styles.holder}>
                    <FlatList
                    scrollEnabled={false}
                    data={itemBar}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.account}>
                                <View style={styles.icon}>{item.Icon}</View>
                                <View style={styles.width}>
                                <Text style={FONTS.h6}>{item.name}</Text>
                                    <Text style={{paddingTop:3}}>{item.number}</Text>
                                </View>
                            </View>
                        )
                    }}/>

                    <View style={styles.button}>
                            <CustomButton title="Copy Number" 
                            buttonStyle={styles.copy} textStyle={styles.text}/>
                            <CustomButton title="Share Details" 
                            buttonStyle={styles.share} textStyle={styles.text2}/>
                    </View>
                </View>
                <View style={styles.addholder}>
                    <Text>Add money via bank transfer in just 3 steps</Text>
                    <View style={styles.one}>
                        <Text style={{color:Colors.green7}}>1. </Text>
                        <Text style={FONTS.h6} numberOfLines={2}> Copy the account details above - 808 000 0000 is your OPay Account Number</Text>
                    </View>
                    <View style={styles.one}>
                        <Text style={{color:Colors.green7}}>2. </Text>
                        <Text style={FONTS.h6} numberOfLines={2}>Open the bank app you want to transfer money from</Text>
                    </View>
                    <View style={styles.one}>
                        <Text style={{color:Colors.green7}}>3. </Text>
                        <Text style={FONTS.h6} numberOfLines={2}>Transfer the desired amount to your OPay Account</Text>
                    </View>
                </View>

                <View style={styles.transfer}>
                    <Text>Transfer with these banks</Text>
                </View>
           </View>
        </View>
    );}

const styles = StyleSheet.create ({
    addholder:{
        backgroundColor:"white",
        borderRadius:"3%",
        paddingHorizontal:"3%",
        paddingVertical:"5%",
    },
    one:{
        flexDirection:"row",
        maxWidth:"100%",
        marginTop:"5%"
    },
    transfer:{
        backgroundColor:"white",
        justifyContent:'center',
        paddingHorizontal:"3%",
        paddingVertical:"5%",
        borderRadius:"3%",
        marginVertical:"4%"
    },
    holder:{
        backgroundColor:"white",
        borderRadius:"3%",
        paddingVertical:"5%",
        marginVertical:"4%",
        paddingHorizontal:"5%",
    },
    icon:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:Colors.gray9,
        alignItems:"center",
        justifyContent:"center"
    },
    account:{
        flexDirection:"row",
        gap:"5%",
        paddingVertical:"3%",
    },
    width:{
        borderBottomWidth:1,
        width:"100%",
        paddingVertical:7,
        borderColor:Colors.gray8
    },
    copy:{
        width:"130%",
        backgroundColor:Colors.green11,
        height:45,
        paddingVertical:10
    },
    text:{
        fontSize:15,
        color:Colors.green7
    },
    share:{
        width:"130%",
        backgroundColor:Colors.green14,
        height:45,
        paddingVertical:10
    },text2:{
        fontSize:15
    },
    button:{
        flexDirection:"row",
        justifyContent:"flex-start",
        gap:"15%",
    }
});