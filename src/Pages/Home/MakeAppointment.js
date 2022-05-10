import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const imageBG = {
    backgroundImage: `url(${appointment})`,
    backgroundSize: '100%'
}

const MakeAppointment = () => {

    return (
        <div style={imageBG} className='mb-20 w-full'>
            <div className="container mx-auto hero  ">
                <div className="hero-content flex-col lg:pb-0 lg:flex-row items-center">
                    <img src={doctor} alt='' className='mt-[-70px] sm:mt-[-103px]  rounded-lg' />
                    <div className='text-white'>
                        <h3 className='text-primary font-bold text-2xl mt-3 mb-5'>Appointment</h3>
                        <h1 className="xs:text-5xl text-2xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;