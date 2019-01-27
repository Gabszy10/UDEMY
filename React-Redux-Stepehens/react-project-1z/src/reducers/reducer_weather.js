import {FETCH_WEATHER} from '../actions';

export default function(state = [], action){
    console.log(action.payload );
    
    switch(action.type){
        case FETCH_WEATHER:
            return [...state, action.payload.data];

        default:
            return state
    }
}