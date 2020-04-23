import axios from 'axios'

export async function getAllProjects(){
    const response = await axios({
      method: 'get',
      url: 'http://valerystatinov.me/api/projects/',
      headers: {'Token': 'Arutyun'}
    })  
      .then(res=>{
        return {type:'GET_PROJECTS', payload: res.data}
        
      })
      .catch(err =>{
        console.log("ERROR: ", err)
      })
    return response
} 

export async function postProject(projectName){
  const response = await axios({
    method: 'post',
    url: 'http://valerystatinov.me/api/projects/',
    data: {name: projectName},
    headers: {
      'Token': 'Arutyun',
      'Content-Type': 'application/json'
    }
  })  
    .then(res => {
      return {payload: res.data}
    })
    .catch(err =>{
      console.log("ERROR: ", err)
    })
  return response;
}

export async function getAllTasks(project_id){
  const response = await axios({
    method: 'get',
    url: 'http://valerystatinov.me/api/projects/' + project_id + '/tasks/',
    headers: {'Token': 'Arutyun'}
  })  
    .then(res=>{
      return {type:'GET_TASKS', payload: res.data, project_id: project_id}

      
    })
    .catch(err =>{
      console.log("ERROR: ", err)
    })
  return response 
}

export async function postTask(project_id, taskName, descr, prior){
  console.log('fields', project_id, taskName, descr, prior)
  /*const response = fetch('http://valerystatinov.me/api/projects/' + project_id + '/tasks/', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Token': 'Arutyun',
      'Content-Type': 'application/json'
    },
    body: {
      name: taskName,
      description: descr,
      priority: prior
    }
  })
  */
  const response = await axios({
    method: 'post',
    url: 'http://valerystatinov.me/api/projects/' + project_id + '/tasks/',
    headers: {
      'Token': 'Arutyun',
      'Content-Type': 'application/json'
    },
    data: {
      name: taskName,
      description: descr,
      priority: prior
    }
  })  
    .then(res=>{
      return {payload: res.data}
      
    })
    .catch(err =>{
      console.log("ERROR: ", err)
    })
    console.log("Response", response)
  
    console.log("PostTaskResponse", response)
    return response 
}
