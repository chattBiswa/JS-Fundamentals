import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // wrap root component with redux provider so that all child components can access the redux store
  //
  <Provider store={store}>
    <App />
  </Provider>
);