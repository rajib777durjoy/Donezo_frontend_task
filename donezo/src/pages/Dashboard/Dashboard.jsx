
import React from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayStopO } from "react-icons/cg";
import { Link } from 'react-router';
import { CgMenuGridR } from "react-icons/cg";
const data = [
    { day: "S", height: "h-28", type: "striped" },
    { day: "M", height: "h-36", type: "green" },
    { day: "T", height: "h-32", type: "active", value: "74%" },
    { day: "W", height: "h-44", type: "dark" },
    { day: "T", height: "h-44", type: "striped" },
    { day: "F", height: "h-28", type: "striped" },
    { day: "S", height: "h-36", type: "striped" },
];
const projectList = [
    {
        id: 1,
        name: 'Develop API Endpoints',
        date: "Nov 26,2024",
        logo: '/project_logo.png'
    },
    {
        id: 2,
        name: 'Onboarding Flow',
        date: "Nov 28,2024",
        logo: '/project_logo2.png'
    },
    {
        id: 3,
        name: 'Build Dashboard',
        date: "Nov 30,2024",
        logo: '/project_logo3.png'
    },
    {
        id: 4,
        name: 'Optimize Page Load',
        date: "Dec 5,2024",
        logo: '/project_logo4.png'
    },
    {
        id: 5,
        name: 'Cross-Browser Testing',
        date: "Dec 6,2024",
        logo: '/project_logo5.jpg'
    },
]

const member_list = [
    {
        name: 'Alexandra Deff',
        respository: 'Github Project Repository',
        image: '',
        status: 'Completed'
    },
    {
        name: 'Edwin Adenike',
        respository: 'Integrate User Authentication System',
        image: '',
        status: 'In Progress'
    },
    {
        name: 'Isaac Oluwatemilorun',
        respository: 'Develop Search and Filter Functionality',
        image: '',
        status: 'Pending'
    },
    {
        name: 'David Oshodi',
        respository: 'Responsive Layout for Homepage',
        image: '',
        status: 'In Progress'
    }
];

const completed = 30;
const inProgress = 60;
const pending = 80;

const totalProgress = completed + inProgress + pending;

const radius = 100;
const stroke = 40;
const normalizedRadius = radius - stroke / 2;
const circumference = Math.PI * normalizedRadius;

const completedLen = (completed / 100) * circumference;
const inProgressLen = (inProgress / 100) * circumference;
const pendingLen = (pending / 100) * circumference;
const totalLen = (totalProgress / 100) * circumference;

