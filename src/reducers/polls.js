import { RECEIVED_POLLS } from "../actions/polls"

export default function polls (state = {}, action){
    switch(action.type){
        case RECEIVED_POLLS : 
            return {
                ...state,
                ...action.polls,
            }
        default : 
            return state
    }
}