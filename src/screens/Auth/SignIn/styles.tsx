import { StyleSheet } from 'react-native';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper1: {
    flexDirection: 'column',
    flex: 1,
  },

  bluebg: {
    width: '100%',
    height: 150,
    backgroundColor: AppColors.Primary.DarkBlue,
  },

  whitebg: {
    width: '100%',
    flex: 1,
    backgroundColor: AppColors.Neutrals.White,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
  },

  backIcon: {
   marginLeft: WP('8%'),
  },

  wrapper2:{
    width: '100%',
    flexDirection: 'row',
    marginTop: WP('17%'),
    alignItems: 'center',
  },

  headingtext:{
    marginLeft: WP('5%'),
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    fontSize: AppFontSize.TITLE2,
    color: AppColors.Neutrals.White,
  },

  heading2text:{
    marginLeft: WP('7%'),
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    fontSize: AppFontSize.TITLE1,
    color: AppColors.Primary.DarkBlue,
    marginTop: WP('5%'),
  },

  caption1:{
    marginLeft: WP('7%'),
    fontFamily: AppFontsFamily.Poppins_Regular,
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Neutrals.DarkGray,
  },

  lockimg:{
    alignSelf: 'center',
    marginTop: WP('15%')
  },
  
  forgettextcontainer:{
    width: '100%',
    alignItems: 'flex-end',
  },

  forgetpasstext:{
    fontSize: AppFontSize.CAPTION2,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.LightSilver,
    marginRight: WP('6'),
    marginTop: WP('2')

  },

  signinbtn:{
    backgroundColor: AppColors.Primary.LightLavender,
  },


  wrapper3:{
    flexDirection: 'row',
    marginTop: WP('10'),
    alignItems:'center',
    justifyContent: 'center',
  },

  textstyle:{
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Neutrals.DarkGray,
    fontFamily: AppFontsFamily.Poppins_Regular,
    
  },

  textstyle2:{
    fontSize: AppFontSize.CAPTION1,
    color: AppColors.Primary.DarkBlue,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
  },

  btntext:{
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.White,
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
    width: 70,
    height: 70,
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
  },

  Loginsuccesfulltext:{
    fontSize: AppFontSize.TITLE2,
    fontFamily: AppFontsFamily.Poppins_Black,
    color: AppColors.Neutrals.White,
    alignSelf: 'center',
    marginTop: WP('6'),
    textAlign: 'center',
  },

  
  
  

});

export default styles;
