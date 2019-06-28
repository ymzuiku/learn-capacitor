import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import * as React from 'react';

import { isNative } from '../utils/isNative';

const { Camera } = Plugins;

if (isNative()) {
  const getPhoto = async () => {
    const image = await Camera.getPhoto({
      allowEditing: false,
      quality: 40,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });
  };

  getPhoto();
}

export const Home: React.FC = () => {
  return <div>home</div>;
};
