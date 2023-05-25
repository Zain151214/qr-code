import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Share,
  Alert,
} from 'react-native';
import React from 'react';

const TopNav = ({navigation, shareData, download}) => {
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

  const handleDownload = () => {};

  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={require('../icons/back_icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.download_icon_container}>
        {download && (
          <TouchableOpacity onPress={handleDownload}>
            <Image
              source={require('../icons/download_icon.png')}
              style={styles.download_icon}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={onShare}>
          <Image
            source={require('../icons/share_icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
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

  download_icon_container: {
    flexDirection: 'row',
  },

  download_icon: {
    marginRight: 30,
    height: 25,
    width: 21,
  },

  icon: {
    height: 25,
    width: 21,
  },
});
