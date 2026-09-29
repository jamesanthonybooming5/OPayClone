import { StyleSheet } from "react-native";
import { Colors,Sizes,FONTS,SCREEN_HEIGHT,SCREEN_WIDTH } from "./Theme";

const general = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.06,
    color: Colors.black,
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  text: {
    ...FONTS.h2,
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.green,
    paddingVertical: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    borderRadius: SCREEN_WIDTH * 0.07,
    alignItems: "center",
    marginTop: SCREEN_HEIGHT * 0.02,

  },
  buttonText: {
    color: Colors.white,
    fontWeight:"light",
    fontSize:13,
    lineHeight:SCREEN_HEIGHT *0.02
  },
  input: {
    borderRadius: SCREEN_WIDTH * 0.010,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.015,
      fontSize: SCREEN_WIDTH * 0.04,
      fontWeight:"400",
    flex:1
  },
  disabled: {
    backgroundColor: Colors.sky,
  },
  label: {
    fontSize: SCREEN_WIDTH * 0.035,
    color: Colors.lightGray,
    marginBottom: SCREEN_HEIGHT * 0.008,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: SCREEN_WIDTH * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingVertical: SCREEN_HEIGHT * 0.025,
    fontSize: SCREEN_WIDTH * 0.04,
    color: Colors.black,
  },
  error: {
    color: "#FF3B30",
    fontSize: SCREEN_WIDTH * 0.03,
    marginTop: SCREEN_HEIGHT * 0.005,
  },
  icon: {
    marginRight: SCREEN_WIDTH * 0.02,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.black,
    borderRadius: SCREEN_WIDTH * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.00,
    backgroundColor: Colors.lightGray,
  },
  profile: {
    width: SCREEN_WIDTH * 0.11,
    height: SCREEN_WIDTH * 0.11,
    borderRadius: SCREEN_WIDTH * 0.15,
    alignSelf: "center",
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  row:{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
  },
boldText:{ ...FONTS.h3, marginTop: SCREEN_HEIGHT * 0.02 },
box:{
  width:SCREEN_WIDTH *0.900,
  height:SCREEN_HEIGHT*0.330,
  borderRadius:Sizes.bigRadius,
  backgroundColor:Colors.primary,
  alignSelf:"center",
  paddingHorizontal:10,
  paddingVertical:10,
  alignItems:"center",
  marginTop:30
}
});

export default general;
