import React from 'react'
import './home.css'
import Navbar from '../../component/navbar/navbar'
import { NavLink } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <Navbar />
            <div className='welcome-main-box'>
                <div className="container-fluid">
                    <div className="row justify-content-center welcome-box2">
                        <div className="col-md-5">
                            <div className='d-inline-block justify-content-center align-itms-center'>
                                <p className='welcome-page'>Welcome to Food's Kitchen</p>
                                <div className='d-flex justify-content-center'>
                                    <NavLink to="/menu"><button className='btn-1 btn-primary'>GO TO MENU</button></NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
