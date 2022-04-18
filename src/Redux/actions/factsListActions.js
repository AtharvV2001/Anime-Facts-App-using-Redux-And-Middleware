import { ADD_FACTS_LIST } from "./actionsTypes";

export const getFactsListAction = (name) => async dispatch => {
    const res = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${name}`)
    const data = await res.json()
    console.log(data);
    dispatch(addFactsListAction(data))
}

export const addFactsListAction = (value) => {
    return {
        type: ADD_FACTS_LIST,
        payload: value
    }
}