import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3300/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home isLoading={isLoading} fetchError={fetchError} />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="edit/:id" element={<EditPost />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
