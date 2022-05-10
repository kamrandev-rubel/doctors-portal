import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner />
            <Info />
            <Services />
            <Dental />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;