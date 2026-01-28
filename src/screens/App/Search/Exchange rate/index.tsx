import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import { appIcons } from '../../../../shared/assets';
import { WP } from '../../../../shared/exporter';

const Exchangerate = ({ navigation }: any) => {
  const [data, setData] = useState([
    { id: 1,  Image: appIcons.Vietnam, name: 'Vietnam', code: 'VND', Buy: '', Sell: '',},
    { id: 2, Image: appIcons.Nicaragua, name: 'Nicaragua', code: 'NIO', Buy: '', Sell: '',},
    { id: 3, Image: appIcons.China, name: 'China', code: 'CNY', Buy: '', Sell: '' },
    { id: 4, Image: appIcons.French, name: 'French', code: 'EUR', Buy: '', Sell: '' },
    { id: 5, Image: appIcons.Pound, name: 'Britian', code: 'GBP', Buy: '', Sell: '' },
    { id: 6, Image: appIcons.Portuguese, name: 'Portuguese', code: 'EUR', Buy: '', Sell: '' },
    { id: 7, Image: appIcons.Russia, name: 'Russia', code: 'RUB', Buy: '', Sell: '' },
    { id: 8, Image: appIcons.Korea, name: 'Korea', code: 'KRW', Buy: '', Sell: '' },
  ]);

  

  useEffect(() => {
  const fetchRates = async () => {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const json = await res.json();
      console.log(' ya mera data ha',JSON.stringify(json,null,2))
      const spread = 0.005;

      const updated = data.map(item => {
        const rate = json.rates[item.code];

        return rate
          ? {
              ...item,
              Buy: (rate * (1 - spread)).toFixed(2),
              Sell: (rate * (1 + spread)).toFixed(2),
            }
          : item;
      });

      setData(updated);
    } catch (error) {
      console.log('Error fetching exchange rates:', error);
    }
  };

  fetchRates();
}, []);


  const renderitem = ({ item }: any) => (
    <View style={styles.wrapper3}>

  <View style={styles.countryCol}>
    <Image source={item.Image} />
    <Text style={styles.countryname}>{item.name}</Text>
  </View>

  <View style={styles.buyCol}>
    <Text style={styles.buytext}>{item.Buy}</Text>
  </View>

  <View style={styles.sellCol}>
    <Text style={styles.selltext}>{item.Sell}</Text>
  </View>

</View>

  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack('BottomNavigator')}
        >
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Exchange Rate</Text>
      </View>

      <View style={styles.wrapper2}>
        <Text style={styles.secondheadings}>Country</Text>
        <Text style={[styles.secondheadings, { marginLeft: WP('16') }]}>
          Buy
        </Text>
        <Text style={styles.secondheadings}>Sell</Text>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={renderitem}
      />
    </View>
  );
};

export default Exchangerate;
