import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviewsCard = ({ r, handleDelete }) => {
    const { user } = useContext(AuthContext);



    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="/" className="text-sm font-semibold">{r.name}</a>

                </div>
            </div>


            <div>
                <h2 className="mb-1 text-xl font-semibold">{r.title}</h2>
                <p className="text-sm dark:text-gray-400">{r.comment}</p>
                <button className="btn p-3 m-2">Edit</button>
                <button onClick={() => handleDelete(r._id)} className="btn p-3 m-2">Delete</button>

            </div>

        </div>
    );
};

export default MyReviewsCard;