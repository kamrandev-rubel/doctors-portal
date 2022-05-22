import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth)
    const { _id, name, slots, price } = treatment;
    const formattedDate = format(date, 'PP')
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.time.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            price: price,
            date: formattedDate,
            slot: slot,
            patientName: event.target.name.value,
            phone: event.target.phone.value,
            patientEmail: user.email,
        }

        axios.post('https://doctor-portal-o.herokuapp.com/bookings', booking)
            .then((response) => {
                const data = response.data
                if (data.success) {
                    toast.success(`Appointment is set ${formattedDate} at ${slot}`)
                } else {
                    toast.warning(`Already have an appointment on ${data?.bookings?.date} at ${data?.bookings?.slot}`)
                }
                refetch()
                // to close modal
                setTreatment(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box  max-w-[511px]">
                    <h3 className="font-bold text-lg mb-12">{treatment.name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" readOnly value={format(date, 'PP')} required className="input input-primary  input-bordered w-full h-12 mb-5 text-base" />
                        <select name='time' className="select select-bordered font-normal w-full h-12 mb-5 select-primary  text-base">
                            {slots.map((slot, index) => <option key={index}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' placeholder="Full Name" required className="input input-bordered input-primary  w-full h-12 mb-5 text-base" />
                        <input type="email" name='email' value={user?.email} required className="input input-bordered input-primary w-full h-12 mb-5 text-base" />
                        <input type="text" name='phone' required placeholder="Phone Number" className="input input-primary input-bordered w-full h-12 mb-5 text-base" />
                        <input type="submit" value="SUBMIT" className="input input-bordered w-full h-12 bg-primary text-base text-base-300" />
                    </form>
                    {/* <!-- The button to close modal --> */}
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;