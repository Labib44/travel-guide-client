import React from 'react';
import { FaGoogle,FaGithub,FaTwitter } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-sky-700 text-gray-100 mx-auto my-5">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-400">Dont have account?
                <a href="/register" rel="noopener noreferrer" className="focus:underline hover:underline ml-3">Sign up here</a>
            </p>
            <div className="my-6 space-y-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                    <FaGoogle className='mr-3 text-xl'></FaGoogle> Login with Google
                   
                </button>
                <button aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                   <FaGithub className='mr-3 text-xl'></FaGithub> Login with GitHub
                    
                </button>
                <button aria-label="Login with Twitter" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                    <FaTwitter className='mr-3 text-xl'></FaTwitter>Login with Twitter
                    
                </button>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label for="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label for="password" className="text-sm">Password</label>
                            
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400" />
                    </div>
                </div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
            </form>
        </div>
    );
};

export default Login;