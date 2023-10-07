import { useState } from 'react'
import picture from './csit.png'
import college from './colleges.jpg'
import './App.css'
import pmc from "./patan.jpg"
import star from "./star.png"
import data from "./data.jsx"
import pdata from "./privateData.jsx"
function App() {
  const cards = data.map(item => {
    return (
      <>
        <div className='card'>
  <img src={item.image} width="150" height="150"/>
  <div className='card-star'>
    <img src={star} width="20" className='cards'/>
    <span>Rating {item.Rate}</span>
    </div>
  <p>Establishment:{item.establishment} </p>
    <p>Address:{item.address}</p>
          </div>
      
      </>
    )
   
})  

const privateCard = pdata.map(item => {
  return (
    <>
      <div className='card'>
<img src={item.image} width="170" height="150"/>
<div className='card-star'>
  <img src={star} width="20" className='cards'/>
  <span>Rating {item.Rate}</span>
  </div>
<p>Establishment:{item.establishment} </p>
  <p>Address:{item.address}</p>
        </div>
    
    </>
  )
 
})  
  const firstname="Akash"
  return (
    <>
      <nav> 
           <img src={picture} width='100' className='nav--logo'></img> 
          <h1> Computer Science and Information Technology</h1>
      </nav>
      <section>
        <img src={college} width='750' height='350' className='section--logo'/>    
       <h1> Private Colleges</h1>
        <p className='section--second'>
          They are expensive than governmentt institution. They are more in number compared to Government 
          campuses.<br></br>
          Guidance is much more compared to government college.
        </p>
        <div className='private'>
{privateCard}
</div>
        <h1 className='section--h1'> Government Campuses </h1>
        <p className='section--p'> There are 3 government campuses in kathmanduu valley and 6 campuse outside the valley.
          <br></br>
          They are relatively cheaper than private institution but also self work is most important.
          without selfoek it is hard .Me {firstname} is alloted now to it.

        </p>
        <div className='government'>
{cards}
</div>
        </section>
      

      
    </>
  )
}

export default App
