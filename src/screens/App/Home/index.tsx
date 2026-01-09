import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import styles from './styles';
import { appIcons } from '../../../shared/assets';
import Carousel from 'react-native-reanimated-carousel';

const Home = () => {
  const { width: screenWidth } = Dimensions.get('window');

  const carddata = [
    // {id: 1, Image: require('../../../assets/Images/DigitalCard1.png'), name: 'Shahab Abid', Acc: '1234 **** **** 1121', Cvv: '890', BankName: 'IBank'},
    {
      id: 2,
      Image: require('../../../assets/Images/DigitalCard2.png'),
      name: 'SHAHAB ABID',
      // Acc: '1234 **** **** 1121',
      // BankName: 'IBank',
    },
    {
      id: 3,
      Image: require('../../../assets/Images/DigitalCard3.png'),
      name: 'SHAHAB ABID',
      Acc: '1234 **** **** 1121',
      BankName: 'I-Bank',
    },
    {
      id: 4,
      Image: require('../../../assets/Images/DigitalCard4.png'),
      name: 'SHAHAB ABID',
      Acc: '1234 **** **** 1121',
      BankName: 'I-Bank',
    },
  ];
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
                style={{ width: 327, height: 204 }}
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
      </View>
    </View>
  );
};

export default Home;
