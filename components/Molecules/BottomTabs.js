import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import appTheme from "../../constants/theme";
import ViewAtom from "../Atoms/ViewAtom";
import { CheckBox, Divider, Icon } from 'react-native-elements';
import TextAtom from "../Atoms/TextAtom";

const {COLORS, SIZES, FONTS}=appTheme
export default function BottomTabs({navigation,theme}) {

  // const badge= cartItems>0? <Badge  containerStyle={{ position: 'absolute', top: -12, right: -9 }} value={cartItems} status="success" />:<></>
  return (
    <View
      style={{
        flexDirection: "row",
        // margin: 10,
        // marginHorizontal: 15,
        paddingHorizontal: 15,
        justifyContent: "space-between",
      alignItems:"center",
backgroundColor:COLORS.dark
      }}
    >
      <Icons theme={theme} icon="home-outline" text="Home" screen="Home" navigation={navigation} badge={<></>}  size={20}/>
      <Icons theme={theme}icon="trail-sign-outline" text="Trail"  screen="Trail" navigation={navigation} badge={{}}  size={20}v />
      <Icons theme={theme}icon="calendar-outline" text=""  screen="Timetable" navigation={navigation} badge={{}}  size={30} />
      <Icons theme={theme} icon="school-outline" text="Program" screen="Program" navigation={navigation} badge={<></>}  size={20}/>
      <Icons theme={theme}icon="person-outline" text="Me" screen="Me"  navigation={navigation} badge={<></>}   size={20}/>
    </View>
  );
}

const Icons = ({ icon, text,screen,navigation,badge,size ,theme}) => (
  <TouchableOpacity  onPress={() => {navigation.navigate(screen) }} >

 { size>20? 
   <ViewAtom  jc="space-between" ai="flex-start"  pv={12} ph={15} bg={theme} br={50} mv={0} mh={0} >
    <Icon name={icon} type="ionicon" color={COLORS.white}  size={size} />

   </ViewAtom>:
        <Icon name={icon} type="ionicon" color={COLORS.white}  size={size} />


      }
    
    <TextAtom text={text} f="Poppins"s={SIZES.base} w={"500"} ta="center" ls={0}c={COLORS.gray4} />

  </TouchableOpacity>
);
const styles =StyleSheet.create({



});