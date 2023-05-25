import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#23B1A4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: wp(40),
    height: hp(6.5),
  },

  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
