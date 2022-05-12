import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const time = event.target.time.value;
        console.log(time)
        setTreatment(null)
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box  max-w-[511px]">
                    <h3 className="font-bold text-lg mb-12">{treatment.name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" readOnly value={format(date, 'PP')} required className="input input-bordered w-full h-12 mb-5 text-base" />
                        <select name='time' className="select select-bordered font-normal w-full h-12 mb-5 text-base">
                            {slots.map(slot => <option>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Full Name" required className="input input-bordered w-full h-12 mb-5 text-base" />
                        <input type="number" name='phone' required placeholder="Phone Number" className="input input-bordered w-full h-12 mb-5 text-base" />
                        <input type="email" name='email' placeholder="Email" required className="input input-bordered w-full h-12 mb-5 text-base" />
                        <input type="submit" value="SUBMIT" className="input input-bordered w-full h-12 bg-accent text-base text-base-300" />
                    </form>
                    {/* <!-- The button to close modal --> */}
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;