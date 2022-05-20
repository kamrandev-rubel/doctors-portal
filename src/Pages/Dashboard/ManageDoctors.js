import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, error, refetch } = useQuery('doctors', () => axios.get('http://localhost:5000/doctors', {
        method: 'GET',
        headers: {
            authorization: `bearar ${localStorage.getItem('accessToken')}`
        }
    }))
    if (isLoading) {
        return <Loading />
    }
    console.log(doctors);
    return (
        <div>
            <h2 className='text-4xl text-secondary text-center mb-4 font-medium'>Manage Doctors</h2>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    {/* <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label> */}
                                </th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Doctor Email</th>
                                <th>Remove Doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.data.map((doctor, index) => {
                                    const { firstName, lastName, specialty, email, img } = doctor;
                                    console.log(doctor);
                                    return (
                                        <tr key={doctor._id}>
                                            <th>
                                                <label>
                                                    <input type="checkbox" class="checkbox" />
                                                </label>
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
                                                <button class="btn btn-tiny btn-xs bg-error hover:bg-red-500 border-0">details</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Specialty</th>
                                <th>Doctor Email</th>
                                <th>Remove Doctor</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctors;