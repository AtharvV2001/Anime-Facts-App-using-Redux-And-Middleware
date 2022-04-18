import { ADD_FACTS_LIST } from "../actions/actionsTypes";

const initialState ={
    factObj: {},
    factl: []
}

export const factsReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case ADD_FACTS_LIST:
            return{
                ...state,
                factObj: payload,
                factl: payload.data
            }
        default:
            return state
    }
}