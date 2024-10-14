import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function UserManager() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [users, setUsers] = useState([]);

    const handleDeleteUser = async (userId) => {
        try {
          const token = localStorage.getItem('token'); 
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          };
    
          
          await axios.delete(`${API_URL}/api/user/user/${userId}`, config);
          fetchUsers();          
        } catch (err) {
            console.error('Error deleting user:', err);
            alert('Failed to delete user');
          }
      };

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const config = {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            };

            const response = await axios.get(API_URL +'/api/user/users', config);
            setUsers(response.data)
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
        fetchUsers();
    }, []); 
    return (
        <div class="page-inner">
                    <div
                    class="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
                    >
                    <div>
                        <h3 class="fw-bold mb-3">User Manager</h3>
                        <h6 class="op-7 mb-2">All system's users  </h6>
                    </div>
                    <div class="ms-md-auto py-2 py-md-0">
                        {/* <a href="#" class="btn btn-label-info btn-round me-2">Manage</a> */}
                        <Link to="/dashboard/adduser" class="btn btn-primary btn-round">Add User</Link>
                    </div>
                    </div>
            
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-round">
                                <table class="table align-items-center mb-0">
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col">#</th> 
                                        <th scope="col">Username</th>
                                        <th scope="col" class="text-end">Email</th>
                                        <th scope="col" class="text-end">Role</th>
                                        <th scope="col" class="text-end">Verified</th>
                                        <th scope="col" class="text-end">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map( (user, index) => (
                                                <tr key={user._id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td scope="row">
                                                     { user.username }
                                                    </td>
                                                    <td class="text-end">{ user.email}</td>
                                                    <td class="text-end">{ user.role }</td>
                                                    <td className="text-end">
                                                        {user.verified ? (
                                                        <span className="badge badge-success">Verified</span>
                                                        ) : (
                                                        <span className="badge badge-danger">Unverified</span>
                                                        )}
                                                    </td>
                                                    <td className="d-flex justify-content-around">
                                                        <Link 
                                                            to={`/dashboard/updateuser/${user._id}`}
                                                            className="btn btn-icon btn-link op-8 me-1">
                                                            <FontAwesomeIcon icon={faEdit} /> 
                                                        </Link>
                                                        <button className="btn btn-icon btn-link btn-danger op-8"
                                                            onClick={ () => handleDeleteUser(user._id)}
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

export default UserManager;