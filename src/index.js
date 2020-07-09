import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Provider from './context/global/GlobalState';

// For Webview android actions
window.androidObj = function AndroidClass() {}

ReactDom.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();