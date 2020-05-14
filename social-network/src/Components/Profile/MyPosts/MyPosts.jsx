import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return <div >
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>

        <div className={"posts"}>
            <Post message="Hi! How are you?"/>
            <Post message="I am fine! And you?"/>
        </div>
    </div>
}

export default MyPosts;