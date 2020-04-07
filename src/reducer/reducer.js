import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, } from "../constants/actionsTypes"

const initialState = [{ text: "hello", id: Math.random(), done: false },
{ text: "hello", id: Math.random(), done: false }]


const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload)


        case DELETE_TASK:
            return state.filter(el => el.id !== action.payload)


        case COMPLETE_TASK:
            return state.map(el => el.id === action.payload ? { ...el, done: !el.done } : el)

        
        default:
            return state
    }


}
export default TodoReducer