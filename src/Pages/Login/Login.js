import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)


    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    let googleSigninLoading;
    let emailSigninLoading;
    let signinError;
    if (error || gError) {
        // signinError = <>{error.message || gError.message}</>
    }
    if (gLoading || loading) {
        if (loading) {
            emailSigninLoading = <><button className="btn loading text-white w-full">Loading</button></>
        }
        else {
            googleSigninLoading = <><button className="btn loading text-white w-full">Loading</button></>
        }
    }
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div>
            <div className=" flex justify-center items-center min-h-screen">
                <div className="card w-full max-w-[385px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center text-xl font-medium'>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label htmlFor='email' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    id='email'
                                    placeholder="Email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email address is Required'
                                        },
                                        pattern: {
                                            value: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
                                            message: 'Please enter a valid Email'
                                        }
                                    })}
                                />
                                <label className="ml-2 font-medium">
                                    {errors.email?.type === 'required' && <span className='text-xs text-red-600'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-xs text-red-600'>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">
                                <label htmlFor='password' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="password"
                                    id='password'
                                    placeholder="Password"
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: 'Minimum 8 characters, at least one letter & one number'
                                        }
                                    })}
                                />
                                <label className="ml-2 font-medium">
                                    {errors.password?.type === 'required' && <span className='text-xs text-red-600'>{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-xs text-red-600'>{errors.password.message}</span>}
                                    <p className='text-red-600 text-xs'>{signinError}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    emailSigninLoading ?
                                        emailSigninLoading
                                        :
                                        <input type="submit" className='btn btn-accent accent-content text-base-300 ' value="LOGIN" />
                                }
                            </div>
                        </form>
                        <div className='mt-1'>
                            <p className='text-xs text-center'>New to Doctors Portal?
                                <Link to='/signup' className='text-primary ml-1 hover:underline'>
                                    Create new account
                                </Link>
                            </p>
                            <div className="divider">OR</div>
                            {
                                googleSigninLoading ?
                                    googleSigninLoading
                                    :
                                    <button
                                        onClick={() => signInWithGoogle()}
                                        className="btn btn-outline btn-accent w-full">
                                        <BsGoogle className='text-2xl mr-2' />
                                        CONTINUE WITH GOOGLE
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;