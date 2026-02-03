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
    { id: 1, tittle: 'VND ( Viet Nam Dong )', code: 'VND' },
    { id: 2, tittle: 'USD ( Dollar )', code: 'USD' },
    { id: 3, tittle: 'CNY (Yuan)', code: 'CNY' },
    { id: 4, tittle: 'EUR ( Euro )', code: 'EUR' },
    { id: 5, tittle: 'GBP ( British Pound )', code: 'GBP' },
    { id: 6, tittle: 'RUB ( Russian Rubi)', code: 'RUB' },
  ];

  const [selecteditem, setselecteditem] = useState<any>(null);
  const [fromCode, setFromCode] = useState('USD');
  const [toCode, setToCode] = useState('EUR');
  const [type, setType] = useState('');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [rates, setRates] = useState<any>({});
  const [activeInput, setActiveInput] = useState<'from' | 'to'>('from');

  const changecolor = (item: any) => {
    setselecteditem(item);
    if (type === 'to') setToCode(item.code);
    else setFromCode(item.code);
    setshowmodal(false);
  };

  // Fetch rates whenever base currency changes
  useEffect(() => {
    const baseCurrency = activeInput === 'from' ? fromCode : toCode;
    const fetchRates = async () => {
      try {
        const res = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
        );
        const json = await res.json();
        setRates(json.rates);
      } catch (error) {
        console.log('Error fetching exchange rates:', error);
      }
    };
    fetchRates();
  }, [fromCode, toCode, activeInput]);

  // When typing in FROM input
  const onFromChange = (value: string) => {
    setActiveInput('from');
    setFromAmount(value);

    const num = parseFloat(value);
    if (isNaN(num) || !rates[toCode]) {
      setToAmount('');
      return;
    }
    setToAmount((num * rates[toCode]).toFixed(2));
  };

  // When typing in TO input
  const onToChange = (value: string) => {
    setActiveInput('to');
    setToAmount(value);

    const num = parseFloat(value);
    if (isNaN(num) || !rates[fromCode]) {
      setFromAmount('');
      return;
    }
    setFromAmount((num * rates[fromCode]).toFixed(2));
  };

  const renderitem = ({ item }: any) => (
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
            selecteditem?.id === item.id
              ? styles.activetextstyle
              : styles.textstyle
          }
        >
          {item.tittle}
        </Text>
      </View>
    </TouchableOpacity>
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
            onChangeText={onFromChange}
            value={fromAmount}
            labelstyle={styles.labelstyle}
            rightText={fromCode}
            rightIcon={
              <Image
                source={appIcons.InputArrow}
                style={{ alignSelf: 'flex-end' }}
              />
            }
            inputStyle={styles.inputstyle}
            rightIconContainerStyle={styles.righticoninputcontainer}
            rightIconPress={() => {
              setshowmodal(true);
              setType('from');
            }}
          />

          <Image source={appIcons.Arrow} style={styles.Arrowstyle} />

          <AppInput
            placeholder="0"
            label="To"
            isRequired={false}
            editable={true}
            keyboardType="numeric"
            onChangeText={onToChange}
            value={toAmount}
            secureTextEntry={false}
            labelstyle={styles.labelstyle}
            rightText={toCode}
            rightIcon={
              <Image
                source={appIcons.InputArrow}
                style={{ alignSelf: 'flex-end' }}
              />
            }
            inputStyle={styles.inputstyle}
            rightIconContainerStyle={styles.righticoninputcontainer}
            rightIconPress={() => {
              setshowmodal(true);
              setType('to');
            }}
          />

          <View style={styles.wrapper4}>
            <Text style={styles.currentText}>Currency rate</Text>
            <Text style={styles.rateText}>
              1 {fromCode} = {rates[toCode] ?? '-'} {toCode}
            </Text>
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
