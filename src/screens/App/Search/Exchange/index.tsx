import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import { appIcons, appImages } from '../../../../shared/assets';
import { AppInput } from '../../../../components/primitive/AppInput';
import { WP } from '../../../../shared/exporter';

const Exchange = ({ navigation }: any) => {
  const [showmodal, setshowmodal] = useState(false);
  const modaldata = [
    {
      id: 1,
      tittle: 'VND ( Viet Nam Dong )',
      code: 'VND',
      item: { name: 'mohsin' },
    },
    { id: 2, tittle: 'USD ( Dollar )', code: 'USD' },
    { id: 3, tittle: 'CNY (Yuan)', code: 'CNY' },
    { id: 4, tittle: 'EUR ( Euro )', code: 'EUR' },
    { id: 5, tittle: 'GBP ( British Pound )', code: 'GBP' },
    { id: 6, tittle: 'RUB ( Russian Rubi)', code: 'RUB' },
  ];

  const [selecteditem, setselecteditem] = useState<any>('');
  const [selectedCode, setSelectedCode] = useState<any>('USD');
  const [fromToCode, setFromToCode] = useState('USD');
  const [type, setType] = useState('');
  const [Amount, setAmount] = useState('');
  const [Amount2, setAmount2] = useState('');

  const changecolor = (item: any) => {
    setselecteditem(item);
    if (type == 'to') {
      setFromToCode(item.code);
    } else {
      setSelectedCode(item.code);
    }
    setshowmodal(false);
  };

  useEffect(() => {
    const fetchrates = async () => {
      try {
        const url = 'https://open.er-api.com/v6/latest/USD';
        const res = await fetch(url);
        const json = await res.json();
        console.log('ya mera data', JSON.stringify(json, null, 2));
      } catch (error) {
        console.log('Error fetching exchange rates:', error);
      }
    };

    fetchrates();
  }, []);

  const renderitem = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => changecolor(item)} activeOpacity={0.7}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: WP('10'),
            marginTop: WP('2'),
          }}
        >
          <Text
            style={
              selecteditem?.id == item.id
                ? styles.activetextstyle
                : styles.textstyle
            }
          >
            {item.tittle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack('BottomNavigator')}
        >
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Exchange</Text>
      </View>

      <View>
        <Image source={appImages.Mainimg} style={styles.mainimg} />
        <View style={styles.container2}>
          <AppInput
            placeholder="0"
            label="From"
            isRequired={false}
            editable={true}
            keyboardType="numeric"
            onChangeText={setAmount}
            value={Amount}
            labelstyle={styles.labelstyle}
            rightText={selectedCode}
            rightIcon={
              <Image
                source={appIcons.InputArrow}
                style={{ alignSelf: 'flex-end' }}
              />
            }
            inputStyle={styles.inputstyle}
            rightIconContainerStyle={styles.righticoninputcontainer}
            rightIconPress={() => {
              setshowmodal(true), setType('from');
            }}
          />

          <Image source={appIcons.Arrow} style={styles.Arrowstyle} />

          <AppInput
            placeholder="0"
            label="To"
            isRequired={false}
            editable={true}
            labelstyle={styles.labelstyle}
            rightText={fromToCode}
            keyboardType="numeric"
            onChangeText={setAmount2}
            value={Amount2}
            rightIcon={
              <Image
                source={appIcons.InputArrow}
                style={{ alignSelf: 'flex-end' }}
              />
            }
            inputStyle={styles.inputstyle}
            rightIconContainerStyle={styles.righticoninputcontainer}
            rightIconPress={() => {
              setshowmodal(true), setType('to');
            }}
          />

          <View style={styles.wrapper4}>
            <Text style={styles.currentText}>Currency rate</Text>
            <Text style={styles.rateText}>1 USD = </Text>
          </View>

          <Modal
            transparent
            animationType="fade"
            visible={showmodal}
            onRequestClose={() => setshowmodal(false)}
          >
            <View style={styles.Overlay}>
              <View style={styles.modalbox}>
                <Text style={styles.modalheading}>Select the currency</Text>
                <FlatList
                  data={modaldata}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={renderitem}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default Exchange;
