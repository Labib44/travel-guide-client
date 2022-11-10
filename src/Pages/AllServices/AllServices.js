import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://travel-guide-server-woad.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className='bg-slate-300'>
            <div className='text-center'>
                <h1 className='text-6xl text-sky-700 p-5'>My All Services </h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allServices.map(allService=><AllServiceCard
                    key={allService._id}
                    allService={allService}
                    ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;