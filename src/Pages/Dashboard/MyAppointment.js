import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [loading, setLoading] = useState(false)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        axios.get(`https://doctor-portal-o.herokuapp.com/booking?patient=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `bearar ${localStorage.getItem('accessToken')}`
            }
        })
            .then((response) => {
                setAppointment(response.data)
                setLoading(false)
            })
            .catch((error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    return navigate('/login')
                }
            })
    }, [user, navigate])
    return (
        <>
            {
                loading ? <Loading /> :
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Treatment</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointment.map((booking, index) => {
                                        const { patientName, treatment, date, slot } = booking;
                                        return (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{patientName}</td>
                                                <td>{treatment}</td>
                                                <td>{date}</td>
                                                <td>{slot}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default MyAppointment;