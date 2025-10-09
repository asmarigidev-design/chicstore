import React, { useState } from "react";
// آیکون‌های FontAwesome - FontAwesome icons
import "@fortawesome/fontawesome-free/css/all.min.css";
// لوگوی سایت - Site logo
import img10 from '../assets/y.png';
// بنر تبلیغاتی بالای صفحه - Top navigation banner
import img11 from '../assets/nav-banner.png';

const Header = () => {
  // وضعیت نمایش منوی اصلی - Navbar visibility state
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  // وضعیت نمایش فرم جستجو - Search form visibility state
  const [isSearchVisible, setSearchVisible] = useState(false);
  // وضعیت نمایش مگامنو - Mega menu visibility state
  const [isMegaMenuVisible] = useState(false); // فقط خواندن وضعیت، بدون تغییر آن

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="navbar">
            <div className="menu">
              {/* لیست منوی اصلی - Main navigation list */}
              <ul id="navbar-list" className={isNavbarVisible ? "show-navbar" : ""}>
                {/* آیکون بستن منو - Close menu icon */}
                <div className="close-icon" onClick={() => setNavbarVisible(false)}>
                  <i className="fas fa-times"></i>
                </div>
                {/* لینک خانه - Home link */}
                <li><a href="/">خانه <i className="fas fa-home"></i></a></li>
                {/* منوی محصولات با مگامنو - Products menu with mega menu */}
                <li id="dropdown">
                  <a href="/">محصولات <i className="fas fa-shopping-cart"></i></a>
                  <ul className={`mega-menu ${isMegaMenuVisible ? "fade" : ""}`}>
                    {/* دسته‌بندی مردانه - Men category */}
                    <li>
                      <h2>مردانه</h2>
                      <ul>
                        <li><a href="/">کت و شلوار</a></li>
                        <li><a href="/">لباس مجلسی</a></li>
                        <li><a href="/">عینک های برند</a></li>
                        <li><a href="/">عطرهای محبوب</a></li>
                        <li><a href="/">موزر</a></li>
                      </ul>
                    </li>
                    {/* دسته‌بندی زنانه - Women category */}
                    <li>
                      <h2>زنانه</h2>
                      <ul>
                        <li><a href="/">لباس های مجلسی</a></li>
                        <li><a href="/">ساعت های برند</a></li>
                        <li><a href="/">عینک های لوکس</a></li>
                        <li><a href="/">عطرهای ناب</a></li>
                        <li><a href="/"> کیف مجلسی</a></li>
                      </ul>
                    </li>
                    {/* دسته‌بندی بچگانه - Kids category */}
                    <li>
                      <h2>بچگانه</h2>
                      <ul>
                        <li><a href="/">لباس</a></li>
                        <li><a href="/">اسباب بازی</a></li>
                        <li><a href="/">ساعت</a></li>
                        <li><a href="/">بهداشتی</a></li>
                        <li><a href="/">کیف</a></li>
                      </ul>
                    </li>
                    {/* تصویر در مگامنو - Image inside mega menu */}
                    <li>
                      <img src="images/6.jpg" alt=""/>
                    </li>
                  </ul>
                </li>
                {/* لینک سبد خرید - Cart link */}
                <li><a href="/">سبد خرید <i className="fas fa-credit-card"></i></a></li>
                {/* لینک بلاگ - Blog link */}
                <li><a href="/"> بلاگ <i className="fas fa-blog"></i></a></li>
                {/* لینک درباره ما - About us link */}
                <li><a href="/">درباره ما <i className="fas fa-address-card"></i></a></li>
                {/* لینک تماس با ما - Contact us link */}
                <li><a href="/">تماس با ما <i className="fas fa-mobile-alt"></i></a></li>
              </ul>
              {/* آیکون منوی همبرگری - Hamburger menu icon */}
              <div className="hamburger" onClick={() => setNavbarVisible(true)}>
                <div></div>
              </div>
            </div>
            <div className="social">
              {/* آیکون‌های شبکه اجتماعی - Social media icons */}
              <ul>
                <li><a href="/"><i className="fab fa-youtube"></i></a></li>
                <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                {/* منوی ورود و ثبت‌نام - Login and register dropdown */}
                <li>
                  <a href="/"><i className="fas fa-user"></i></a>
                  <ul>
                    <li><a href="/">ثبت نام</a></li>
                    /
                    <li><a href="/">ورود</a></li>
                  </ul>
                </li>
                {/* آیکون جستجو - Search icon */}
                <li className="search-form" onClick={(e) => {
                  e.preventDefault();
                  setSearchVisible(!isSearchVisible);
                }}>
                  <a href="#"><i className="fas fa-search"></i></a>
                </li>
              </ul>
              {/* دکمه درخواست محصول - Product request button */}
              <button>درخواست محصول</button>
            </div>
          </div>
          {/* فرم جستجو - Search form */}
          <div className={`search ${isSearchVisible ? "show" : ""}`}>
            <form action="">
              <input type="text" placeholder="جستجو کنید"/>
              <input type="submit" value="جستجو"/>
            </form>
          </div>
        </div>
      </div>
      {/* بخش تبلیغات و لوگو - Ads and logo section */}
      <div className="ads">
        <div className="container">
          <div className="row align-items">
            <div className="banner">
              <img src={img11} alt=""/>
            </div>
            <div className="logo">
              <img src={img10} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
