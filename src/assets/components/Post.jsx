import React from 'react'
import Morebtn from '../UI/Morebtn';
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";


const Post = () => {
    return (
        <div id='single post' className='p-2 flex flex-row text-base hover:bg-zinc-100 cursor-pointer leading-tight' >
            <div id='imageleft' className='bg-slate-900 rounded-full h-10 w-10 flex justify-center items-center'>
                picture
            </div>
            <div id='rightside' className=' ml-1'>

                <div id='top line user detail and image' className='flex justify-between items-center'>
                    <div id='userdetail' className='font-semibold hover:underline cursor-pointer'>
                        daksh goyal
                    </div>

                    <div className='more btn'>
                        <Morebtn />
                    </div>
                </div>

                <div id='content' className='text-slate-700'>
                    my whole post or tweet......
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi dolor, praesentium autem ratione, earum consequuntur quisquam sit non voluptate nulla perspiciatis veniam? Eligendi blanditiis, quibusdam odit non culpa rerum.
                </div>

                <div id='like comment btns' className='flex justify-between my-1 text-slate-500 -m-2'>

                    {/* comment button */}
                    <button className='hover:bg-blue-100 p-2 rounded-full hover:text-blue-500'> 
                        <VscComment strokeWidth={1} /> </button>
                    {/* repost button */}
                    <button className='hover:bg-blue-100 p-2 rounded-full hover:text-blue-500'> 
                        <BiRepost className='text-2xl' /></button>
                    {/* like button */}
                    <button className='hover:bg-blue-100 p-2 rounded-full hover:text-blue-500'>
                         <FaRegHeart /> </button>
                    {/* views button */}
                    <button className='hover:bg-blue-100 p-2 rounded-full hover:text-blue-500'>
                         <IoStatsChartSharp /> </button>
                    {/* share button */}
                    <button className='hover:bg-blue-100 p-2 rounded-full hover:text-blue-500'> 
                        <MdOutlineFileUpload className='text-2xl' /> </button>

                </div>
            </div>
        </div>
    )
}

export default Post;    