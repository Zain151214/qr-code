import React from 'react';
import {Platform} from 'react-native';
import RNFS from 'react-native-fs';
import {hasFilePermission} from './../utils/Permissions';

const DownloadQr = async svgRef => {
  if (Platform.OS === 'android' && !(await hasFilePermission())) {
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
        // console.log({success});
      })
      .catch(e => {
        // console.log('e', e);
      });
  });
};

export {DownloadQr};
