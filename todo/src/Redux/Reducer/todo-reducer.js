import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Actions/Action-type";

const initialState=[];
export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload];
    
        case DELETE_TODO:
            const newstate=state.filter((todo)=>todo.id!=action.id);
        case UPDATE_TODO:
            const updateState=state.map(todo=>{
                if(todo.id==action.payload.id){
                   
                    todo.title=todo.action.payload.todo.title;
                    todo.description=todo.action.payload.description;
                    

                }
                return todo;
            }
           
            )
            return updateState;
            
        default:
            return  state;
    }
       
                

}