import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { appIcons } from '../../../../shared/assets'


const Exchangerate = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
        <TouchableOpacity
activeOpacity={1} onPress={() => navigation.goBack('BottomNavigator')}>
        <Image source={appIcons.BackIcon} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Search</Text> 
      </View>
    </View>
  )
}

export default Exchangerate