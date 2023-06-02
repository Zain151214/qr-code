import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {PermissionsAndroid} from 'react-native';
import Ztechub from '../components/Ztechub';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        // console.log('Camera permission granted successfully');
      } else {
        // console.log('Camera Permission Denied');
      }
    } catch (error) {
      // console.log('Error requesting camera permission:', error);
    }
  };

  requestCameraPermission();

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require('../icons/Quick_QR.png')} />
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
    paddingHorizontal: wp(6),
    flex: 1,
  },

  logo_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(14),
  },

  logo: {
    height: 120,
    width: 120,
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
