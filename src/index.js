import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import config from './store/config';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';

const store = config();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
