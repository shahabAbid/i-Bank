import { StyleSheet } from 'react-native';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../../shared/exporter';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    marginTop: WP('17%'),
    alignItems: 'center',
  },

   headingtext:{
      marginLeft: WP('5%'),
      fontFamily: AppFontsFamily.Poppins_SemiBold,
      fontSize: AppFontSize.TITLE2,
      color: AppColors.Neutrals.DarkGray,
    },

    backIcon: {
     marginLeft: WP('8%'),
     tintColor: '#000',
  },

  cardstyle:{
    width: '90%',
    alignSelf: 'center',
    height: WP('28'),
    backgroundColor: AppColors.Neutrals.White,
    borderRadius: 15,
    elevation: 5,
    marginTop: WP('10')
  },

  wrapper2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  wrapper3:{
    flexDirection: 'column',
    
  },

  cardtext1:{
    fontSize: AppFontSize.TITLE3,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    color: AppColors.Neutrals.DarkGray,
    marginStart: WP('5'),
    marginTop: WP('5'),
  },

  cardtext2:{
    fontFamily: AppFontsFamily.Poppins_Medium,
    fontSize: AppFontSize.CAPTION2,
    color: AppColors.Neutrals.MediumGray,
    marginStart: WP('5'),
  },

  imagestyle:{
    marginRight: WP('3'),
    marginTop: WP('4'),
  },

  
});
export default styles;
