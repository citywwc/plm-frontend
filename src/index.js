import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import index from './store';


ReactDOM.render(
  <Provider store = {index}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));


