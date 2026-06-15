
import React from 'react'
import pic from '../assets/pic.png'

function Page() {
    return (
        <div
            className="relative bg-no-repeat bg-cover w-screen min-h-screen flex flex-col md:flex-row items-center md:items-stretch"
            style={{ backgroundImage: `url(${pic})`, backgroundColor: '#041643' }}
        >
            <div className="flex flex-col w-full md:w-1/2 px-6 pt-8 md:pt-0 md:justify-center md:px-20">
                <div className="flex items-center gap-2">
                    <div className="flex w-8 h-8 items-center justify-center">
                        <div className="w-7 h-7 border-2 rounded-full border-blue-400 flex justify-center items-center">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        </div>
                    </div>
                    <div className="text-xl text-white font-bold">circles</div>
                </div>

                <div className="flex flex-col text-white mt-6 mb-8 md:mt-10">
                    <p className="font-bold text-2xl md:text-4xl">Login into</p>
                    <p className="font-bold text-2xl md:text-4xl">your account</p>
                    <p className="text-sm mt-1 text-gray-300 md:text-base">Let us make the circle bigger!</p>
                </div>
            </div>

            
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-6 md:px-0">
                <div className="w-[90%] max-w-md p-6 rounded-2xl bg-white shadow-lg mb-6">
                    <form action="" className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm text-gray-600">Email</label>
                            <input type="email" name="" className="border h-10 rounded-md p-2 text-sm" placeholder="name@example.com" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="text-sm text-gray-600">Password</label>
                            <input type="password" name="" className="border h-10 rounded-md p-2 text-sm" placeholder="Your password" />
                        </div>

                        <button className="bg-blue-500 w-full h-11 rounded-md text-white font-medium mt-2">Login</button>

                        <div className="text-sm text-center text-gray-600">
                            Don't have an account? <span className="font-semibold text-blue-500 cursor-pointer">Sign up</span>
                        </div>
                    </form>
                </div>

                <div className="text-xs text-gray-400 pb-6 md:pb-0">
                    © 2023 Circle. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Page