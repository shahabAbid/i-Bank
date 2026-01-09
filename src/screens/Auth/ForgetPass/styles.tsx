import React from "react";
import { StyleSheet } from "react-native";
import { AppFontSize, WP, AppFontsFamily, AppColors } from "../../../shared/exporter";



const styles = StyleSheet.create({

    container:{
        flex: 1,
    },

    wrapper1: {
    width: '100%',
    flexDirection: 'row',
    marginTop: WP('17%'),
    alignItems: 'center',
  },

  headingtext: {
      marginLeft: WP('5%'),
      fontSize: AppFontSize.TITLE2,
      fontFamily: AppFontsFamily.Poppins_SemiBold,
      color: AppColors.Neutrals.DarkGray,
    },
  
    backIcon: {
      tintColor: AppColors.Neutrals.DarkGray,
      marginLeft: WP('8%'),
    },

    bgstyle:{
      height: 350,
      width: '85%',
      borderRadius: 25,
      backgroundColor: AppColors.Neutrals.White,
      elevation: 4,
      marginTop: WP('10'),
      alignSelf: 'center',
    },

    labelstyle:{
      marginTop: WP('6'),
    },

    secondttextstyle:{
      fontSize: AppFontSize.BODY3,
      fontFamily: AppFontsFamily.Poppins_Medium,
      color: AppColors.Neutrals.DarkGray,
      marginTop: WP('5'),
      textAlign: 'center',
    },


    wrapper2:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: WP('6'),
        alignSelf: 'center'
    },

    resendbtn:{
        width: 110,
        borderRadius: 20,
       
    },

    inputstyle:{
        width: '100%',
        borderRadius: 15,
        marginStart: 10,
    },

});

export default styles;