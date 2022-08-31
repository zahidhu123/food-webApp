import React from 'react'
import Photo from '../../assets/Photo.jpg'
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className='login-box'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <img src={Photo} className='login-image' alt="" />
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center p-0 bg-light'>
                            <div className='login-wrapper'>
                                <div>
                                    <h1 className='l-heading'>Welcome Back</h1>
                                </div>
                                <p className='l-ph'>Login to contine using kipe</p>
                                <div>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Email or Username</label>
                                        <input type="text" className='form-control' placeholder='Enter Email' />
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Password</label>
                                        <input type="password" className='form-control' placeholder='Enter Password' />
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <NavLink to="/home"><button className='btn1 btn-primary'>LOGIN</button></NavLink> 
                                </div>
                                <div className='d-flex justify-content-between m-0 py-2'>
                                    <div>
                                        <p className='l-account m-0'>Dont have an account?</p>
                                    </div>
                                    <NavLink to='/signup'><p className='l-reg'>Register Here</p></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
