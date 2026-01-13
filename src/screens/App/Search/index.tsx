import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { APP_CONST, appIcons } from '../../../shared/exporter'


const Search = () => {

 
  const Searchdata = APP_CONST.searchscreen_data
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={appIcons.BackIcon} style={styles.backIcon}/>
        <Text style={styles.headingtext}>Search</Text> 
      </View>

      <FlatList 
      data={Searchdata}
      showsVerticalScrollIndicator={false}
      // keyExtractor={(item: any) => item.toString()}
      renderItem={({ item }: any) => (
        <View style={styles.cardstyle}>
          <View style={styles.wrapper2}>
            <View style={styles.wrapper3}>
          <Text style={styles.cardtext1}>{item?.tittle}</Text>
          <Text style={styles.cardtext2}>{item?.tittle2}</Text>
          </View>
          <Image source={item?.Image}/>
          </View>
        </View>
      )}
      />
    </View>
  )
}

export default Search