import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, {
              email,
              password
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', response.data.user.username);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('role', response.data.user.role);

            window.swal({
                title: "Success!",
                text: "you have successfully logged in",
                icon: "success",
                buttons: false,
                timer: 2000,
              });

            setTimeout(() => {
            navigate('/dashboard');  
            }, 2000);
        } catch (error) {
            console.log(error)
            window.swal({
                title: "Error!",
                text: "Invalid credentials, Try again ",
                icon: "error",
                buttons: false,
                timer: 2000,
              });
        }
    }

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
              <h2 className="text-center h1">Log In</h2>
  
              <form onSubmit={handleLogin}>
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
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Login;