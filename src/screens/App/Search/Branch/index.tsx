import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './style';
import { appIcons } from '../../../../shared/assets';
import AppSearchBar from '../../../../components/primitive/AppSearchBar';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Branch = ({ navigation }: any) => {
  const mapRef = useRef<MapView>(null);
  // const [input, setinput] = useState('');
  const [region, setregion] = useState({
    latitude: 24.872009183987874,
    longitude: 67.19700085362547,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack('BottomNavigator')}>
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Search</Text>
      </View>

      <View style={styles.mapframe}>
        <MapView style={styles.mapview} initialRegion={region} region={region} >
          <Marker coordinate={region}/>
        </MapView>
      </View >

      <View >
         <GooglePlacesAutocomplete
          placeholder="Search Here"
          fetchDetails
          onPress={(data, details = null) => {
            if (!details) return;

            const loc = details.geometry.location;

            const newRegion = {
              latitude: loc.lat,
              longitude: loc.lng, 
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            };

            setregion(newRegion);
            mapRef.current?.animateToRegion(newRegion, 1000);
          }}
          query={{
            key: 'AIzaSyBS8zW2ewFMyeJI_Rbqr0cr_7RiV5-GcLg',
            language: 'en',
          }}
          styles={{
            container: styles.searchbar,
            listView: { backgroundColor: 'red' },
          }}
        /> 
        </View>


      
       
      
    </View>
  );
};

export default Branch;
