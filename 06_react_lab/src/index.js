import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Task1 from './Task1'
import Task2 from './Task2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1/>
    {/* <Task2/> */}
  </React.StrictMode>
);


reportWebVitals();
