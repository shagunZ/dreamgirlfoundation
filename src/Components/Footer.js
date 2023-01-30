
import React from 'react'
import '../App.css';



export const Footer = () => {

  return (
    <div className='bg-dark text-light'>
       
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark"data-bs-theme="dark" style={{fontWeight:"bold"}} >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ContactUs : +919873133134</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">info@dreamgirlfoundation.ngo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">facebook/dreamgirlfoundation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">www.dreamgirlfoundation.ngo</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
  <p className='container m-4'>Established in the year 2003, Dream Girl Foundation is one of the eminent non-profit organisations engaged in providing a better future to the underprivileged girls. We make efforts to reduce the miseries faced by the children in India.</p>
  <p className='container m-4 '>Disclaimer – All donations made to the Dream Girl Foundation will be allocated and dispersed as per the need of ongoing and future projects. Said projects are aimed towards the betterment of underprivileged children in India. All donations are exempted under section 80G of Income Tax Act, 1961.

NGO Registration Number : Trust/Delhi/4/356 | FCRA Registration Number : 231661739</p>
      <hr></hr>
      <ul style={{fontFamily:'serif' ,listStyle:'none'}}>
        <h3>QuickLinks</h3>
        <li>CSR Contribution</li>
        <hr></hr>
        <li>Donation-in-Kind</li>
        <hr></hr>
        <li>Volunteer with Us</li>
        <hr></hr>
        <li>Intern with us</li>
        <hr></hr>
        <li>Privacy policy</li>
        <hr></hr>
        <li>T&C</li>
        <hr></hr>
      </ul>
    </div>
  )
}

 export default Footer;