import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {

  let myStyle = {
    background: "#f08da4"
   }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={myStyle}>
        <div className="container-fluid" style={myStyle}>
          <Link className="navbar-brand" style={myStyle} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><b>About</b></Link>
              </li>  
            </ul>
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}