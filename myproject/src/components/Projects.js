import React, { Component } from 'react'
import AddProject from './AddProject'
import { addProject } from '../actions/addProjectAction'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './Projects.css'
import { getAllProjects, getAllTasks } from '../actions/actionsAPI'

class Projects extends Component {

    async componentWillMount(){
      const response = await getAllProjects();
      console.log('ALL_Proj', response)
      this.props.getAllProjectDispatch(response)
    }
    render(){
        const projectList = this.props.projects.map((project) => {
            return(
                <Link to={'/projects/' + project.id}>
                    <div className="project" key={project.id}>
                        <div>id: {project.id}</div>
                        <div>name: {project.name}</div>
                    </div>
                </Link>
            )
        })
        return(
            <div className="projects">
                <div className="container3">
                    <div className="projectTitle">PROJECTS:</div>
                    <div className="projectList">{projectList}</div>
                </div>
                <div className="addProject">
                    <AddProject addProject={this.props.addProjectDispatch}/>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getAllProjectDispatch: (resp) => {dispatch(resp)},
        addProjectDispatch: (project) => { dispatch(addProject(project)) }
    }
}
/* handleSubmit = async (e) => {
       e.preventDefault();
       let response = await postProject(this.state.name)
       this.props.addProject(response.payload)
   }*/
export default connect(mapStateToProps, mapDispatchToProps)(Projects);