import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
            }}>
            <div className="footer p-10 text-base-content py-24">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover text-accent">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover text-accent">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover text-accent">Cavity Filling</Link>
                    <Link to='/' className="link link-hover text-accent">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover text-accent">New York - 101010 Hudson</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-accent">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mb-11'>
                <h2 className='text-accent'>Copyright {new Date().getFullYear()} All Rights Reserved</h2>
            </div>
        </footer>
    );
};

export default Footer;