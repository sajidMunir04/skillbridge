import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/pages/Home';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Courses from './components/pages/Courses';
import PageHeadingTemplate from './components/shared/PageHeadingTemplate';
import AboutUs from './components/pages/AboutUs';
import Pricing from './components/pages/Pricing';
import Contact from './components/pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
