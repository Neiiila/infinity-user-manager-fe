import React from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";

function Main() {
    return (
        <div class="main-panel">
            <Header />
            <div class="container">
                <Outlet />
            </div>
        </div>
    )
}

export default Main;