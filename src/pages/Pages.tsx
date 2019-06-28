import * as React from 'react';

import { Header } from '../components/Header';
import { TabBar } from '../components/TabBar';

import { Home } from './Home';

export const Pages = () => {
  return (
    <>
      <Header />
      <Home />
      <TabBar />
    </>
  );
};
