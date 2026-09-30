import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
<<<<<<< Updated upstream
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Landing from "../Opay/Landing";
import { Colors } from "../constants/Theme";

=======
import {FontAwesome,MaterialCommunityIcons,Ionicons,AntDesign} from "@expo/vector-icons";

import HomeScreen from "../screens/Bottomtab/HomeScreen";
import SignUp from "../screens/Sign-Up";
import Login from "../screens/Login";
import Chart from "../screens/Bottomtab/Chart";
import Settings from "../screens/Bottomtab/Settings";
import Wallet from "../screens/Bottomtab/Wallet";
import Profile from "../screens/Profile";
import IntroScreen1 from "../screens/IntroScreen1";
import Personal from "../screens/Personal";
import VerifyCode from "../screens/VerifyCode1";
import ResetPassword from "../screens/ResetPassword1";
import ResetPassword2 from "../screens/Resetpassword2";
import ResetPassword3 from "../screens/ResetPassword3";
import Settings1 from "../screens/Settings1";
import Settings2 from "../screens/Settings2";
import Payment from "../screens/Payment";
import Alert from '../pages/Alert';
import Homepage from "../pages/Homepage";
import Recieve from "../pages/Recieve";
import Send from "../pages/Send";
import Transaction from "../pages/Transaction";
import CustomerSupport from '../pages/CustomerSupport';
import Tv from '../pages/Tv';
import Tvpayment from '../pages/Tvpayment';
import CustomerChat from "../pages/CustomerChat";
import Landing from "../Opay/Landing";
import ToOpay from "../Opay/ToOpay";
import User from "../Opay/User";
import Add from "../Opay/Add";
import Withdraw from "../Opay/Withdraw";
import Home from "../Opay/Bottomtab/Home";
import Rewards from "../Opay/Bottomtab/Rewards";
import Finance from "../Opay/Bottomtab/Finance";
import Card from "../Opay/Bottomtab/Card";
import Me from "../Opay/Bottomtab/Me";
import Account from "../Opay/Account";
import Setting from "../Opay/Setting";
import Airtime from "../Opay/Airtime";
import LoginSet from "../Opay/LoginSet";
import PaymentSet from "../Opay/PaymentSet";
import SavingSet from "../Opay/SavingSet";
import Notif from "../Opay/Notif";
import Avaiable from "../Opay/Available";
import Access from "../Opay/Access";
import SMS from "../Opay/SMS";
import More from "../Opay/More";
>>>>>>> Stashed changes

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BottomTab" screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
<<<<<<< Updated upstream
=======
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Alert" component={Alert}/>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="IntroScreen1" component={IntroScreen1} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
             <Stack.Screen name="ResetPassword3" component={ResetPassword3} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings1" component={Settings1} />
            <Stack.Screen name="Settings2" component={Settings2} />
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name='Personal' component={Personal}/>
            <Stack.Screen name="Homepage" component={Homepage}/>
            <Stack.Screen name="Recieve" component={Recieve}/>
            <Stack.Screen name="Send" component={Send}/>
            <Stack.Screen name="Transaction" component={Transaction}/>
            <Stack.Screen name='CustomerSupport' component={CustomerSupport}/>
            <Stack.Screen name='Tv' component={Tv}/>
            <Stack.Screen name='Tvpayment' component={Tvpayment}/>
            <Stack.Screen name="CustomerChat" component={CustomerChat}/>

            <Stack.Screen name="ToOpay" component={ToOpay} />
            <Stack.Screen name="Add" component={Add} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Withdraw" component={Withdraw}/>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Airtime" component={Airtime} />
            <Stack.Screen name="LoginSet" component={LoginSet} />
            <Stack.Screen name="PaymentSet" component={PaymentSet} />
            <Stack.Screen name="SavingSet" component={SavingSet} />
            <Stack.Screen name="Notif" component={Notif} />
            <Stack.Screen name="Available" component={Avaiable}/>
            <Stack.Screen name="Access" component={Access}/>
            <Stack.Screen name="SMS" component={SMS} />
            <Stack.Screen name="More" component={More} />
            
>>>>>>> Stashed changes
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    );
}
export function BottomTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.green3,
      tabBarInactiveTintColor:Colors.gray3,
      tabBarStyle:{
        backgroundColor:"white",
        height:60,
        paddingBottom:8
      }
    }}>
<<<<<<< Updated upstream
      <Tab.Screen name="Home" component={Landing} 
      options={{
        tabBarIcon:({color,size,focused})=>
      (<FontAwesome6 name={focused? "opera":"opera"} size={size} color={color} />
        )
      }}/>
      
=======
      <Tab.Screen name="Home" component={Landing} options={{
        tabBarIcon:({color,size}) =>
        ( <FontAwesome name="opera" size={size||1} color={color} />)
      }}/>
    <Tab.Screen name="Rewards" component={Rewards} options={{
      tabBarIcon:({color,size,focused}) => (
        <MaterialCommunityIcons name={focused? "diamond" : "diamond-outline"} size={size||1} color={color} />
      )
    }}/>
      <Tab.Screen name="Finance" component={Finance} options={{
        tabBarIcon:({color,size,focused}) => (
         <AntDesign name={focused? "fund" : "fund"} size={size||1} color={color}/>
        )
      }}/>
      <Tab.Screen name="Card" component={Card} options={{
        tabBarIcon:({color,size,focused}) => (
          <MaterialCommunityIcons name={focused? "credit-card": "credit-card-outline"} size={size||1} color={color} />
        )
      }}/>
      <Tab.Screen name="Me" component={User} options={{
        tabBarIcon:({color,size,focused}) => (
          <Ionicons name={focused? "person-circle" : "person-circle-outline"} size={size||1} color={color}/>
          
        ),
      }}/>
>>>>>>> Stashed changes
    </Tab.Navigator>
  );
}
