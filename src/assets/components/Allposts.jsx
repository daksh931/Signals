import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post';

const Allposts = () => {
    const posts =  useSelector((state)=> state.post.posts)
    console.log(posts)
    
  return (
 <div>
      { posts.map((item,idx)=>
       
            <Post 
            key= {item.postId}
            id = {item.postId}
            authorName   = {item.authorName} 
            postText = {item.postText}
            authorPic = {item.authorPic}
            />
       
        )}
    </div>
  )
}
export default Allposts;
