import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { AppColors, AppFontsFamily, AppFontSize, WP } from "../../../shared/exporter";





interface AppButtonProps {
    icon?: any;
    textStyle?: any;
    tittle?: string;
    isEmpty?: boolean;
    buttonStyle?: any;
    disabled?: boolean;
    handleClick?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
    icon,
    textStyle,
    tittle,
    isEmpty,
    buttonStyle,
    handleClick,
    disabled,
}) => (
    <TouchableOpacity
    disabled={disabled}
    activeOpacity={0.7}
    onPress={handleClick}
    style={[ styles.Buttoncontainer, buttonStyle]}
    >
     {isEmpty && <View style={styles.emptyViewStyle} />}
    <Text style={[styles.typeTextStyle, textStyle]}>{tittle}</Text>
    {icon ? icon : <View style={styles.emptyViewStyle} />}
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    Buttoncontainer:{
        width: '90%',
        height: WP('12'),
        borderRadius: 15,
        backgroundColor: AppColors.Primary.DarkBlue,
        marginTop: WP('8'),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },

    typeTextStyle: {
    color: AppColors.Neutrals.White,
    fontSize: AppFontSize.BODY1,
    fontFamily: AppFontsFamily.Poppins_Medium,
  },
  emptyViewStyle: {
    width: WP('7'),
    height: WP('7'),
  },
})

export {AppButton}
