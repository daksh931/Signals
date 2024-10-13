import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Morebtn = (props) => {

    return (
        <div>
            <button onClick={props.handleclick} className='text-xl hover:bg-blue-100 hover:text-blue-500 p-[5px] rounded-full'>
                <IoIosMore />
            </button>
        </div>
    )
}

export default Morebtn
