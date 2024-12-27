import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div>
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/src/assets/Group 37110.png"
              alt="Logo"
              className="me-2"
              style={{ height: "30px" }}
            />
            CodeAnt AI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="d-flex">
        <div
          className="collapse navbar-collapse flex-column bg-light vh-100 d-lg-block"
          id="sidebarMenu"
          style={{ width: "250px", overflowY: "auto" }}
        >
          {/* Sidebar Header */}
          <div className="d-flex align-items-center p-3 border-bottom">
          <img
              src="/src/assets/Group 37110.png"
              alt="Logo"
              className="me-2 d-none d-lg-block "
              style={{ height: "30px" }}
            />
            <span className="fs-5 fw-bold d-none d-lg-block">CodeAnt AI</span>
          </div>

          {/* Dropdown for User */}
          <div className="p-3 border-bottom">
            <select className="form-select">
              <option>UtkarshDhairyaPar...</option>
              <option>User1</option>
              <option>User2</option>
              <option>User3</option>
            </select>
          </div>

          {/* Sidebar Links */}
          <ul className="nav flex-column p-3">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-primary">
                <i className="bi bi-house-door-fill me-2"></i>
                Repositories
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-code-slash me-2"></i>
                AI Code Review
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-cloud me-2"></i>
                Cloud Security
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-file-earmark-text me-2"></i>
                How to Use
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
            </li>
          </ul>

          {/* Bottom Links */}
          <ul className="nav flex-column mt-auto p-3">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-telephone me-2"></i>
                Support
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center text-dark">
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
