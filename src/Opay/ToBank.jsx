import {View,Text,StyleSheet, ScrollView, TextInput,TouchableOpacity,Modal, FlatList} from "react-native";
import general from '../constants/General';
import {MaterialIcons,Ionicons,FontAwesome6,Feather,FontAwesome} from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { Colors,FONTS } from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SCREEN_WIDTH } from '../constants/Theme';
import CustomButton from "../components/CustomButton";

export default function ToBank () {
    const [text,setText] = useState ("");
    const navigation=useNavigation();
    const [isFocused, setIsFocused] = useState(false); 
    const[activeTab, setActiveTab] = useState ("Recents");
    const [modalVisible, setModalVisible] = useState(false);
    const[selectedBank, setSelectedBank] = useState("Select Bank");
    const [isTrue, setIsTrue] = useState(false);
    const [numb, setNumb] = useState('');
    
    const itemBar=[
    {id:"1",
        name:'OPay Digital Services'},
    {id:"2",
        name:'Access Bank'},
    {id:"3",
        name:'Guarantee Trust Bank (GTB',},
    {id:"4",
        name:'Kuda Bank'},
    {id:"5",
        name:'Guarantee Trust Bank (GTB)',},
    {id:"6",
        name:'MoniePoint'},
    {id:"7",
        name:'Access Bank'},
    {id:"8",
        name:'United Bank of Africa(UBA)',},
    {id:"9",
        name:'Zenith Bank'},
    {id:"10",
        name:'Wema Bank PLC',},
    {id:"11",
        name:'Stanbic IBTC'},
    {id:"12",
        name:'Access Bank'},
    {id:"13",
        name:'First Bank PLC',},
    {id:"14",
        name:'Zenith Bank'},
    {id:"15",
        name:'Guarantee Trust Bank (GTB)',},
    {id:"16",
        name:'Gotham Trust Bank (GTB)',},
    ]
    const itemBur=[
        {id:"1",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOPQRS',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
        price:'800 123 4567',
        bankname:"Globus Bank"
    },
    {id:"2",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOP',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
        price:'801 234 5678',
        bankname:"Wema Bank PLC"
    },
    {id:"3",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
        price:'812 345 6789',
        bankname:"United Bank Of Africa"
    },
    {id:"4",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
        price:'812 345 6789',
        bankname:"Access Bank PLC"
    },
    ]

    const filteredData = itemBur.filter(item => item.type === activeTab)
    const handleSelectBank = (bankName) => {setSelectedBank(bankName); setModalVisible(false);}
    const filteredBanks = itemBar.filter(bank => bank.name.toLowerCase().includes(numb.trim().toLowerCase()));

    return(
        <View style={general.container}>
            <View style={styles.Head}> 
                <StatusBar backgroundColor="white" barStyle={'dark-content'} />  
                <MaterialIcons name="arrow-back-ios-new" size={20} color="black" onPress={() => navigation.goBack('')} style={{zIndex:10}}/>
                <Text style={styles.headtitle}>Transfer To Bank Account</Text>
                <Text style={FONTS.h4} onPress={()=>navigation.navigate('')}>History</Text>
            </View>

            <ScrollView
             showsVerticalScrollIndicator={false}
             style={{marginHorizontal:"4%"}}>

                <View style={styles.Free}>
                    <View style={styles.freecontainer}>
                    <FontAwesome6 name="naira-sign" size={10} color="white" />
                    </View>
                    <Text style={styles.zero}>Free transfers for the day: 3</Text>
                </View>

                <View style={styles.inputholder}>
                    <Text style={general.label}>Recipient Account</Text>
                    <View style={[styles.inputwrapper, {borderColor:isFocused? Colors.green7 : Colors.grey2,
                        backgroundColor:"white"}]}>
                        <TextInput 
                            value={text}
                            onChangeText={setText}
                            placeholder="Enter 10 digits Account Number"
                            keyboardType="number-pad"
                            returnKeyType="done"
                            onFocus={()=>setIsFocused(true)}
                            onBlur={()=> setIsFocused(false)}
                            style={styles.inputtext}
                        />
                       {text && (
                            <TouchableOpacity
                                activeOpacity={0.9} 
                                onPress={()=>setText("")}>
                                <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                            </TouchableOpacity>
                        )}
                    </View>
                    <View>
                        <TouchableOpacity 
                        style={[styles.selector, {borderColor:handleSelectBank ? Colors.grey2 : Colors.green7}]}
                        activeOpacity={0.9}
                        onPress={()=> setModalVisible(true)}>
                            <Text style={[styles.inputtext, selectedBank === "Select Bank" && styles.placeholdertext]}>{selectedBank}</Text>
                            <Ionicons name="chevron-forward" size={20} color={Colors.grey6}/>
                        </TouchableOpacity>
                        <Modal 
                         animationType='slide'
                         transparent={true}
                         visible={modalVisible}
                         onRequestClose={()=> setModalVisible(false)}>
                            <View style={styles.modalBackdrop}>
                                <View style={styles.bottomSheet}>
                                <View style={{backgroundColor:"white"}}>
                                    <View style={styles.modalHeader}>
                                        <TouchableOpacity onPress={()=> setModalVisible(false)}>
                                            <Ionicons name="close" size={24} color={Colors.grey6}/>
                                        </TouchableOpacity>
                                        <Text style={{fontWeight:"600",fontSize:15,}}>Select Bank</Text>
                                    </View>
                                   <View style={[styles.house,{borderColor: isTrue? Colors.green : Colors.grey2}]}>
                                     <View style={styles.wrapper}>
                                        <Feather name="search" size={20} color={Colors.gray4} />
                                        <TextInput
                                            value={numb}
                                            placeholder='Search Bank Name'
                                            keyboardType="default"
                                            returnKeyType="return"
                                            onChangeText={setNumb}
                                            onFocus={()=>setIsTrue(true)}
                                            style={styles.inputtexts}
                                        />
                                    </View>
                                    {numb && (
                                        <TouchableOpacity
                                            activeOpacity={0.9} 
                                            onPress={()=>setNumb("")}>
                                            <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                                   </View>
                                <FlatList
                                     data={filteredBanks}
                                     keyExtractor={(item)=> item.id}
                                     showsVerticalScrollIndicator={false}
                                     renderItem={({item})=> (
                                        <TouchableOpacity
                                         style={styles.bankItem}
                                         onPress={()=> handleSelectBank(item.name)}>
                                            <Text style={styles.banktext}>{item.name}</Text>
                                         </TouchableOpacity>
                                     )}
                                     ListEmptyComponent={
                                     <View style={{alignItems:"center",paddingVertical:32}}>
                                        <Text style={{color:Colors.grey8}}>No bank found for {numb}</Text>
                                     </View>}
                                     />
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <CustomButton title="Next"
                        disabled={!text} 
                        onPress={()=> navigation.navigate("")}
                        buttonStyle={[styles.button, {backgroundColor: text? Colors.green15: Colors.green4} ]}
                        textStyle={general.buttonText}
                    />
                </View>

                <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={()=> navigation.navigate('Transfer')}
                    style={styles.monitorholder}>
                    <View style={styles.monitorwrapper}>
                        <View style={styles.monitoricon}>
                        <Ionicons name="tv" size={23} color={Colors.green15} style={{position:"relative"}}/>
                        <MaterialIcons name="wifi" size={13} color="white" style={styles.bell}/>
                    </View>
                    <Text>Bank Transfer Success Rate Monitor</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={Colors.grey6}/>
                </TouchableOpacity>

                <View style={styles.tabcon}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={styles.tabholder}>
                        {["Recents","Favourites"].map((tab)=>{const isActive = activeTab ===tab;
                        return(
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    key={tab}
                                    onPress={() => setActiveTab(tab)}
                                    style={styles.tabbutton}>
                                    <Text style={[styles.tabtext, isActive && styles.activeTabText]}>{tab}</Text>
                                    {isActive && <View style={styles.tabindicator}/>}
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <TouchableOpacity 
                     activeOpacity={0.9}
                     onPress={()=> navigation.navigate('Beneficiaries')}>
                        <Feather name="search" size={20} color={Colors.green15} />
                    </TouchableOpacity>
                    </View>
                    <FlatList
                        scrollEnabled={false}
                        style={styles.border}
                        data={filteredData}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>(
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={()=> {navigation.navigate('Bankacct', {
                                    beneficiaryId:item.id,
                                    beneficiaryName:item.name,
                                    beneficiaryAccount:item.price,
                                    beneficiaryBank:item.bankname,
                                    beneficiaryIcon:item.Icon
                                })}}
                                style={styles.accounts}>
                                   <View style ={{alignItems:"flex-start"}}>
                                     <Text style={FONTS.body8}>{item.name}</Text>
                                    <View style={styles.textholder}>
                                        <Text style={FONTS.body5}>{item.price}</Text>
                                        <Text style={FONTS.body5}>{item.bankname}</Text>
                                    </View>
                                   </View>
                                    <View style={styles.iconholder2}>{item.Icon}</View>
                                </TouchableOpacity>
                            )}
                        />
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        style={styles.view}
                        onPress={()=>navigation.navigate("Beneficiaries")}>
                            <Text style={FONTS.body5}>View All</Text>
                            <Ionicons name="chevron-forward" size={15} color={Colors.grey6}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.more}>More Events</Text>
                    <View style={styles.super}>
                        <View style={styles.iconholder}><FontAwesome name="tag" size={24} color="blueviolet"/></View>
                        <View>
                            <Text style={FONTS.body4}>Super Voucher Package</Text>
                            <Text style={FONTS.body4a}>Claim 15 Discounts with #99 on any Bill</Text>
                        </View>
                    </View>
                    <View style={styles.super}>
                        <View style={styles.iconholder}><FontAwesome name="tag" size={24} color="blueviolet"/></View>
                        <View>
                            <Text style={FONTS.body4}>Get huge data discounts daily!????</Text>
                            <Text style={FONTS.body4a}>???? Flash Sale! Claim up to #750 OFF other</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create ({
    Head:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:"5%",
        backgroundColor:Colors.white,
        height:"8%",
        paddingTop:"9%",
        alignItems:"center",
    },
    headtitle:{
        fontSize:17,
        fontWeight:'600',
        color:"black",
    },
    freecontainer:{
        width:20,
        height:20,
        borderRadius:20,
        borderWidth:2,
        backgroundColor:Colors.purple,
        borderColor:"#bb9beedc",
        alignItems:'center',
        justifyContent:"center"
    },
    zero:{
        ...FONTS.body4,
        color:Colors.purple
    },
    Free:{
        width:"100%",
        flex:1,
        borderRadius:"3%",
        backgroundColor:Colors.lightpurple,
        paddingVertical:'3%',
        flexDirection:'row',
        paddingHorizontal:"4%",
        gap:"2%",
        marginTop:"3%",
    },
    inputholder:{
        width:"100%",
        borderRadius:10,
        backgroundColor:'#fffefed5',
        paddingHorizontal:"4%",
        marginTop:"4%",
        paddingVertical:"4%",
    },
    inputwrapper:{
        borderRadius: SCREEN_WIDTH * 0.02,
        marginBottom:"7%",
        borderBottomWidth:1,
        paddingVertical:"4%",
        height: SCREEN_WIDTH * 0.14,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
     inputtext:{
        fontSize:15,
        width:"80%",
        fontWeight:"300"
    },
    button:{
        width:"90%",
        alignSelf:"center",
        marginTop:"10%"
    },
    monitorholder:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:"4%",
        paddingVertical:"4%",
        borderRadius:10,
        marginTop:"4%"
    },
    monitorwrapper:{
        flexDirection:"row",
        alignItems:"center",
        gap:"3%"
    },
    monitoricon:{
        width:35,
        height:35,
        borderRadius:25,
        backgroundColor:Colors.green11,
        alignItems:"center",
        justifyContent:"center"
    },
    bell:{
        position:"absolute",
        left:11,
        top:10
    },
    selector:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        height:50
    },
    placeholdertext:{
        color:Colors.grey5
    },
    modalBackdrop:{
        flex:1,
        backgroundColor:"rgba(4, 4, 4, 0.5)",
        justifyContent:"flex-end",
    },
    bottomSheet:{
        backgroundColor:Colors.grey2,
        paddingBottom:"10%",
        maxHeight:"95%",
        flex:1
    },
    modalHeader:{
        flexDirection:"row",
        gap:"35%",
        alignItems:"center",
        paddingBottom:10,
        paddingHorizontal:"4%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:10
    },
    bankItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:20,
        borderBottomWidth:1,
        borderColor:Colors.grey2,
        paddingHorizontal:"4%"
    },
    banktext:{
        fontSize:16,
        color:Colors.offblack
    },
    wrapper:{
        flexDirection:"row",
        alignItems:"center",
        gap:"3%",
    },
    house:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:Colors.grey2,
        height: SCREEN_WIDTH * 0.12,
        justifyContent:"space-between",
        marginVertical:"3%",
        marginHorizontal:"2%",
        borderRadius:10,
        paddingHorizontal:"4%",
        borderWidth:1
    },
    inputtexts:{
        fontWeight:"300",
        maxWidth:"70%",
        flex:1
    },
    tabcon:{
        paddingVertical:"4%",
        backgroundColor:"white",
        borderRadius:"3%",
        paddingHorizontal:"4%",
        marginTop:"3%"
   },
   tabholder:{
        flexDirection:"row",
        justifyContent:"flex-start",
        gap:25
   },
   tabindicator:{
        position:"absolute",
        bottom:0,
        left:17,
        right:17,
        height:2,
        backgroundColor:Colors.green7
    },
    tabbutton:{
    paddingBottom:15,
    position:"relative"
   },
   tabtext:{
        fontSize:15,
        color:Colors.offblack,
   },
    activeTabText:{
        color:Colors.green7,
        fontSize:15,
   },
   border:{
    borderTopWidth:1,
    borderColor:Colors.gray
    },
    accounts:{
        width:370,
        height:50,
        paddingHorizontal:'2%',
        marginVertical:"2%",
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:"5%",
    },
    iconholder2:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Colors.grey3,
        justifyContent:"center",
        alignItems:'center',
        marginRight:35
    },
    textholder:{
        borderBottomWidth:1,
        height:60,
        marginTop:2,
        borderColor:Colors.gray,
        width:'70%',
        flexDirection:"row",
        gap:5
    },
    view:{
        alignSelf:'center',
        width:"25%",
        height:"7%",
        borderRadius:20,
        backgroundColor:Colors.grey2,
        flexDirection:"row",
        marginBottom:2,
        alignItems:"center",
        justifyContent:"center"
    },
     iconholder:{
        width:40,
        height:40,
        borderRadius:10,
        backgroundColor:Colors.grey2,
        justifyContent:"center",
        alignItems:'center',
        marginRight:18
    },
    tag:{
        paddingHorizontal:"4%",
        backgroundColor:"white",
        borderRadius:10,
        marginTop:"4%",
        marginBottom:"20%"
    },
    more:{
        paddingVertical:"4%",
        fontSize:17,
        fontWeight:'500'
    },
    super:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15
    }
});