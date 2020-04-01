const initState = {
    todolist : [
        {id: 101, name: 'forward', description: 'do this thing', priority: 3},
        {id: 201, name: 'go', description: 'do that thing', priority: 1},
        {id: 305, name: 'Make it', description: 'make great', priority: 2}
      ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TASK': {
            let newTodolist = [...state.todolist, action.task];
            return {
                todolist: newTodolist
            }
        }
        case 'SORT_BY_NAME': {
            return{
                
                todolist: [...state.todolist].sort((a,b) => a.name > b.name? 1 : -1)
            }
        }
        case 'SORT_BY_PRIOR': {
            return{
                todolist: [...state.todolist].sort((a,b) => a.priority > b.priority? 1 : -1)
            }
        }
        default: {
            return state;
          }
        
    }
}

export default rootReducer