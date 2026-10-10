import {View, Text, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import general from '../constants/General';
import { FONTS,Colors } from '../constants/Theme';
import CustomHeading from '../components/CustomHeading';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons,MaterialCommunityIcons,Octicons,SimpleLineIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Add () {
    const navigation = useNavigation();
    
    return(
        <View style={general.container}>
            <CustomHeading title={"Add Money"}/>
            <ScrollView style={{paddingHorizontal:"4%"}}>
                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate('Bank')}
                 style={styles.Bank}>
                 <View style={styles.holder}>
                     <View style={styles.container}>
                     <MaterialCommunityIcons name="bank-outline" size={27} color="black" />
                     </View>
                     <View style={{marginBottom:5}}>
                         <View style={styles.top}>
                         <Text style={styles.name}>Bank Transfer</Text>
                         <View style={styles.earn}> 
                         <Text style={styles.text}>Earn #50</Text>
                         </View>
                         </View>
                         <Text style={FONTS.body5}>Add money via mobile or internet banking</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <View style={styles.or}>
                    <View style={styles.line}></View>
                    <Text style={styles.color}>OR</Text>
                    <View style={styles.line}></View>
                </View>
                
                 <TouchableOpacity
                 onPress={()=> navigation.navigate('')}
                 activeOpacity={0.9} 
                 style={styles.Cash}>
                 <View style={styles.holder}>
                     <View style={styles.container}>
                     <MaterialCommunityIcons name="card-plus-outline" size={27} color="black" />
                     </View>
                     <View style={{maxWidth:"80%"}}>
                     <Text style={styles.name}>Auto Top--Up(Powered by NIBSS)</Text>
                     <Text style={FONTS.body5}>Never worry about your balance. We'll top up your wallet automatically</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate('')} 
                 style={styles.Cash}>
                 <View style={styles.holder}>
                     <View style={styles.container}>
                     <MaterialCommunityIcons name="card-outline" size={27} color="black" />
                     </View>
                     <View style={styles.width}>
                     <View style={styles.top}>
                     <Text style={styles.name}>Cash Deposit</Text>
                     <View style={styles.earn}> 
                     <Text style={styles.text}>Earn #50</Text>
                     </View>
                     </View>
                     <Text style={styles.small}>Fund your account with nearby merchants</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate('TopUp')}
                 style={styles.Cash}>
                 <View style={styles.holder}>
                     <View style={styles.container}>
                     <Octicons name="credit-card" size={27} color="black" />
                     </View>
                     <View style={styles.width}>
                     <View style={styles.top}>
                     <Text style={styles.name}>Top-up with card/Account</Text>
                     <View style={styles.earn}> 
                     <Text style={styles.text}>Earn #50</Text>
                     </View>
                     </View>
                     <Text style={styles.small}>Add money directly from your bank card or account</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={()=> navigation.navigate()}
                 activeOpacity={0.9} 
                 style={styles.Cash}>
                 <View style={styles.holder}>
                     <View style={styles.container}>
                     <SimpleLineIcons name="screen-smartphone" size={27} color="black" />
                     </View>
                     <View>
                     <Text style={styles.name}>Bank USSD</Text>
                     <Text style={FONTS.body5}>With other banks' USSD code</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>

                <TouchableOpacity 
                 activeOpacity={0.9}
                 onPress={()=> navigation.navigate('')}
                 style={styles.Cash}>
                  <View style={styles.holder}>
                     <View style={styles.container}>
                     <MaterialIcons name="qr-code" size={27} color="black" />
                     </View>
                     <View>
                     <Text style={styles.name}>Scan my QR Code</Text>
                     <Text style={FONTS.body5}>Show QR code to any OPay user</Text>
                     </View>
                 </View>
                 <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.gray5} />
                </TouchableOpacity>
                
            </ScrollView>
        </View>
)};

const styles = StyleSheet.create ({
    Bank:{
        width:"100%",
        borderRadius:"3%",
        backgroundColor:'#fffefed5',
        flex:1,  
        paddingHorizontal:"4%",
        marginVertical:"5%",
        paddingVertical:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    Cash:{
        width:"100%",
        borderRadius:"3%",
        backgroundColor:'#fffefed5',
        flex:1,  
        paddingHorizontal:"4%",
        marginTop:"5%",
        paddingVertical:"5%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    container:{
        width:45,
        height:47,
        borderRadius:12,
        backgroundColor:Colors.grey2,
        alignItems:'center',
        justifyContent:"center"
    },
    earn:{
    width:55,
    height:15,
    backgroundColor:"#e80256d2",
    borderBottomEndRadius:7,
    borderTopEndRadius:7,
    borderStartStartRadius:7,
    alignItems:'center',
    paddingVertical:"1%"
    },
    holder:{
        gap:10,
        flexDirection:"row",
        alignItems:"center"
    },
    name:{
        marginTop:"4%",
        fontSize:14
    },
    text:{
        color:"white",
        fontSize:10
    },
    top:{flexDirection:"row",marginBottom:1},
    line:{
        width:"20%",
        height:"5%",
        backgroundColor:Colors.gray5
    },
    or:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"center",
        gap:7
    },
    color:{color:Colors.gray5},
    width:{
        marginBottom:5,
        maxWidth:"70%"
    },
    small:{
        width:"120%",
        fontSize:12,
        fontWeight:"300",
        color:Colors.gray5
    }
})