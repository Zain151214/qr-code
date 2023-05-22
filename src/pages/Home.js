import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Home = ({navigation}) => {
  const handleScan = () => {
    navigation.navigate('ScanQR', {name: 'ScanQR'});
  };

  const handleGenerate = () => {
    navigation.navigate('GenerateQR', {name: 'GenerateQR'});
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Quick QR Scanner & Generator</Text>
      </View>
      <View style={styles.button_container}>
        <Button title={'Scan'} onPress={handleScan} />
        <Button title={'Generate'} onPress={handleGenerate} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F6F6',
    padding: 20,
    flex: 1,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },

  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
