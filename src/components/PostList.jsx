import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>

            <div className="post__title">
                <h1>
                    {title}
                </h1>
            </div>

            {
                posts.length == 0 ?
                <div>No Posts Here</div> :
                <TransitionGroup>
                    {posts.map(post => 
                        <CSSTransition 
                            key={post.id}
                            timeout={500}
                            classNames='post'
                        >
                            <PostItem remove={() => remove(post)} post={post}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            }
        </div>
    )
}

export default PostList;