import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Ztechub from '../components/Ztechub';
import TopNav from '../components/TopNav';
import QRCode from 'react-native-qrcode-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GenerateQR = ({navigation}) => {
  const [text, setText] = useState('');
  const svgRef = useRef(null);

  return (
    <ScrollView style={styles.container}>
      <TopNav navigation={navigation} svgRef={svgRef} text={text} />

      <View style={styles.content_container}>
        <Text style={styles.mainHeading}>Generate QR For:</Text>
        <TextInput
          placeholder="Enter Details"
          value={text}
          onChangeText={data => {
            const correctDate = data.replace(/ +$/gm, ' ').replace(/^ +/gm, '');
            setText(correctDate);
          }}
          style={styles.input}
          multiline={true}
          numberOfLines={4}
        />

        <View style={styles.clear_container}>
          <Pressable onPress={() => setText('')}>
            <Text style={styles.clear_button}>Clear</Text>
          </Pressable>
        </View>

        <View style={styles.QR_container}>
          {text && (
            <QRCode quietZone={25} value={text} getRef={svgRef} size={250} />
          )}
        </View>
      </View>
      <Ztechub />
    </ScrollView>
  );
};

export default GenerateQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F6',
  },

  content_container: {
    flex: 1,
    paddingVertical: hp(3),
    paddingHorizontal: wp(6),
  },

  mainHeading: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    borderWidth: 1,
    marginTop: hp(2.5),
    marginBottom: hp(1.5),
    fontSize: wp(4),
    color: 'black',
    textAlignVertical: 'top',
    lineHeight: hp(2.8),
  },

  clear_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  clear_button: {
    color: 'black',
    marginBottom: hp(6),
    fontSize: wp(4),
    fontWeight: '500',
  },

  QR_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
