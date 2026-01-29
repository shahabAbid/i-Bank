import { StyleSheet } from 'react-native';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../../shared/exporter';
import { Overlay } from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutrals.White,
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

  mainimg:{
    alignSelf: 'center',
    marginTop: WP('5'),
  },

  container2:{
    width: '90%',
    height: WP('84'),
    borderRadius: 30,
    backgroundColor: AppColors.Neutrals.White,
    elevation: 5,
    alignSelf:'center',
    marginTop: WP('5')
  },

  Arrowstyle:{
    alignSelf: 'center',
    marginTop: WP('5'),
  },

  labelstyle:{
    marginTop: WP('5'),
  },

  inputstyle:{
    width: '70%',
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.DarkGray,
  },

  righticoninputcontainer:{
    backgroundColor: AppColors.Neutrals.White ,
    borderLeftWidth: 2, 
    borderLeftColor: AppColors.Neutrals.LightSilver, 
    width: WP('20'), 
    height: WP('8') , 
    position: 'absolute', 
    right: 10, 
    justifyContent: 'center'
  },

  Overlay:{
    flex: 1,
     backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems: 'center',
  },

  modalbox:{
    width: '90%',
    height: WP('70'),
    borderRadius: 15,
    backgroundColor: AppColors.Neutrals.White,
    elevation: 4,
  },

  modalheading:{
    fontSize: AppFontSize.TITLE3,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    color: AppColors.Neutrals.DarkGray,
    alignSelf:'center',
    marginTop: WP('5'),
  },

  textstyle:{
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
  }
});
export default styles;
