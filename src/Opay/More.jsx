import {View,Text,StyleSheet,ScrollView, TouchableOpacity,FlatList,Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Feather, MaterialIcons,MaterialCommunityIcons,Ionicons,AntDesign,FontAwesome,FontAwesome6,Fontisto,Octicons} from "@expo/vector-icons"
import { StatusBar } from "react-native";
import general from "../constants/General";
import { Colors, FONTS } from "../constants/Theme";

const itemBar=[
    {name:"Tuition Payment", icon:<Ionicons name="logo-electron" size={24} color="black" />,
screen:""},
    {name:"Electricity",icon:<MaterialCommunityIcons name="lightbulb-outline" size={24} color={Colors.green4}/>,
screen:""},
    {name:"Solar",icon:<MaterialCommunityIcons name="solar-power-variant-outline" size={24} color="black" />,
screen:""},
    {name:"Products and Services",icon:<AntDesign name="product" size={24} color={Colors.green4}/>,
screen:""},
    {name:"School & Exams", icon:<FontAwesome6 name="school-flag" size={24} color="black" />,
screen:""},
    {name:"Internet Services",icon:<FontAwesome name="internet-explorer" size={24} color={Colors.green4} />,
screen:""},
    {name:"Financial Services",icon:<MaterialCommunityIcons name="hand-coin-outline" size={24} color="black" />,
screen:""},
    {name:"invoice Payments",icon:<Ionicons name="receipt-outline" size={24} color={Colors.green4}/>,
screen:""},
    {name:"Aid Grants and Donations",icon:<MaterialCommunityIcons name="hand-heart-outline" size={24} color="black" />,
screen:""},
    {name:"Religious",icon:<FontAwesome6 name="building" size={24} color={Colors.green4} />,
screen:""},
    {name:"Government Payments",icon:<MaterialCommunityIcons name="bank-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"Embassies",icon:<MaterialCommunityIcons name="bank-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"Tv payments",icon:<MaterialIcons name="live-tv" size={24} color={Colors.green4}/>,
screen:""},
    {name:"Shopping",icon:<Fontisto name="shopping-bag" size={24} color={Colors.green4} />,
screen:""},
    {name:"Online Shopping",icon:<Fontisto name="shopping-bag" size={24} color={Colors.green4}/>,
screen:""},
    {name:"House Rent",icon:<FontAwesome name="envelope-open-o" size={24} color="black" />,
screen:""},
    {name:"Blackberry",icon:<MaterialIcons name="post-add" size={24} color="black" />,
screen:""},
    {name:"PayChoice",icon:<Ionicons name="albums-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"Commercial Retail Trade",icon:<Octicons name="shield-lock" size={24} color={Colors.green4} />,
screen:""},
    {name:"Prepdaid Card",icon:<Octicons name="credit-card" size={24} color="black" />,
screen:""},
    {name:"International Airtime",icon:<Ionicons name="globe-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"Transport & Toll",icon:<MaterialCommunityIcons name="gas-station-in-use-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"Travel & Hotel",icon:<MaterialCommunityIcons name="island" size={24} color="black" />,
screen:""}
]

const itemBur=[
    {name:"Owealth",icon:<FontAwesome name="google-wallet" size={24} color={Colors.green4} />,
screen:""},
    {name:"Fixed",icon:<MaterialCommunityIcons name="lock-outline" size={24} color={Colors.green4} />,
screen:""},
    {name:"SafeBox",icon:<AntDesign name="wallet" size={24} color="black" />,
screen:""},
    {name:"Targets",icon:<MaterialCommunityIcons name="bullseye-arrow" size={24} color={Colors.green4}/>,
screen:""},
    {name:"Spend & Save",icon:<FontAwesome6 name="sack-dollar" size={24} color={Colors.green4} />,
screen:""}
]

const itemBor=[
    {name:"Daily Check-in",icon:<MaterialCommunityIcons name="calendar-check-outline" size={24} color="black"/>,
screen:""},
    {name:"Play4aChild",icon:<MaterialCommunityIcons name="hand-heart-outline" size={24} color={Colors.green4}/>,
screen:""},
    {name:"Invitation",icon:<Ionicons name="megaphone" size={24} color={Colors.green4}/>,
screen:""}
]

