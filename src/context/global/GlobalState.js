import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import reducer from './globalReducer';
import {
    SET_TEXT
} from './../meta/constants'

const GlobalState = (props) => {

    // set initial states
    const initialState = {
        text: ''
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // Set Text
    const setText = (text) => {
        dispatch({
            type: SET_TEXT,
            payload: text
        })
    }

    return (
        <GlobalContext.Provider 
        value={{
            ...state,
            setText
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    );

};

export default GlobalState;