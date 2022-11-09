import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {
    const { user, } = useContext(AuthContext);

    const handleReview=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const rating=form.rating.value;
        const email=user?.email || 'Unregistered';
        console.log(email, rating,  name)


        const addReview={
            name,
            email, 
            rating, 
           
        }
        fetch('http://localhost:5000/addServices',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Successfull your Added')
                form.reset();
            }
        })
        .catch(error=>console.error(error));
    }
    return (
        <form onSubmit={handleReview} className='p-10 m-10'>
            <h2 className='text-bold text-4xl text-orange-500 p-10 text-center'>Add Your Review</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                
                
                <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
            </div>
            <textarea name='details' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Details"></textarea>
            <input type="submit" className='btn' name="" value="Add Review" />
        </form>
    );
};

export default Review;