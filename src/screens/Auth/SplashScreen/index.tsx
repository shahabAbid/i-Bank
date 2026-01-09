import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { Routes } from '../../../shared/exporter';
import { AppStatusBar } from '../../../shared/exporter';

interface SplashProps {
  navigation: any;
}

const SplashScreen = ({navigation}: SplashProps) => {


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.Home);
    
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <View style={styles.container}>
      <AppStatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Text style={styles.splashTextStyle}>App Name</Text>
    </View>
  );
};

export default SplashScreen;
