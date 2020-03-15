import React, {Component} from 'react'
import AddTask from './AddTask';
import './TodoList.css'

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
    state = {
        todolist : [
          {id: 1, name: 'forward', description: 'do this thing', priority: 3},
          {id: 2, name: 'go', description: 'do that thing', priority: 1},
          {id: 3, name: 'Make it', description: 'make great', priority: 2}
        ]
      }

    addTask=(task)=>{
        task.id = Math.floor(Math.random() * 999999) + 1;
        let newTodolist = [...this.state.todolist, task]
        this.setState({todolist: newTodolist})
    }

    handleSortByName = () => {
        this.setState(state => {return{todolist: state.todolist.sort((a,b) => a.name > b.name? 1 : -1)}});
    };
    handleSortByPrior = () => {
        this.setState(state => {return{todolist: state.todolist.sort((a,b) => a.priority > b.priority? 1 : -1)}});
    };
    render(){
        const taskList = this.state.todolist.map(task => {
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
                    <SortByName onClick={this.handleSortByName}/>
                    <SortByPrior onClick={this.handleSortByPrior}/>
                </div>
                <div className="addTask">
                    <AddTask addTask={this.addTask}/>
                </div>
            </div>
            
        )
    }
}

export default TodoList;