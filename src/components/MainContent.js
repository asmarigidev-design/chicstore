import React from "react";
import img1 from "../assets/product/1.jpg";
import img2 from "../assets/product/2.jpg";
import img3 from "../assets/product/3.jpg";
import img4 from "../assets/product/4.jpg";
import imgMen1 from "../assets/product/men/1.jpg";
import imgMen2 from "../assets/product/men/2.jpg";
import imgMen3 from "../assets/product/men/3.jpg";
import imgMen4 from "../assets/product/men/4.jpg";
import imgCosmetic from "../assets/product/Cosmetics.jpg";
import imgGirl1 from "../assets/product/girl/1.jpg";
import imgGirl2 from "../assets/product/girl/2.jpg";
import imgGirl3 from "../assets/product/girl/3.jpg";
import imgGirl4 from "../assets/product/girl/4.jpg";
import imgBrand1 from "../assets/product/brands/1.jpg";
import imgBrand2 from "../assets/product/brands/2.png";
import imgBrand3 from "../assets/product/brands/3.jpg";
import imgBrand4 from "../assets/product/brands/4.png";
import imgBrand5 from "../assets/product/brands/5.png";
import imgBrand6 from "../assets/product/brands/6.png";
import imgChild1 from "../assets/product/child/1.jpg";
import imgChild2 from "../assets/product/child/2.jpg";
import imgChild3 from "../assets/product/child/3.jpg";
import imgChild4 from "../assets/product/child/4.jpg";
import shoe1 from "../assets/product/shoe/1.jpg";
import shoe2 from "../assets/product/shoe/2.jpg";
import shoe3 from "../assets/product/shoe/3.jpg";
import shoe4 from "../assets/product/shoe/4.jpg";
import best1 from "../assets/product/bestsellers/1.jpg";
import best2 from "../assets/product/bestsellers/2.jpg";
import best3 from "../assets/product/bestsellers/3.jpg";
import best4 from "../assets/product/bestsellers/4.jpg";
import laptop1 from "../assets/product/laptop/1.jpg";
import laptop2 from "../assets/product/laptop/2.jpg";
import laptop3 from "../assets/product/laptop/3.jpg";
import laptop4 from "../assets/product/laptop/4.jpg";
import bannerAds from "../assets/product/banner-ads.jpg";


const MainContent = () => {
  return (
    <main id="main">
      <article id="content">
        <div className="content-container">
          <div className="dress">
            {[img1, img2, img3, img4].map((img, index) => (
              <div className="dress-item" key={index}>
                <a href="/">
                  <img src={img} alt="" />
                  <h4>لباس مجلسی {index + 1}</h4> {/* Persian title - عنوان فارسی */}
                  <p><span>120,000</span> تومان</p> {/* Persian price - قیمت فارسی */}
                </a>
              </div>
            ))}
          </div>

          <div className="best-selling-men">
            <div className="header-title">
              <h2>پر فروش ترین مردانه</h2> {/* Best selling men - پرفروش‌ترین مردانه */}
              <a href="/">مشاهده همه</a> {/* View all - مشاهده همه */}
            </div>
            <div className="selling-men-product">
              {[imgMen1, imgMen2, imgMen3, imgMen4].map((img, index) => (
                <div className="selling-item" key={index}>
                  <a href="/">
                    <img src={img} alt="" />
                    <h3>پیراهن مشکلی</h3> {/* Black shirt (example) - پیراهن مشکی (مثال) */}
                    <p className="price-item">{(index + 1) * 100000}</p>
                    <p><span>{(index + 1) * 80000}</span> تومان</p> {/* Persian currency - واحد پول فارسی */}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div id="cosmetic">
            <a href="/">
              <h2>آرایشی و بهداشتی</h2> {/* Cosmetic & Hygiene - آرایشی و بهداشتی */}
              <img src={imgCosmetic} alt="" />
            </a>
          </div>

          <div id="best-selling-girl">
            <div className="header-title">
              <h2>پر فروش ترین زنانه</h2> {/* Best selling women - پرفروش‌ترین زنانه */}
              <a href="/">مشاهده همه</a> {/* View all - مشاهده همه */}
            </div>
            <div className="selling-girl-product">
              {[imgGirl1, imgGirl2, imgGirl3, imgGirl4].map((img, index) => (
                <div className="selling-item" key={index}>
                  <a href="/">
                    <img src={img} alt="" />
                    <h3>پیراهن مشکلی</h3> {/* Black shirt - پیراهن مشکی */}
                    <p className="price-item">220,000</p>
                    <p><span>120,000</span> تومان</p> {/* Persian price - قیمت فارسی */}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="top-brand">
            <div className="header-title">
              <h2>برترین برندها</h2> {/* Top brands - برندهای برتر */}
              <a href="/">مشاهده همه</a> {/* View all - مشاهده همه */}
            </div>
            <div className="row align-items">
              {[imgBrand1, imgBrand2, imgBrand3, imgBrand4, imgBrand5, imgBrand6].map((img, index) => (
                <div className="brand-item" key={index}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="best-selling-child">
            <div className="header-title">
              <h2>پر فروش ترین بچه گانه</h2> {/* Best selling children - پرفروش‌ترین بچه‌گانه */}
              <a href="/">مشاهده همه</a> {/* View all - مشاهده همه */}
            </div>
            <div className="row">
              {[imgChild1, imgChild2, imgChild3, imgChild4].map((img, index) => (
                <div className="child-item" key={index}>
                  <a href="/">
                    <img src={img} alt="" />
                    <h3>پیراهن مشکلی</h3> {/* Black shirt - پیراهن مشکی */}
                    <p className="price-item">220,000</p>
                    <p><span>120,000</span> تومان</p> {/* Persian price - قیمت فارسی */}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      <aside id="sidebar"> {/* Sidebar section - بخش سایدبار */}
        <div className="sidebar-container">
          <div className="last-product">
            <div className="sidebar-title">
              <h3>آخرین محصولات</h3> {/* Latest products - آخرین محصولات */}
            </div>
            <div className="row align-items">
              {[shoe1, shoe2, shoe3, shoe4].map((img, index) => (
                <div className="last-product-item" key={index}>
                  <a href="/">
                    <img src={img} alt="" />
                    <h4>کفش {index + 1}</h4> {/* Shoe - کفش */}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-bestseller">
            <div className="sidebar-title">
              <h3>محصولات پر فروش اخیر</h3> {/* Recent bestsellers - پرفروش‌های اخیر */}
            </div>
            <div className="row align-items">
              {[best1, best2, best3, best4].map((img, index) => (
                <div className="recent-item" key={index}>
                  <a href="/">
                    <img src={img} alt="" />
                    <h4>محصول {index + 1}</h4> {/* Product - محصول */}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="laptop">
            <div className="sidebar-title">
              <h3>لپ تاپ</h3> {/* Laptop - لپ‌تاپ */}
            </div>
            <div className="row align-items">
              {[laptop1, laptop2, laptop3, laptop4].map((img, index) => (                  <div className="laptop-item" key={index}>
                    <a href="/">
                      <img src={img} alt="" />
                      <h4>لپ تاپ {index + 1}</h4> {/* Laptop - لپ‌تاپ */}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-ads">
              <img src={bannerAds} alt="" /> {/* Sidebar advertisement - تبلیغ سایدبار */}
            </div>
          </div>
        </aside>
      </main>
  );
};

export default MainContent;
