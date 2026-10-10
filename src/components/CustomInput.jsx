import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, Colors, Sizes } from '../constants/Theme'
import general from "../constants/General";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";



const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secure,
  secureTextEntry = true,
  inputStyle,
  containerStyle,
  error,iconName,
}) => {

    const [show, setShow] = useState(false);
    const [isFocused, setIsFocused] = useState (false);
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={general.label}>{label}</Text>}
      <View  style={[isFocused? general.inputWrapper : general.inactiveWrapper]}>
        {iconName && (
          <MaterialIcons
            name={iconName}
            size={SCREEN_WIDTH * 0.06}
            color={Colors.black}
            style={general.icon}
          />
        )}
          <TextInput
          style={[general.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !show}
          placeholderTextColor={Colors.gray5}
          keyboardType="numeric"
          returnKeyType="done"
          onFocus={()=> setIsFocused(true)}
          onBlur={()=> setIsFocused(false)}
        />
        {secureTextEntry && value?.length > 0 && (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setShow(!show)}>
            <MaterialCommunityIcons name={show ? "eye":"eye-closed"} size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={general.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
 
});

export default CustomInput;
