import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const [developers, setDevelopers] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("Uncompleted");
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem('token'); 
  const config = {
      headers : {
          Authorization : `Bearer ${token}`
      }
  };

  useEffect(() => {
    const fetchUsersByRole = async (role) => {
      try {
        const response = await axios.get(`${API_URL}/api/user/usersbyrole?role=${role}`, config);
        console.log(role, response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
    };

    // Fetch developers and clients
    const fetchData = async () => {
      const developersData = await fetchUsersByRole("Developer");
      const clientsData = await fetchUsersByRole("Client");
      setDevelopers(developersData);
      setClients(clientsData);
    };

    fetchData();
  }, [API_URL]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      title,
      description,
      developer: selectedDeveloper,
      client: selectedClient,
      budget,
      state: status,
    };

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Add token for authentication
        },
      };
      await axios.post(`${API_URL}/api/project`, projectData, config);
      
      window.swal({
        title: "Success!",
        text: "Project added successfully",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate('/dashboard/projectmanager');  
        }, 2000);
    } catch (error) {
      console.error("Error adding project:", error);
      window.swal({
        title: "Error!",
        text: "Incorrect inputs, Try again ",
        icon: "error",
        buttons: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3">Projects</h3>
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
            <a href="#">Projects</a>
          </li>
          <li className="separator">
            <FontAwesomeIcon icon={faArrowRight} />
          </li>
          <li className="nav-item">
            <a href="#">Add Project</a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">New Project</div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter project title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="developerSelect">Developer</label>
                      <select
                        className="form-select"
                        id="developerSelect"
                        value={selectedDeveloper}
                        onChange={(e) => setSelectedDeveloper(e.target.value)}
                      >
                        <option value="">Select Developer</option>
                        {developers.map((developer) => (
                          <option key={developer._id} value={developer._id}>
                            {developer.username}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="clientSelect">Client</label>
                      <select
                        className="form-select"
                        id="clientSelect"
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                      >
                        <option value="">Select Client</option>
                        {clients.map((client) => (
                          <option key={client._id} value={client._id}>
                            {client.username}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 col-lg-12">
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="budget">Budget</label>
                      <input
                        type="number"
                        className="form-control"
                        id="budget"
                        placeholder="in $"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label>Status</label>
                      <div className="d-flex">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            value="Completed"
                            checked={status === "Completed"}
                            onChange={() => setStatus("Completed")}
                          />
                          <label className="form-check-label">Completed</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="status"
                            value="Uncompleted"
                            checked={status === "Uncompleted"}
                            onChange={() => setStatus("Uncompleted")}
                          />
                          <label className="form-check-label">Uncompleted</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-action">
                  <button type="submit" className="btn btn-success me-4">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
