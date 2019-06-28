import { checker } from './utils/isNative';

const init = async () => {
  await checker();
  import('./App').then();
};

init();
