import { View, Text, StyleSheet, ViewStyle, TextStyle, TextInput,  StyleProp, Image, } from 'react-native'
import React, { useState } from 'react'
import { AppColors, AppFontsFamily, AppFontSize, appIcons, WP } from '../../../shared/exporter';


type props = {
    touched?: any
    value?: string;
    onChangeText: (text: string) => void;
    placeHolder?: string;
    rightIcon?: boolean;
    rightText?: boolean;
    appSearchContianer?: StyleProp<ViewStyle>;
    appSearchInput?: StyleProp<TextStyle>;
    editable?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    onEndEditing?: () => void;
    onSubmitEditing?: () => void;
    maxlength?: number;
    multiline?: boolean;
};

const AppSearchBar: React.FC<props> = ({
    touched,
    value,
    onChangeText,
    placeHolder = 'Search Here',
    rightIcon,
    rightText,
    appSearchContianer,
    appSearchInput,
    autoCapitalize,
    editable = true,
    onEndEditing,
    onSubmitEditing,
    maxlength,
    multiline = true,
}) => {
    const [isFocused, setIsFocused] = useState(touched);
    const inputRightIcon = 
    rightIcon === true ?(
        <Image source={appIcons.Bell} style={{ width: 22, height: 22, marginRight: WP('4') }}/>
    ) : (
        rightIcon
    )
  return (
    <View style={
        [
            AppSearchContainer(),
         appSearchContianer
        ]
    }>
     <TextInput style={
        [
        AppSearchInput(!!rightIcon, !!rightText), 
        appSearchInput
        ]
        }
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize={autoCapitalize}
        editable={editable}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={maxlength}
        multiline={multiline}
        />
    </View>
  )
}

    function AppSearchContainer() :ViewStyle {
        return{
            position: 'relative',
            width: WP('82'),
            height: WP('12'),
            borderRadius: 15,
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: AppColors.Neutrals.LightSilver,
        }
    };

    function AppSearchInput (rightIcon: boolean, rightText: boolean): ViewStyle{
        return {
            width: WP('70'),
            height: WP('12'),
            color: AppColors.Neutrals.DarkGray,
            fontSize: AppFontSize.BODY3,
            fontFamily: AppFontsFamily.Poppins_Medium,
            paddingStart: WP('4'),
        } as TextStyle;
    }

const styles = StyleSheet.create({

    rightText: {
    position: 'absolute',
    right: WP('4'),
    color: AppColors.Neutrals.DarkGray,
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Black,
  },

    
})

export default AppSearchBar