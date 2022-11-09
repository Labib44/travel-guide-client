import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEye, FaStar } from 'react-icons/fa';

const Details = () => {
    const { price, totalView, rating, details, picture, title } = useLoaderData();
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto m-10">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-between">
                    <div className='flex justify-between p-3'>

                        <div className='flex mr-3'>
                            <FaEye className='mr-2'></FaEye> {totalView}
                        </div>
                        <div className='flex'>
                            <FaStar className='mr-2'></FaStar> {rating}
                        </div>

                    </div>
                    <div>
                        <Link to={'/review'} className="btn btn-primary mr-5">Review </Link>
                        <Link className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;