import React from 'react'
import Createpost from './Createpost';
import Allposts from './Allposts';

const Homescroll = () => {
  return (
    <div id='main div'>

      {/* upper part foryou || following */}
      <div className='flex justify-between text-center cursor-pointer'>
        <span className='w-full hover:bg-zinc-200 font-semibold py-4'> For you</span>
        <span className='w-full hover:bg-zinc-200 font-semibold py-4'> Following</span>
      </div>

      {/* user can post something and visible to all */}
      <div>
        <Createpost />
      </div>

      {/* public user's posts will appear here  */}
      <div>
        <Allposts />
      </div>
    </div>
  )
}

export default Homescroll;
