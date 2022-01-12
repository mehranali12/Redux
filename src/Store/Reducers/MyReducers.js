import { DATA, } from '../Actions/Type'

const initialState = {
    DATA: [],
}



export default (state = initialState, { type, payload }) => {
    console.log('TYPE::')
    console.log(type)
    console.log('PAYLOAD::')
    console.log(payload)
    switch (type) {
        case DATA:
            return {
                ...state,
                DATA: payload,
            };
        default:
            return state;
    }
};