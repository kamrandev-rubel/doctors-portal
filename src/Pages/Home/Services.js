import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            img: fluoride,
            description: ''
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: ''
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: ''
        },
    ]
    return (
        <div className='px-5'>
            <div className='text-center mb-16'>
                <h2 className='text-primary font-bold text-2xl uppercase'>our services</h2>
                <p className='text-secondery text-4xl'>Services We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;