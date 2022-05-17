import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const { isLoading, error, data: users } = useQuery('repoData', () =>
        axios.get('http://localhost:5000/users')
    )
    if (isLoading) {
        return <Loading />
    }
    console.log(users.data);
    return (
        <div class="overflow-x-auto w-5/6">
            <table class="table w-full">
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
                            const { email } = user
                            return (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>C{email}</td>
                                    <td><button class="btn btn-xs">Make Admin</button></td>
                                    <td><button class="btn btn-xs">Remove User</button></td>
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