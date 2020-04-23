import React, {Component} from 'react'
import { postProject } from '../actions/actionsAPI'

class AddProject extends Component{
   state = {
       name: ''
   }

   handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let response = await postProject(this.state.name)
        console.log("Added Project", response)
        this.props.addProject(response.payload)
    }
   render(){
       return(
           <div className="projAddForm">
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:
                        <input type="text" id="name" onChange={this.handleChange}/>
                    </label>
                    <button className="btnSubmit"> Submit Project</button>
                </form>
            </div>
       )
   }
}

export default AddProject;