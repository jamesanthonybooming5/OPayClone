import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Landing from "../Opay/Landing";
import { Colors } from "../constants/Theme";


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
      <Tab.Screen name="Home" component={Landing} 
      options={{
        tabBarIcon:({color,size,focused})=>
      (<FontAwesome6 name={focused? "opera":"opera"} size={size} color={color} />
        )
      }}/>
      
    </Tab.Navigator>
  );
}
