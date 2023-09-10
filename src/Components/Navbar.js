// create the basic template for function based component using shortcut 'rfc'
// import PropTypes using shortcut 'impt'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    // ${props.mode}
    // ${props.mode}
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="menu navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.aboutText}</Link>
            </li>

          </ul>




          {/* Dropdown menu */}
          <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Themes
            </button>
            <ul className="dropdown-menu">
              <li onClick={props.fancy} className='dropdown-item fancyTheme theme'>Fancy</li>
              <li onClick={props.blue} className='dropdown-item blueTheme theme'>Sky Blue</li>
              <li onClick={props.Light} className='dropdown-item lightTheme theme'>Light</li>
              <li onClick={props.gray} className='dropdown-item grayTheme theme' >Dark Gray</li>
              <li onClick={props.Purple} className='dropdown-item purpleTheme theme'>Dark Purple</li>
              <li onClick={props.green} className='dropdown-item greenTheme theme'>Dark Green</li>
            </ul>
          </div>





          {/* DarkMode switch
          <div className="darkMode form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
          </div> */}

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

// proptypes is an object of the datatypes of the props 
// proptypes are used to specify that our datatype of props is fixed and it will dont get changed in any case, if it changes accidently then we will get an error 
// 'PropTypes' is a keyword
// while setting the proptypes dont use 'PropTypes' keyword after our component name
// isRequired is used to make the props required
// if isRequired is given to proptypes and If we dont give the props as attributes then we will get an error


Navbar.defaultProps = {
  title: "Title",
  aboutText: "About Us"
}
// Default props are used to assign default values to our props from component
// if we dont give props as an attributes in our main app then default props will be considered