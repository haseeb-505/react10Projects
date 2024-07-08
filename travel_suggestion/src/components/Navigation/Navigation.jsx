import React from 'react'
import styles from './Navigation.module.css'
import logo_img from '../../images/travel_logo.jpeg'
import Social_links from '../social_links/Social_links'

const Navigation = () => {
  // console.log(styles.navigation)
  return (
    <div className={`${styles.body}`}>
    <nav className='container'>
      <div className="logo">
        <img src={logo_img} alt="travel logo" width="50px" height="50px" margin="5px" />
      </div>
      <a className={`${styles.logo_text} navbar-brand`} to="/">TravelBloom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${styles.homePage_component} collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className={`${styles.link_pages} navbar-nav mr-auto`}>
            <li className={`${styles.link_pages_li} nav-item active`}>
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              {/* <button className="btn btn-outline-success my-2 my-sm-0" id="signin-button">Sign In</button> */}
               <a className="nav-link" href="#" id="sign-in-link">Sign In</a>
          </li>
          </ul>
          <form className={`${styles.searchBar} form-inline my-2 my-lg-0`}>
            <input className="form-control mr-sm-2" type="search" id="search-input" placeholder="Enter a destination or key word here!" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" id="search-button" type="submit">Search</button>
            <button className="btn btn-outline-success my-2 my-sm-0" id="clear-button" type="submit">Clear</button>
          </form>
        </div>

        <Social_links />

        
      


    </nav>
    {/* <nav className={`{styles.navigation} navbar navbar-expand-lg navbar-light bg-light container`}>
      <span className="img">
        <img src="./images/travel_logo.jpeg" alt="travel_logo" width="50px" height="50px"/>
      </span>
        
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./home.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about_us.html">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact_us.html">Contact Us</a>
            </li>
            <li className="nav-item">
              {/* <button className="btn btn-outline-success my-2 my-sm-0" id="signin-button">Sign In</button> */}
              {/* <a className="nav-link" href="./sign_in_form.html" id="sign-in-link">Sign In</a>
          </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" id="search-input" placeholder="Enter a destination or key word here!" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" id="search-button" type="submit">Search</button>
            <button className="btn btn-outline-success my-2 my-sm-0" id="clear-button" type="submit">Clear</button>
          </form>
        </div>
    </nav> */}

    </div>
  )
}

export default Navigation
