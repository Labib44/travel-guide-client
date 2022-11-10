import React from 'react';
import won from '../../../assets/img/won.jpeg';
import feature from '../../../assets/img/feature-md.png';

const About = () => {
    return (
        <section className="bg-gray-800 text-gray-100">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Welcome To
                        Travel Guide.</h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Get ready for real time adventure.</p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Feature</h3>
                        <p className="mt-3 text-lg dark:text-gray-400">Learn about my features.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Group Tours</h4>
                                  
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Beach Tours</h4>
                                    
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Mountain Tours</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src={feature} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">About Me</h3>
                            <p className="mt-3 text-lg dark:text-gray-400">Labibur Rahman, Founder and CEO of Travel Guide. He graduated in Computer Science and Engineering from Daffodil International University, Bangladesh and completed another course in Computer System and Networking from Universiti Tenaga Nasional (UNITEN), Putrajaya, Malaysia. He started his career as an entrepreneur in 2018. He was also the founding member of another two companies for several years.</p>
                            
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src={won} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;