export default function () {
    const navigation = useNavigation ("");

return(
        <View style={general.container}>
            <View style={styles.head}>
                 <StatusBar backgroundColor="white" barStyle={'dark-content'}/>
                 <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.goBack()} style={{zIndex:10}}><MaterialIcons name="keyboard-arrow-left" size={30} color="black" /></TouchableOpacity>
                 <Text style={styles.heading}>More</Text>
                 <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate("")}><Feather name="search" size={18} color={Colors.green4}/></TouchableOpacity>
            </View>
            <ScrollView style={{paddingHorizontal:"4%"}}>
                <View style={styles.box}>
                 <Text style={styles.text}>E-commerce</Text>
                 <TouchableOpacity 
                    activeOpacity={0.9}
                    style={styles.content}>
                    <View style={styles.holder}><MaterialCommunityIcons name="racing-helmet" size={24} color="orange" /></View>
                    <Text style={styles.small}>Chowdeck</Text>
                 </TouchableOpacity>

                    <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>

                    <Text style={styles.text}>International Services</Text>
                    <TouchableOpacity 
                        activeOpacity={0.9}
                        style={styles.content}>
                        <View style={styles.holder}><Ionicons name="logo-electron" size={24} color="black" /></View>
                        <Text style={styles.small}>Remit</Text>
                    </TouchableOpacity>

                    <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>

                    <Text style={styles.text}>Bills Payment</Text>

                    <FlatList
                        scrollEnabled={false}
                        data={itemBar}
                        numColumns={4}
                        renderItem={({item,})=>{
                        return(
                            <TouchableOpacity 
                            activeOpacity={0.9}
                            onPress={()=>navigation.navigate(item.screen)}
                            style={styles.content}>
                            <View style={styles.holder}>{item.icon}</View>
                            <Text style={styles.small}
                            numberOfLines={2}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}/>

                    <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>

                    <Text style={styles.text}>Finance</Text>
                        <FlatList
                            scrollEnabled={false}
                            data={itemBur}
                            numColumns={4}
                            renderItem={({item,})=>{
                            return(
                                <TouchableOpacity 
                                activeOpacity={0.9}
                                onPress={()=>navigation.navigate(item.screen)}
                                style={styles.content}>
                                <View style={styles.holder}>{item.icon}</View>
                                <Text style={styles.small}
                                numberOfLines={2}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        }}/>

                        <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>

                    <Text style={styles.text}>Rewards</Text>
                    <FlatList
                        scrollEnabled={false}
                        data={itemBor}
                        numColumns={4}
                        renderItem={({item,})=>{
                        return(
                            <TouchableOpacity 
                            activeOpacity={0.9}
                            onPress={()=>navigation.navigate(item.screen)}
                            style={styles.content}>
                            <View style={styles.holder}>{item.icon}</View>
                            <Text style={styles.small}
                            numberOfLines={2}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}/>

                     <Text style={styles.line}>
                        --------------------------------------------------
                    </Text>

                    <Text style={styles.text}>Others</Text>
                    <View style={styles.last}>
                        <TouchableOpacity 
                            activeOpacity={0.9}
                            onPress={()=>navigation.navigate(item.screen)}
                            style={styles.content}>
                            <View style={styles.holder}><Octicons name="credit-card" size={24} color={Colors.green4} /></View>
                            <Text style={styles.small}
                            numberOfLines={2}>Physcial OPay Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.9}
                            style={styles.content}>
                            <View style={styles.holder}><Octicons name="credit-card" size={24} color="black" /></View>
                            <Text style={styles.small}>Virtual OPay Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
)};

const styles = StyleSheet.create({
    head:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:"5%",
        backgroundColor:"white",
        height:"9%",
        paddingTop:"9%",
        alignItems:"center",
    },
    heading:{
        ...FONTS.body3,
        fontWeight:"600",
        color:'black'
    },
    box:{
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:"4%",
        paddingVertical:"4%",
        borderRadius:"3%",
    },
    content:{
        alignItems:"center",
        marginVertical:"4%",
        width:"25%",
    },
    holder:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:Colors.gray,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:6,
    },
    
    text:{
        ...FONTS.h3,
        marginBottom:"2%"
    },
    small:{
        ...FONTS.body5,
        color:'black',
        textAlign:"center",
        maxHeight:"45%",
        maxWidth:"90%",
        marginTop:5
    },
    last:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    line:{
        color:Colors.gray6,
        marginBottom:"2%"
    }
});