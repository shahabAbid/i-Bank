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
    flex: 1,
    backgroundColor: AppColors.Neutrals.White,
    marginTop: WP('4'),
  },

 

  

  searchcontainer:{
    marginTop: WP('5'),
    width: '90%',
    height: WP('12'),
    justifyContent: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    backgroundColor: AppColors.Neutrals.White,
    borderWidth: 2,
    borderColor: '#BFBFBF',
  },

  mapview:{
    width: '100%',
    height: '100%',
    borderRadius: 15,
    alignSelf: 'center',
  },

  modalbox:{
    width: '100%',
    height: WP('102'),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    position: 'absolute',
    bottom: 0,
    backgroundColor: AppColors.Neutrals.White,
    elevation: 5,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export default styles;