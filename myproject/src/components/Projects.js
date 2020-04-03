import React, { Component } from 'react'
import AddProject from './AddProject'
import { addProject } from '../actions/addProjectAction'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './Projects.css'

class Projects extends Component {
    render(){
        console.log(this.props.projects)
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
                    <AddProject addProject={this.props.addProject}/>
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
        addProject: (project) => { dispatch(addProject(project)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);