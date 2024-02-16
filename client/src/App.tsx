import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/layout';
import ContentPage from './components/content/content-page';
import Login from './components/auth/login';
import Home from './components/home/home';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Login />} />
          {/* <Route path="/loft/:id" element={<ContentPage />} /> */}
          <Route path="/loft" element={<ContentPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
