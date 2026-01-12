import { StyleSheet } from 'react-native';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../shared/exporter';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bluebg: {  
    width: '100%',
    height: WP('42'),
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
    marginTop: WP('2'),
  },

  Cardoverlay:{
    position: 'absolute',
    width: '100%',
    height: WP('47.5'),
    padding: 20,
    justifyContent: 'space-between',
  },

  cardTop:{
    width: '100%',
  },

  banknametext:{
    fontSize: AppFontSize.TITLE1,
    fontFamily: AppFontsFamily.Orbitron_Black,
    color: AppColors.Primary.DarkBlue,
    marginStart: WP('17'),
  },

  cardmiddle:{
    width: '100%',
  },

  accnum:{
    fontSize: AppFontSize.TITLE2,
    fontFamily: AppFontsFamily.Orbitron_Black,
    color: AppColors.Neutrals.White,
    marginStart: WP('17'),
    marginBottom: WP('2')
  },

  cardname:{
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Orbitron_Black,
    color: AppColors.Neutrals.White,
    marginStart: WP('17'),
    fontWeight: 'bold',
    marginBottom: WP('1')
},

wrapper:{
    flex: 1,
    marginTop: WP('1')
},

grid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: WP('5.5'),
},

btnsize:{
  width: WP('25'),
  height: WP('25'),
  borderRadius: 15,
  backgroundColor: AppColors.Neutrals.White,
  elevation: 3, 
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: WP('3'),
},

btntextstyle:{
  fontSize: AppFontSize.CAPTION1,
  fontFamily: AppFontsFamily.Poppins_Medium,
  color: AppColors.Neutrals.MediumGray,
  textAlign: 'center',
  marginTop: WP('3')
}


});
export default styles;
