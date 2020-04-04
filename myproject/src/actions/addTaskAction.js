export const addTask = (task, project_id) => {
    return {
        type: 'ADD_TASK', 
        task,
        project_id

    }
}