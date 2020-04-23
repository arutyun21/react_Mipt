import React, {Component} from 'react'
import { postTask } from '../actions/actionsAPI'
class AddTask extends Component{
    state = {
        id: 0, 
        name: null, 
        description: null, 
        priority: 1
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("PRIORbefore", this.state.priority)
        let response = await postTask(this.props.project_id, this.state.name, this.state.description, this.state.priority)
        console.log("PRIORafter", response)
        this.props.addTask(response.payload, this.props.project_id);
    }
    
    render(){
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="description"> Description:
                        <input type="text" id="description" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="priority"> Priority: 
                    <select value={this.state.priority} id="priority" onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    </label>
                    <button className="btnSubmit"> Submit Task</button>
                </form>
            </div>
        )
    }
}



export default AddTask;