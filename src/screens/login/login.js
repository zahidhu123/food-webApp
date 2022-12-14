import React from 'react'
import Photo from '../../assets/Photo.jpg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log(email, password)


        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        })
            .then(result => {
                console.log(result.data)
                // alert('success')

                navigate('/home')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <div className='login-box'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center  '>
                        <div className='col-md-4 justify-content-center align-items-center p-0'>
                            <div className='login-wrapper'>
                                <div>
                                    <h1 className='l-heading'>Welcome to login</h1>
                                </div>
                                <p className='l-ph'>Login to contine using Food Kicken</p>
                                <div>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Email or Username</label>
                                        <input type="text" value={email} onChange={handleEmail} className='form-control' placeholder='Enter Email' />
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Password</label>
                                        <input type="password" value={password} onChange={handlePassword}
                                            className='form-control' placeholder='Enter Password' />
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <button className='btn1 btn-primary' onClick={handleApi}>LOGIN</button>
                                </div>
                                <div className='d-flex justify-content-between m-0 py-2'>
                                    <div>
                                        <p className='l-account m-0'>Dont have an account?</p>
                                    </div>
                                    <NavLink to='/'><p className='l-reg'>Register Here</p></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
