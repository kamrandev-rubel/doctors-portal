import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const AllUsers = () => {
    const navigate = useNavigate()
    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        axios.get('https://doctor-portal-o.herokuapp.com/users', {
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
    // console.log(users);

    return (
        <div className="overflow-x-auto w-5/6">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.data.map((user, index) => {
                            const { email, role } = user;

                            const makeAdmin = () => {
                                fetch(`https://doctor-portal-o.herokuapp.com/users/admin/${email}`, {
                                    method: 'PUT',
                                    headers: {
                                        'authorization': `bearar ${localStorage.getItem('accessToken')}`
                                    }
                                })
                                    .then(res => {
                                        if (res.status === 403) {
                                            return toast.error('Failed to make an admin')
                                        }
                                        return res.json()
                                    })
                                    .then(data => {
                                        if (data.modifiedCount) {
                                            refetch()
                                            toast.success('Successfully made a admin')
                                        }
                                    })


                                // axios.put(`https://doctor-portal-o.herokuapp.com/user/admin/${email}`, {
                                //     method: 'PUT',
                                //     headers: {
                                //         authorization: `bearar ${localStorage.getItem('accessToken')}`
                                //     }
                                // })
                                //     .then((response) => {
                                //         // refetch()
                                //         console.log(response);
                                //     })

                            }
                            return (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{email}</td>
                                    <td>
                                        {
                                            role === 'admin' ?
                                                <button className="btn btn-xs bg-green-400 border-0 hover:bg-green-400 cursor-not-allowed">Admin</button>
                                                :

                                                <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
                                        }
                                    </td>
                                    <td><button className="btn btn-xs">Remove User</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;