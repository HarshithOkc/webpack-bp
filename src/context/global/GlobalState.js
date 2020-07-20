import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import reducer from './globalReducer';
import { } from './../meta/types'

const GlobalState = (props) => {

    // set initial states
    const initialState = {}

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider 
        value={{
            ...state,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    );

};

export default GlobalState;