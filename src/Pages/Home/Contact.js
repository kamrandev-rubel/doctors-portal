import React from 'react';
import appointment from '../../assets/images/appointment.png'

const imageBG = {
    backgroundImage: `url(${appointment})`,
    backgroundSize: '100%'
}

const Contact = () => {
    return (
        <div style={imageBG} className='py-16 px-5 flex justify-center items-center'>
            <div className='max-w-[450px]'>
                <div className='mb-10 text-center'>
                    <h2 className='text-primary font-bold text-2xl mb-3'>Contact Us</h2>
                    <p className='text-4xl text-white'>Stay connected with us</p>
                </div>
                <form>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full mb-5" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full mb-5" />
                    <textarea className="textarea textarea-primary w-full min-h-[136px] mb-9" placeholder="Your Message"></textarea>
                    <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mx-auto block" />
                </form>
            </div>
        </div>
    );
};

export default Contact;