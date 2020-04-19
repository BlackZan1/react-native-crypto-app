import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Main';

export default function App({ appData, getDataAction }) {
  return (
    <Provider store={store}>
      <Main appData={appData} getDataAction={getDataAction} />
    </Provider>
  );
}