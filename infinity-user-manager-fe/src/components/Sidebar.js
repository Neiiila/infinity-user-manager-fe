import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBars,
  faEllipsisH,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Sidebar() {
     return(
        
      <div class="sidebar" data-background-color="dark">
      <div class="sidebar-logo">
        <div class="logo-header" data-background-color="dark">
          <a href="index.html" class="logo">
            <img
              src="assets/img/kaiadmin/logo_light.svg"
              alt="navbar brand"
              class="navbar-brand"
              height="20"
            />
          </a>
          <div class="nav-toggle">
            <button class="btn btn-toggle toggle-sidebar">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button class="btn btn-toggle sidenav-toggler">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <button class="topbar-toggler more">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div class="sidebar-wrapper scrollbar scrollbar-inner">
        <div class="sidebar-content">
          <ul class="nav nav-secondary">
            <li class="nav-item active">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faHome}/>
                <p class="ms-3">Dashboard</p>
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/dashboard/usermanager">
                <FontAwesomeIcon icon={faUser}/>
                <p class="ms-3">Users</p>
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/dashboard/projectManager">
                <FontAwesomeIcon icon={faProjectDiagram}/>
                <p class="ms-3">Projects</p>
              </Link>
            </li>
            
            {/* <li class="nav-section">
              <span class="sidebar-mini-icon">
                <FontAwesomeIcon icon={faEllipsisH} />
              </span>
              <h4 class="text-section">Components</h4>
            </li> */}

            {/* 
            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#sidebarLayouts">
                <FontAwesomeIcon icon={faThList} />
                <p>Sidebar Layouts</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="sidebarLayouts">
                <ul class="nav nav-collapse">
                  <li>
                    <a href="sidebar-style-2.html">
                      <span class="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="icon-menu.html">
                      <span class="sub-item">Icon Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#forms">
                <FontAwesomeIcon icon={faPenSquare} />
                <p>Forms</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="forms">
                <ul class="nav nav-collapse">
                  <li>
                    <a href="forms/forms.html">
                      <span class="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#tables">
                <FontAwesomeIcon icon={faTable} />
                <p>Tables</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="tables">
                <ul class="nav nav-collapse">
                  <li>
                    <a href="tables/tables.html">
                      <span class="sub-item">Basic Table</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#maps">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>Maps</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="maps">
                <ul class="nav nav-collapse">
                  <li>
                    <a href="maps/googlemaps.html">
                      <span class="sub-item">Google Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#charts">
                <FontAwesomeIcon icon={faChartBar} />
                <p>Charts</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="charts">
                <ul class="nav nav-collapse">
                  <li>
                    <a href="charts/charts.html">
                      <span class="sub-item">Chart Js</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a href="widgets.html">
                <FontAwesomeIcon icon={faDesktop} />
                <p>Widgets</p>
                <span class="badge badge-success">4</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="documentation/index.html">
                <FontAwesomeIcon icon={faFile} />
                <p>Documentation</p>
                <span class="badge badge-secondary">1</span>
              </a>
            </li>

            <li class="nav-item">
              <a data-bs-toggle="collapse" href="#submenu">
                <FontAwesomeIcon icon={faBars} />
                <p>Menu Levels</p>
                <span class="caret"></span>
              </a>
              <div class="collapse" id="submenu">
                <ul class="nav nav-collapse">
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav1">
                      <span class="sub-item">Level 1</span>
                      <span class="caret"></span>
                    </a>
                    <div class="collapse" id="subnav1">
                      <ul class="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span class="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>

     )
}

export default Sidebar;
