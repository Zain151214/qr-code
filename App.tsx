import React, {useEffect} from 'react';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScanQR from './src/pages/ScanQR';
import GenerateQR from './src/pages/GenerateQR';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ScanQR"
            component={ScanQR}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GenerateQR"
            component={GenerateQR}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="#1F9F94" barStyle="light-content" />
    </>
  );
}

export default App;
