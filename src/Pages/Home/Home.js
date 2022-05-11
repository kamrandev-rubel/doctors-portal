import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Dental from './Dental';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info />
            <Services />
            <Dental />
            <MakeAppointment />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;