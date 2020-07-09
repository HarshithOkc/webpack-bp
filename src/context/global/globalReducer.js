import {
    SET_TEXT
} from './../meta/constants'

export default ( state, action ) => {
    switch( action.type ){
        case SET_TEXT:
            return {
                ...state,
                text: action.payload
            }
    }
};