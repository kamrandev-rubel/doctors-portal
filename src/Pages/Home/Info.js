import React from 'react';
import { BiTime } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'

const Info = () => {
    return (
        <div className='grid grid-cols-3 gap-6 px-5'>
            <div className='flex items-center rounded-2xl bg-gradient-to-r from-secondary to-primary h-48 p-7 text-white'>
            </div>
            <div className='flex items-center rounded-2xl bg-accent to-primary h-48 p-7 text-white'>
            </div>
            <div className='flex items-center rounded-2xl bg-gradient-to-r from-secondary to-primary h-48 p-7 text-white'>
            </div>
        </div>
    );
};

export default Info;