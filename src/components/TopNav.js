import {StyleSheet, TouchableOpacity, View, Image, Share} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DownloadQr} from './DownloadQR';
import {ShareQr} from './ShareQR';
import Clipboard from '@react-native-clipboard/clipboard';
import ShowModal from './Modal';

const TopNav = ({navigation, shareData, svgRef, text}) => {
  const [showModal, setShowModal] = useState(false);
  const [showTick, setShowTick] = useState(false);

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
      // console.log('share error >>> ', error.message);
    }
  };

  const handleDownload = async () => {
    await DownloadQr(svgRef);
    setShowModal(true);
  };

  const ShareQRCode = async () => {
    await ShareQr(svgRef, text);
  };

  const copyToClipboard = text => {
    Clipboard.setString(text);
  };

  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={require('../icons/back_icon.png')} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.download_icon_container}>
        {text && (
          <TouchableOpacity onPress={handleDownload}>
            <Image
              source={require('../icons/download_icon.png')}
              style={styles.download_icon}
            />
          </TouchableOpacity>
        )}

        {shareData && (
          <TouchableOpacity
            onPress={() => {
              copyToClipboard(shareData);
              setShowTick(true);
              setTimeout(() => {
                setShowTick(false);
              }, 2000);
            }}>
            {showTick ? (
              <Image
                source={require('../icons/Done.png')}
                style={styles.copy_icon}
              />
            ) : (
              <Image
                source={require('../icons/copy_icon.png')}
                style={styles.copy_icon}
              />
            )}
          </TouchableOpacity>
        )}

        {shareData?.length > 0 ? (
          <TouchableOpacity onPress={onShare}>
            <Image
              source={require('../icons/share_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : text?.length > 0 ? (
          <TouchableOpacity onPress={ShareQRCode}>
            <Image
              source={require('../icons/share_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <ShowModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={
          shareData
            ? 'Copied To Clipboard.'
            : 'QR Code will be downloaded shortly.'
        }
      />
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
    width: wp(6),
  },

  copy_icon: {
    height: hp(3.2),
    width: wp(6.5),
    marginRight: wp(6),
  },
});
