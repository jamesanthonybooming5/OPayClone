import {View,Text,ScrollView,StyleSheet,TouchableOpacity,FlatList} from "react-native";
import general from "../constants/General";
import {Ionicons,FontAwesome} from "@expo/vector-icons";
import CustomHeading from "../components/CustomHeading";
import { Colors,} from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Notif () {
    const navigation=useNavigation();
    const [showBanner, setShowBanner] = useState (true);
     const[activeTab, setActiveTab] = useState ("Transactions");

    const itemBar=[
        {id:"1",
            type:"Transactions",
            title:"OWealth Interest Earned",
            message:"Your Avaialable Balance 'OWealth' interest earned #0.09. Your OWealth balance is #0.09",
            screen:"Available",
            time:"Today 08:29",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        }, 
        {id:"2",
            type:"Transactions",
            title:"Incoming Transfer Successful",
            message:"ABCDE FGHIJK LMNOP has sent you #5,000.00. Enjoy up to 6% cashback... Get up to 6% bonus on OPay Airtime.",
            screen:"",
            time:"Yesterday 08:47",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:"3",
            type:"Transactions",
            title:"OWealth Interest Earned",
            message:"Your Avaialable Balance 'OWealth' interest earned #0.09. Your OWealth balance is #0.09",
            screen:"",
            time:"Yesterday 08:47",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:"4",
            type:"Transactions",
            title:"Incoming Transfer Successful",
            message:"ABCDE FGHIJK LMNOP has sent you #5,000.00. Enjoy up to 6% cashback... Get up to 6% bonus on OPay Airtime.",
            screen:"",
            time:"Yesterday 08:47",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:'5',
            type:"Services",
            title:"Update on Your Airtime Dispute",
            message:"There is a new update regarding your complaint about a pending airtime transaction. Click on view details ",
            screen:"",
            time:"2026-09-18 22:31",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
            view:"View"
        },
        {id:'6',
            type:"Services",
            title:"Airtime Cash Back",
            message:"You have receive #10.00 cashback on your recent airtime recharge",
            screen:"",
            time:"2026-09-01 04:59",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
            view:"View"
        },
        {id:'7',
            type:"Services",
            title:"Airtime Cash Back",
            message:"You have receive #10.00 cashback on your recent airtime recharge",
            screen:"",
            time:"2026-09-01 04:59",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
            view:"View"
        },
        {id:'8',
            type:"Services",
            title:"Update on Your Airtime Dispute",
            message:"You have receive #10.00 cashback on your recent airtime recharge",
            screen:"",
            time:"2026-09-01 04:59",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
            view:"View"
        },
        {id:'9',
            type:"Activities",
            title:"Come Carry Your Bonus O!!!",
            message:"Na just #300 you go drop, we go run you #30 off. Easy like that! Come flex this awoof sharp-sharp. Tap am make e no pass you!",
            screen:"",
            time:"2026-09-20 10:29",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:'10',
            type:"Activities",
            title:"Your #690 Savings Vouchers Are Here",
            message:"Claim your vouchers, save on deposits & earn more. Tap to claim!",
            screen:"",
            time:"2026-09-20 10:29",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:'11',
            type:"Activities",
            title:"OWealth Interest Earned",
            message:"Your Avaialable Balance 'OWealth' interest earned #0.09. Your OWealth balance is #0.09",
            screen:"",
            time:"2026-09-20 10:29",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
        {id:'12',
            type:"Activities",
            title:"Final Day! Lock in 27% p.a. on Your Target",
            message:"Create your Target today and keep earning 27% p.a. even after the event ends. Don't miss out-tap to start now",
            screen:"",
            time:"2026-09-20 10:29",
            icon:<FontAwesome name="opera" size={15} color="#04b471"/>,
        },
]
const filteredData = itemBar.filter(item => item.type === activeTab);

    return(
        <View style={general.container}>
            <CustomHeading title={"Notifications"}/>

                <View style={styles.tabcon}>
                    {["Transactions", "Services","Activities"].map((tab)=>{
                        const isActive = activeTab ===tab;
                        return(
                            <TouchableOpacity
                            activeOpacity={0.9}
                            key={tab}
                            style={[styles.tabbutton, isActive && styles.activeTabButton]}
                            onPress={() => setActiveTab(tab)}>
                                <Text style={[styles.tabtext, isActive && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        );
                    })}
                    
                </View>
                {showBanner && (
                    <View style={styles.banner}>
                        <View style={styles.bannerleft}>
                            <Ionicons name="notifications-sharp" size={18} color={Colors.green8}/>
                            <Text 
                            numberOfLines={2}
                            style={styles.bannertext}>Enable notifications to get the latest from OPay </Text>
                        </View>
                    <View style={styles.bannerright}>
                            <TouchableOpacity
                             style={styles.turnbutton}
                             activeOpacity={0.9}>
                                <Text style={styles.turntext}>Turn on</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={()=> setShowBanner(false)}>
                            <Ionicons name="close" size={20} color={Colors.gray4}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            <ScrollView 
            showsVerticalScrollIndicator={false}>
                <FlatList
                scrollEnabled={false}
                data={filteredData}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) =>{
                    return(
                        <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate(item.screen)}
                        style={styles.card}>
                            <View style={styles.header}>
                                <View style={styles.iconholder}>
                                    <Text>{item.icon}</Text>
                                     </View>
                                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                </View>
                                <Text style={styles.message}>{item.message}</Text>
                                <View style={styles.footer}>
                                    <Text style={styles.time}>{item.time}</Text>
                                    <View style={styles.viewrow}>
                                        <Text style={styles.view}>View</Text>
                                        <Ionicons name="chevron-forward" size={18} color={Colors.green8}/>
                                    </View>
                                </View>
                        </TouchableOpacity>
                    )
                }}
                    />
            </ScrollView>
        </View>
    )};

const styles = StyleSheet.create ({
   tabcon:{
    flexDirection:"row",
    paddingHorizontal:"4%",
    paddingVertical:"4%",
    alignContent:"flex-start",
    gap:10,
    backgroundColor:Colors.grey2
   },
   tabbutton:{
    paddingVertical:"3%",
    paddingHorizontal:"5%",
    borderRadius:20,
    backgroundColor:Colors.gray8
   },
   activeTabButton:{
    backgroundColor:Colors.green9,
    borderWidth:1,
    borderColor:Colors.green6
   },
   tabtext:{
    color:Colors.fadeblack 
   },
   activeTabText:{
   color:Colors.green8,
   },
   banner:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:"4%",
    paddingVertical:"3%",
    borderRadius:8,
    backgroundColor:"white",
    width:"113%",
   },
   bannerleft:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    gap:8,
   },
   bannerright:{
    flexDirection:"row",
    alignItems:"center",
    gap:12
   },
   bannertext:{
    fontWeight:"300",
    fontSize:14,
    color:Colors.green8,
    maxWidth:"80%"
   },
   turnbutton:{
    backgroundColor:Colors.green8,
    paddingHorizontal:"9%",
    paddingVertical:"5%",
    borderRadius:15
   },
   turntext:{
    color:"white",
    fontSize:12,
    fontWeight:"300"
   },
   card:{
    backgroundColor:"white",
    borderRadius:12,
    paddingVertical:16,
    marginTop:"5%",
    marginHorizontal:"4%",
    paddingHorizontal:"4%"
   },
   header:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    marginBottom:10
   },
   iconholder:{
    width:25,
    height:25,
    borderRadius:15,
    backgroundColor:Colors.gray8,
    justifyContent:"center",
    alignItems:"center"
   },
   title:{
    fontSize:16,
    color:"black",
    fontWeight:"400",
    maxWidth:"85%"
   },
   message:{
    fontSize:13,
    color:Colors.fadeblack,
    lineHeight:18,
    marginBottom:"5%"
   },
  footer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderTopWidth:1,
    borderTopColor:Colors.gray,
    paddingTop:"2%"
  },
  time:{
    fontSize:12,
    color:Colors.gray10,
    fontWeight:"300"
  },
  viewrow:{
    flexDirection:"row",
    alignItems:"center"
  },
  view:{
    fontSize:12,
    color:Colors.green8
  }
}) 