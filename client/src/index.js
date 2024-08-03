import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';  // Correct import for thunk
import Reducers from './Reducers';
import { legacy_createStore as createStore } from 'redux';  // Correct spelling of createStore

const store = createStore(Reducers, compose(applyMiddleware(thunk)));  // Remove curly braces around thunk

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();


