import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-slate-300'>
            <div className='text-center'>
                <h1 className='text-6xl text-sky-700 p-5'>My Services</h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }
            </div>
            <div className='text-center p-5'>
                
                <Link to={'/allServicess'} className='btn'>See More Services</Link>
            </div>
        </div>
    );
};

export default Services;