import React from 'react';
// کامپوننت هدر شامل منو و لوگو - Header component with menu and logo
import Header from './components/Header.js';
// کامپوننت اسلایدر صفحه اصلی - Main page slider component
import Slider from './components/Slider.js';
// محتوای اصلی صفحه - Main content section
import MainContent from './components/MainContent';
// سایدبار شامل ابزارها یا پیشنهادها - Sidebar with tools or suggestions
import Sidebar from './components/Sidebar.js';
// کامپوننت فوتر شامل اطلاعات تماس و لینک‌ها - Footer with contact info and links
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      {/* ترتیب نمایش اجزای صفحه - Page layout structure */}
      <Header />
      <Slider />
      <MainContent />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
