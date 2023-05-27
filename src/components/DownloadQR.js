import React from 'react';
import {Alert, Platform} from 'react-native';
import RNFS from 'react-native-fs';
import {hasCameraRollPermission} from './../utils/Permissions';

const DownloadQr = async svgRef => {
  if (Platform.OS === 'android' && !(await hasCameraRollPermission())) {
    return;
  }
  svgRef.current.toDataURL(data => {
    RNFS.writeFile(
      RNFS.DownloadDirectoryPath +
        `/QR-Code-${new Date()
          .toISOString()
          .split('.')[0]
          .replaceAll(':', '-')}.png`,
      data,
      'base64',
    )
      .then(success => {
        Alert.alert('Image Downloaded Successfully');
        console.log({success});
      })
      .catch(e => {
        console.log('e', e);
        Alert.alert('Error', e);
      });
  });
};
export {DownloadQr};
