import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // ✅ Import Outlet

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* ✅ This is where page content will load */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
