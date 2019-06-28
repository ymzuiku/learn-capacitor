import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

let _isNative = false;

export const checker = async () => {
  const info = await Device.getInfo();
  _isNative = info.platform !== 'web';
  return _isNative;
};

export const isNative = () => _isNative;
