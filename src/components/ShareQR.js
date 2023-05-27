import React from 'react';
import {Alert} from 'react-native';
import Share from 'react-native-share';

const ShareQr = async ({svgRef}) => {
  console.log('svg >>> ', svgRef);

  svgRef(data => {
    console.log('data >>> ', data);
    const shareImageBase64 = {
      title: 'QR',
      //   message: text,
      url: `data:image/png;base64,${data}`,
    };
    console.log('share base image >>> ', shareImageBase64);
    Share.open(shareImageBase64)
      .then(() => {
        Alert.alert('QR Code Share Successfully');
        console.log('svg then >>> ', svgRef);
      })
      .catch(error => {
        Alert.alert('QR Code Share Error >>> ', error);
        console.log('svg >>> catch ', svgRef);
      });
  });
};
export {ShareQr};
