import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const {loading,signup} = useSignup()

    const changeGender = (userGender)=>{
        setInputs({...inputs,gender:userGender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        await signup(inputs);

        console.log("handle Submit is Running......",inputs)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-[#e5e6e43a] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-400 '>
                    Sign Up
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Full Name</label>
                        <input
                            className='w-full input input-border h-10'
                            type="text"
                            placeholder='fullname'
                            value={inputs.fullname}
                            onChange={(e)=>setInputs({...inputs,fullname:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>User Name</label>
                        <input
                            className='w-full input input-border h-10'
                            type="text"
                            placeholder='username'
                            value={inputs.username}
                            onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Password</label>
                        <input
                            className='w-full input input-border h-10'
                            type="password"
                            placeholder='password'
                            value={inputs.password}
                            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className='label p-2'><span className='text-base label-text'></span>Confirm Password</label>
                        <input
                            className='w-full input input-border h-10'
                            type="password"
                            placeholder='confirm password'
                            value={inputs.confirmPassword}
                            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                        />
                    </div>

                    {/* gender checkbox */}
                    <GenderCheckbox userGender={inputs.gender} changeGender={changeGender} />

                    <Link to="/login" className='text-sm mt-2 hover:underline hover:text-blue-400 inline-block'>
                        Already have an account
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 '>Sign Up</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default SignUp
