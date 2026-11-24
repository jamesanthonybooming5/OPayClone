import {View,Text,StyleSheet,TouchableOpacity,Modal,TextInput,FlatList} from "react-native"
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { useState } from 'react';
import { Colors } from '../constants/Theme';
import {Ionicons,} from '@expo/vector-icons';
import CustomButton from "../components/CustomButton";


const itemBar=[
    {id:"1",
        name:'Abia'},
    {id:"2",
        name:'Adamawa'},
    {id:"3",
        name:'Anambra',},
    {id:"4",
        name:'Borno'},
    {id:"5",
        name:'Delta',},
    {id:"6",
        name:'Edo'},
    {id:"7",
        name:'Enugu'},
    {id:"8",
        name:'Imo',},
    {id:"9",
        name:'Kaduna'},
    {id:"10",
        name:'Kebbi',},
    {id:"11",
        name:'Lagos'},
    {id:"12",
        name:'Niger'},
    {id:"13",
        name:'Ogun',},
    {id:"14",
        name:'Osun'},
    {id:"15",
        name:'Oyo',},
    {id:"16",
        name:'Pleateu',}
]

const itemBur=[
    {id:"1",
        name:'Afijio'},
    {id:"2",
        name:'Egbeda'},
    {id:"3",
        name:'Ibarapa',},
    {id:"4",
        name:'Ibadan Central'},
    {id:"5",
        name:'Ibadan North',},
    {id:"6",
        name:'Ibadan South'},
    {id:"7",
        name:'Ibadan West'},
    {id:"8",
        name:'Ibadan East',},
    {id:"9",
        name:'Jobele'},
    {id:"10",
        name:'Ona Ara',},
    {id:"11",
        name:'Oyo'},
    {id:"12",
        name:'Ogbomosho'},
    {id:"13",
        name:'Saki',},
    {id:"14",
        name:'Oluyole'},
    {id:"15",
        name:'Oke Iho',},
    {id:"16",
        name:'Igbeti',}
]

