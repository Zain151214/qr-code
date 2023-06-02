import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ShowModal = ({showModal, setShowModal, title}) => {
  return (
    <Modal isVisible={showModal} style={styles.modal_container}>
      <View style={styles.modal}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.button_container}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.button}>
            <Text style={styles.button_close}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ShowModal;

const styles = StyleSheet.create({
  modal_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    height: hp(25),
    width: wp(80),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: wp(5),
    color: 'black',
    textAlign: 'center',
  },

  button_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {
    backgroundColor: '#23B1A4',
    borderRadius: 5,
    width: wp(20),
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlignVertical: 'center',
  },

  button_close: {
    fontSize: wp(4.3),
    textAlign: 'center',
    color: 'white',
  },
});
