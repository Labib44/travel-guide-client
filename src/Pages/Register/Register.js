import React from 'react';

const Register = () => {
    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-sky-700 text-gray-100 mx-auto my-5">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
            <p className="text-sm text-center dark:text-gray-400">You have an account?
                <a href="/login" rel="noopener noreferrer" className="focus:underline hover:underline ml-3">Sign In hare</a>
            </p>
           
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label for="email" className="block text-sm">Name</label>
                        <input type="email" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-gray-800 focus:dark:border-violet-400" />
                    </div>
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
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Submite</button>
            </form>
        </div>
    );
};

export default Register;