export default function Address () {
    const [modalVisible, setModalVisible] = useState(false);
    const[selectedState, setSelectedState] = useState("Select State");
    const [numb, setNumb] = useState('');
    const [isTrue, setIsTrue] = useState("");
    const[selectedLGA, setSelectedLGA] = useState("Select LGA");
    const [modVisible, setModVisible] = useState(false);
    const[selectedArea, setSelectedArea] = useState("Select Area");
    const [Area, setArea] = useState(false);
    const [text, setText] = useState('');

    const handleSelectBank = (StateName) => {setSelectedState(StateName); setModalVisible(false);}
    const filteredBanks = itemBar.filter(State => State.name.toLowerCase().includes(numb.trim().toLowerCase()));
    const handleSelectLGA = (LGAName) => {setSelectedLGA(LGAName); setModVisible(false);}
    const filteredLGA = itemBur.filter(LGA => LGA.name.toLowerCase().includes(numb.trim().toLowerCase()));
    const handleSelectArea = (AreaName) => {setSelectedArea(AreaName); setArea(false);}
    const filteredArea = itemBur.filter(Area => Area.name.toLowerCase().includes(numb.trim().toLowerCase()));

    return(
        <View style={general.container}>
            <CustomHeading title={"Edit Address"}/>

            <View style={styles.head}>

                <Text style={styles.text}>Please fill in your current address</Text>

                <Text style={{fontWeight:15,paddingTop:"6%"}}>State</Text>

                <View>
                    <TouchableOpacity 
                        style={styles.selector}
                        activeOpacity={0.9}
                        onPress={()=> setModalVisible(true)}>
                        <Text style={[styles.inputtext, selectedState === "Select State" && styles.placeholdertext]}>{selectedState}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.grey6}/>
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
                                        <Text style={{fontWeight:"600",fontSize:15,}}>Select State</Text>
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
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <Text style={{fontWeight:15,paddingTop:"6%"}}>LGA</Text>

                <View>
                    <TouchableOpacity 
                        style={styles.selector}
                        activeOpacity={0.9}
                        onPress={()=> setModVisible(true)}>
                        <Text style={[styles.inputtext, selectedLGA === "Select LGA" && styles.placeholdertext]}>{selectedLGA}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.grey6}/>
                    </TouchableOpacity>
                    <Modal 
                        animationType='slide'
                        transparent={true}
                        visible={modVisible}
                        onRequestClose={()=> setSelectedLGA(false)}>
                        <View style={styles.modalBackdrop}>
                            <View style={styles.bottomSheet}>
                                <View style={{backgroundColor:"white"}}>
                                    <View style={styles.modalHeader}>
                                        <TouchableOpacity onPress={()=> setModVisible(false)}>
                                            <Ionicons name="close" size={24} color={Colors.grey6}/>
                                        </TouchableOpacity>
                                        <Text style={{fontWeight:"600",fontSize:15,}}>Select LGA</Text>
                                    </View>
                                </View>
                                <FlatList
                                    data={filteredLGA}
                                    keyExtractor={(item)=> item.id}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({item})=> (
                                    <TouchableOpacity
                                    style={styles.bankItem}
                                    onPress={()=> handleSelectLGA(item.name)}>
                                    <Text style={styles.banktext}>{item.name}</Text>
                                    </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <Text style={{fontWeight:15,paddingTop:"6%"}}>Area</Text>

                <View>
                    <TouchableOpacity 
                        style={styles.selector}
                        activeOpacity={0.9}
                        onPress={()=> setArea(true)}>
                        <Text style={[styles.inputtext, selectedArea === "Select Area" && styles.placeholdertext]}>{selectedArea}</Text>
                        <Ionicons name="chevron-down" size={20} color={Colors.grey6}/>
                    </TouchableOpacity>
                    <Modal 
                        animationType='slide'
                        transparent={true}
                        visible={Area}
                        onRequestClose={()=> setArea(false)}>
                        <View style={styles.modalBackdrop}>
                            <View style={styles.bottomSheet}>
                                <View style={{backgroundColor:"white"}}>
                                    <View style={styles.modalHeader}>
                                        <TouchableOpacity onPress={()=> setArea(false)}>
                                            <Ionicons name="close" size={24} color={Colors.grey6}/>
                                        </TouchableOpacity>
                                        <Text style={{fontWeight:"600",fontSize:15,}}>Select LGA</Text>
                                    </View>
                                </View>
                                <FlatList
                                    data={filteredArea}
                                    keyExtractor={(item)=> item.id}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({item})=> (
                                    <TouchableOpacity
                                    style={styles.bankItem}
                                    onPress={()=> handleSelectArea(item.name)}>
                                    <Text style={styles.banktext}>{item.name}</Text>
                                    </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

                <Text style={{fontWeight:15,paddingTop:"6%"}}>Landmark</Text>
                <View style={styles.selector}>
                    <TextInput
                        value={isTrue}
                        placeholder='Please enter landmark'
                        keyboardType="default"
                        returnKeyType="return"
                        onChangeText={setIsTrue}
                        style={styles.inputtext}
                    />
                    {isTrue && (
                        <TouchableOpacity
                            activeOpacity={0.9} 
                            onPress={()=>setIsTrue("")}>
                            <Ionicons name="close-circle" size={22} color={Colors.lightGray} />
                        </TouchableOpacity>
                    )}
                </View>

                <Text style={{fontWeight:15,paddingTop:"6%"}}>Address</Text>
                <View style={styles.selector}>
                    <TextInput
                        value={text}
                        placeholder='Please enter Address'
                        keyboardType="default"
                        returnKeyType="return"
                        onChangeText={setText}
                        style={styles.inputtext}
                    />
                    {text && (
                        <TouchableOpacity
                            activeOpacity={0.9} 
                            onPress={()=>setText("")}>
                            <Ionicons name="close-circle" size={22} color={Colors.lightGray} />
                        </TouchableOpacity>
                    )}
                </View>

                <CustomButton title={"Save"}
                    disabled={!text} 
                    buttonStyle={styles.button}
                    textStyle={general.buttonText}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    head:{
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:'4%'
    },
    text:{
        fontWeight:"500",
        paddingTop:"6%",
        fontSize:15
    },
    selector:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:45,
        backgroundColor:Colors.grey2,
        borderRadius:10,
        paddingHorizontal:"4%",
        marginTop:"3%"
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
    inputtext:{
    fontSize:15,
    width:"80%"
    },
    button:{
        width:"90%",
        alignSelf:"center",
        backgroundColor:Colors.green4,
        marginTop:"50%"
    },
});