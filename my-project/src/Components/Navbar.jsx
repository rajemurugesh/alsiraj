import React from 'react';
// import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Alsiraj Computer Design</a>
          <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasDarkNavbar" 
          aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" 
          tabindex="-1" 
          id="offcanvasDarkNavbar" 
          aria-labelledby="offcanvasDarkNavbarLabel">

            <div className="offcanvas-header">
              {/* <h4 className="offcanvas-title" id="offcanvasDarkNavbarLabel">ALSIRAJ</h4> */}
       {/* ------------image header----------        */}
              <img className="logo" src="logo.png"></img>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* ------------------Main screen------------ */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Main Screen">Main Screen</a>
                </li>
                        {/*--------------Clients-------------  */}
                    <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clients
                  </a>
                  
                <ul className="dropdown-menu dropdown-menu-dark">

                   <li className="subnav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clients Information
                  </a>
                   <li><a className="dropdown-item" href="/Individualinfo">Individuals</a></li>
                    <li><a className="dropdown-item" href="#">Institutions</a></li> 
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    
                     
                    <li><a className="dropdown-item" href="#">Client Application</a></li>
                    <li><a className="dropdown-item" href="#">Client Properties</a></li>
                    <li><a className="dropdown-item" href="#">Client Payments</a></li>

                    {/* <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </li>
                 </ul>
                 
                </li>
            {/*-----------------------Services-------------------  */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Leasing Services</a></li>
                    <li><a className="dropdown-item" href="#">Buying & Selling</a></li>
                    <li><a className="dropdown-item" href="#">Maintenance</a></li>
                    <li><a className="dropdown-item" href="#">Management</a></li>
                    <li><a className="dropdown-item" href="#">Consulting Study</a></li>
                    </ul>
                    </li>
            {/*----------------------------Properties---------------------------------  */}
                    <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Properties
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Villas & Appartment</a></li>
                    <li><a className="dropdown-item" href="#">Bulling & Tower</a></li>
                    <li><a className="dropdown-item" href="#">Warehouse & Shops</a></li>
                    <li><a className="dropdown-item" href="#">Lands</a></li>
                    <li><a className="dropdown-item" href="#">Farms</a></li>
                    <li><a className="dropdown-item" href="#">Factories</a></li>
                    </ul>
                    </li>


                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Employees</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Setting</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a> */}
                  
                  {/* <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}


              </ul>
              
            </div>
          </div>
        </div>
      </nav>

    );
}

export default Navbar;