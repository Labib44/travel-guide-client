import React, { useEffect, useState } from 'react';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch('https://travel-guide-server-woad.vercel.app/review')
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])

    const handleDelete = (_id) => {
        console.log(_id);
        const proceed = window.confirm('Are you sure...?')
        if (proceed) {
            fetch(`https://travel-guide-server-woad.vercel.app/review/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = myReviews.filter(rev => rev._id !== _id);
                        setMyReviews(remaining);
                    }
                })
        }
    }




    return (
        <div className='m-10'>
            <div className='text-center'>
                <h1 className='text-6xl text-sky-700 p-5'>My All Reviews </h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myReviews.map(r => <MyReviewsCard
                        key={r._id}
                        r={r}

                        handleDelete={handleDelete}
                    >

                    </MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;