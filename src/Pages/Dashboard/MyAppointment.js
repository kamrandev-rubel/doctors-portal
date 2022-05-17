import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        axios.get(`http://localhost:5000/booking?patient=${user?.email}`)
            .then((response) => {
                setAppointment(response.data)
            })
    }, [user])
    return (
        <div class="overflow-x-auto w-full">
            <table class="table w-full">
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
    );
};

export default MyAppointment;