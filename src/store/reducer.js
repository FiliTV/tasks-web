import {ADD_TASK, DELETE_TASK, GET_TASKS, TASKS_ERROR, UPDATE_TASK} from "./types";


const initialState = [];

export default function(state = initialState, action){

    switch(action.type){
        case GET_TASKS:
            return action.payload

        case ADD_TASK:
            state.push(action.payload)
            return state
        case UPDATE_TASK:
            return state.map((t) => {
                if (t.id === action.payload.id) {
                    return {
                        ...t,
                        ...action.payload,
                    };
                } else {
                    return state;
                }
            })
        case DELETE_TASK:
            return state.filter(({ id }) => id !== action.payload.id);
        case TASKS_ERROR:
            return{
                loading: false,
                error: action.payload
            }
        default: return state
    }

}