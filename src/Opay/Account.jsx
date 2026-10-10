import {View,Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native'
import general from '../constants/General'
import CustomHeading from '../components/CustomHeading'
import { Colors, FONTS } from '../constants/Theme';
import {MaterialCommunityIcons,MaterialIcons,} from "@expo/vector-icons";
import CustomButton from '../components/CustomButton';

export default function Account () {
    return(
     <View style={general.container}>
        <CustomHeading title={"Accounts Limits"}/>
       <ScrollView style={{
          paddingHorizontal:"4%",
          paddingVertical:"4%"}}>

          <View style={styles.First}>
           <View style={styles.sec}>
             <View>
              <Text style={styles.small}>OPay Account Number</Text>
              <Text style={styles.text}>801 234 5678</Text>
              </View>
              <TouchableOpacity activeOpacity={0.9} style={styles.copy}>
              <Text style={FONTS.body4}>Copy</Text>
              <MaterialCommunityIcons name="content-copy" size={12} color={Colors.green4} />
              </TouchableOpacity>
           </View>

           <View style={{marginBottom:"3%"}}>
            <Text style={styles.small}>Bank</Text>
            <Text style={styles.text}>OPay Digital Services Limited (OPay)</Text>
           </View>

            <Text style={styles.small}>Name</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Text style={styles.info}>ABCDEF GHIJK LMNOPQRST</Text>
            <MaterialIcons name="info-outline" size={20} color={Colors.gray4}/>
            </View>
          </View>

          <View style={styles.Link}>
           <TouchableOpacity activeOpacity={0.9} style={styles.holder}>
              <Text style={FONTS.body3b}>Linked ID</Text>
              <MaterialIcons name="keyboard-arrow-right" size={30} color={'Black'}/>
            </TouchableOpacity>
           <View style={styles.sec}>
              <Text style={styles.small}>NIN</Text>
             <View style={styles.nin}>
               <View style={styles.verify}>
                <Text style={FONTS.body4}>Verified</Text>
                 <MaterialCommunityIcons name="checkbox-marked-circle" size={15} color={Colors.green4} />
                </View>
               <Text style={FONTS.body3c}>12345******</Text>
             </View>
            </View>
          </View>

          <View style={styles.Tier}>
           <View style={styles.icon}>
              <MaterialCommunityIcons name="medal" size={23} color="#b5973bdc" />
              <Text style={FONTS.body3c}>Tier 1</Text>
              <View style={styles.current}>
                <Text style={{color:"#f88800dd",opacity:0.9}}>Current</Text>
              </View>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Daily transaction limit</Text>
              <Text style={FONTS.body3c}>#50,000.00</Text>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Maximum account balance</Text>
              <Text style={FONTS.body3c}>#300,000.00</Text>
            </View>
          </View>

          <View style={styles.Tier2}>
           <View style={styles.icon}>
              <MaterialCommunityIcons name="medal" size={23} color="gray" />
              <Text style={FONTS.body3c}>Tier 2</Text>
              <View style={styles.next}>
                <Text style={{color:"white"}}>Up Next</Text>
              </View>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Daily transaction limit</Text>
              <Text style={FONTS.body3c}>#200,000.00</Text>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Maximum account balance</Text>
              <Text style={FONTS.body3c}>#500,000.00</Text>
            </View>
          </View>

          <View style={styles.Tier3}>
           <View style={styles.holder}>
             <View style={styles.icon2}>
              <MaterialCommunityIcons name="medal" size={23} color="orange" />
              <Text style={FONTS.body3c}>Tier 3</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-up" size={30} color={'Black'}/>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Daily transaction limit</Text>
              <Text style={FONTS.body3c}>#500,000,000.00</Text>
            </View>
            <View style={styles.bal}>
              <Text style={styles.small}>Maximum account balance</Text>
              <Text style={FONTS.body3c}>Unlimited</Text>
            </View>
          </View>
       </ScrollView>
       <View style={{
         backgroundColor:"white"}}>
         <CustomButton 
           title='Upgrade to Tier 2' 
           buttonStyle={styles.button}
         />
       </View>
      </View>
)};

const styles = StyleSheet.create ({
  First:{
    width:"100%",
    flex:1,
    backgroundColor:Colors.white,
    borderRadius:'5%',
    paddingHorizontal:"5%",
    paddingVertical:"3%",
    marginBottom:"4%"
  },
  Link:{
    flex:1,
    width:"100%",
    backgroundColor:Colors.white,
    borderRadius:"4%",
    paddingHorizontal:"5%",
    paddingVertical:"5%",
    marginBottom:"4%"
  },
  Tier:{
    flex:1,
    width:"100%",
    backgroundColor:Colors.white,
    borderRadius:"4%",
    paddingHorizontal:"5%",
    paddingVertical:"5%",
    marginBottom:"4%"
  },
  Tier2:{
    flex:1,
    width:"100%",
    backgroundColor:"#7ada9b2a",
    borderRadius:"4%",
    paddingHorizontal:"5%",
    paddingVertical:"5%",
    marginBottom:"4%"
  },
  Tier3:{
    flex:1,
    width:"100%",
    backgroundColor:"white",
    borderRadius:"4%",
    paddingHorizontal:"5%",
    paddingVertical:"5%",
    marginBottom:"9%"
  },
  button:{
    backgroundColor:Colors.green14,
    marginBottom:"5%",
    marginTop:"5%",
    width:"80%",
    alignSelf:"center"
  },
  small:{color:Colors.gray7},
  line:{
    width:"100%",
    height:"2%",
    backgroundColor:Colors.gray,
    marginVertical:"5%"
  },
  holder:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"5%",
    borderBottomWidth:2,
    paddingBottom:"3%",
    borderColor:Colors.gray
  },
  sec:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    marginVertical:"2%"
  },
  copy:{
    width:"22%",
    height:"52%",
    borderRadius:"18%",
    backgroundColor:"#7ddcc32a",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"center",
    gap:4,
  },
  text:{
    ...FONTS.body3c,
    lineHeight:40
  },
  verify:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    width:"37%",
    height:24,
    backgroundColor:"#7ada9b2a",
    justifyContent:"center",
    borderRadius:"5%"
  },
  bal:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginVertical:"2%",
  },
  icon:{
    flexDirection:"row",
    alignItems:"center",
    gap:"2%",
    marginBottom:"5%",
    borderBottomWidth:2,
    paddingBottom:"3%",
    borderColor:Colors.gray
  },
  next:{
    width:"20%",
    height:20,
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:Colors.green4
  },
 current:{
    width:"20%",
    height:20,
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#f6ecddba"
  },
  nin:{
    flexDirection:"row",
    justifyContent:"flex-end",
    gap:"2%",
    alignItems:"center"
  },
  info:{
    ...FONTS.body3b,
    lineHeight:40,
    marginRight:"2%"
  },
  icon2:{
    flexDirection:"row",
    alignItems:"center",
    gap:"2%"
  }
});