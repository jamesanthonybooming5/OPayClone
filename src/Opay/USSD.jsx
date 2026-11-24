import {View,Text,StyleSheet, ScrollView,FlatList,TouchableOpacity,Modal,TextInput} from "react-native"
import general from "../constants/General"
import CustomHeading from "../components/CustomHeading";
import CustomButton from "../components/CustomButton";
import { FONTS,Colors,SCREEN_WIDTH } from "../constants/Theme";
import { useState } from "react";
import { Ionicons,Feather,FontAwesome,FontAwesome6} from "@expo/vector-icons";

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

export default function () {

    const [modalVisible, setModalVisible] = useState(false);
    const[selectedBank, setSelectedBank] = useState("Select bank");
    const [numb, setNumb] = useState('');
    const [isTrue, setIsTrue] = useState(false);


    const handleSelectBank = (bankName) => {setSelectedBank(bankName); setModalVisible(false);}
    const filteredBanks = itemBar.filter(bank => bank.name.toLowerCase().includes(numb.trim().toLowerCase()));
    const changeamount = (val) => {
        const cleanVal = val.replace(/[^0-9.]/g, '');
        setNumb(cleanVal);
    };

    const isButttonActive = Number(numb) >= 100;

    return(
        <View style={general.container}>
            <CustomHeading title={"Bank USSD"}/>
            <ScrollView style={styles.head}>
                <Text style={{paddingVertical:"5%"}}>Fund your OPay Account with your bank's USSD code </Text>
                <Text style={FONTS.body3a}>Bank</Text>
                <View>
                    <TouchableOpacity 
                        style={[styles.selector, {borderColor:handleSelectBank ? Colors.grey2 : Colors.green7}]}
                        activeOpacity={0.9}
                        onPress={()=> setModalVisible(true)}>
                            <View style={styles.icon}><FontAwesome name="bank" size={15} color={Colors.grey6} /></View>
                            <Text style={[styles.inputtext, selectedBank === "Select bank" && styles.placeholdertext]}>{selectedBank}</Text>
                            <Ionicons name="chevron-forward" size={17} color={Colors.grey6} style={{marginLeft:"55%"}}/>
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
                                        {/* <View style={[styles.house,{borderColor: isTrue? Colors.green : Colors.grey2}]}>
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
                                        </View> */}
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

                <Text style={FONTS.body3a}>Amount</Text>
                <View style={[styles.house,{borderColor: isTrue? Colors.green : Colors.grey2}]}>
                    <View style={styles.wrapper}>
                        <FontAwesome6 name="naira-sign" size={13} color="black" />
                        <TextInput
                            value={numb}
                            placeholder='100.00-99,999,999.00'
                            keyboardType='numeric'
                            returnKeyType="done"
                            onChangeText={changeamount}
                            onFocus={()=>setIsTrue(true)}
                            onBlur={()=> setIsTrue(false)}
                            style={[ styles.inputtexts, Number(numb) >= 1? Colors.grey6 : Colors.black]}
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

                <CustomButton
                    title={"Confirm"}
                    disabled={!isButttonActive}
                    buttonStyle={styles.button}
                    textStyle={general.buttonText}
                />
            </ScrollView>
        </View>
)}

const styles=StyleSheet.create ({
    head:{
        paddingHorizontal:"4%",
        backgroundColor:"white"
    },
    selector:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:Colors.grey2,
        borderRadius:5,
        paddingHorizontal:"4%",
        paddingVertical:'3%',
        marginVertical:"4%"
    },
    icon:{
        width:28,
        height:28,
        borderRadius:20,
        backgroundColor:'white',
        justifyContent:"center",
        alignItems:"center"
    },
    placeholdertext:{
        color:Colors.grey6,
        fontSize:15,
        marginLeft:"5%"
    },
     inputtext:{
        color:Colors.grey6,
        fontSize:15,
        marginLeft:"5%"
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
    house:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:Colors.grey2,
        height: SCREEN_WIDTH * 0.12,
        justifyContent:"space-between",
        marginVertical:"3%",
        borderRadius:5,
        paddingHorizontal:"4%",
        borderWidth:1
    },
    wrapper:{
        flexDirection:"row",
        alignItems:"center",
        gap:"3%"
    },
    inputtexts:{
        fontSize:15,
        width:"80%"
    },
    button:{
        width:"90%",
        alignSelf:"center",
        backgroundColor:Colors.green4,
        marginTop:"20%"
    },
});