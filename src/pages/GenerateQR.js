import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Ztechub from '../components/Ztechub';
import TopNav from '../components/TopNav';
import QRCodeStyled from 'react-native-qrcode-styled';

const GenerateQR = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} download={true} />

      <View style={{flex: 1, padding: 20}}>
        <Text style={styles.mainHeading}>Generate QR For:</Text>
        <TextInput
          placeholder="Enter Details"
          value={text}
          onChangeText={data => setText(data)}
          style={styles.input}
          multiline
          numberOfLines={5}
        />
        <View style={styles.clear_container}>
          <Pressable onPress={() => setText('')}>
            <Text style={styles.clear_button}>Clear</Text>
          </Pressable>
        </View>

        <View style={styles.QR_container}>
          {text && <QRCodeStyled data={text} padding={20} pieceSize={12} />}
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
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
    color: 'black',
    textAlignVertical: 'top',
  },

  clear_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  clear_button: {
    color: 'black',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '500',
  },

  QR_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
