import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const screenWidth = Math.round(width);
const screenHeight = Math.round(height);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;


export const Colors = {
  white: "#fff",
  black: "#000",
  fadeblack:"#555",
  primary: "#063A4F",
  primary2: "#40196D",
  sky: "#F1FAF9",
  orange: "#ff7040",
  secondary: "#00caf2",
  gray: "#EFF2F7",
  chocolate: "#5d5c6c",
  chocolateBackground: "#CECFCD",
<<<<<<< Updated upstream
  grey2: "#f6f5fa",
  grey3: "#efefef",
  gray2: "#B4B5B5",
  gray3:"#9e9e9e",
  red: "red",
  lightGray:"#ccc",
  fund:'#0A2342',
  green3:"#00b471"
=======
  grey2: "#f7f7fd",
  grey3: "#d3d3d3a4",
  gray4: "#B4B5B5",
  gray5:"#838282d4",
  gray6:"#d8d7d765",
  gray7:"#7e7d7d",
  gray8:"#f0f2f5",
  gray9:"#f4f6f8",
  gray10:"#999",
  red: "#eff7fa",
  lightGray:"#ccc",
  fund:'#0A2342',
  green: "#47cc49",
  green2: "#038654",
  green3:'#4CAF50',
  green4:'#04b471',
  green5:"#c1f5cd59",
  green6:'#00c32a33',
  green7:"#00a86b",
  green8:"#00b471",
  green9:"#e6f7f2",
  green10:'#edf8f5'
  
>>>>>>> Stashed changes
};

export const Sizes = {
  // global sizes
  base: screenHeight * 0.01, //for margin
  font: screenHeight * 0.0175, //basic font size
  radius: screenHeight * 0.015, //fixed borderRadius
  padding: screenHeight * 0.02, //for padding
  profileBorder: screenHeight * 0.5,
  profileHeight: screenHeight * 0.06,
  profileWidth: screenWidth * 0.13,
  tinyIcon: screenHeight * 0.025,
  bigRadius: screenHeight * 0.03,
  smallPadding: screenHeight * 0.007,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0495,
  h2: screenHeight * 0.0295,
  h2a: screenHeight * 0.034,
  h2c: screenHeight * 0.0245,
  h3: screenHeight * 0.0225,
  h3a: screenHeight * 0.0235,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  h6: screenHeight * 0.0135,
  h7: screenHeight * 0.0125,
  h8: screenHeight * 0.0115,
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.017,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
<<<<<<< Updated upstream
=======
  body7:screenHeight * 0.018,
  body8:screenHeight* 0.018,
>>>>>>> Stashed changes
  intro: screenHeight * 0.04,
  tinyText: screenHeight * 0.012,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  navTitle: { fontFamily: "Montserrat-Regular", fontSize: Sizes.navTitle },
  largeTitleBold: {
    fontFamily: "Montserrat-Bold",
    fontSize: Sizes.h1 * 1.5,
    lineHeight: screenHeight * 0.05,
  },
  h1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: Sizes.h1,
    lineHeight: screenHeight * 0.05,
    fontWeight: 'Bold',
    color:Colors.white

  },
  h2: {
    fontFamily: "Poppins-SemiBold",
    fontSize: Sizes.h2,
    lineHeight: screenHeight * 0.0375,
    fontWeight:"500"
  },
  h3: {
    fontFamily: "Montserrat-Bold",
    fontSize: Sizes.h3,
    lineHeight: screenHeight * 0.025,
    color:Colors.white
  },
  h4: {
    fontFamily: "Montserrat-Bold",
    fontSize: Sizes.h4,
    lineHeight: screenHeight * 0.040,
    color:Colors.white,
  },
  h5: {
    fontFamily: "Montserrat-Bold",
    fontSize: Sizes.h5,
    lineHeight: screenHeight * 0.025,
  },
  // BODY

  body: {
    fontFamily: "Montserrat-Medium",
    fontSize: Sizes.body1 * 1.2,
    lineHeight: 39,
  },
  body1: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body1,
    lineHeight: 36,
  },
  body1a: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body1 * 0.9,
    lineHeight: 30,
  },
  body2: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body2,
    lineHeight: 30,
  },
  body2a: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body2 * 0.95,
    lineHeight: 30,
  },
  body2b: {
    fontFamily: "Montserrat-Bold",
    fontSize: Sizes.body2 * 0.935,
    lineHeight: 30,
  },
  body2c: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body2 * 1.2,
    lineHeight: 30,
    color:"white",
  },
  body2d: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body2 * 1.3,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body3 * 1.05,
    lineHeight: 18,
  },
  body3a: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body3a,
    lineHeight: 18,
  },
  body3b: {
    fontFamily: "Montserrat-Medium",
    fontSize: Sizes.body3b,
    lineHeight: 18,
  },
  body3c: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color:Colors.black
  },
  body3d: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    color:Colors.green4,
  },
  body4: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body4,
    lineHeight: 18,
  },
  body5: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body5,
<<<<<<< Updated upstream
    lineHeight: 18,
=======
    lineHeight:18,
    color:Colors.gray5,
    fontWeight:"300"
>>>>>>> Stashed changes
  },
  body6: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body6 * 1.2,
    lineHeight: 18,
  },
<<<<<<< Updated upstream
=======
  body6a: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body6 * 1.2,
    lineHeight: 18,
    color:Colors.green4
  },
  body7: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body7,
    lineHeight: 18,
    color: Colors.gray5
  },
  body7a: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body7 * 1.05,
    lineHeight: 18,
    color: "black",
    fontWeight:"300"
  },
  body8: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body4,
    lineHeight: 18,
    color: Colors.black,
    fontWeight:"300"
  },
  body9: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body8,
    lineHeight: 18,
    color: Colors.black,
    fontWeight:"400"
  },
  body10: {
    fontFamily: "Montserrat-Regular",
    fontSize: Sizes.body4,
    lineHeight: 18,
    color: Colors.white,
    fontWeight:"300"
  },
  body11:{
    fontFamily: "Montserrat-Regular",
    fontSize:12,
    fontWeight:'300',
    color:'grey',
    lineHeight:30
    },
>>>>>>> Stashed changes
};

const appTheme = [Colors, Sizes];
export default appTheme;
