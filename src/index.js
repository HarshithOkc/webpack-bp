import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Provider from './context/global/GlobalState';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './utils/theme'
import { CssBaseline } from '@material-ui/core';

// For Webview android actions
window.androidObj = function AndroidClass() {}

ReactDom.render(
    <Provider>
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </CssBaseline>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();