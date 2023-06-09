import {PermissionsAndroid, Platform} from 'react-native';

const hasCameraRollPermission = async () => {
  const permission =
    Platform.Version >= '33'
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};

const hasFilePermission = async () => {
  const permission =
    Platform.Version >= '33'
      ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      : Platform.Version <= '29'
      ? PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }
  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};

export {hasCameraRollPermission, hasFilePermission};
