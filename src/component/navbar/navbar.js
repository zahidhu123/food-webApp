import React from 'react'
import './navbar.css'
import { MdRestaurant, MdShoppingCart } from 'react-icons/md'
import { count } from '../../data/productDetail'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-box">
            <div class="container-fluid">
                <div>
                <MdRestaurant size={22} className="icon-nav mx-3" />
                <a class="navbar-brand" href="#">Food's Restaurant</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/summary"><div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <MdShoppingCart size={25} className=" card-icon" />
                    <p className='card-count text-light fw-bold me-4 mb-0 fs-6'>  {props.cartCount != 0 && props.cartCount}</p>
                </div></NavLink>
            </div>
        </nav>
    )
}
