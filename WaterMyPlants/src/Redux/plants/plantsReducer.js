import {CREATE_PLANT} from './plantsTypes.js';

const initialState = {
    nameOfPlant:' ',
    species: ' ',
    care:' ',
    description:' '
}

const plantReducer = (state = initialState, action) =>
    {
        switch(action.type){

            case CREATE_PLANT: return{
                ...state,
                nameOfPlant: state.nameOfPlant,
                species: state.species,
                care: state.care,
                description: state.description
            }
        }

}

export default plantReducer
