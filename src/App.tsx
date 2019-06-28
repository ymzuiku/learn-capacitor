import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import { Pages } from './pages/Pages';
import * as serviceWorker from './serviceWorker';

export const Root = () => {
  return <Pages />;
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
