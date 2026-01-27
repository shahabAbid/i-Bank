import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { appIcons } from '../../../../shared/assets'
import { WP } from '../../../../shared/exporter'


const Exchangerate = ({ navigation }: any) => {

  const initialData = [
  {id:1, Image: appIcons.Vietnam, name: 'Vietnam', code: 'VND', Buy: '', Sell: ''},
  {id:2, Image: appIcons.Nicaragua, name: 'Nicaragua', code: 'NIO', Buy: '', Sell: ''},
  {id:3, Image: appIcons.China, name: 'China', code: 'CNY', Buy: '', Sell: ''},
  {id:4, Image: appIcons.French, name: 'France', code: 'EUR', Buy: '', Sell: ''},
  {id:5, Image: appIcons.Pound, name: 'United Kingdom', code: 'GBP', Buy: '', Sell: ''},
  {id:6, Image: appIcons.Portuguese, name: 'Portugal', code: 'EUR', Buy: '', Sell: ''},
  {id:7, Image: appIcons.Russia, name: 'Russia', code: 'RUB', Buy: '', Sell: ''},
  {id:8, Image: appIcons.Korea, name: 'Korea', code: 'KRW', Buy: '', Sell: ''},
];


  const [data, setData] = useState(initialData);

useEffect(() => {
  const symbols = initialData.map(item => item.code).join(',');
  const url = `https://api.exchangerate.host/latest?base=USD&symbols=${symbols}`;

  fetch(url)
    .then(res => res.json())
    .then(json => {
      const spread = 0.005;

      const updatedData = initialData.map(item => {
        const rate = json.rates[item.code];
        if (rate) {
          return {
            ...item,
            Buy: (rate * (1 - spread)).toFixed(4),
            Sell: (rate * (1 + spread)).toFixed(4),
          };
        } else {
          return { ...item, Buy: 'N/A', Sell: 'N/A' };
        }
      });

      setData(updatedData);
    })
    .catch(err => Alert.alert('Exchange rate fetch error', err.message));
}, []);






  const renderitem = ({ item }: any) => (
    <View style={styles.wrapper3}>
      <Image source={item.Image}/>
      <Text style={styles.countryname}>{item.name}</Text>
      <Text>{item.Buy}</Text>
      <Text>{item.Sell}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
        <TouchableOpacity
        activeOpacity={1} onPress={() => navigation.goBack('BottomNavigator')}>
        <Image source={appIcons.BackIcon} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Exchange Rate</Text> 
      </View>


      <View style={styles.wrapper2}>
        <Text style={styles.secondheadings}>Country</Text>
        <Text style={[styles.secondheadings, {marginLeft: WP('16')}]}>Buy</Text>
        <Text style={styles.secondheadings}>Sell</Text>
      </View>

      <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={( item ) => item.id.toString()}
      renderItem={renderitem}
      />
    </View>
  )
}

export default Exchangerate