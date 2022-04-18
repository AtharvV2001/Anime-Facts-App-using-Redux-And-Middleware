import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { animeReducer } from "./Redux/reducers/animeReducer";
import { factsReducer } from "./Redux/reducers/factsReducer";

const rootReducer = combineReducers({
    animeList: animeReducer,
    factsList: factsReducer
})

export const configureStore = () => createStore(rootReducer,applyMiddleware(thunk))