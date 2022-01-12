import {
    DATA
} from './Type'


export const Getlist = () => {
    return async dispatch => {
        try {
           
            dispatch({ type: DATA, payload: 'ali' });
        } 
        catch (error) {
        }
    }
}