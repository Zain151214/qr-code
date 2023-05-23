import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Ztechub from '../components/Ztechub';
import TopNav from '../components/TopNav';

const GenerateQR = ({navigation}) => {
  const [shareData, setShareDate] = useState('Generate Share Data');

  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} shareData={shareData} />

      <View style={{flex: 1}}>
        <Text>Generate For:</Text>
        <TextInput placeholder="Enter details" style={styles.input} />
        <Text>Show QR Code Image Here</Text>
      </View>

      <Ztechub />
    </View>
  );
};

export default GenerateQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F6',
  },

  input: {
    backgroundColor: 'blue',
  },
});
