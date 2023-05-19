import React from 'react';

import Router from './routes/Router';
import {Provider} from 'react-redux';
import {storeOLD} from './redux/storeOLD';

export default function App() {
  return (
    <Provider store={storeOLD}>
      <Router />
    </Provider>
  );
}
