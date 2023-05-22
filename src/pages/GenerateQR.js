import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';

const GenerateQR = ({navigation}) => {
  const handleBack = () => {
    navigation.navigate('Home', {name: 'Home'});
  };
  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            source={require('../icons/back_icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../icons/share_icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Generate For:</Text>
        <TextInput placeholder="Enter details" style={styles.input} />
      </View>
      <View>
        <Text>Show QR Code Image Here</Text>
      </View>
    </View>
  );
};

export default GenerateQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F6',
  },

  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#23B1A4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  icon: {
    height: 20,
    width: 18,
  },

  input: {
    backgroundColor: 'blue',
  },
});
