import React from 'react'
import getItLogo from "./assets/getit2.jpeg"
import searchIcon from "./assets/search-2-line.svg"
import helpIcon from "./assets/question-line.svg"
import profileIcon from "./assets/account-circle-line.svg"
import cartIcon from "./assets/shopping-cart-2-line.svg"
function NavBar() {
  return (
    <>
        <div className='nav'>
            <img src={getItLogo} className='logo'></img>
            <div className='search'>
                <div className="input">
                  <img src={searchIcon} alt="" className='nav-icon'/>
                  <input type="text" />
                </div>
                <button className='search-btn nav-btn'>Search</button>
            </div>
            <div className="profile">
              <img src={profileIcon} alt="" className='nav-icon'/>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      <button className="signin-btn nav-btn">sign in</button>
                    </a></li>
                  <li><a className="dropdown-item" href="#">My Account</a></li>
                  <li><a className="dropdown-item" href="#">Saved items</a></li>
                </ul>
              </div>
            </div>
            <div className="help">
              <img src={helpIcon} alt="" className='nav-icon'/>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  help
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">help center</a></li>
                  <li><a className="dropdown-item" href="#">place an order</a></li>
                  <li><a className="dropdown-item" href="#">payment options</a></li>
                  <li><a className="dropdown-item" href="#">track an order</a></li>
                  <li><a className="dropdown-item" href="#">cancel an order</a></li>
                  <li><a className="dropdown-item" href="#">returns and refunds</a></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <button className="live-chat nav-btn">live chat</button>
                    </a>
                    </li>

                </ul>
              </div>
            </div>
            <div className="cart">
              <img src={cartIcon} alt="" className='nav-icon'/>
              <h1>Cart</h1>
            </div>
        </div>
    </>
  )
}

export default NavBar