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
                console.log(response.data)
            })
    }, [user])
    return (
        <div>

        </div>
    );
};

export default MyAppointment;