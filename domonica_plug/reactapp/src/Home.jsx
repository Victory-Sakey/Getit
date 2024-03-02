import React from 'react'
import NavBar from './NavBar'
import getItLogo from "./assets/getit2.jpeg"

export default function Home() {
 return (
    <>
        <NavBar/>
        <div className="main-body">
            <div className="categories">
                <p>Hands-on-Service</p>
                <p>Products</p>
                <p>Logistics</p>
            </div>
            <div className="infinite">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div className="carousel-item active">
                            <img src={getItLogo} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={getItLogo} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={getItLogo} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        {/* <span className="visually-hidden">Previous</span> */}
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        {/* <span className="visually-hidden">Next</span> */}
                    </button>
                    </div>
            </div>
            <div className="side">
                <p>Become A Seller</p>
                <p>Become an Affiliate</p>
            </div>
           
        </div>
    </>
  )
}
