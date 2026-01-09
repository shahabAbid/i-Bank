import React from 'react';
import { StyleSheet } from 'react-native';
import {
  AppColors,
  AppFontsFamily,
  AppFontSize,
  WP,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper1: {
    flexDirection: 'column',
    flex: 1,
  },

  bluebg: {
    backgroundColor: AppColors.Primary.DarkBlue,
    width: '100%',
    height: 150,
  },

  wrapper2: {
    width: '100%',
    flexDirection: 'row',
    marginTop: WP('17%'),
    alignItems: 'center',
  },

  headingtext: {
    marginLeft: WP('5%'),
    fontSize: AppFontSize.TITLE2,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    color: AppColors.Neutrals.White,
  },

  backIcon: {
    marginLeft: WP('8%'),
  },

  whitebg: {
    width: '100%',
    height: '100%',
    backgroundColor: AppColors.Neutrals.White,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
  },

  heading2text: {
    marginLeft: WP('7%'),
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    fontSize: AppFontSize.TITLE1,
    color: AppColors.Primary.DarkBlue,
    marginTop: WP('5%'),
  },

  caption1: {
    marginLeft: WP('7%'),
    fontFamily: AppFontsFamily.Poppins_Regular,
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Neutrals.DarkGray,
  },

  Sinupimg: {
    alignSelf: 'center',
    marginTop: WP('15%'),
  },

  btntextstyle: {
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.White,
  },

  wrapper3: {
    flexDirection: 'row',
    marginTop: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textstyle: {
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Neutrals.DarkGray,
    fontFamily: AppFontsFamily.Poppins_Regular,
  },

  textstyle2: {
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Primary.DarkBlue,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
  },

  wrapper4:{
    flexDirection: 'row',
    width: '100%',
    marginTop: WP('3'),
    alignItems: 'center',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP('6')
  },

  termstext:{
    color: AppColors.Neutrals.DarkGray,
    fontFamily: AppFontsFamily.Poppins_Regular,
    fontSize: AppFontSize.BODY3,
    marginLeft: WP('4')
  },

  wrapper5:{
    flexDirection: 'column',
  },

  termstextstyle2:{
    color: AppColors.Primary.DarkBlue,
    fontFamily: AppFontsFamily.Poppins_Regular,
    fontSize: AppFontSize.BODY3,
    marginLeft: WP('4')
  },

  verificationemailtext:{
    fontSize: AppFontSize.TITLE3,
    fontFamily: AppFontsFamily.Poppins_Black,
    color: AppColors.Neutrals.White,
    alignSelf: 'center',
    marginTop: WP('6'),
    textAlign: 'center',
  },

  modalcontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  modaloverlay:{
    width: '80%',
    height: 250,
    backgroundColor: AppColors.Primary.DarkBlue,
    borderRadius: 25,
    elevation: 4,
    alignSelf: "center",
  },

  gifstyle:{
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: WP('6'),
    borderRadius: 10,
  },

  modalbtn:{
    width: WP('17'),
    height: WP('8'),
    backgroundColor: AppColors.Neutrals.White,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: WP('4'),
  },

  modalbtntextstyle:{
    fontSize: AppFontSize.CAPTION2,
    fontFamily: AppFontsFamily.Poppins_Black,
    color: AppColors.Neutrals.DarkGray,
  }
});

export default styles;
