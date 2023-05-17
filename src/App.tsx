import React from 'react';

import Router from './routes/Router';
import {Context} from './contexts';

export default function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}
