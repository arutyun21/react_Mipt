import React, {Component} from 'react'

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
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState((state) => {return{id: state.id + 1}})
        this.props.addTask(this.state, this.props.project_id);
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