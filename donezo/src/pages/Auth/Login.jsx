import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('email password ::', email, password)
        const data = {
            email: email,
            password: password
        }
        axios.post('https://task-api-eight-flax.vercel.app/api/login', data).then(res => {
            console.log('resodjfdsf::', res.data)
            localStorage.setItem('userData', JSON.stringify(res.data))
             navigate('/')
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600 px-4">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                <form onSubmit={handleSubmitForm} className="space-y-5">

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name='email'
                            className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2 text-sm text-indigo-600 font-medium"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    {/* <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-indigo-600" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-600 hover:underline">
                            Forgot password?
                        </a>
                    </div> */}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-300"
                    >
                        Login
                    </button>

                </form>

                {/* Bottom Text */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </a>
                </p>

            </div>
        </div>
    );
};

export default Login;