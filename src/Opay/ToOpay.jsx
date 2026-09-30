import {View,Text,StyleSheet,ScrollView,TouchableOpacity,FlatList,TextInput} from 'react-native';
import general from '../constants/General';
import {MaterialIcons,MaterialCommunityIcons,Ionicons,FontAwesome6} from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { Colors,FONTS } from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SCREEN_WIDTH } from '../constants/Theme';

export default function ToOpay () {
    const [text,setText] = useState ("");
    const navigation=useNavigation();
    const[activeTab, setActiveTab] = useState ("Recents");

    const itemBar=[
    {id:"1",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOPQRS',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'800 123 4567'},
    {id:"2",
        type:"Recents",
        name:'ABCDEF GHIJK LMNOP',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'801 234 5678'},
    {id:"3",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',},
    {id:"4",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',},
    {id:"5",
        type:"Recents",
        name:'ABCDEFGHI JKLMNO PQURST',Icon:<FontAwesome6 name="user-large" size={20} color="white" />,
    price:'812 345 6789',},
    ]

    const filteredData = itemBar.filter(item => item.type === activeTab);

    return(
        <View style={general.container}>
            
         <View style={styles.Head}> 
             <StatusBar backgroundColor="white" barStyle={'dark-content'} />  
             <MaterialIcons name="arrow-back-ios-new" size={20} color="black" onPress={() => navigation.goBack('')} style={{zIndex:10}}/>
             <Text style={styles.headtitle}>Transfer To OPay Account</Text>
             <Text style={FONTS.h4} onPress={()=>navigation.navigate('')}>History</Text>
          </View>
         <ScrollView
             showsVerticalScrollIndicator={false}
             style={{marginHorizontal:"4%"}}>
             <View style={styles.Free}>
                 <View style={styles.freecontainer}>
                    <FontAwesome6 name="naira-sign" size={10} color="white" />
                 </View>
                 <Text style={FONTS.body3}>Instant, Zero Issues, Free</Text>
             </View>

             <View style={styles.Input}>
                 <Text style={general.label}>Recipient Account</Text>
                 <View style={styles.inputwrapper}>
                     <TextInput 
                        value={text}
                        onChangeText={setText}
                        placeholder='Phone No./OPay Account No./Name'
                        secureTextEntry={false}
                        style={styles.inputtext}/>

                        <TouchableOpacity 
                        activeOpacity={0.9}
                        onPress={()=>navigation.navigate('')}>
                        <MaterialCommunityIcons name={"line-scan"} color={Colors.gray4} size={20}/>
                        </TouchableOpacity>
                 </View>
                 <Text style={FONTS.body7}>Don't know the recipient's Opay account number ?</Text>
                 
                 <TouchableOpacity
                 style={styles.ask}
                 activeOpacity={0.9}>
                 <Text style={FONTS.body4}>Ask them</Text> 
                 <Ionicons name="chevron-forward" size={18} color={Colors.green4} />
                 </TouchableOpacity>
             </View>

             <View style={styles.tabcon}>
                <View style={styles.tabholder}>
                    {["Recents","Favourites"].map((tab)=>{
                        const isActive = activeTab ===tab;
                        return(
                            <TouchableOpacity
                            activeOpacity={0.9}
                            key={tab}
                            onPress={() => setActiveTab(tab)}>
                            <Text style={[styles.tabtext, isActive && styles.activeTabText]}>{tab}</Text>
                            </TouchableOpacity>
                        )
                    })}
                 </View>

                 <FlatList
                        scrollEnabled={false}
                        data={filteredData}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.navigate("")}
                            style={styles.accounts}>
                                <View style={styles.iconholder2}>{item.Icon}</View>
                                <View style={styles.textholder}>
                                    <Text style={FONTS.body8}>{item.name}</Text>
                                    <Text style={FONTS.body5}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}}
                    />
                    <TouchableOpacity 
                     activeOpacity={0.9} 
                     style={styles.view}>
                        <Text style={FONTS.body5}>View All</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.gray4} />
                    </TouchableOpacity>
             </View>

             <TouchableOpacity 
                 activeOpacity={0.9} 
                 onPress={()=>navigation.navigate()}
                 style={styles.See}>
                 <View style={{flexDirection:'row',gap:12,alignItems:"center"}}>
                    <View style={styles.iconholder}>
                    <FontAwesome6 name="users" size={19} color='#04b471' />
                    </View>
                    <View>
                    <Text style={FONTS.body8}>See who else is using OPay</Text>
                    <Text style={FONTS.body5}>Send money to your contacts for free</Text>
                    </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray4} />
             </TouchableOpacity>
         </ScrollView>
      </View>
    )
};

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
        backgroundColor:'#04b471',
        borderColor:'#aae2d3',
        alignItems:'center',
        justifyContent:"center"
    },
    Free:{
        width:"100%",
        flex:1,
        borderRadius:"3%",
        backgroundColor:"#e3f7ed" ,
        paddingVertical:'3%',
        flexDirection:'row',
        paddingHorizontal:"4%",
        gap:"2%",
        marginVertical:"3%",
    },
    inputwrapper:{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: SCREEN_WIDTH * 0.01,
        backgroundColor:"#f7f7fd",
        height: SCREEN_WIDTH * 0.1,
        paddingHorizontal:SCREEN_WIDTH * 0.02,
        justifyContent:"space-between",
        marginBottom:"3%"
    },
    Input:{
        width:"100%",
        borderRadius:"3%",
        backgroundColor:'#fffefed5',
        flex:1,  
        paddingHorizontal:"4%",
        marginVertical:"2%",
        paddingVertical:"4%",
    },
    inputtext:{
        fontSize:14,
        fontWeight:"300",
        width:"80%",
        marginLeft:"2%"
    },
    tabcon:{
        paddingVertical:"4%",
        backgroundColor:"white",
        borderRadius:"3%",
        marginVertical:"2%"
   },
   tabholder:{
        flexDirection:"row",
        justifyContent:"space-around",
        borderBottomWidth:1,
        paddingBottom:"5%",
        borderColor:Colors.gray
   },
    tabtext:{
        fontSize:15,
        color:Colors.fadeblack
   },
    activeTabText:{
        color:Colors.green8,
        fontSize:15
   },
   accounts:{
        width:370,
        height:50,
        paddingHorizontal:'5%',
        marginVertical:"1%",
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:'5%',
        alignItems:'center',
        paddingVertical:"10%"
    },
    textholder:{
        alignItems:'flex-start',
        borderBottomWidth:1,
        height:60,
        marginTop:25,
        borderColor:Colors.gray,
        width:'85%'
    },
    See:{
        backgroundColor:'#fffefed5',
        borderRadius:"3%",
        width:"100%",
        marginVertical:"2%",
        paddingVertical:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:"4%",
        flex:1
    },
    ask:{
        flexDirection:"row",
        alignItems:"center"
    },
    iconholder:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'#b4e3d858',
        justifyContent:"center",
        alignItems:'center'
    },
    iconholder2:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Colors.gray10,
        justifyContent:"center",
        alignItems:'center'
    },
    view:{
        alignSelf:'center',
        width:"25%",
        height:"7%",
        borderRadius:20,
        backgroundColor:Colors.grey2,
        flexDirection:"row",
        marginBottom:5,
        alignItems:"center",
        justifyContent:"center"
    },
});