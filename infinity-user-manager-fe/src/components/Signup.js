import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/api/auth/register`, {
              username,
              email,
              password
            });
      
            window.swal({
                title: "Success!",
                text: "you have successfully signed up",
                icon: "success",
                buttons: false,
                timer: 2000,
              });

            setTimeout(() => {
            navigate('/login');  
            }, 2000);

        } catch (error) {
            console.log(error)
            window.swal({
                title: "Error!",
                text: "User already exists, Try again ",
                icon: "error",
                buttons: false,
                timer: 2000,
              });

        }
      };

    return (
        <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="/assets/img/signup.png"
              alt="Illustration"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center h1">Sign Up</h2>
  
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="mail@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="hello123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" style={{ backgroundColor: '#6a0cf8', color: "white" }} className="btn w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    }   
export default Signup;