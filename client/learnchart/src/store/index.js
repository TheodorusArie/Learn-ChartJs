import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import pokemon from './reducers/pokemonReducers'

const rootReducer = combineReducers({
    pokemon,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store