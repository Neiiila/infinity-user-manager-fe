# Infinity Project Manager - Frontend

This project is the frontend for the Infinity Project Manager system. The system allows users to manage projects, including creating, updating, and viewing projects. The system includes role-based access control (RBAC) for **Admin**, **Developer**, and **Client** roles. Admins can view all projects, Developers can view and manage their own projects, and Clients can view projects they are assigned to.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Project Overview

This frontend interacts with a backend API to provide the following functionalities:

- User Registration, Login, and Logout
- Role-based access control (Admin, Developer, Client)
- Project creation, editing, and deletion
- Viewing and filtering projects based on roles
- Developer and Client assignment to projects

## Technologies

- **React.js**: Frontend framework for building user interfaces.
- **React Router**: For handling navigation and protected routes.
- **Axios**: For making HTTP requests to the backend API.
- **Bootstrap**: For responsive design and UI components.
- **Font Awesome**: For icons in the UI.
- **SweetAlert**: For user notifications and alerts.

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/infinity-project-manager-fe.git
    cd infinity-project-manager-fe
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory with the following content:

    ```env
    REACT_APP_API_URL=http://localhost:5500
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    The app will run on `http://localhost:3000`.

## Environment Variables

- `REACT_APP_API_URL`: The base URL for the backend API. Ensure it's correctly set to your backend server URL.

## Features

### User Roles:
- **Admin**: Can view, create, edit, and delete all projects, manage users.
- **Developer**: Can view and manage projects where they are the assigned developer.
- **Client**: Can view projects where they are the assigned client.

### Core Functionality:
- **Authentication**: Login and Signup with token-based authentication (JWT).
- **Project Management**: 
  - View all projects for admins, filtered projects for developers and clients.
  - Add, update, and delete projects.
- **Project Assignment**: Assign developers and clients to a project.

### Project CRUD Features:
- **Add Project**: Create a new project with title, description, budget, developer, client, and status.
- **Update Project**: Modify an existing project’s details.
- **Delete Project**: Remove a project from the system.

## Usage

### 1. Login or Signup:
- The user can log in or sign up via the `/login` or `/signup` routes.
- Upon successful authentication, the user's token is saved in local storage.

### 2. Dashboard:
- The dashboard will display different content based on the logged-in user's role:
  - **Admin**: Can manage users and see all projects.
  - **Developer**: Can see and manage projects they are working on.
  - **Client**: Can see projects where they are the client.

### 3. Project Management:
- Users can add new projects via the **Add Project** page.
- Projects can be updated using the **Update Project** feature.

### 4. Protected Routes:
- Routes like `/dashboard` and `/dashboard/projectmanager` are protected and require users to be logged in.
- Non-authenticated users are redirected to the `/login` page.

## Project Structure

```plaintext
src/
├── assets/                 # Static assets (CSS, images, fonts, etc.)
├── components/             # Reusable React components
│   ├── Dashboard.js        # Main dashboard component
│   ├── Login.js            # Login form component
│   ├── Signup.js           # Signup form component
│   ├── ProtectRoute.js     # Higher-order component to protect routes
│   ├── UserManager.js      # Component to manage users
│   ├── AddProject.js       # Component to add a new project
│   ├── UpdateProject.js    # Component to update an existing project
│   └── ProjectManager.js   # Component to view and manage projects
├── App.js                  # Main application component
├── api/                    # Axios requests and API calls
│   ├── auth.js             # Authentication-related API calls
│   └── project.js          # Project-related API calls
├── utils/                  # Utility functions
│   └── tokenHandler.js     # Functions to manage tokens in local storage
├── App.css                 # Global CSS styles
├── index.js                # Entry point of the app
└── README.md               # Documentation
