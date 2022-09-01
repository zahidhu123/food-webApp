import React from 'react'
import './checkout.css'
import { NavLink } from 'react-router-dom'
import Navbar from '../../component/navbar/navbar'

export default function Checkout() {
    return (
        <>
            <Navbar />
            <div className='welcome-main-box'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 welcome-box3">
                            <div className=''>
                                <p className='welcome-page1 text-center m-0'>Checkout</p>
                            </div>
                            <p className='thank'>Thank you for your order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
