import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonials = () => {
    return (
        <section className='px-14'>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-primary font-bold text-xl mb-3'>Testimonials</h3>
                        <p className='text-secondery text-4xl'>What Our Patients Says</p>
                    </div>
                    <div>
                        <img src={quote} className='w-24 md:w-48' alt="" />
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Testimonials;