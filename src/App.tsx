import React from 'react';

import Router from './routes/Router';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
