import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddService = () => {
    const { user, } = useContext(AuthContext);


    const handleAddService=(event)=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const picture=form.picture.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const totalView=form.totalView.value;
        const details=form.details.value;
        const email=user?.email || 'Unregistered';
        console.log(price, totalView,email, rating, details, picture, title)


        const addService={
            price, 
            totalView,
            email, 
            rating, 
            details, 
            picture, 
            title
        }
        fetch('https://travel-guide-server-woad.vercel.app/addServices',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addService)
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

        <form onSubmit={handleAddService} className='p-10 m-10'>
            <h2 className='text-bold text-4xl text-orange-500 p-2 text-center'>Add My Service</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='title' type="text" placeholder="Place Name" className="input input-bordered w-full max-w-xs" />
                <input name='picture' type="text" placeholder="Photo Url" className="input input-bordered w-full max-w-xs" />
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                <input name='totalView' type="text" placeholder="Views" className="input input-bordered w-full max-w-xs" />
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
            </div>
            <textarea name='details' className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Details"></textarea>
            <input type="submit" className='btn' name="" value="Add Service" />
        </form>

    );
};

export default AddService;