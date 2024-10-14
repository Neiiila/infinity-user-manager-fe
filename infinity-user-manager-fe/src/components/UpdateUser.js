import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Guest'); 
    const [status, setStatus] = useState('Verified'); 
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const token = localStorage.getItem('token');
            const config = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
            const response = await axios.get(`${API_URL}/api/user/user/${id}`, config);
            const user = response.data;
            setEmail(user.email);
            setUsername(user.username);
            setRole(user.role);
            setStatus(user.verified ? 'Verified' : 'Unverified');
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchUser();
      }, [id]);
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const updatedUserData = {
          email,
          username,
          password, 
          role,
          verified: status === 'Verified' ? true : false,
        };
    
        try {
          const token = localStorage.getItem('token');
          const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };
    
          const response = await axios.put(`${API_URL}/api/user/user/${id}`, updatedUserData, config);
          console.log('User successfully updated:', response.data);
          navigate('/dashboard/usermanager'); 
        } catch (error) {
          console.error('Error updating user:', error);
          alert('Failed to update user');
        }
      };

    return (
        <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3">Update User</h3>
        <ul className="breadcrumbs mb-3">
          <li className="nav-home">
            <a href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li className="separator">
            <FontAwesomeIcon icon={faArrowRight} />
          </li>
          <li className="nav-item">
            <a href="#">Users</a>
          </li>
          <li className="separator">
            <FontAwesomeIcon icon={faArrowRight} />
          </li>
          <li className="nav-item">
            <a href="#">Update User</a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Edit User</div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="email2">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email2"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <small id="emailHelp2" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Role</label>
                      <select
                        className="form-select"
                        id="exampleFormControlSelect1"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Developer">Developer</option>
                        <option value="Client">Client</option>
                        <option value="Guest">Guest</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label htmlFor="password">Password (leave empty to keep existing)</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label>Account Status</label><br />
                      <div className="d-flex">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            value="Verified"
                            checked={status === 'Verified'}
                            onChange={() => setStatus('Verified')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Verified
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            value="Unverified"
                            checked={status === 'Unverified'}
                            onChange={() => setStatus('Unverified')}
                          />
                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Unverified
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <label>Username</label><br />
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <button type="submit" className="btn btn-success me-4">Update</button>
                  <button type="button" className="btn btn-danger" onClick={() => {
                    setEmail('');
                    setUsername('');
                    setPassword('');
                    setRole('Admin');
                    setStatus('Verified');
                  }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default UpdateUser;