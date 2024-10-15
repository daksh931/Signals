import React, { useRef } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiSquareMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { CiCircleMore } from "react-icons/ci";
import { FiFeather } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import HomeCenterDiv from './Homescroll';
import Morebtn from '../UI/Morebtn';

const Home = () => {
    const searchDivRef = useRef(null);

    // This function will be called when the search div is clicked
    const handleSearchClick = () => {
        if (searchDivRef.current) {
            searchDivRef.current.classList.add('border-blue-500');
            searchDivRef.current.classList.remove('border-gray-200');
        }
    };

    // Function to remove blue border when input field loses focus
    const handleBlur = () => {
        if (searchDivRef.current) {
            searchDivRef.current.classList.remove('border-blue-500');
            searchDivRef.current.classList.add('border-gray-200'); // Change back to gray
        }
    };

    // icons list for left side nav
    const icons = [
        { icon: IoMdHome, text: 'Home' },
        { icon: CiSearch, text: 'Explore' },
        { icon: IoIosNotificationsOutline, text: 'Notifications' },
        { icon: CiMail, text: 'Messages' },
        { icon: CiSquareMore, text: 'More' },
        { icon: CiUser, text: 'Profile' },
        { icon: TbUsers, text: 'Users' },
        { icon: CiCircleMore, text: 'More Options' },
    ];

    // Topics and data list for right side nav
    const trendingTopics = [
        {
            topic: "Entertainment",
            hashtag: "#Haryana Elections",
            postCount: 39300,
        },
        {
            topic: "Entertainment",
            hashtag: "#BabaSiddique",
            postCount: null, // If no post count is given, you can set it as null or any placeholder value
            trendingWith: ["#LawrenceBishnoi", "लॉरेंस बिश्नोई"]
        },
        {
            topic: "General",
            hashtag: "Castration",
            postCount: 4475,
        },
        {
            topic: "Travel",
            hashtag: "#TrainAccident",
            postCount: 17500,
        },
        {
            topic: "General",
            hashtag: "Castration",
            postCount: 4475,
        },
        {
            topic: "Travel",
            hashtag: "#TrainAccident",
            postCount: 17500,
        }
    ];

    return (
        <div className="flex flex-row">

            <div className=" hidden xs:block sm:w-[10%] md:w-[23%] fixed">
                {/* very first Fixed sidebar: Left isde bar for icons and other studd*/}
                <div id='icons' className=' sm:p-4  md:pl-12'>

                    <div id='twitter icon' className=' flex mt-4 sm:mt-0 flex-col justify-end self-end px-2 items-end lg:items-start  text-3xl '>
                        <button className='hover:bg-slate-200 p-2 rounded-full'> <FaXTwitter /></button>
                    </div>

                    <div id='other icons' className=' flex flex-col justify-end items-end lg:items-start mt-2 text-3xl  space-y-1'>
                        {/*  through map one by one listing the items of left nav */}
                        {icons.map((Item, idx) => (
                            <div className='flex items-center hover:bg-slate-200 px-2 py-1 rounded-full cursor-pointer'
                                key={idx}> <span className='overflow-hidden'>  < Item.icon />  </span><span className='hidden lg:block text-nowrap text-[19px] text-gray-700 md:ml-4 lg:pr-3'>
                                    {Item.text} </span>  </div>
                        ))
                        }
                    </div>

                    {/* add POST logo large and small screen */}
                    <div id='post button' className='flex justify-end lg:justify-center mt-2  '>
                        <button className='flex justify-center items-center bg-blue-500 text-white lg:py-1 lg:min-h-12 lg:w-56 rounded-full font-bold '>
                            <span className='hidden lg:inline'>    Post </span>
                            <span className='p-2 lg:hidden text-3xl'>  <FiFeather /></span>

                        </button>
                    </div>

                    {/*  logout and profile photo button */}

                    <div id='post button' className='flex justify-end lg:justify-center mt-6 '>
                        <button className='flex justify-between items-center hover:bg-zinc-200 text-black mr-1 lg:mr-0 lg:py-1 lg:min-h-16 lg:w-64 lg:px-4 rounded-full'>
                            <span id='profile photo' className='flex  justify-center items-center space-x-4 '>
                                <span > Photo</span>

                                <div className='hidden lg:inline'>

                                    <span className=' leading-tight flex flex-col items-start'> username <br />
                                        <span className='text-gray-500'> userid </span>
                                    </span>
                                </div>

                            </span>
                            <span className='p-2 hidden lg:inline '>  <BsThreeDots /></span>

                        </button>
                    </div>



                </div>

            </div>

            {/* 2nd or middle div Scrollable content */}
            <div className="  md:mt-0 xs:ml-[10%] w-full lg:w-[47%] lg:mr-0 sm:mr-[16vw]  md:ml-[23%] border-x-[1px] border-gray-200">
                <div className=" h-[400vh]">
                    <HomeCenterDiv />
                </div>
            </div>


            {/* Fixed sidebar: RIGHT SIDE SEARCH BAR offer x discount and trending or hot topics 3rd div */}
            <div className="hidden lg:block right-0  w-full md:w-[30%] pr-6  ">
                <div className=' px-4 p-1'>

                    {/* inside right-1 search bar */}
                    <div
                        ref={searchDivRef}
                        id='search main div' className='flex py-2 justify-center items-center  text-slate-800 rounded-full bg-slate-100 border-2 border-gray-200 '
                        onClick={handleSearchClick} >

                        <span className='text-xl px-4 '> <CiSearch strokeWidth={1} /> </span>

                        <input type="text" onBlur={handleBlur} placeholder="Search" className='bg-slate-100 w-full mr-4 focus:outline-none' />
                    </div>

                    {/* inside right side-2 div discount div*/}
                    <div className=' flex flex-col justify-start space-y-2 px-3 py-2 pb-4 bg-slate-800 my-3 rounded-2xl text-white'>
                        <span className='text-2xl font-bold'> Expiring soon! </span>
                        <span> Get up to 40% off X Premium</span>
                        <button className='flex self-start px-3 py-1 bg-white text-black rounded-full font-bold'> Learn more </button>
                    </div>

                    {/* inside right-3 div What’s happening div  */}
                    <div className=' flex flex-col justify-start   my-4 rounded-2xl border-[1px] border-slate-100 '>
                        <span className='p-2 text-black font-bold text-xl'> What's happening</span>
                        {
                            trendingTopics.map((item, idx) => (
                                <div key={idx} className='flex justify-between hover:bg-zinc-50 text-sm p-2 cursor-pointer '>
                                    <div >
                                    <div className='text-zinc-500'> {item.topic} </div>
                                    <div className='font-semibold text-base'> {item.hashtag} </div>
                                    <div className='text-zinc-500'> {item.postCount} </div>
                                    </div>
                                    <div>

                                    {/* <button className='text-xl hover:bg-blue-100 hover:text-blue-500 p-[5px] rounded-full'>
                                        <IoIosMore />
                                    </button> */}
                                    <Morebtn />
                                    </div>
                                </div>

                            ))
                        }
                        <button className='p-2 py-3 hover:bg-zinc-50 text-start text-blue-500'> Show more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
