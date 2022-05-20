import React from 'react';
import { useForm } from "react-hook-form";


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className='w-full '>
            <h1 className='text-4xl'>hello doctors</h1>
            <div className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control flex">
                        <div className='flex flex-col md:flex-row gap-3'>
                            <div className='flex-1'>
                                <label htmlFor='name' className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input
                                    type="name"
                                    id='name'
                                    placeholder="First Name"
                                    className="input input-bordered w-full"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: 'First Name is Required'
                                        },
                                        minLength: {
                                            value: 4,
                                            message: 'Minimum 4 characters'
                                        }
                                    })}
                                />
                                <label className="ml-2 font-medium">
                                    {errors.firstName?.type === 'required' && <span className='text-xs text-red-600'>{errors.firstName.message}</span>}
                                    {errors.firstName?.type === 'minLength' && <span className='text-xs text-red-600'>{errors.firstName.message}</span>}
                                </label>
                            </div>
                            <div className='flex-1'>
                                <label htmlFor='name' className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input
                                    type="name"
                                    id='name'
                                    placeholder="Last Name"
                                    className="input input-bordered w-full"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: 'Last Name is Required'
                                        },
                                        minLength: {
                                            value: 4,
                                            message: 'Minimum 4 characters'
                                        }
                                    })}
                                />
                                <label className="ml-2 font-medium">
                                    {errors.lastName?.type === 'required' && <span className='text-xs text-red-600'>{errors.lastName.message}</span>}
                                    {errors.lastName?.type === 'minLength' && <span className='text-xs text-red-600'>{errors.lastName.message}</span>}
                                </label>
                            </div>
                        </div>
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
                        <label htmlFor='specialty' className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <input
                            type="text"
                            id='specialty'
                            placeholder="Specialty"
                            className="input input-bordered"
                            {...register("specialty", {
                                required: {
                                    value: true,
                                    message: 'Specialty is Required'
                                },
                            })}
                        />
                        <label className="ml-2 font-medium">
                            {errors.specialty?.type === 'required' && <span className='text-xs text-red-600'>{errors.specialty.message}</span>}
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="ADD" className='btn btn-accent accent-content text-basxe-300 ' />

                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddDoctor;