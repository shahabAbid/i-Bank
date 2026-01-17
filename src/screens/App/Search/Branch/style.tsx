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

  mapframe:{
    width: '100%',
    height: WP('80'),
    backgroundColor: 'red',
    marginTop: WP('4'),
  }
})

export default styles;