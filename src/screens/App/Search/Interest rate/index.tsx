import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import styles from './style';
import { appIcons } from '../../../../shared/assets';
import { APP_CONST, AppColors, AppFontsFamily, AppFontSize, WP } from '../../../../shared/exporter';

const Interestrate = ({ navigation }: any) => {

  const data = APP_CONST.interestrate_data;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.goBack('BottomNavigator')}
        >
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Interest Rate</Text>
      </View>

      <View style={styles.wrapper2}>
        <Text style={styles.secondheadings}>Interest kind</Text>
        <Text style={[styles.secondheadings, {marginLeft: WP('16')}]}>Deposit</Text>
        <Text style={styles.secondheadings}>Rate</Text>
      </View>

      <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.wrapper3}>
          <Text style={styles.text}>{item.tittle}</Text>
          <Text style={styles.text}>{item.deposite}</Text>
          <Text style={{
                fontFamily: AppFontsFamily.Poppins_Medium,
                fontSize: AppFontSize.BODY1,
                color: AppColors.Primary.DarkBlue,
          }}>{item.interestrate}</Text>
        </View>
      )}
      />
    </View>
  );
};

export default Interestrate;
