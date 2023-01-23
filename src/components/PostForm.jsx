import React, {useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        create({...post, id: Date.now()});
        setPost({title: '', description: ''});
    }

    return (
        <form>
            <MyInput 
                type='text' 
                placeholder='Post name'
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput 
                type='text' 
                placeholder='Post description'
                value={post.description}
                onChange={(e) => setPost({...post, description: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    )
}

export default PostForm;