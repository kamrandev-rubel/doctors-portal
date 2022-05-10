import React from 'react';
import Banner from './Banner';
import Dental from './Dental';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Dental />
        </div>
    );
};

export default Home;