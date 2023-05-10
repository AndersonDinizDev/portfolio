import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import GlobalStyle from './globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <><Routes /> <GlobalStyle /></>
);
