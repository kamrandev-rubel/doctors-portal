import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1zBRFhH85m1F2AmB0ynQllH9UWHtTnHN3nRPHPGc1FamY4CijEZn4SC3AoNNcZWsgHEDNUykHIrrXaIRCs0oMk00eHctedWf');

const Payment = () => {
    const { id } = useParams()

    const { data: booking, isLoading, error, refetch } = useQuery(['booking', id], () =>

        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `bearar ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='rounded-2xl'>
            <div className="card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-secondary">hello {booking.patientName}</h2>
                    <h2 className='card-title'>{`Please pay for ${booking.treatment}`}</h2>
                    <p>Your Appointment: <span className=' text-lime-500'>{booking.date}</span> at <span className=' text-lime-500'>{booking.slot}</span></p>
                    <p>Please Pay <span className='font-medium'>${booking.price}</span></p>
                </div>
            </div>
            <div className="card  bg-slate-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;