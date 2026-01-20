import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { appIcons } from '../../../shared/assets';
import Carousel from 'react-native-reanimated-carousel';
import { APP_CONST, WP } from '../../../shared/exporter';

const Home = () => {
  const { width: screenWidth } = Dimensions.get('window');

  const carddata = APP_CONST.card_data
  const btnsdata = APP_CONST.btns_data
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.bluebg}>
        <View style={styles.wrapper1}>
          <View style={styles.profilepicframe} />
          <Text style={styles.textstyle}>Hi, Push Puttichai</Text>
          <Image source={appIcons.Bell} style={styles.Iconstyle} />
        </View>
      </View>

      
      <View style={styles.Whitebg}>
        <Carousel
          width={screenWidth}
          height={250}
          data={carddata}
          mode="horizontal-stack"
          modeConfig={{
            snapDirection: 'left',
            stackInterval: 18,
          }}
          renderItem={({ item }: any) => (
            <View style={styles.cardframe}>
              <Image
                source={item.Image}
                style={{ width: WP('100'), height: WP('51') }}
                resizeMode="contain"
              />
              <View style={styles.Cardoverlay}>
                <View style={styles.cardTop}>
                  <Text style={styles.banknametext}>{item.BankName}</Text>
                </View>
                <View style={styles.cardmiddle}>
                  <Text style={styles.accnum}>{item.Acc}</Text>
                  <Text style={styles.cardname}>{item.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
        <View style={styles.wrapper}>
          <View style={styles.grid}>
              {btnsdata.map(item => (
                <TouchableOpacity
activeOpacity={1} style={styles.btnsize}>
                  <Image source={item.Image}/>
                  <Text style={styles.btntextstyle}>{item.tittle}</Text>
                </TouchableOpacity>
              ))}
              </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
