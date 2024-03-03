import { createSlice } from "@reduxjs/toolkit";




const toolkitSlice = createSlice({
    name : "Toolkit",
    initialState : {
        count : 1,
        todo : []
    },
    reducers: {
        increment (state , action) {
            state.count = state.count + action.payload 
        },
        decrement (state , action) {
            state.count = state.count > 1 ?state.count - action.payload : state.count
        } ,
        delBtn(state, action ) {
            state.todo = state.todo.filter((el, idx) => idx !== action.payload )
        },
        AddTodo(state , action) {
            state.todo.push({id: state.todo.length ? state.todo[state.todo.length - 1].id +1 : 1, title: action.payload})
        },
        editt(state , action) {
        state.todo = state.todo.map((el) => el.id === action.payload.id ? {...el ,title : action.payload.value2} : el)
        }
        
    }

})



export default toolkitSlice.reducer
export const {increment , decrement , AddTodo  , delBtn , editt} = toolkitSlice.actions