const Dashboard = () => {

    return (
        <div className='w-full border min-h-screen border-yellow-200 flex text-white '>
            {/* left side */}
            <div className='w-[10%]'>
              <h1 className='text-black'>MENU</h1>
              <ul className='w-full '>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                
              </ul>
              <h1 className='text-black uppercase'>General</h1>
              <ul className='w-full '>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                <Link href='#' className='border-[6px] border-white hover:border-t-transparent hover:border-r-transparent hover:text-green-800 hover:border-b-transparent flex gap-2 lg:text-xl justify-between items-center  hover:border-l-green-800 text-black font-bold my-4' ><CgMenuGridR className='text-xl ' /> <li>Dashboard</li></Link>
                
              </ul>
            </div>
            {/* main content */}
            <div className='w-[90%]  px-2'>
                {/* top part */}
                <div className='flex justify-between items-center '>
                    <div>
                        <h1 className='text-4xl text-black font-bold'>Dashboard</h1>
                        <p className='text-gray-400'>Plan, priotitize,and accomplish your tasks with ease.</p>
                    </div>
                    <div className='flex justify-between gap-4'>
                        <button className='min-w-30 lg:px-4 h-10 rounded-2xl border border-green-900 bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>+ Add Project</button>
                        <button className='min-w-30 lg:px-4 h-10 rounded-2xl border border-green-900 bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>Import Data</button>
                    </div>
                </div>
                {/* 2nd top part */}
                <div className='w-full grid xl:grid-cols-4 gap-4 my-4'>
                    {/* box 1 */}
                    <div className='rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
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
                    <div className='rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Ended Projects</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>10</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                    {/* box 3 */}
                    <div className='rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Running Projects</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>12</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                    {/* box 4 */}
                    <div className='rounded-2xl bg-white px-4 h-50 text-black hover:text-white 
                    hover:bg-linear-to-tr from-green-900 to-green-950'>
                        <div className='flex justify-between items-center mt-5'>
                            <h2 className='text-4xl lg:text-2xl font-bold '>Pending Projects</h2>
                            <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border text-black rotate-45'><IoIosArrowRoundUp className='text-4xl' /></div>
                        </div>
                        <div className='text-4xl font-bold my-2'>2</div>
                        <div className='flex items-center gap-2 pt-5'>
                            <span className='border border-green-600 text-green-600 px-1 rounded-md'>5+</span>
                            <p className='text-green-800'>Incressed form last month</p>
                        </div>
                    </div>
                </div>
                {/* Center  */}
                <div className='flex flex-col xl:flex-row justify-between gap-2'>
                    <div className='grid lg:grid-cols-2 gap-4 py-4'>
                        <div className='px-2'>
                            <h1 className='text-2xl mb-5 text-black font-bold'>Project Analytics</h1>
                            <div className="flex items-end gap-2">
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
                                                } `}
                                        ></div>

                                        {/* Day Label */}
                                        <span className="text-gray-500 text-sm">{item.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='px-2'>
                            <h1 className='text-2xl font-bold text-black mb-10'>Reminder</h1>
                            <h2 className='text-4xl text-green-800 font-bold '>Meeting with Arc Company</h2>
                            <h3 className='text-black/50 text-lg mt-2 my-5'>Time:02:00 pm - 04:00 pm</h3>
                            <button className='px-4 mt-10 flex text-xl items-center gap-2 rounded-3xl py-3 text-white  bg-linear-to-tr from-green-800  to-green-950 '><BsCameraVideoFill className='text-2xl' /> Start Meeting</button>
                        </div>

                        <div className='px-2 mt-4'>
                            <div className='flex justify-between '>
                                <h2 className='text-2xl font-bold text-black mb-10'>Team Collaboration</h2>
                                <button className='min-w-30 lg:px-4 h-10 rounded-2xl border border-green-900 bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>+ Add Member</button>
                            </div>
                            {
                             member_list.map((item,index)=><div key={index+1}>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-xl text-gray-500'>{item.name}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-gray-400'>Working on <span className='text-sm font-bold text-black'>{item.respository}</span></p>
                                         <span className={`${item.status=== 'Completed' &&'text-green-600 border-green-300'|| item?.status ==='In Progress' &&'text-yellow-600 border-yellow-300' || 'text-red-600  border-red-300'} border w-22 h-8 text-center`}>{item.status}</span>
                                    </div>
                                </div>
                             </div>)
                            }
                        </div>
                        <div className="w-95 bg-[#f3f4f6] p-8 rounded-2xl">
                            <h2 className="text-xl font-semibold text-gray-800 mb-8">
                                Project Progress
                            </h2>

                            <div className="relative flex justify-center">
                                <svg width="240" height="140" viewBox="0 0 240 140">

                                    {/* Background Full Track */}
                                    <path
                                        d={`M 20 120 A ${normalizedRadius} ${normalizedRadius} 0 0 1 220 120`}
                                        fill="none"
                                        stroke="#d1d5db"
                                        strokeWidth={stroke}
                                        strokeLinecap="round"
                                    />

                                    {/* Completed */}
                                    <path
                                        d={`M 20 120 A ${normalizedRadius} ${normalizedRadius} 0 0 1 220 120`}
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth={stroke}
                                        strokeDasharray={`${completedLen} ${circumference}`}
                                        strokeLinecap="round"
                                    />

                                    {/* In Progress */}
                                    <path
                                        d={`M 20 120 A ${normalizedRadius} ${normalizedRadius} 0 0 1 220 120`}
                                        fill="none"
                                        stroke="#166534"
                                        strokeWidth={stroke}
                                        strokeDasharray={`${inProgressLen} ${circumference}`}
                                        strokeDashoffset={-completedLen}
                                        strokeLinecap="butt"
                                    />

                                    {/* Stripe Pattern */}
                                    <defs>
                                        <pattern
                                            id="stripe"
                                            width="6"
                                            height="6"
                                            patternUnits="userSpaceOnUse"
                                            patternTransform="rotate(45)"
                                        >
                                            <rect width="3" height="6" fill="#9ca3af" />
                                        </pattern>
                                    </defs>

                                    {/* Pending */}
                                    <path
                                        d={`M 20 120 A ${normalizedRadius} ${normalizedRadius} 0 0 1 220 120`}
                                        fill="none"
                                        stroke="url(#stripe)"
                                        strokeWidth={stroke}
                                        strokeDasharray={`${pendingLen} ${circumference}`}
                                        strokeDashoffset={-(completedLen + inProgressLen)}
                                        strokeLinecap="butt"
                                    />
                                </svg>

                                {/* Center Text */}
                                <div className="absolute top-[45%] flex flex-col items-center">
                                    <h1 className="text-5xl font-bold text-black leading-none">
                                        41%
                                    </h1>
                                    <p className="text-sm text-green-700 mt-1">
                                        Project Ended
                                    </p>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex justify-between mt-8 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                    Completed
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-green-900"></span>
                                    In Progress
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-[repeating-linear-gradient(45deg,#9ca3af_0px,#9ca3af_3px,#d1d5db_3px,#d1d5db_6px)]"></span>
                                    Pending
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='text-black'>
                        <div className='flex justify-between  gap-4'>
                            <h2 className='text-2xl font-bold '>Project</h2>
                            <button className='min-w-30 lg:px-4 h-10 rounded-2xl border border-green-900 bg-white text-black hover:text-white hover:bg-linear-to-tr from-green-800 to-green-950'>+ New</button>
                        </div>
                        <div className='mt-5'>
                            {
                                projectList.map((project, index) => <div key={index+1} className='flex items-center gap-2 mt-4'>
                                    <img className='max-w-12 max-h-12 shadow-md shadow-gray-400 p-1  rounded-full ' src={project.logo} alt="logo" />
                                    <div>
                                        <h2 className='text-xl text-black font-semibold'>{project.name}</h2>
                                        <h3 className='text-gray-400'>Due date:{project.date}</h3>
                                    </div>
                                </div>)
                            }
                        </div>
                        <div className='mt-5 relative'>
                            <img className='w-full h-50 rounded-xl ' src="/bg_music_image.jpg" alt="" />
                            <h2 className='text-2xl text-white font-bold absolute top-[10%] left-[5%] z-50 '>Time Tracker</h2>
                            <h2 className='text-4xl text-white font-bold absolute top-[40%] left-[30%]'>01:24:08</h2>
                            <div className='flex  absolute bottom-[10%] gap-4 right-[35%] mx-auto '>
                                <CgPlayPauseO className='text-5xl bg-white text-black rounded-full' />
                                <CgPlayStopO className='text-5xl bg-red-400 text-white rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;