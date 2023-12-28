import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculator from './Screens/Calculator'
import About from "./Screens/About";
import Ionicons from "@expo/vector-icons/Ionicons"
import { View, Text, Switch } from 'react-native'
import { useState } from "react";
const Tabs = createBottomTabNavigator()

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    if (isDarkMode) console.log("Darkmode is toggled to Off")
    else console.log("Darkmode is toggled to On")
    setIsDarkMode(!isDarkMode);
  };
  const getTitle = (routeName) => {
    if (routeName === 'Calculator') {
      return 'Calculator';
    } else if (routeName === 'About') {
      return 'About Developer';
    }
    return routeName;
  };
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Calculator') {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          title: getTitle(route.name)
        })}
        tabBarOptions={{
          activeTintColor: '#36b1ad',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#0f222c'
          }
        }}
      >
        <Tabs.Screen name="Calculator">
          {() => <Calculator isDarkMode={isDarkMode} onDarkModeToggle={toggleDarkMode} />}
        </Tabs.Screen>

        <Tabs.Screen name="About" title="About Developer">
          {() => <About isDarkMode={isDarkMode} />}
        </Tabs.Screen>

      </Tabs.Navigator>
      {/* <View style={{ position: 'absolute', top: 30, right: 20, padding: 10 }}>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#36b1ad" : "#f4f3f4"}
        />
      </View> */}
    </NavigationContainer >
  )
}