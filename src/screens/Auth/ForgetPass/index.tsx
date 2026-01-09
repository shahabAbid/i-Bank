import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { appIcons } from '../../../shared/assets';
import { AppInput } from '../../../components/primitive/AppInput';
import { AppButton } from '../../../components/primitive/AppButton';
import { AppColors } from '../../../shared/exporter';
import { sendEmail } from '../../../services/auth';

const ForgetPass = ({ navigation }: any) => {
  const [Email, setEmail] = useState('');

  
  let isDisabled = false 

  if (Email === '' || Email.length < 2) {
    isDisabled = true 
  } else {
    isDisabled = false
  }

  const validate = () => {

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(Email)) {
      Alert.alert('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleResetPassword = async () => {
    if (!validate()) return;
    try {
      await sendEmail(Email);
      setEmail('');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  };
  return (
    <View>
      <View style={styles.wrapper1}>
        <TouchableOpacity onPress={() => navigation.goBack('SignIn')}>
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>ForgetPass</Text>
      </View>

      <View style={styles.bgstyle}>
        <View style={styles.wrapper2}>
          <AppInput
            label="Type Email"
            placeholder="Enter Email"
            placeholderTextColor={AppColors.Neutrals.LightGray}
            keyboardType="email-address"
            autoCapitalize="none"
            inputStyle={styles.inputstyle}
            value={Email}
            onChangeText={setEmail}
            inputContainerStyle={{ alignSelf: 'center' }}
          />
        </View>

        <Text style={styles.secondttextstyle}>
          We send you a email to change your Password
        </Text>
        <Text style={styles.secondttextstyle}>
          This email will expired 10 minutes after this message. If you don't
          get a message.
        </Text>

        <AppButton
          handleClick={handleResetPassword}
          tittle="Send"
          isEmpty={true}
          disabled={isDisabled}
          buttonStyle={{
            backgroundColor: isDisabled
              ? AppColors.Primary.LightLavender
              : AppColors.Primary.DarkBlue
          }}
        />
      </View>
    </View>
  );
};

export default ForgetPass;
