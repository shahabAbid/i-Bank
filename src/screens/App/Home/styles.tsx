import { StyleSheet } from 'react-native';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../shared/exporter';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bluebg: {  
    width: '100%',
    flex: 1,
     backgroundColor: AppColors.Primary.DarkBlue,
  },

 

  Whitebg: {
    width: '100%',
    height: 750,
    backgroundColor: AppColors.Neutrals.White,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
  },

  wrapper1:{
    width: '100%',
    flexDirection: 'row',
    marginTop: WP('17'),
    alignItems: 'center',
  },

  profilepicframe:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    marginStart: WP('7'),
  },

  textstyle:{
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.White,
    marginStart: WP('4')
  },

  Iconstyle:{
    position: 'absolute',
    right: 0,
    marginRight: WP('9'),
  },

  cardframe:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('5')
  },

  Cardoverlay:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 20,
    justifyContent: 'space-between',
  },

  cardTop:{
    width: '100%',
    marginTop: WP('1'),
  },

  banknametext:{
    fontSize: AppFontSize.TITLE1,
    fontFamily: AppFontsFamily.Poppins_Bold,
    color: AppColors.Primary.DarkBlue,
    marginStart: WP('15'),
    fontWeight: 'bold',
  },

  cardmiddle:{
    width: '100%',
    
  },

  accnum:{
    fontSize: AppFontSize.TITLE2,
    fontFamily: AppFontsFamily.Poppins_Bold,
    color: AppColors.Neutrals.White,
    marginStart: WP('17'),
    marginBottom: WP('3')
  },

  cardname:{
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Orbitron_Black,
    color: AppColors.Neutrals.White,
    marginStart: WP('17'),
    fontWeight: 'bold',
    marginBottom: WP('2')
}


});
export default styles;
