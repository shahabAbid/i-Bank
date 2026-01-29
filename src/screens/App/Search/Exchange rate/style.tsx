import { StyleSheet } from 'react-native';
import {
  AppColors,
  AppFontsFamily,
  AppFontSize,
  WP,
} from '../../../../shared/exporter';

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

  headingtext: {
    marginLeft: WP('5%'),
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    fontSize: AppFontSize.TITLE2,
    color: AppColors.Neutrals.DarkGray,
  },

  backIcon: {
    marginLeft: WP('8%'),
    tintColor: '#000',
  },

  wrapper2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: WP('5'),
    paddingLeft: WP('9'),
    paddingRight: WP('5'),
  },

  secondheadings: {
    fontSize: AppFontSize.TITLE3,
    fontFamily: AppFontsFamily.Poppins_SemiBold,
    color: AppColors.Neutrals.LightGray,
  },

  wrapper3: {
    flexDirection: 'row',
    width: '90%',
    height: WP('12'),
    backgroundColor: AppColors.Neutrals.White,
    marginTop: WP('6'),
    alignItems: 'center',
    borderBottomWidth: 2,
    alignSelf: 'center',
    marginStart: WP('3'),
    borderBottomColor: AppColors.Neutrals.LightSilver,
  },

  countryname: {
    fontFamily: AppFontsFamily.Poppins_Medium,
    fontSize: AppFontSize.BODY1,
    color: AppColors.Neutrals.DarkGray,
    marginStart: WP('5'),
  },

  buytext: {
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.DarkGray,
  },

  selltext: {
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
    color: AppColors.Neutrals.DarkGray,
  },

  countryCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buyCol: {
    flex: 1,
    alignItems: 'flex-end',
  },

  sellCol: {
    width: WP('25'),
    alignItems: 'flex-end',
  },
});
export default styles;
