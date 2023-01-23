import React, { useEffect, useState } from "react";
import MyModal from "./components/UI/MyModal/MyModal";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "Sample", description:"Generic description"},
    {id: 2, title: "Again", description:"Generic description"},
    {id: 3, title: "Last One", description:"Generic description"}
  ]);

  const [searched, setSearched] = useState('');
  const [filteredPosts, setFiltered] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setFiltered([...posts].filter(post => post.title.toLowerCase().includes(searched.toLowerCase())));
  }, [posts, searched]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const removePost = (p) => {
    setPosts(posts.filter(p1 => p1.id !== p.id));
  }

  return (
    <div className="App">
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter searched={searched} filter={setSearched} />
      <MyButton onClick={() => setVisible(true)}>Create Post</MyButton>
      <hr style={{margin: '15px 0'}} />
      <PostList remove={removePost} posts={filteredPosts} title='Posts'/>
    </div>
  );
}

export default App;
