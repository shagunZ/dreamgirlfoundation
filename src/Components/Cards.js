
import React from 'react'
import '../App.css';
import data from './data.json'


export const Cards = () => {

  return (
    <div className='container'>

<h5 style={{fontWeight:"initial",color:"blue",fontFamily:"sans-serif",border:"3px solid black" }} class="container m-5">Indian law now requires companies to give 2% of their profits to charity. After all, a bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog. So, a corporate can donate either with a bitter feeling that they are being forced or with open arms, as an opportunity to make a difference. Dream Girl Foundation has made charity easier than ever. A corporate can partner with Dream Girl Foundation and in turn help needy children by using one (or more) of the following partnerships.The ambitious kids of Dream Girl Foundation believe in leaving a mark through true learning 📚

Give them a hand in this journey of empowerment and transforming their lives !</h5>


      

      {data.data.map((data) => {
        return(
        <div key={data.id} class="container text-center m-4">
        <h1>{data.title}</h1>
      <div class="row m-5">
    
        <div class="col align-self-start center m-4">
        <div class="card" >
    

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active ">
          <img src={data.img1} class="d-block w-100" alt="..." style={{width:"33em",height:"22em"}}/>
        </div>
    
  <div class="carousel-item">
          <img src={data.img2} class="d-block w-100" alt="..." style={{width:"33em",height:"22em"}}/>
        </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
      <div class="card-body">
        <p class="card-text" style={{fontFamily:"sans-serif"}}>
   {data.desc}</p>
      </div>
    </div>
        </div>
    
      </div>
    </div>
      )
      })}
    


    </div>
  )
}

 export default Cards;