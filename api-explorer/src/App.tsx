import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApiDetailPage from './pages/ApiDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-details/:provider" element={<ApiDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
