import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Share,
  Alert,
} from 'react-native';
import React from 'react';

const TopNav = ({navigation, shareData}) => {
  const handleBack = () => {
    navigation.navigate('Home', {name: 'Home'});
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: shareData,
      });
      return result;
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={require('../icons/back_icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onShare}>
        <Image
          source={require('../icons/share_icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
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
});
