import React from react;
import {createRoot} from 'react-dom/client';
import './index.css';
import App from 'App';
import reportWebVitals from './reportWebVitals';

const app = document.getElementById('app');
const root= createRoot(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
