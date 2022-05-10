import React from 'react';

const Service = ({ service }) => {
    const { img, name } = service;
    return (
        <div className="card bg-base-100 shadow-[3px_4px_10px_2px_rgba(0, 0, 0, 0.05)] rounded-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;