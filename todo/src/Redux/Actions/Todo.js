import { ADD_TODO ,DELETE_TODO,UPDATE_TODO} from "./Action-type"
export const addtodo=(todo)=>({
    type:ADD_TODO,
    payload:todo

})
export const deletetodo=(id)=>({
    type:DELETE_TODO,
    payload:id

})
export const updatetodo=(todo,id)=>({
    type:UPDATE_TODO,
    payload:{
        todo:todo,
        todoid:id
    }

})