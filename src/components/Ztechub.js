import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
});
