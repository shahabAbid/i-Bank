import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AppSearchBar from '../../../../components/primitive/AppSearchBar';
import { appIcons } from '../../../../shared/assets';
import styles from './style';

const Branch = ({ navigation }: any) => {
  const mapRef = useRef<MapView>(null);
  const [region, setregion] = useState({
    latitude: 24.872009183987874,
    longitude: 67.19700085362547,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={appIcons.BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Search</Text>
      </View>
      
      <View style={styles.mapframe}>
      <MapView ref={mapRef} style={styles.mapview} region={region}>
        <Marker coordinate={region} />
      </MapView>
      </View>

      {/* Your AppSearchBar */}
      <AppSearchBar
        placeHolder="Search"
        value={input}
        onChangeText={setInput}
        leftIcon={<Image source={appIcons.Searchleft} style={{ width: 20, height: 20, marginLeft: 10 }} />}
        appSearchContainer={styles.searchbar}
      />

      {/* Hidden GooglePlacesAutocomplete to fetch suggestions */}
      {input.length > 0 && (
        <GooglePlacesAutocomplete
          placeholder=""
          fetchDetails
          textInputProps={{ value: input }}
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
            setInput(data.description); // update search bar
          }}
          query={{
            key: 'AIzaSyAzqy5RDpl-IDYMOB_PBzZFtXwFWhCz3oU',
            language: 'en',
          }}
          styles={{
            container: { position: 'absolute', top: 0, zIndex: 999, width: '100%' },
            listView: { backgroundColor: '#fff' },
            textInput: { height: 0 }, // hide default input
          }}
        />
      )}
    </View>
  );
};

export default Branch;
