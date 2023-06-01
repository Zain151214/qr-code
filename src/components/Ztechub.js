import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Ztechub = () => {
  const handleZtechub = () => {
    Linking.openURL('https://www.ztechub.com');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleZtechub}>
        <Text style={styles.ztechub}>By ZTecHub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ztechub;

const styles = StyleSheet.create({
  ztechub: {
    textAlign: 'center',
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'black',
    marginBottom: hp(4),
  },
});
