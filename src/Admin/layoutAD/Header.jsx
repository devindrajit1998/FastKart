import React from 'react'

export default function Header() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
    Admin Panel
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Products
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Orders
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Users
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Logout
        </a>
      </li>
    </ul>
  </div>
</nav>

   </>
  )
}
