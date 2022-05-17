import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)

    let googleSigninLoading;
    let emailSigninLoading;
    if (gLoading || loading) {
        if (loading) {
            emailSigninLoading = <><button className="btn loading text-white w-full">Loading</button></>
        }
        else {
            googleSigninLoading = <><button className="btn loading text-white w-full">Loading</button></>
        }
    }
    if (token) {
        // console.log(user || gUser)
    }
    const onSubmit = async data => {
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    };
    return (
        <div>
            <div className=" flex justify-center items-center min-h-screen">
                <div className="card w-full max-w-[385px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center text-xl font-medium'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label htmlFor='name' className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="name"
                                    id='name'
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Minimum 5 characters'
                                        }
                                    })}
                                />
                                <label className="ml-2 font-medium">
                                    {errors.name?.type === 'required' && <span className='text-xs text-red-600'>{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className='text-xs text-red-600'>{errors.name.message}</span>}
                                </label>
                            </div>
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
                                    <span className="label-text">Password</span>
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
                                    {/* <p className='text-red-600 text-xs'>{error.message || gError.message}</p> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    emailSigninLoading ?
                                        emailSigninLoading
                                        :
                                        <input type="submit" className='btn btn-accent accent-content text-base-300 ' value="SIGN UP" />
                                }
                            </div>
                        </form>
                        <div className='mt-1'>
                            <p className='text-xs text-center'>New to Doctors Portal?
                                <Link to='/login' className='text-primary ml-1 hover:underline'>
                                    Login
                                </Link>
                            </p>
                            <div className="divider">OR</div>
                            {
                                googleSigninLoading ?
                                    googleSigninLoading
                                    :
                                    <button
                                        onClick={async () => await signInWithGoogle()}
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

export default SignUp;