import React from 'react'
import { NavLink } from 'react-router-dom'
import Photo from '../../assets/Photo.jpg'



export default function Signup() {
    return (
        <>
            <div className='login-box'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-md-4 justify-content-center align-items-center p-0 bg-light'>
                            <div className='login-wrapper'>
                                <div>
                                    <h1 className='l-heading'>Welcome To Signup</h1>
                                </div>
                                <p className='l-ph'>Sign in to contine using Food App</p>
                                <div>
                                    <div className='mb-2'>
                                        <label htmlFor="" className='l-label'>Name</label>
                                        <input type="text" className='form-control' placeholder='Enter Your Name' />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="" className='l-label'>Email Address</label>
                                        <input type="email" className='form-control' placeholder='Enter Address' />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="" className='l-label'>Mobile Number</label>
                                        <input type="number" className='form-control' placeholder='Enter Number' />
                                    </div>
                                    <div>
                                    <label htmlFor="" className='l-label'>Password</label>
                                    <input type="password" className='form-control' placeholder='Enter password' />
                                    </div>
                                </div>
                                <div className='py-3'>
                                   <NavLink to='/login'> <button className='btn1 btn-primary'>Signup</button></NavLink>
                                </div>
                                <div className='d-flex justify-content-between m-0 py-2'>
                                    <div>
                                        <p className='l-account m-0'>Dont have an account?</p>
                                    </div>
                                    {/* <NavLink to='/login'><p className='l-reg'>Login Here</p></NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
