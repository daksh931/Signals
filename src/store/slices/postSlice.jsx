import {createSlice} from "@reduxjs/toolkit";

// one post look BiLike
// postData : {
//     "profilePic" : undefined,
//     "authorName" : undefined,
//     "postdata" : undefined,
// }

const initialState = {
    posts :[]
}
const postSlice = createSlice({
    name : "post",
    initialState : initialState,
    reducers: {
        setPostData(state, action){
            const postData  = action.payload;

            state.posts.push({
                postId : postData.postId,
                postText : postData.postText,
                authorName : postData.authorName,
                authorPic : postData.authorPic,
            })
        }
    }
})

export const {setPostData} = postSlice.actions;
export default postSlice.reducer;