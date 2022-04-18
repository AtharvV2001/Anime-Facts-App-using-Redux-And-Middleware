import { ADD_ANIME_LIST } from "../actions/actionsTypes"

const initialState = {
    list: []
}

export const animeReducer = (state = initialState, { type, payload }) => {
    switch (type){
        case ADD_ANIME_LIST:
            return {
                ...state,
                list: payload
            }
        default:
            return state
    }
}