import { ADD_ANIME_LIST } from "./actionsTypes";

export const getAnimeListAction = () => async dispatch => {
    const res = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    const data = await res.json()
    dispatch(addAnimeListAction(data.data))
}

export const addAnimeListAction = (value) => {
    return {
        type: ADD_ANIME_LIST,
        payload: value
    }
}