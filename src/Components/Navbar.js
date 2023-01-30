
import React from 'react'
import '../App.css';



export const Navbar = () => {

  return (
    <div >
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark"data-bs-theme="dark" style={{fontWeight:"bold"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src='https://dreamgirlfoundation.ngo/wp-content/uploads/2017/03/logo1.png'></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Initiatives</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ContactUs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events & News
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Independence day celebration</a></li>
            <li><a class="dropdown-item" href="#">This Navratri empower a girl</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Training on SelfDefence</a></li>
          </ul>
        </li>
    
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
      
    </div>
  )
}

 export default Navbar;