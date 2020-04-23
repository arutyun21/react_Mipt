import React, {Component} from 'react'
import AddTask from './AddTask'
import './TodoList.css'
import { connect } from 'react-redux'
import { addTask } from '../actions/addTaskAction'
import { handleSortByName } from '../actions/handleSortByNameAction'
import { handleSortByPrior } from '../actions/handleSortByPriorAction'
import { getAllTasks, getAllProjects } from '../actions/actionsAPI'

const SortByName = ({onClick}) => {
    return(
      <button className="btnSortName" onClick={onClick}>Sort by name</button>
    );
}
const SortByPrior = ({onClick}) => {
    return(
      <button className="btnSortPrior" onClick={onClick}>Sort by priority</button>
    );
}



class TodoList extends Component {
    async componentDidMount(){
      const responseProjects = await getAllProjects();
      console.log('ALL_Proj', responseProjects)
      this.props.getAllProjectDispatch(responseProjects)
      const responseTasks = await getAllTasks(this.props.project.id);
      console.log("CurrProjTasks", responseTasks)
      this.props.getAllTasksDispatch(responseTasks);

    }
    render(){
        console.log(this.props.todolist)
        const taskList =  this.props.todolist.length ? 
        (this.props.todolist.map(task => {
            return(
                <div className="task" >
                    <div>id: {task.id}</div>
                    <div>name: {task.name}</div>
                    <div>description: {task.description}</div>
                    <div>priority: {task.priority}</div>
                </div>
                
            )
        })) : 
        (
            <div className="noTask">
                There's no tasks...
            </div>
        )
        return(
            <div className="Todo">
                <div className="container1">
                    <div className="todoName">TODO:</div>
                    <div className="taskList">{taskList}</div>
                </div>
                <div className="btn-sort"> 
                    <SortByName onClick={() => this.props.handleSortByName(this.props.project.id)}/>
                    <SortByPrior onClick={() => this.props.handleSortByPrior(this.props.project.id)}/>   
                </div>
                <div className="addTask">
                    <AddTask addTask={this.props.addTask} project_id={this.props.project.id}/>
                </div>
            </div>
            
        )
    }
}


const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.project_id;
    state.projects
    console.log("PROJId", id)
    console.log("state.projects", state.projects)
    return {
        project: state.projects.find(project => project.id == id),
        todolist: state.todolist[id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProjectDispatch: (resp) => {dispatch(resp)},
        getAllTasksDispatch: (response) => { dispatch(response)},
        addTask: (task, project_id) => { dispatch(addTask(task, project_id)) },
        handleSortByName: (project_id) => { dispatch(handleSortByName(project_id)) },
        handleSortByPrior: (project_id) => { dispatch(handleSortByPrior(project_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);