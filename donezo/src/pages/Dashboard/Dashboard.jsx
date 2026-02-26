
import React from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
const data = [
    { day: "S", height: "h-28", type: "striped" },
    { day: "M", height: "h-32", type: "green" },
    { day: "T", height: "h-36", type: "active", value: "74%" },
    { day: "W", height: "h-40", type: "dark" },
    { day: "T", height: "h-32", type: "striped" },
    { day: "F", height: "h-24", type: "striped" },
    { day: "S", height: "h-30", type: "striped" },
];
const Dashboard = () => {

    return (
        <div className='w-full border border-yellow-200 flex text-white h-screen'>
            {/* left side */}
            <div className='w-[10%]'>

            </div>
            {/* main content */}
            <div className='w-[90%] border border-red-400 px-2'>
                {/* top part */}
                <div className='flex justify-between items-center '>
                    <div>
                        <h1 className='text-4xl text-black font-bold'>Dashboard</h1>
                        <p className='text-gray-300'>Plan, priotitize,and accomplish your tasks with ease.</p>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <button className='px-4 py-2 rounded-2xl bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>+ Add Project</button>
                        <button className='px-4 py-2 rounded-2xl bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>Import Data</button>
                    </div>
                </div>
                {/* 2nd top part */}
                <div className='w-full grid lg:grid-cols-4 gap-4 my-4'>
                    {/* box 1 */}
                    <div className=' rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Total Project</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>24</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                    {/* box 2 */}
                    <div className=' rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Total Project</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>24</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                    {/* box 3 */}
                    <div className=' rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Total Project</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>24</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                    {/* box 4 */}
                    <div className=' rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Total Project</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>24</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                </div>
                {/* last part */}
                <div>
                    {/* last left part */}
                    <div>
                        {/* last left 1st  */}
                        <div>
                            <div>
                                <h1>Project Analytics</h1>
                                <div className="flex items-end gap-6">
                                    {data.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center gap-2">

                                            {/* Active Percentage Badge */}
                                            {item.type === "active" && (
                                                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                                                    {item.value}
                                                </span>
                                            )}

                                            {/* Bar */}
                                            <div
                                                className={`w-14 rounded-full ${item.height} ${item.type === "green"
                                                        ? "bg-green-600"
                                                        : item.type === "dark"
                                                            ? "bg-green-800"
                                                            : item.type === "active"
                                                                ? "bg-green-400"
                                                                : "bg-[repeating-linear-gradient(45deg,#d1d5db,#d1d5db_4px,#f3f4f6_4px,#f3f4f6_8px)]"
                                                    }
              `}
                                            ></div>

                                            {/* Day Label */}
                                            <span className="text-gray-500 text-sm">{item.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold text-black mb-5'>Reminder</h1>
                                <h2 className='text-2xl text-green-800 font-bold'>Meeting with Arc Company</h2>
                                <h3 className='text-black'>Time:02:00 pm - 04:00 pm</h3>
                                <button className='w-full text-white bg- '><BsCameraVideoFill /> Start Meeting</button>
                            </div>
                        </div>
                        {/* last left bottom  */}
                        <div className=''>
                            <div>
                                <div className='flex justify-between items-center mb-5'>
                                    <h2>Team Collabortion</h2>
                                    <button className='px-4 py-2 rounded-2xl bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>+ Add Member</button>
                                </div>
                                {/* member1 */}
                                <div>member 1</div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                    {/* last right part */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;