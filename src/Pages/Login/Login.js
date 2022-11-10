import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle,FaGithub,FaTwitter } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {login,googleLogin}=useContext(AuthContext);
    const googlProvider= new GoogleAuthProvider();

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';


    const handleGoogleLogin=()=>{
        googleLogin(googlProvider)
        .then(result =>{
            const user=result.user;
            console.log(user)
            navigate(from, {replace:true});
        })
        .catch(error=>console.error(error))
    }

    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password)

        login(email, password)
        .then(result =>{
            const user=result.user;
            const currentUser={
                email:user.email
            }
            console.log(currentUser);
            //get jwt
            fetch('https://travel-guide-server-woad.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            }) 
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
            navigate(from, {replace:true});
            form.reset();
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-sky-700 text-gray-100 mx-auto my-5">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-400">Dont have account?
                <a href="/register" rel="noopener noreferrer" className="focus:underline hover:underline ml-3">Sign up here</a>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
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
            <form onSubmit={handleLogin} className="space-y-8 ng-untouched ng-pristine ng-valid">
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
                <button type="submite" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-400 text-gray-900 text-xl">Sign in</button>
            </form>
        </div>
    );
};

export default Login;