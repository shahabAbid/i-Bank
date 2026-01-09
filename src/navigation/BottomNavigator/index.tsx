import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/App/Home";
import Search from "../../screens/App/Search";
import Message from "../../screens/App/Message";
import Setting from "../../screens/App/Setting";
import { AppColors, AppFontsFamily, appIcons, WP } from "../../shared/exporter";
import { Image, View, StyleSheet, Text } from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: {
          backgroundColor: AppColors.Neutrals.White,
          position: "absolute",
          bottom: 0,
          height: 91,
          elevation: 5,
          paddingTop: 15,
          paddingStart: WP('4'),
          paddingRight: WP('6')
        },
      }}
    >
      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.containerFocused : styles.containerunFocused}
            >
              <Image source={appIcons.Hometab} 
                style={focused ? styles.iconstyleFocused : styles.iconstyle} />
              {focused && (
                <Text style={styles.label}>Home</Text>
              )}
            </View>
          ),
        }}
      />

      {/* SEARCH */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.containerFocused : styles.containerunFocused}
            >
              <Image source={appIcons.Searchtab} 
               style={focused ? styles.iconstyleFocused : styles.iconstyle} />
              {focused && (
                <Text style={styles.label}>Search</Text>
              )}
            </View>
          ),
        }}
      />

      {/* MESSAGE */}
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.containerFocused : styles.containerunFocused}
            >
              <Image source={appIcons.Messagetab} 
               style={focused ? styles.iconstyleFocused : styles.iconstyle} />
              {focused && (
                <Text style={styles.label}>Message</Text>
              )}
            </View>
          ),
        }}
      />

      {/* SETTING */}
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={focused ? styles.containerFocused : styles.containerunFocused}
            >
              <Image source={appIcons.Settingtab} 
              style={focused ? styles.iconstyleFocused : styles.iconstyle} />
              {focused && (
                <Text style={styles.label}>Setting</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
containerFocused: {
    width: 'auto',
  minWidth: 100,               
  height: 40,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: AppColors.Primary.DarkBlue,
  borderRadius: 20,
    marginStart: 20,
        
},



  containerunFocused: {
  width: 60,
  height: 50,
  justifyContent: "center",
  backgroundColor: "transparent",
  borderRadius: 20,
  alignItems: "center",
  marginStart: 20,
},


  iconstyleFocused:{
    tintColor : AppColors.Neutrals.White,
    marginStart: WP('1')
  },

  iconstyle: {
    tintColor : AppColors.Neutrals.LightGray,
    marginStart: WP('1')
  },

  label: {
    marginLeft: 6,
    fontSize: 12,
    fontFamily: AppFontsFamily.Poppins_Regular,
    color: AppColors.Neutrals.White,
  },
});

export default BottomNavigator;
