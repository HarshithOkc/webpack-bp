import React from 'react';
// import './assets/css/style.css';
import AppRouter from './utils/Routes/Public';
const path = require('path');

const App = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('./sw.js').then(function(registration) {
            
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            
            console.log('ServiceWorker registration failed: ', err);
          });
        });
    }
    
    console.log(ENV);

    return(
        <AppRouter />
    )
}

export default App;