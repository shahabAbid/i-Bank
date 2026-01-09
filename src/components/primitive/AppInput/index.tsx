import React, { ReactNode, useState } from 'react';
import {
  View,
  TextInputProps,
  KeyboardTypeOptions,
  TextInput,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  AppColors,
  AppFontsFamily,
  AppFontSize,
  appIcons,
  WP,
} from '../../../shared/exporter';

interface AppInputProps extends TextInputProps {
  touched?: any;
  label?: string;
  placeholder?: string;
  value?: string;
  errorMessage?: any;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onChangeText?: (text: string) => void;
  editable?: boolean;
  maxlength?: number;
  multiline?: boolean;
  isRequired?: boolean;
  container?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelstyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ReactNode;
  icon?: ReactNode;
  rightIconPress?: () => void;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  rightText?: string;
  leftIcon?: ReactNode;
  leftText?: string;
  leftTextstyle?: StyleProp<ViewStyle>;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

const AppInput: React.FC<AppInputProps> = ({
  touched,
  label,
  placeholder,
  placeholderTextColor = AppColors.Neutrals.DarkGray,
  value,
  secureTextEntry,
  keyboardType,
  autoCapitalize = 'none',
  rightIconPress,
  onChangeText,
  editable = true,
  maxLength,
  multiline = false,
  isRequired = true,
  inputStyle,
  labelstyle,
  container,
  errorMessage = '',
  inputContainerStyle,
  rightIconContainerStyle,
  rightIcon,
  rightText,
  leftIcon,
  leftText,
  leftTextstyle,
  onEndEditing,
  onSubmitEditing,
  textAlignVertical = 'auto',
}) => {
  const [isFocused, setIsFocused] = useState(touched);
  const [showPass, setShowPass] = useState(secureTextEntry);
  const inputRightIcon =
    rightIcon === true ? (
      <Image
        source={showPass ? appIcons.closeEyeIcon : appIcons.EyeIcon}
        style={{ width: 22, height: 22, marginRight: WP('4') }}
      />
    ) : (
      rightIcon
    );

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={[styles.dropDownLabel, labelstyle]}>{label}</Text>
        {isRequired && <Text style={styles.asterisk}>*</Text>}
      </View>
      <View
        style={[
          AppInputContainer(touched && errorMessage),
          inputContainerStyle,
        ]}
      >
        {leftIcon}

        {leftText && <Text style={leftTextstyle}>{leftText}</Text>}

        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          editable={editable}
          autoCapitalize={autoCapitalize}
          secureTextEntry={showPass}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          textAlignVertical={textAlignVertical}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[AppInputStyle(!!rightIcon, !!rightText), inputStyle]}
        />

        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowPass(prev => !prev);
              rightIconPress && rightIconPress();
            }}
            style={rightIconContainerStyle}
          >
            {inputRightIcon}
          </TouchableOpacity>
        )}

        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      </View>
      {touched && errorMessage && (
        <Text style={styles.errorTxtStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

function AppInputContainer(isError: boolean): ViewStyle {
  return {
    position: 'relative',
    width: '90%',
    height: WP('12'),
    marginTop: WP('2'),
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.Neutrals.White,
    borderColor: AppColors.Neutrals.LightSilver,
  };
}

function AppInputStyle(rightIcon: boolean, rightText: boolean) {
  return {
    height: WP('12'),
    width: '89%',
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY3,
    fontFamily: AppFontsFamily.Poppins_Medium,
    paddingStart: WP('4'),
  } as TextStyle;
}

const styles = StyleSheet.create({
  labelContainer: {
    marginTop: WP('3'),
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelStyle: {
    position: 'absolute',
    marginStart: WP('2'),
    fontFamily: AppFontsFamily.Poppins_Black,
  },

  rightText: {
    position: 'absolute',
    right: WP('4'),
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Black,
  },

  leftText: {
    marginStart: WP('2'),
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Black,
  },

  errorTxtStyle: {
    marginVertical: WP('1'),
    color: AppColors.Neutrals.Red,
  },

  dropDownLabel: {
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY3,
    marginStart: WP('6'),
    fontFamily: AppFontsFamily.Poppins_Medium,
  },
  asterisk: {
    marginLeft: WP('1'),
    color: AppColors.Neutrals.Red,
    fontSize: AppFontSize.BODY1,
  },
});

export { AppInput };
