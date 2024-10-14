import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function ProjectManager() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [projects, setProjects] = useState([]);

    const handleDeleteProject = async (projectId) => {
        try {
          const token = localStorage.getItem('token'); 
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          };
    
          
          await axios.delete(`${API_URL}/api/project/${projectId}`, config);
          fetchProjects();          
        } catch (err) {
            console.error('Error deleting user:', err);
            alert('Failed to delete user');
          }
      };

    const fetchProjects = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const config = {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            };

            const response = await axios.get(API_URL +'/api/project', config);
            setProjects(response.data)
            console.log(response.data)
        } catch(err){
            if(err.response.data = 'Invalid token') {

                localStorage.clear();
                navigator('/login');
            }  
            console.error("error : ", err.response.data);
        }
    };
    useEffect(() => {
        fetchProjects();
    }, []); 
    return (
        <div class="page-inner">
                    <div
                    class="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
                    >
                    <div>
                        <h3 class="fw-bold mb-3">Project Manager</h3>
                        <h6 class="op-7 mb-2">All system's projects  </h6>
                    </div>
                    <div class="ms-md-auto py-2 py-md-0">
                        {/* <a href="#" class="btn btn-label-info btn-round me-2">Manage</a> */}
                        <Link to="/dashboard/addproject" class="btn btn-primary btn-round">Add Project</Link>
                    </div>
                    </div>
            
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-round">
                                <table class="table align-items-center mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th> 
                                        <th scope="col">title</th>
                                        <th scope="col" class="text-end">Developer</th>
                                        <th scope="col" class="text-end">Client</th>
                                        <th scope="col" class="text-end">Budget</th>
                                        <th scope="col" class="text-end">State</th>
                                        <th scope="col" class="text-end"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            projects.map( (project, index) => (
                                                <tr key={project._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td scope="row">
                                                     { project.title }
                                                    </td>
                                                    <td class="text-end">{ 
                                                        project.developer ? project.developer.username : 'N/A'
                                                    }</td>
                                                    <td class="text-end">{
                                                        project.client ? project.client.username : 'N/A'    
                                                    }</td>
                                                    <td class="text-end">{ project.budget }</td>
                                                    <td className="text-end">
                                                        {project.state == "Completed" ? (
                                                        <span className="badge badge-success">Completed</span>
                                                        ) : (
                                                        <span className="badge badge-danger">Uncompleted</span>
                                                        )}
                                                    </td>
                                                    <td className="d-flex justify-content-around">
                                                        <Link 
                                                            to={`/dashboard/updateproject/${project._id}`}
                                                            className="btn btn-icon btn-link op-8 me-1">
                                                            <FontAwesomeIcon icon={faEdit} /> 
                                                        </Link>
                                                        <button className="btn btn-icon btn-link btn-danger op-8"
                                                            onClick={ () => handleDeleteProject(project._id)}
                                                        >
                                                            <FontAwesomeIcon icon={faBan} /> 
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
              </div>
            </div>

    </div>
    )
}

export default ProjectManager;