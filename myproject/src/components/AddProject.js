import React, {Component} from 'react'

class AddProject extends Component{
   state = {
       id: 0,
       name: null
   }

   handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

   handleSubmit = (e) => {
       e.preventDefault();
       this.setState((state) => {return{id: state.id + 1}})
       this.props.addProject(this.state)
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