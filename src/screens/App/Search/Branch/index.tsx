import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AppSearchBar from '../../../../components/primitive/AppSearchBar';
import { appIcons } from '../../../../shared/assets';
import styles from './style';
import { AppColors, AppFontsFamily, AppFontSize, WP } from '../../../../shared/exporter';

const Branch = ({ navigation }: any) => {
  const [visibility, setVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [region, setRegion] = useState({
    latitude: 24.872009183987874,
    longitude: 67.19700085362547,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const mapRef = useRef<MapView>(null);

 
  const fetchLocationSuggestions = async (query: string) => {
    try {
      if (!query) return [];
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query
      )}&format=json&addressdetails=1&limit=5`;

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'I-Bank',
        },
      });
      const data = await response.json();

      return data.map((item: any) => ({
        name: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
      }));
    } catch (error) {
      Alert.alert('Error fetching locations');
      return [];
    }
  };

 
  const handleSearch = async (text: string) => {
    setSearchText(text);
    const results = await fetchLocationSuggestions(text);
    setSuggestions(results);
  };

   useEffect(() => {
    const loadInitialSuggestions = async () => {
      const results = await fetchLocationSuggestions('Karachi');
      setSuggestions(results);
    };

    loadInitialSuggestions();
  }, []);

 
  const handleSelect = (item: any) => {
    const newRegion = {
      latitude: item.lat,
      longitude: item.lon,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };
    setRegion(newRegion);
    mapRef.current?.animateToRegion(newRegion, 1000);
    setVisibility(false);
    setSearchText(item.name);
    setSuggestions([]);
  };

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

      
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setVisibility(true)}
      >
        <AppSearchBar
          placeholder="Search location"
          editable={false}
          appSearchContainer={[styles.searchcontainer,{marginBottom: WP('10')}]}
          leftIcon={<Image source={appIcons.Searchleft} />}
          value={searchText}
        />
      </TouchableOpacity>

      
      <Modal
        animationType="slide"
        visible={visibility}
        transparent
        onRequestClose={() => setVisibility(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalbox}>
            
            <AppSearchBar
              placeholder="Search Here"
              editable={true}
              value={searchText}
              onChangeText={handleSearch}
              appSearchContainer={styles.searchcontainer}
              leftIcon={<Image source={appIcons.Searchleft} />}
            />

            
            <FlatList
              data={suggestions}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                
                <View style={{
                  width: '85%',
                  flexDirection: 'row',
                    height: WP('17'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderBottomWidth: 2,
                    borderColor: '#bfbfbf',
                    alignSelf: 'center',
                }}>
                 

                <Image source={appIcons.Marker} style={{marginStart: WP('4')}}/>
                <TouchableOpacity
                  style={{
                    width: '90%',
                    marginStart: WP('4'),
                  }}
                  onPress={() => handleSelect(item)}
                >
                  
                  <Text style={{
                    fontSize: AppFontSize.BODY1, 
                    fontFamily: AppFontsFamily.Poppins_Medium, 
                    color: AppColors.Neutrals.DarkGray}}>{item.name}</Text>
                   
                </TouchableOpacity>
                </View>
                 
              )}
            />

            
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Branch;
