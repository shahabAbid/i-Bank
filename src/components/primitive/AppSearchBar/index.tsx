import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInput,
  StyleProp,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import {
  AppColors,
  AppFontsFamily,
  AppFontSize,
  appIcons,
  WP,
} from '../../../shared/exporter';

type Props = {
  touched?: boolean;
  value?: string;
  onChangeText: (text: string) => void;
  placeHolder?: string;
  rightIcon?: boolean;
  rightText?: boolean;
  leftIcon?: React.ReactNode;
  appSearchContainer?: StyleProp<ViewStyle>;
  appSearchInput?: StyleProp<TextStyle>;
  editable?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  maxLength?: number;
  multiline?: boolean;
};

const AppSearchBar: React.FC<Props> = ({
  touched = false,
  value,
  onChangeText,
  placeHolder = 'Search Here',
  rightIcon = false,
  rightText = false,
  leftIcon,
  appSearchContainer,
  appSearchInput,
  autoCapitalize = 'none',
  editable = true,
  onEndEditing,
  onSubmitEditing,
  maxLength,
  multiline = true,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(touched);

  const inputRightIcon =
    rightIcon ? (
      <Image
        source={appIcons.Bell}
        style={{ width: 22, height: 22, marginRight: WP('4') }}
      />
    ) : null;

  return (
    <View style={[AppSearchContainer(isFocused), appSearchContainer]}>
      {leftIcon}

      <TextInput
        style={[
          AppSearchInput(rightIcon, rightText),
          appSearchInput,
        ]}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={autoCapitalize}
        editable={editable}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={maxLength}
        multiline={multiline}
      />

      {inputRightIcon}

      {rightText && (
        <Text style={styles.rightText}>Cancel</Text>
      )}
    </View>
  );
};

function AppSearchContainer(isFocused: boolean): ViewStyle {
  return {
    position: 'relative',
    width: WP('82'),
    height: WP('12'),
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: isFocused
      ? AppColors.Primary.DarkBlue
      : AppColors.Neutrals.LightSilver,
  };
}

function AppSearchInput(
  rightIcon: boolean,
  rightText: boolean
): TextStyle {
  return {
    width: WP('70'),
    height: WP('12'),
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY3,
    fontFamily: AppFontsFamily.Poppins_Medium,
    paddingStart: WP('4'),
    paddingRight:
      rightIcon || rightText ? WP('10') : WP('4'),
  };
}

const styles = StyleSheet.create({
  rightText: {
    position: 'absolute',
    right: WP('4'),
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Black,
  },
});

export default AppSearchBar;
