import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Share,
  Alert,
  Text,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DownloadQr} from './DownloadQR';
import {ShareQr} from './ShareQR';

const TopNav = ({navigation, shareData, download, svgRef}) => {
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

  const handleDownload = async () => {
    await DownloadQr(svgRef);
  };

  const handleShare = async () => {
    console.log('svgRef inside handleShare ', svgRef);
    await ShareQr(svgRef);
  };

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

        {/* {text && ( */}
        <TouchableOpacity onPress={handleShare}>
          <Text>Share QR</Text>
        </TouchableOpacity>
        {/* )} */}
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
    paddingVertical: hp(2),
    paddingHorizontal: wp(6),
    marginBottom: hp(1),
  },

  download_icon_container: {
    flexDirection: 'row',
  },

  download_icon: {
    marginRight: wp(7),
    height: hp(3),
    width: wp(5),
  },

  icon: {
    height: hp(3.2),
    width: wp(5.5),
  },
});
