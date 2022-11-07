import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { id, price, totalView, rating, details, picture, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl'>Price: {price}</p>
                {/* <p>{details}</p> */}
                <div className="card-actions justify-end">
                    {totalView}
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;