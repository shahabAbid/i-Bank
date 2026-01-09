import { View, Text, Image, TouchableOpacity, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { AppColors, appIcons, appImages, appSVG, WP } from '../../../shared/exporter';
import { AppInput } from '../../../components/primitive/AppInput';
import { AppButton } from '../../../components/primitive/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Loginuser } from '../../../services/auth';
import FastImage from 'react-native-fast-image';



const Login = ({ navigation }: any) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [modal2visible, setmodal2visible] = useState(false);

  const handlelogin = async () => {
    try {

      const {emailVerified} = await Loginuser(Email, Password);
      if (emailVerified) {
        setmodal2visible(true)
        setEmail('')
        setPassword('')
        navigation.navigate('BottomNavigator')
      } else {
        Alert.alert('Error In Login, Email Is Not Verified')
        setEmail('')
        setPassword('')
      }
       
    } catch (error : any) {
      Alert.alert('Error In Login', error.message)
    }
  }



  let isDisabled = false;

 
  if (Email === '' || Password === '' || Password.length < 6) {
    isDisabled = true;
  } else {
    isDisabled = false;
  }
  
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={{ flexGrow: 1 }}
      >
      <View style={styles.wrapper1}>
        {/* bluebg */}
        <View style={styles.bluebg}>
          <View style={styles.wrapper2}>
            <TouchableOpacity onPress={() => navigation.goBack('')}>
            <Image source={appIcons.BackIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headingtext}>SignIn</Text>
          </View>
        </View>
        {/* whitebg */}
        <View style={styles.whitebg}>
          <Text style={styles.heading2text}>Welcome Back</Text>
          <Text style={styles.caption1}>Hello there, sign in to continue</Text>
          <Image source={appImages.Lockimg} style={styles.lockimg} />

          <AppInput
            isRequired={false}
            label="Email"
            placeholder="Email"
            rightIcon={false}
            leftIcon={false}
            keyboardType="email-address"
            autoCapitalize='none'
            placeholderTextColor={AppColors.Neutrals.LightSilver}
            value={Email}
            onChangeText={setEmail}

            
            
          />
          <AppInput
          onChangeText={setPassword}
          isRequired={false}
          label='Password'
          placeholder='Password'
          rightIcon={true}
          keyboardType="default"
          placeholderTextColor={AppColors.Neutrals.LightSilver}
          value={Password}
          
        />

        <View style={styles.forgettextcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
        <Text style={styles.forgetpasstext}>Forget Your Password?</Text>
        </TouchableOpacity>
        </View>

        <AppButton
            tittle="Sign in"
            disabled={isDisabled}
            isEmpty={true}
            handleClick={handlelogin}
            textStyle={styles.btntext}
            buttonStyle={[
              styles.signinbtn,
              {
                backgroundColor: isDisabled
                  ? AppColors.Primary.LightLavender 
                  : AppColors.Primary.DarkBlue, 
              }
            ]}
          />

          <Modal
            animationType='fade'
            transparent
            visible={modal2visible}
            >
              <View style={styles.modalcontainer}>
                <View style={styles.modaloverlay}>
                  <FastImage
                       source={require('../../../assets/gif/Logined.gif')}
                       style={styles.gifstyle}
                       resizeMode={FastImage.resizeMode.contain}
                    />
                  <Text style={[styles.Loginsuccesfulltext, {paddingLeft: WP('2')}]}>Login Successfull</Text>
                  <AppButton 
                  buttonStyle={styles.modalbtn}
                  textStyle={styles.modalbtntextstyle}
                  isEmpty={true}
                  tittle='Close'
                  handleClick={() => setmodal2visible(false)}/>
                </View>
              </View>
            </Modal>

          <View style={styles.wrapper3}>
          
            <Text style={styles.textstyle}>Don't have an account? </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('SingUp')}
            >
            <Text style={styles.textstyle2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        
        </View>
      </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
