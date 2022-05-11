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
        <div className='px-5 mb-16'>
            <h4 className='text-secondary text-xl text-center font-bold mb-24'> Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    services.map(service => {
                        const { name, slots } = service;
                        return (
                            <div key={service._id} className="card bg-base-100 drop-shadow-lg">
                                <div className="card-body text-center">
                                    <h2 className="card-title text-primary text-xl font-[600] mx-auto">{name}</h2>
                                    <h3 className='text-sm'>
                                        {slots[0]}
                                        {slots.length <= 0
                                            &&
                                            <span className='text-red-500 font-medium'>Try Another Date</span>}
                                    </h3>
                                    <p className='text-xs mb-3'>{slots.length} {slots.length ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                                    <div className="card-actions justify-center">
                                        <button disabled={!slots.length} className="btn btn-primary text-sm">Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;