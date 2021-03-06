import React from 'react';
import chair from '../../assets/images/chair.png'
import chairBG from '../../assets/images/bg.png'

const Banner = () => {

    return (
        <div style={{
            backgroundImage: `url(${chairBG})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        }} className="md:container px-5 mb-16 mx-auto hero md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className='lg:max-w-[594px] rounded-lg shadow-2xl mb-16' />
                <div>
                    <h1 className="xs:text-5xl text-2xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;