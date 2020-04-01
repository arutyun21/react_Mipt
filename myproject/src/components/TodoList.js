import React, {Component} from 'react'
import AddTask from './AddTask';
import './TodoList.css'
import { connect } from 'react-redux'
import { addTask } from '../actions/addTaskAction'
import { handleSortByName } from '../actions/handleSortByNameAction'
import { handleSortByPrior } from '../actions/handleSortByPriorAction'

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
    /*
    state = {
        todolist : [
          {id: 1, name: 'forward', description: 'do this thing', priority: 3},
          {id: 2, name: 'go', description: 'do that thing', priority: 1},
          {id: 3, name: 'Make it', description: 'make great', priority: 2}
        ]
      }
    */
    /*
    addTask=(task)=>{
        task.id = Math.floor(Math.random() * 999999) + 1;
        let newTodolist = [...this.props.todolist, task];
        this.setState({todolist: newTodolist})
    }
    */
    /*
    handleSortByName = () => {
        this.setState(state => {return{todolist: state.todolist.sort((a,b) => a.name > b.name? 1 : -1)}});
    };
    handleSortByPrior = () => {
        this.setState(state => {return{todolist: state.todolist.sort((a,b) => a.priority > b.priority? 1 : -1)}});
    };
    */
    render(){
        console.log(this.props);
        const taskList = this.props.todolist.map(task => {
            return(
                <div className="task" key={task.id}>
                    
                    <div>id: {task.id}</div>
                    <div>name: {task.name}</div>
                    <div>description: {task.description}</div>
                    <div>priority: {task.priority}</div>
                </div>
                
            )
        })
        return(
            <div className="Todo">
                <div classname="container1">
                    <div className="todoName">TODO:</div>
                    <div className="taskList">{taskList}</div>
                </div>
                <div className="btn-sort"> 
                    <SortByName onClick={this.props.handleSortByName}/>
                    <SortByPrior onClick={this.props.handleSortByPrior}/>
                </div>
                <div className="addTask">
                    <AddTask addTask={this.props.addTask}/>
                </div>
            </div>
            
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        todolist: state.todolist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => { dispatch(addTask(task)) },
        handleSortByName: () => { dispatch(handleSortByName()) },
        handleSortByPrior: () => { dispatch(handleSortByPrior()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);