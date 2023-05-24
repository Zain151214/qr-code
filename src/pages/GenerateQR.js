import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Ztechub from '../components/Ztechub';
import TopNav from '../components/TopNav';
import QRCode from 'react-native-qrcode-svg';
import Button from '../components/Button';

const GenerateQR = ({navigation}) => {
  const [shareData, setShareDate] = useState('Generate Share Data');
  const [qrData, setQrData] = useState('');
  const [text, setText] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleQR = () => {
    setQrData(text);
    setShowQR(true);
    setText('');
  };

  const handleInput = data => {
    setText(data);
    setShowQR(false);
  };

  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} shareData={shareData} />

      <View style={{flex: 1, padding: 20}}>
        <Text style={styles.mainHeading}>Generate For:</Text>
        <TextInput
          placeholder="Enter Details"
          value={text}
          onChangeText={data => handleInput(data)}
          style={styles.input}
          multiline
          numberOfLines={5}
        />

        <View style={styles.buttonContainer}>
          <Button title={'Generate QR'} onPress={handleQR} />
        </View>

        <View style={styles.QR_container}>
          {showQR && <QRCode value={qrData} size={200} />}
        </View>
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

  mainHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    borderWidth: 1,
    marginVertical: 20,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
  },

  buttonContainer: {
    marginBottom: 50,
  },

  QR_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
