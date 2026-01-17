import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './style';
import { appIcons } from '../../../../shared/assets';
import AppSearchBar from '../../../../components/primitive/AppSearchBar';

const Branch = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack('BottomNavigator')}>
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Search</Text>
      </View>

      <View style={styles.mapframe}></View>

      <View>
        <AppSearchBar 
        placeHolder='Search'
        
        />
      </View>
    </View>
  );
};

export default Branch;
