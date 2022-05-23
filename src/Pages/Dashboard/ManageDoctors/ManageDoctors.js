import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import DeletingModal from './DeletingModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const navigate = useNavigate()
    const { data: doctors, isLoading, error, refetch } = useQuery('doctors', () => axios.get('https://doctor-portal-o.herokuapp.com/doctors', {
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
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
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

                                    return (
                                        <tr key={doctor._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={img} alt="doctor images" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{firstName} {lastName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {/* <br> */}
                                                <span className="badge badge-ghost badge-sm">{specialty}</span>
                                            </td>
                                            <td>{email}</td>
                                            <th>
                                                <label onClick={() => setDeletingDoctor(doctors)} htmlFor="delete-doctor-modal" className="btn btn-tiny btn-xs bg-error hover:bg-red-500 border-0 mx-auto p-0  items-center flex">Delete</label>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {deletingDoctor && <DeletingModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            />}
        </div>
    );
};

export default ManageDoctors;