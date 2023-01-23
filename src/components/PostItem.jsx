import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, remove}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.title}</strong>
                <br/>
                {post.description}
            </div>

            <MyButton onClick={remove}>Delete</MyButton>
        </div>
    )
}

export default PostItem;