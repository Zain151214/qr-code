import {StyleSheet, View, Image, Alert} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {PermissionsAndroid} from 'react-native';
import Ztechub from '../components/Ztechub';

const Home = ({navigation}) => {
  const handleScan = () => {
    navigation.navigate('ScanQR', {name: 'ScanQR'});
  };

  const handleGenerate = () => {
    navigation.navigate('GenerateQR', {name: 'GenerateQR'});
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted successfully');
      } else {
        console.log('Camera Permission Denied');
      }
    } catch (error) {
      Alert.alert('Error requesting camera permission:', error);
    }
  };

  requestCameraPermission();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../icons/Quick_QR.png')} />
      </View>

      <View style={styles.button_container}>
        <Button title={'Scan'} onPress={handleScan} />
        <Button title={'Generate'} onPress={handleGenerate} />
      </View>

      <Ztechub />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F6F6',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },

  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
