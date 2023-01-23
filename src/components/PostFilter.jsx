import React from "react";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({searched, filter}) => {
    return (
        <div>
            <MyInput placeholder='find...' value={searched} onChange={e => filter(e.target.value)}/>
        </div>
    )
}

export default PostFilter;