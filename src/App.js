import React from 'react';
import './assets/css/style.css';
import AppRouter from './utils/Routes/Public';
const path = require('path');

const App = () => {
    console.log(ENV);
    return(
        <AppRouter />
    )
}

export default App;