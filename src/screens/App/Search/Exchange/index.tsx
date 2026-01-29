import { View, Text, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { appIcons, appImages } from '../../../../shared/assets'
import { AppInput } from '../../../../components/primitive/AppInput'
import { WP } from '../../../../shared/exporter'



const Exchange = ({ navigation }: any) => {

    const [showmodal, setshowmodal] = useState(false)
    const modaldata = [
      {id:1, tittle: 'VND ( Viet Nam Dong )',},
      {id:2, tittle: 'USD ( Dollar )',},
      {id:3, tittle: 'CNY (Yuan)',},
      {id:4, tittle: 'EUR ( Euro )',},
      {id:5, tittle: 'GBP ( British Pound )',},
      {id:6, tittle: 'RUB ( Russian Rubi)',},
    ];

    const renderitem = ({ item }: any) => (
      <View style={{width: '90%', alignSelf:'center', height: WP('10')}}>
        <Text style={styles.textstyle}>{item.tittle}</Text>
      </View>
    )

    
  return (
    <View style={styles.container}>
       <View style={styles.wrapper}>
        <TouchableOpacity
        activeOpacity={1}   
        onPress={() => navigation.goBack('BottomNavigator')}>
        <Image source={appIcons.BackIcon} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.headingtext}>Exchange</Text> 
    </View>

      <View>
        <Image source={appImages.Mainimg} style={styles.mainimg}/>
        <View
        style={styles.container2}
        >
          <AppInput
          placeholder='Amount'
          label='From'
          isRequired={false}
          editable={true}
          labelstyle={styles.labelstyle}
          rightText='USD'
          rightIcon={<Image source={appIcons.InputArrow} style={{alignSelf: 'flex-end'}}/>}
          inputStyle={styles.inputstyle}
          rightIconContainerStyle={styles.righticoninputcontainer}
          rightIconPress={() => setshowmodal(true)}
          />

          <Image source={appIcons.Arrow} style={styles.Arrowstyle}/>

          <AppInput
          placeholder='Amount'
          label='To'
          isRequired={false}
          editable={true}
          labelstyle={styles.labelstyle}
          rightText='USD'
          rightIcon={<Image source={appIcons.InputArrow} style={{alignSelf: 'flex-end'}}/>}
          inputStyle={styles.inputstyle}
          rightIconContainerStyle={styles.righticoninputcontainer}
          rightIconPress={() => setshowmodal(true)}
          />

          <Modal 
          transparent
          animationType='fade'
          visible={showmodal}
          onRequestClose={() => setshowmodal  (false)}
          >
            <View style={styles.Overlay}>
              <View style={styles.modalbox}>
                <Text style={styles.modalheading}>Select the currency</Text>
                <FlatList
                data={modaldata}
                showsVerticalScrollIndicator={false}
                keyExtractor={( item ) => item.id.toString()}
                renderItem={renderitem}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>

    </View>
  )
}

export default Exchange