import React from 'react';
import Share from 'react-native-share';
import {hasCameraRollPermission} from '../utils/Permissions';

const ShareQr = async (svgRef, text) => {
  if (Platform.OS === 'android' && !(await hasCameraRollPermission())) {
    return;
  }

  svgRef.current.toDataURL(data => {
    const shareImageBase64 = {
      title: 'QR',
      message: text,
      url: `data:image/png;base64,${data}`,
    };
    Share.open(shareImageBase64)
      .then(() => {
        // console.log('Shared Successfully');
      })
      .catch(error => {
        // console.log('error', error.message);
      });
  });
};
export {ShareQr};
