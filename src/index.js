// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// // import * as serviceWorker from './serviceWorker';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// const baseURL = document.getElementsByTagName('base')[0].getAttribute('href');
// const rootElement = document.getElementById('root');

// ReactDOM.render(
//   <BrowserRouter basename={baseURL}>
//     <App />
//   </BrowserRouter>, rootElement);

// serviceWorker.unregister();
// CODE BEFORE DEPLOYMENT

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);