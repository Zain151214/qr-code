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

const ScanQR = ({navigation}) => {
  const [qrData, setQrData] = useState('The decoded data will be shown here:');
  const [reload, setReload] = useState(false);
  const [shareData, setShareData] = useState('');

  const onScan = e => {
    setQrData(e.data);
    setReload(true);
    setShareData(e.data);
    Linking.openURL(e.data).catch(error => console.log('Error >>> ', error));
  };

  const handleReload = () => {
    setQrData('Scan Again');
    setReload(false);
  };

  return (
    <View style={styles.container}>
      <TopNav navigation={navigation} shareData={shareData} />

      <Text style={styles.QRData}>QR Data: </Text>
      <ScrollView style={styles.data_container}>
        <Text style={styles.Data}>{qrData}</Text>
      </ScrollView>

      <View style={styles.QR_Container}>
        {reload ? (
          <>
            <TouchableOpacity onPress={handleReload}>
              <Image source={require('../icons/reload.png')} />
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

      <Ztechub />
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F6',
  },

  data_container: {
    maxHeight: 120,
  },

  QRData: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  Data: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginVertical: 5,
    color: 'black',
  },

  QR_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: 80,
  },

  cameraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  camera: {
    // height: 327,
    width: '100%',
  },

  marker: {
    borderColor: '#23B1A4',
    borderWidth: 3,
    // height: '100%',
    // width: 270,
  },
});
