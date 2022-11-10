import React, { useEffect, useState } from 'react';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])
    return (
        <div className='m-10'>
        <div className='text-center'>
            <h1 className='text-6xl text-sky-700 p-5'>My All Reviews </h1>
        </div>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               myReviews.map(r=> <MyReviewsCard
               key={r._id}
               r={r}
               >

               </MyReviewsCard>)
            }
        </div>
    </div>
    );
};

export default MyReviews;