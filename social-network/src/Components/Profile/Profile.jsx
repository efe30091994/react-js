import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src={"https://assets.unenvironment.org/s3fs-public/styles/article_billboard_image/public/events/2019-09/sebastian-pena-lambarri-Sb7x-pgnsWI-unsplash.jpg?h=afb98ff0&itok=5A0HgjGn"}/>
        </div>

        <div>avater + describtion</div>
        <MyPosts/>
    </div>
}

export default Profile;