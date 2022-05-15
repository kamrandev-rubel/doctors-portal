import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import { async } from '@firebase/util';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP')
    // useEffect(() => {
    //     axios.get(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then((response => {
    //             setServices(response.data)
    //         }))
    // }, [formattedDate])

    const { data: services, isLoading, error, refetch } = useQuery(['available', formattedDate], () =>

        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>

            res.json()

        )

    )


    // console.log(data)
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-5 mb-16'>
            <h4 className='text-secondary text-xl text-center font-bold mb-24'> Available Appointments on {format(date, 'PP').toString()}</h4>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    services.map(service => {
                        const { name, slots } = service;
                        return (
                            <div key={service._id} className="card bg-base-100 
                            drop-shadow-lg">
                                <div className="card-body text-center">
                                    <h2 className="card-title text-primary text-xl font-[600] mx-auto">{name}</h2>
                                    <h3 className='text-sm'>

                                        {slots.length > 0 ?
                                            <>{slots[0]}</>
                                            :
                                            <span className='text-red-500 font-medium'>Try Another Date</span>}
                                    </h3>
                                    <p className='text-xs mb-3'>{slots.length} {slots.length ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                                    <div className="card-actions justify-center">
                                        <label
                                            onClick={() => setTreatment(service)}
                                            disabled={!slots.length}
                                            htmlFor="booking-modal" className="btn btn-sm btn-primary text-sm bg-gradient-to-r text-white from-secondary to-primary"
                                        >
                                            Book Appointment
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
            />}
        </div>
    );
};

export default AvailableAppointment;