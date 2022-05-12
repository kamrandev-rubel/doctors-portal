import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className=" flex justify-center items-center h-screen">
                <div className="card w-full max-w-[385px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center text-xl font-medium'>Sign Up</h2>
                        <form>
                            <div className="form-control">
                                <label htmlFor='name' className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' id='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label htmlFor='email' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' id='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label htmlFor='password' className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' id='password' placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-accent accent-content text-base-300 ' value="SIGN UP" />
                            </div>
                        </form>
                        <div className='mt-1'>
                            <p className='text-xs text-center'>Already have an account?
                                <Link to='/login' className='text-primary ml-1 hover:underline'>
                                    Login
                                </Link>
                            </p>
                            <div className="divider">OR</div>
                            <button
                                className="btn btn-outline btn-accent w-full">
                                <BsGoogle className='text-2xl mr-2' />
                                CONTINUE WITH GOOGLE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;