import React from 'react'
import './navbar.css'
import { MdRestaurant,  MdShoppingCart} from 'react-icons/md'
import { count } from '../../data/productDetail'

export default function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light nav-box">
            <div class="container-fluid">
                <MdRestaurant size={22} className="icon-nav mx-3" />
                <a class="navbar-brand" href="#">Food's Restaurant</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <MdShoppingCart size={24}  className=" me-2 card-icon"/>
                    <p className='text-light fw-bold me-4 mb-0 fs-5'>  {props.cartCount != 0 && props.cartCount}</p>
                </div>
            </div>
        </nav>
    )
}
