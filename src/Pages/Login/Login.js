import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div>
            <div className=" flex justify-center items-center h-screen">
                <div className="card w-full max-w-[385px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center text-xl font-medium'>Login</h2>
                        <form>
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
                                <input type="submit" className='btn btn-accent accent-content text-base-300 ' value="LOGIN" />
                            </div>
                        </form>
                        <div className='mt-1'>
                            <p className='text-xs text-center'>New to Doctors Portal?
                                <Link to='/signup' className='text-primary ml-1 hover:underline'>
                                    Create new account
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

export default Login;