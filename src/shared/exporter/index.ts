// Utils
export {APP_CONST} from '../utils/constant';
export {
  GET,
  POST,
  PUT,
  PATCH,
  ERROR,
  DELETE,
  FORM_DATA_HEADER,
  UNEXPECTED_ERROR,
} from '../utils/enums';
export {Routes} from '../utils/routes';
export {
  WP,
  HP,
  isIOS,
  showToast,
  showAlert,
  scrWidth,
  scrHeight,
} from '../utils/helpers';

// Assets
export {appImages, appIcons, appSVG} from '../../shared/assets';

// Theme
export {AppColors} from '../theme/colors';
export {AppFontSize} from '../theme/fontSize';
export {AppFontsFamily} from '../theme/fontFamily';

// Components
export {
  // Primitive

  AppStatusBar,

  // Complex
  AppHeader,
} from '../../shared/components';

export * from '../utils/endpoints';
