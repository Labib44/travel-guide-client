import React from 'react';
import './Banner.css';
import img1 from '../../../assets/img/sajek-valley-shafayat.jpg'
import img2 from '../../../assets/img/coxs bazar.jpg'
import img3 from '../../../assets/img/shylet.jpg'
import img4 from '../../../assets/img/saint-martin.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full img-modify">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>Sajek Valley</h1>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>Cox's Bazar</h1>
                </div>
                
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>Shylet</h1>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" alt=''/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 left-1/3 top-1/2">
                    <h1 className='text-6xl font-bold text-white'>Saint Martin</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;