import { FETCH_DATA, INPUT_POKEMON_DATA } from '../actions/type'

const initialState = {
    pokemon: [],
    pokemonData: [],
    type: [{}],
    typeList: [],
    typeCountList: [],
}

export default ((state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, pokemon: action.payload }
        case INPUT_POKEMON_DATA:
            let newPokemon = state.pokemonData.concat(action.payload)
            let newType = action.payload.types[0].type.name
            if (state.type[0][`${newType}`] === undefined) {
                state.type[0][`${newType}`] = 1
            }
            else {
                state.type[0][`${newType}`] += 1
            }
            let newStateType = JSON.parse(JSON.stringify(state.type))
            let typeList1 = []
            let typeCountList1 = []
            for (const key in newStateType[0]) {
                typeList1.push(key)
                typeCountList1.push(newStateType[0][key])
            }

            return { ...state, pokemonData: newPokemon, typeList: typeList1, typeCountList: typeCountList1, type: newStateType }
        default:
            return state
    }
})