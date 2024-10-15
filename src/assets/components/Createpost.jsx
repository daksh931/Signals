import React, { useState } from 'react'

import { FaRegImage } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiSmile } from "react-icons/fi";
import profilepic from "../../../public/image1.jpg";
import { useDispatch } from 'react-redux';
import { setPostData } from '../../store/slices/postSlice';

// postId : postData.id,
// postText : postData.text,
// authorName : postData.authorName,
// authorPic : postData.authorPic,

const Createpost = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto'; // Reset the height to auto to calculate the scrollHeight
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
        setText(textarea.value);
    };


    const postData = {
        postId : Math.floor(Math.random() * 1000000),
        postText : text,
        authorName : "@552daksh",
        authorPic : "random"
     }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(setPostData(postData));
        setText("");
    }

    return (
        <div id='createpost main div' className='p-2 flex flex-row text-base cursor-pointer leading-tight' >
            <div id='imageleft' className=' flex items-start'>
                <div className=' bg-slate-900 rounded-full w-10 h-10'>
                    <img src={profilepic} className=' h-10 w-10 object-cover rounded-full ' />

                </div>
            </div>
            <div id='rightside' className=' ml-1 w-full'>

                {/* input box */}
                <form onSubmit={handleSubmit}>
                    <div className='w-full border-gray-300 border-b pb-5'>
                        <textarea
                            value={text}
                            onInput={handleInput}
                            placeholder="What is happening?!"
                            className="w-full p-1  text-lg  text-gray-700 placeholder-gray-500 rounded-lg 
                         focus:outline-none focus:ring-0 resize-none overflow-hidden"
                            rows="2" // Start with a single line
                        ></textarea>
                        <span className='text-sm w-full font-semibold rounded-full hover:bg-blue-100 p-1 px-2 text-blue-500'>Every one can reply</span>
                    </div>


                    <div id='post options button' className='flex  my-1 justify-between text-slate-500 -m-1'>

                        <div id='photo location buttons'>
                            {/* image select button */}
                            <button className='hover:bg-blue-100 p-2 rounded-full text-blue-500'>
                                <FaRegImage strokeWidth={1} /> </button>
                            {/* Smile button */}
                            <button className='hover:bg-blue-100 p-2 rounded-full text-blue-500'>
                                <FiSmile className='font-bold' strokeWidth={2} /> </button>
                            {/* Location button  */}
                            <button className='hover:bg-blue-100 p-2 rounded-full text-blue-500'>
                                <IoLocationOutline className='font-bold' strokeWidth={2} /> </button>
                        </div>
                        <div id='final post button' className=' flex justify-center items-center mr-2'>
                            <button type='submit'>  <span className='text-sm font-bold text-white px-5 p-2 
                        rounded-full bg-blue-300' >Post</span>
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        </div>


    )
}

export default Createpost;
