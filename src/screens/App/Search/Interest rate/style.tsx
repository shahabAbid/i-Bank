import { StyleSheet } from "react-native";
import { AppColors, AppFontsFamily, AppFontSize, WP } from "../../../../shared/exporter";



const styles = StyleSheet.create({

    container:{
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

    wrapper2:{
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: WP('5'),
      paddingLeft: WP('9'),
      paddingRight: WP('5'),
    },

    secondheadings:{
      fontSize: AppFontSize.TITLE3,
      fontFamily: AppFontsFamily.Poppins_SemiBold,
      color: AppColors.Neutrals.LightGray,
    },

    wrapper3:{
      width: '90%',
      height: WP('15'),
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: WP('5'),
      
      marginLeft: WP('14'),
      marginRight: WP('12'),
      borderBottomWidth: 2,
      borderColor: AppColors.Neutrals.LightGray,
    },

    text:{
      fontFamily: AppFontsFamily.Poppins_Medium,
      fontSize: AppFontSize.BODY1,
      color: AppColors.Neutrals.DarkGray,

    }
})

export default styles;