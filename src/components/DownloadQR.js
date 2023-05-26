import React from 'react';
import {Platform, View} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {SuccessToast} from '@components';
import RNFS from 'react-native-fs';
import {hasCameraRollPermission} from './../utils/Permissions';
const DownloadQr = async svgRef => {
  console.log('svgRef before', svgRef.current.toDataURL);

  if (Platform.OS === 'android' && !(await hasCameraRollPermission())) {
    return;
  }
  console.log('svgRef after', svgRef.current.toDataURL);
  svgRef.current.toDataURL(data => {
    RNFS.writeFile(RNFS.CachesDirectoryPath + `/12313.png`, data, 'base64')
      .then(success => {
        console.log({success});
        return CameraRoll.save(RNFS.CachesDirectoryPath + `/123123.png`);
      })
      .then(() => {
        console.log('successfully saved');
        // SuccessToast('Saved to gallery !!')
      });
  });
};
export {DownloadQr};
