import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl text-primary my-10 font-bold'>Wellcome to your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto  w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' className='mb-3'>My Appointment</Link></li>
                    <li><Link to='/dashboard/myReview'>My Review</Link></li>
                    <li><Link to='/dashboard/myHistory'>My History</Link></li>
                    <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;