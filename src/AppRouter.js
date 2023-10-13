// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={BlogPost} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
