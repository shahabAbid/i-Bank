import { View, Text, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { appGifs, appIcons, appImages } from '../../../shared/assets';
import { AppInput } from '../../../components/primitive/AppInput';
import { AppColors, WP } from '../../../shared/exporter';
import { AppButton } from '../../../components/primitive/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Registering } from '../../../services/auth';
import FastImage from 'react-native-fast-image';
import { sendEmailVerification } from '@react-native-firebase/auth';



const SignUp = ({ navigation }: any) => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [checked, setchecked] = useState(false);
  const [modalvisible, setmodalvisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modal2visible, setmodal2visible] = useState(false);

  let isDisabled = false;

  if (email === '' || Password === '' || Password.length < 6) {
    isDisabled = true;
  } else {
    isDisabled = false;
  }

  const handleRegister = async () => {
    
    try {
      await Registering(email, Password);
      setmodalvisible(true)
      setEmail('')
      setPassword('')
      setname('')
    } catch (error: any) {
      setModalMessage(`Error in Registering: ${error.message}`);
      setmodal2visible(true);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={80}>
        <View style={styles.wrapper1}>
          {/* bluebg */}
          <View style={styles.bluebg}>
            <View style={styles.wrapper2}>
              <TouchableOpacity onPress={() => navigation.goBack('SignIn')}>
                <Image source={appIcons.BackIcon} style={styles.backIcon} />
              </TouchableOpacity>
              <Text style={styles.headingtext}>SingUp</Text>
            </View>
          </View>

          {/* whitebg */}
          <View style={styles.whitebg}>
            <Text style={styles.heading2text}>Welcome to us,</Text>
            <Text style={styles.caption1}>Hello there, create New account</Text>

            <Image source={appImages.SingUp} style={styles.Sinupimg} />

            <AppInput
              label="Name"
              placeholder="Name"
              isRequired={false}
              rightIcon={false}
              leftIcon={false}
              keyboardType="default"
              placeholderTextColor={AppColors.Neutrals.LightSilver}
              value={name}
              onChangeText={setname}
            />

            <AppInput
              label="Email"
              placeholder="Email"
              isRequired={false}
              rightIcon={false}
              leftIcon={false}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={AppColors.Neutrals.LightSilver}
              value={email}
              onChangeText={setEmail}
            />

            <AppInput
              label="Password"
              placeholder="Password"
              isRequired={false}
              rightIcon={true}
              leftIcon={false}
              keyboardType="default"
              placeholderTextColor={AppColors.Neutrals.LightSilver}
              value={Password}
              onChangeText={setPassword}
            />

            <View style={styles.wrapper4}>
              <TouchableOpacity onPress={() => setchecked(!checked)}>
                <View style={styles.checkbox}>
                  {checked && (
                    <Image
                      source={appIcons.Tick}
                      style={{ width: 25, height: 25 }}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <View style={styles.wrapper5}>
                <Text style={styles.termstext}>
                  By creating an account your aggree to our{' '}
                </Text>
                <TouchableOpacity >
                  <Text style={styles.termstextstyle2}>Term and Condtions</Text>
                </TouchableOpacity>
              </View>
            </View>

            <AppButton
              tittle="Sign Up"
              disabled={isDisabled}
              handleClick={handleRegister}
              isEmpty={true}
              textStyle={styles.btntextstyle}
              buttonStyle={{
                backgroundColor: isDisabled
                  ? AppColors.Primary.LightLavender
                  : AppColors.Primary.DarkBlue,
              }}
            />

            <Modal
            animationType='fade'
            transparent
            visible={modal2visible}
            >
              <View style={styles.modalcontainer}>
                <View style={styles.modaloverlay}>
                  <FastImage
                       source={require('../../../assets/gif/error.gif')}
                       style={styles.gifstyle}
                       resizeMode={FastImage.resizeMode.contain}
                    />
                  <Text style={[styles.verificationemailtext, {paddingLeft: WP('2')}]}>{modalMessage}</Text>
                  <AppButton 
                  buttonStyle={styles.modalbtn}
                  textStyle={styles.modalbtntextstyle}
                  isEmpty={true}
                  tittle='Close'
                  handleClick={() => setmodal2visible(false)}/>
                </View>
              </View>
            </Modal>

            <Modal
            animationType='fade'
            transparent
            visible={modalvisible}
            >
              <View style={styles.modalcontainer}>
                <View style={styles.modaloverlay}>
                  <FastImage
                       source={require('../../../assets/gif/email.gif')}
                       style={styles.gifstyle}
                       resizeMode={FastImage.resizeMode.contain}
                    />
                  <Text style={[styles.verificationemailtext, {marginStart: WP('4'), marginRight: WP('4')}]}>Verification Email Send Succesfully!</Text>
                  <AppButton 
                  buttonStyle={styles.modalbtn}
                  textStyle={styles.modalbtntextstyle}
                  isEmpty={true}
                  tittle='Close'
                  handleClick={() => setmodalvisible(false)}/>
                </View>
              </View>
            </Modal>

            <View style={styles.wrapper3}>
              <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
              <Text style={styles.textstyle}>Have an account?  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textstyle2}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
