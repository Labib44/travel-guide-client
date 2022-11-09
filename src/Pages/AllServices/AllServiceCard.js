import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServiceCard = ({ allService }) => {
    const { _id, price, totalView, rating, details, picture, title } = allService;
    return (
        <PhotoProvider>
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><PhotoView src={picture}><img className='w-full' src={picture} alt="Shoes" style={{height:300}}/></PhotoView></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{price}</h2>
                {
                details.length > 100 ?
                <p>{details.slice(0,100) + '...'} <Link>Read More</Link></p>
                :
                <p>{details}</p>
                }
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
                    <Link className="btn btn-primary mr-2" to={`/details/${_id}`}>Details</Link>
                    <Link className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default AllServiceCard;