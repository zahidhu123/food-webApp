import React, { useState } from 'react'
import Navbar from '../../component/navbar/navbar'
import { MdAdd, MdRemove } from 'react-icons/md'
import { count, productList } from '../../data/productDetail'
import Burger from '../../assets/burger.jpeg'
import Fries from '../../assets/fries.jpeg'
import Coke from '../../assets/coke.jpeg'
import Pepsi from '../../assets/pepsi.jpeg'
import './summary.css'
import {NavLink} from 'react-router-dom'

export default function Summary() {


  return (
    <>
            <Navbar/>
            <div className="container px-5">
                <div className="row justify-content-start mt-5">
                    <div className="col-md-4">
                        <div class="card mb-4" >
                            <img src={Burger} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-3">Hamburger</h5>
                                <p class="card-text">Price:200</p>
                                <a href="#" class="btn btn-primary f-25 add me-2"><MdAdd /></a>
                                <a href="#" class="btn btn-secondary f-25 minus"><MdRemove /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card mb-4" >
                            <img src={Fries} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-3">Fries</h5>
                                <p class="card-text">Price:100</p>
                                <a href="#" class="btn btn-primary f-25 add me-2"><MdAdd /></a>
                                <a href="#" class="btn btn-secondary f-25 minus-one"><MdRemove /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card mb-4" >
                            <img src={Coke} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-3">Coke</h5>
                                <p class="card-text">Price:50</p>
                                <a href="#" class="btn btn-primary f-25 add me-2"><MdAdd /></a>
                                <a href="#" class="btn btn-secondary f-25 minus-one"><MdRemove /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card mb-4" >
                            <img src={Pepsi} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title pt-3">Pepsi</h5>
                                <p class="card-text">Price:50</p>
                                <a href="#" class="btn btn-primary f-25 add me-2"><MdAdd /></a>
                                <a href="#" class="btn btn-secondary f-25 minus"><MdRemove /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                        <NavLink to="/checkout"><button className='btn-1 btn-primary '>Checkout</button></NavLink>
                    </div>
                </div>
            </div>
        </>
  )
}
