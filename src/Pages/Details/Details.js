import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEye, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Details = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { _id, price, totalView, rating, details, picture, title } = useLoaderData();
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="card w-96 bg-base-100 shadow-2xl m-10">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}</p>
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
                            <Link to={`/review/${_id}`} className="btn btn-primary mr-5">Review </Link>
                            <Link className="btn btn-primary">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review section  */}

            <div>
            {
                reviews.map(review => <div className=''>
                    <div className="flex flex-col max-w-lg p-3 m-10 space-y-3 overflow-hidden rounded-lg shadow-2xl  text-gray-800">
                    <div className="flex space-x-4">
                        <img alt="" src={user.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">{review.name}</a>
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl  text-orange-500">{review.title}</p>
                        <p className="text-xl text-gray-700">Rating: {review.rating}</p>
                        <p className="text-sm text-gray-700">{review.comment}</p>
                    </div>
                </div>

                </div>)
            }
            </div>
        </div>
    );
};

export default Details;