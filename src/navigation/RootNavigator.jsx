import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import {FontAwesome,MaterialCommunityIcons,Ionicons,AntDesign} from "@expo/vector-icons";
import { Colors } from "../constants/Theme";

import Landing from "../Opay/Landing";
import ToOpay from "../Opay/ToOpay";
import User from "../Opay/User";
import Add from "../Opay/Add";
import Withdraw from "../Opay/Withdraw";
import Home from "../Opay/Bottomtab.jsx/Home";
import Rewards from "../Opay/Bottomtab.jsx/Rewards";
import Finance from "../Opay/Bottomtab.jsx/Finance";
import Card from "../Opay/Bottomtab.jsx/Card";
import Me from "../Opay/Bottomtab.jsx/Me";
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
import Beneficiaries from "../Opay/Beneficiaries";
import Bank from "../Opay/Bank";
import TopUp from "../Opay/TopUp";
import Auto from "../Opay/Auto";
import Close from "../Opay/Close";
import AutoSave from "../Opay/AutoSave";
import LoginPage from "../Opay/LoginPage";
import About from "../Opay/About";
import Get from "../Opay/Get";
import Profile from "../Opay/Profile"

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
            <Stack.Screen name="Beneficiaries" component={Beneficiaries}/>
            <Stack.Screen name="Bank" component={Bank}/>
            <Stack.Screen name="TopUp" component={TopUp}/>
            <Stack.Screen name="Auto" component={Auto}/>
            <Stack.Screen name="Close" component={Close}/>
            <Stack.Screen name="AutoSave" component={AutoSave} />
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Get" component={Get}/>
            <Stack.Screen name="Profile" component={Profile}/>
            
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
        height:"10%",
      }
    }}>
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
    </Tab.Navigator>
  );
}
