import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const AddDoctor = () => {
    const [value, setValue] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { isLoading, error, data: specialty, refetch } = useQuery('specialty', () => axios.get('http://localhost:5000/services'))

    if (isLoading) {
        return <Loading />
    }

    const onSubmit = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        const imgbb_api_key = '5ec1cdd049438e9eec3e5d5118b46e5b';

        fetch(`https://api.imgbb.com/1/upload?key=${imgbb_api_key}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        fristName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    }

                    // send to doctor database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearar ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Successfully added Doctor')
                            }
                        })
                }
            })
    };
    return (
        <div className='w-full '>
            <h1 className='text-4xl text-secondary text-center mb-4 font-medium'>Add new Doctors</h1>
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
                        <select
                            className="select select-bordered w-full"
                            {...register("specialty", {
                                required: {
                                    value: true,
                                    message: 'Specialty is Required'
                                },
                            })}
                        >

                            <option
                                selected
                                disabled
                                value='Select Specialty'
                            >Select Specialty</option>
                            {
                                specialty?.data.map(special => {
                                    return <>
                                        <option
                                            key={special._id}
                                            defaultValue={special.name}
                                        >{special.name}</option>
                                    </>
                                })
                            }
                        </select>
                        <label className="ml-2 font-medium">
                            {errors.specialty?.type === 'required' && <span className='text-xs text-red-600'>{errors.specialty.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor='photo' className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input
                            type="file"
                            id='photo'
                            className="input input-bordered w-full p-1.5 block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-primary
                            hover:file:bg-violet-100"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Photo is Required'
                                }
                            })}
                        />
                        <label className="ml-2 font-medium">
                            {errors.image?.type === 'required' && <span className='text-xs text-red-600'>{errors.image.message}</span>}
                            {errors.image?.type === 'minLength' && <span className='text-xs text-red-600'>{errors.image.message}</span>}
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