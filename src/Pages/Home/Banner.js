import React from 'react';
import chair from '../../assets/images/chair.png'
import chairBG from '../../assets/images/bg.png'

const Banner = () => {
    const imageBG = {
        backgroundImage: `url(${chairBG})`,
        backgroundSize: '100%'
    }
    return (
        <div style={imageBG} className="container mx-auto hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className='lg:max-w-[594px] rounded-lg shadow-2xl' />
                <div>
                    <h1 className="xs:text-5xl text-2xl font-bold">BYour New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;