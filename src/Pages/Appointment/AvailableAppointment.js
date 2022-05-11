import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get('services.json')
            .then((response => {
                setServices(response.data)
            }))
    }, [])
    return (
        <div>
            <h4 className='text-secondary text-xl text-center'> Available Appointments on {format(date, 'PP')}</h4>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointment;