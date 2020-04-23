const initState = {
    projects:[
        {id: 101, name: 'One hundred first project'},
        {id: 102, name: 'One hundred first project'}
    ],
    todolist:{
        101:[
                {id: 101, name: 'forward', description: 'do this thing', priority: 3},
                {id: 201, name: 'go', description: 'do that thing', priority: 1},
                {id: 305, name: 'Make it', description: 'make great', priority: 2}
            ],
        102:[]
    }
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case 'GET_PROJECTS': {
            let newProjects = action.payload;
            return {
                ...state,
                projects: newProjects 
            }
        }
        case 'GET_TASKS': {
            let newTodolist = action.payload;
            console.log("GET_TASK_REDUCER", action.payload)
            return{
                ...state,
                todolist:{...state.todolist, [action.project_id]: newTodolist}
            }
        }
        case 'ADD_PROJECT': {
            let newProjList = [...state.projects, action.project];
            let newTodolist = {...state.todolist, [action.project.id] : []}
            return {
                ...state,
                projects: newProjList,
                todolist: newTodolist
            }
        }
        case 'ADD_TASK': {
            let newTodolist = [...state.todolist[action.project_id], action.task];
            return {
                ...state,
                todolist:{...state.todolist, [action.project_id]: newTodolist}
            }
            
        }
        case 'SORT_BY_NAME': {
            let newTodolist = [...state.todolist[action.project_id]].sort((a,b) => a.name > b.name? 1 : -1)
            return{
                ...state,
                todolist: {...state.todolist, [action.project_id]: newTodolist}
            }
        }
        case 'SORT_BY_PRIOR': {
            let newTodolist = [...state.todolist[action.project_id]].sort((a,b) => a.priority > b.priority? 1 : -1)
            return{
                ...state,
                todolist: {...state.todolist, [action.project_id]: newTodolist}
            }
        }
        default: {
            return state;
          }
        
    }
}

export default rootReducer