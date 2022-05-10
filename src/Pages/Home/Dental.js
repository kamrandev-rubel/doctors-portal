import React from 'react';
import dental from '../../assets/images/treatment.png'

const Dental = () => {
    return (
        <div className="container mx-auto hero min-h-screen mb-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className='basis-1/2'>
                    <img src={dental} alt='' className=' lg:max-w-[458px] lg:max-h[576px] ml-auto rounded-lg shadow-2xl' />
                </div>
                <div className='basis-1/2 lg:p-20'>
                    <h1 className="xs:text-5xl text-2xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Dental;