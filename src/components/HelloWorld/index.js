import React from 'react';
import PropTypes from 'prop-types';

const HelloWorld = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}

HelloWorld.propTypes = {
    text: PropTypes.string.isRequired
}

export default HelloWorld;