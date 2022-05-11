import React from 'react';
import { BiTime } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'

const Info = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-14 px-6 mb-32'>
            <div className="card lg:card-side justify-center items-center shadow-xl lg:h-48 p-5 text-white rounded-2xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <BiTime className='w-20 h-20 mr-5' />
                </figure>
                <div className=" flex justify-center flex-col pt-5">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="card lg:card-side justify-center items-center shadow-xl lg:h-48 p-5 text-white rounded-2xl bg-accent">
                <figure>
                    <MdLocationOn className='w-20 h-20 mr-5' />
                </figure>
                <div className=" flex justify-center flex-col pt-5">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card lg:card-side justify-center items-center shadow-xl lg:h-48 p-5 text-white rounded-2xl bg-gradient-to-r from-secondary to-primary">
                <figure>
                    <FiPhoneCall className='w-20 h-20 mr-5' />
                </figure>
                <div className=" flex justify-center flex-col pt-5">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;