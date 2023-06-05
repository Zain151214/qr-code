import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Ztechub from '../components/Ztechub';
import TopNav from '../components/TopNav';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ScanQR = ({navigation}) => {
  const [qrData, setQrData] = useState('The QR data will be shown here:');
  const [reload, setReload] = useState(false);
  const [shareData, setShareData] = useState('a');

  const onScan = e => {
    setQrData(e.data);
    setReload(true);
    setShareData(e.data);
    Linking.openURL(e.data).catch(error => console.log('Error >>> ', error));
  };

  const handleReload = () => {
    setQrData('Scan Again');
    setReload(false);
    setShareData('');
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <TopNav navigation={navigation} shareData={shareData} />

        <Text style={styles.QRData}>QR Data: </Text>
        <ScrollView style={styles.data_container}>
          <Text style={styles.Data}>{qrData}</Text>
        </ScrollView>

        <View style={styles.QR_Container}>
          {reload ? (
            <>
              <TouchableOpacity onPress={handleReload}>
                <Image
                  style={styles.reload_icon}
                  source={require('../icons/reload.png')}
                />
              </TouchableOpacity>
            </>
          ) : (
            <QRCodeScanner
              onRead={onScan}
              cameraStyle={[styles.camera]}
              containerStyle={[styles.cameraContainer]}
              showMarker={true}
              markerStyle={styles.marker}
              reactivate={reload ? false : true}
            />
          )}
        </View>
      </ScrollView>
      <Ztechub />
    </>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F6',
  },

  data_container: {
    maxHeight: hp(13),
  },

  QRData: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: wp(6),
    paddingTop: hp(3),
  },

  Data: {
    fontSize: wp(4),
    fontWeight: '600',
    paddingHorizontal: wp(6),
    marginVertical: hp(1.5),
    color: 'black',
    lineHeight: hp(2.8),
  },

  QR_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: hp(9),
  },

  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  camera: {
    // height: 327,
    width: wp(50),
  },

  marker: {
    borderColor: '#23B1A4',
    borderWidth: 3,
    height: hp(43),
    // width: 270,
  },

  reload_icon: {
    height: hp(15),
    width: wp(31),
  },
});
