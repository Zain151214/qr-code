import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ScanQR = ({navigation}) => {
  const handleBack = () => {
    navigation.navigate('Home', {name: 'Home'});
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              source={require('../icons/back_icon.png')}
              style={styles.back_icon}
            />
          </TouchableOpacity>
        </View>

        <Text>Result: </Text>
      </View>
    </View>
  );
};

export default ScanQR;

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

  back_icon: {
    height: 15,
    width: 15,
  },
});
