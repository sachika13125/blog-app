// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
