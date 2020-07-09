import React, { useContext, useEffect } from 'react';
import HelloWorldUI from './../../components/HelloWorld';
import GlobalContext from './../../context/global/globalContext';

const HelloWorld = () => {

    const gc = useContext(GlobalContext);
    const { text } = gc;

    useEffect(() => {
        gc.setText('Hello Hi');
    }, [])

    return (
        <HelloWorldUI text={text} />
    )
}

export default HelloWorld;