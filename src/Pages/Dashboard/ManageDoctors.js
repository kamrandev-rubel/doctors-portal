import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const navigate = useNavigate()
    const { data: doctors, isLoading, error, refetch } = useQuery('doctors', () => axios.get('http://localhost:5000/doctors', {
        method: 'GET',
        headers: {
            authorization: `bearar ${localStorage.getItem('accessToken')}`
        }
    })
        .catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                return navigate('/login')
            }
        })
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-4xl text-secondary text-center mb-4 font-medium'>Manage Doctors</h2>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th className='text-center'>Name</th>
                                <th className='text-center'>Specialty</th>
                                <th className='text-center'>Doctor Email</th>
                                <th className='text-center'>Remove Doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.data.map((doctor, index) => {
                                    const { firstName, lastName, specialty, email, img } = doctor;
                                    console.log(firstName, 'hello', lastName);
                                    const handleDeleteDoctor = (email) => {
                                        fetch(`http://localhost:5000/doctor/${email}`, {
                                            method: "DELETE",
                                            headers: {
                                                authorization: `bearar ${localStorage.getItem('accessToken')}`
                                            }
                                        })
                                            .then(res => res.json())
                                            .then(result => {
                                                console.log(result);
                                                toast.success(`Doctor: ${firstName} ${lastName} is Deleted`)
                                                refetch()
                                            })
                                    }
                                    return (
                                        <tr key={doctor._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src={img} alt="doctor images" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="font-bold">{firstName} {lastName}</div>
                                                        {/* <div class="text-sm opacity-50">United States</div> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {/* <br> */}
                                                <span class="badge badge-ghost badge-sm">{specialty}</span>
                                            </td>
                                            <td>{email}</td>
                                            <th>
                                                <input type='button' value='Delete' id='delete' onClick={() => handleDeleteDoctor(email)} class="btn btn-tiny btn-xs bg-error hover:bg-red-500 border-0 mx-auto block" />
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctors;