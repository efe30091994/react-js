import React from "react";
import styleOfMyPosts from "./Post.module.css";

const Post = (props) =>{
    return <div className={styleOfMyPosts.item}>
        <img src="https://cs11.pikabu.ru/post_img/big/2020/05/07/11/1588875354161478371.jpg"/>
        {props.message}
        <div>
            <span>
                 <img src="https://pngimg.com/uploads/like/like_PNG75.png"/>
                 <img src="https://w0.pngwave.com/png/592/198/dislike-png-clip-art.png"/>
            </span>
        </div>
    </div>
}

export default Post;