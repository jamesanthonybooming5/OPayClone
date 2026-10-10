import {Text,View,StyleSheet,TextInput,TouchableOpacity,FlatList,Modal } from "react-native";
import general from "../constants/General";
import CustomHeading from "../components/CustomHeading";
import { act, useState } from "react";
import { Feather,FontAwesome6,Ionicons,MaterialIcons,MaterialCommunityIcons,Octicons} from "@expo/vector-icons";
import { Colors, SCREEN_WIDTH,FONTS } from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";

export default function Beneficiaries(){
    const [text, setText] = useState ();
    const[activeTab, setActiveTab] = useState ("Recents");
    const [openPopupId, setOpenPopupId] = useState (null);
    const [deleteModalVisble, setDeleteModalVisible] = useState (false);
    const [selectedBeneficiary, setSelectedBeneficairy] = useState (null);

    const [itemBar,setitemBar]= useState([
    {id:"1",
        type:"Favourite",
        name:'ABCDEF GHIJK LMNOPQRS',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'800 123 4567',isFavorite:false},
    {id:"2",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOP',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'801 234 5678',isFavorite:false},
    {id:"3",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false},
    {id:"4",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false},
     {id:"5",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false},
     {id:"6",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false},
     {id:"7",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false},
    {id:"8",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',isFavorite:false}
    ]);

    const toggleFavorite= (id) => {setitemBar(prev => prev.map(item => (item.id === id ? { ...item, isFavorite: !item.isFavorite} : item)));
        setOpenPopupId (null);};

    const confirmDelete= (item) => { setSelectedBeneficairy(item); 
        setOpenPopupId (null); setDeleteModalVisible( true);};
    
    const handleDelete = () => {setitemBar (prev => prev.filter(item => item.id !== selectedBeneficiary.id));
        setDeleteModalVisible(false); setSelectedBeneficairy(null)
     }
     const displayeditems = itemBar.filter(item => {if (activeTab === "Favorites") return item.isFavorite; return true;});


     const renderItem = ({item}) => (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.account, {zIndex: openPopupId === item.id ? 1000 : 1}]}>
            <View style={styles.held}>
                <View style={styles.iconholder2}>{item.Icon}</View>
                <View style={styles.textholder}>
                    <Text style={FONTS.body8}>{item.name}</Text>
                    <Text style={FONTS.body5}>{item.price}</Text>
                </View>
            </View>
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={()=> setOpenPopupId(item.id)}>
                <Feather name="more-vertical" size={24} color={openPopupId === item.id ? "green" : "black"} /> 
            </TouchableOpacity>

            { openPopupId === item.id && (
                    <>
                    <TouchableOpacity 
                     activeOpacity={0.9}
                     style={styles.backdrop}
                     onPress={() => setOpenPopupId(null)}
                    />
                    <View style={styles.menucontainer}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.popitem}
                            onPress={()=> toggleFavorite(item.id)}>
                            <Octicons name={item.isFavorite? "star-fill":"star"} size={24} color={item.isFavorite? "#ffa500" : "black"} />
                            <Text style={{fontSize:13,fontWeight:"300"}}>{item.isFavorite? "Remove from Favourites" : "Add to Favourites"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            activeOpacity={0.9}
                            style={styles.popitem}
                            onPress={()=> confirmDelete(item)}>
                            <Feather name="trash-2" size={24} color="black" />
                            <Text style={{fontSize:13,fontWeight:"300"}}>Delete Beneficiary</Text>
                        </TouchableOpacity>
                        </View>
                    </>
                )}
        </TouchableOpacity>
     );
    return(
        <View style={general.container}>
            <CustomHeading title={"Beneficiaries"}/>

            <View style={styles.container}>
               <View style={styles.inputwrapper} >
                 <View style={styles.house}>
                    <Feather name="search" size={20} color={Colors.gray4} />
                    <TextInput
                    value={text}
                    placeholder='Phone No./OPay Account No./Name'
                    keyboardType="numbers-and-punctuation"
                    returnKeyType="done"
                    onChangeText={setText}
                    style={styles.inputtext}/>
                 </View>
                    {text && (
                        <TouchableOpacity
                         activeOpacity={0.9} 
                         onLongPress={()=>setText("")}>
                            <Ionicons name="close-circle" size={20} color={Colors.lightGray} />
                        </TouchableOpacity>
                     )}
               </View>

               <View style={styles.tabholder}>
                {["Recents", "Favorites"] .map((tab)=>{
                    const isactive = activeTab === tab;
                    return(
                        <TouchableOpacity
                          key={tab}
                          activeOpacity={0.9}
                          onPress={()=> setActiveTab(tab)}
                          style={styles.tabbutton}>
                            <Text style={[styles.tabtext, isactive && styles.activeTabText]}>{tab}</Text>
                            {isactive && <View style={styles.tabindicator}/>}
                        </TouchableOpacity>
                    )
                })}

               </View>
            </View>
            <FlatList
             showsVerticalScrollIndicator={false}
             data={displayeditems}
             keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />

            <Modal 
                  transparent={true}
                  visible={deleteModalVisble}
                  animationType="fade"
                  onRequestClose={() => setDeleteModalVisible(false)}>
                    <View style={styles.modaloverlay}> 
                       <View style={styles.modalcontent}>
                         <Text style={styles.modalbody}>Are you sure you want to delete this beneficiary ? </Text>
                         <View style={styles.modalbuttonrow}>
                                <TouchableOpacity
                                    activeOpacity={0.9} 
                                    style={styles.cancelbutton}
                                    onPress={() => setDeleteModalVisible(false)}>
                                    <Text style={styles.canceltext}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.deletebutton}
                                    onPress={handleDelete}>
                                    <Text style={styles.deletetext}>Delete</Text>
                              </TouchableOpacity>
                         </View>
                       </View>
                    </View>
                </Modal>
        </View>
);}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:5
    },
    inputtext:{
        fontSize:16,
        fontWeight:"300",
        width:"90%",
    },
    inputwrapper:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: SCREEN_WIDTH * 0.01,
        backgroundColor:Colors.grey2,
        height: SCREEN_WIDTH * 0.12,
        justifyContent:"space-between",
        marginVertical:"3%",
        marginHorizontal:"4%",
        borderRadius:10,
        paddingHorizontal:"4%"
    },
    house:{
        flexDirection:"row",
        alignItems:"center",
        gap:"3%",
        width:"90%"
    },
    tabholder:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:"4%"
   },
   tabbutton:{
    paddingVertical:"5%",
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
    tabindicator:{
        position:"absolute",
        bottom:0,
        left:17,
        right:17,
        height:2,
        backgroundColor:Colors.green7
    },
    account:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        justifyContent:"space-between",
        borderBottomColor:Colors.gray8,
        backgroundColor:"white",
        paddingHorizontal:"4%",
        paddingVertical:"6%",
        position:"relative"
    },
    held:{
        flexDirection:"row",
        alignItems:"center",
        flex:1
    },
    iconholder2:{
        width:45,
        height:45,
        borderRadius:25,
        backgroundColor:Colors.grey4,
        justifyContent:"center",
        alignItems:'center',
        marginRight:12
    },
    textholder:{
        alignItems:'flex-start',
        height:60,
        justifyContent:"center"
    },
    backdrop:{
        position:"absolute",
        top:-2000,
        bottom:-2000,
        left:-2000,
        right:-2000,
        zIndex:1000
    },
    menucontainer:{
        position:"absolute",
        right:10,
        top:70,
        backgroundColor:"white",
        borderRadius:8,
        width:200,
        shadowColor:"gray",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:4,
        elevation:20,
        zIndex:1000,
    },
    popitem:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:12,
        gap:"3%"
    },
    noborder:{
        borderBottomWidth:0,
    },
    modaloverlay:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(5, 5, 5, 0.44)"
    },
    modalcontent:{
        width:"90%",
        backgroundColor:"white",
        borderRadius:12,
        padding:20,
        alignItems:"center"
    },
    modalbody:{
        fontSize:13,
        color:Colors.fadeblack,
        textAlign:"center",
        marginBottom:20
    },
    modalbuttonrow:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
    },
    cancelbutton:{
        flex:1,
        paddingVertical:"5%",
        borderRadius:"17%",
        alignItems:"center",
        marginHorizontal:"2%",
        backgroundColor:Colors.green9,
    },
    canceltext:{
        fontSize:15,
        color:Colors.green14
    },
    deletebutton:{
        flex:1,
        paddingVertical:"5%",
        borderRadius:"17%",
        alignItems:"center",
        marginHorizontal:"2",
        backgroundColor:Colors.green7
    },
    deletetext:{
        fontSize:15,
        color:"white"
    }
});