import React from "react";
import suggest1 from "../assets/product/suggest/1.jpg";
import suggest2 from "../assets/product/suggest/2.jpg";
import suggest3 from "../assets/product/suggest/3.jpg";
import slideshow1 from "../assets/slideshow/1.jpg";
import slideshow2 from "../assets/slideshow/2.jpg";

const Sidebar = () => {
  return (
    <>
      <section className="suggested"> {/* پیشنهاد ویژه - Suggested offers */}
        <div className="container">
          <div className="row">
            <h1 className="suggested-title">تخفیف های فوق العاده</h1> {/* عنوان تخفیف‌ها - Discount title */}
            <div className="suggested-product">
              {[suggest1, suggest2, suggest3].map((img, index) => (
                <div className="suggested-product-item" key={index}> {/* آیتم تخفیف - Discount item */}
                  <a href="/">
                    <span className="offer">فقط امروز</span> {/* برچسب پیشنهاد - Offer label */}
                    <img src={img} alt="" />
                    <div>
                      <h3>{index === 0 ? "تیشرت مردانه" : index === 1 ? "ساعت" : "هدفون"}</h3> {/* نام محصول - Product name */}
                      <span>{index === 0 ? "85000" : index === 1 ? "12000" : "60000"}</span> {/* قیمت اصلی - Original price */}
                    </div>
                    <h4>
                      <span>{index === 0 ? "45000" : index === 1 ? "80000" : "30000"}</span> تومان {/* قیمت تخفیف خورده - Discounted price */}
                    </h4>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="favorite"> {/* بخش محبوب‌ترین‌ها - Most popular section */}
        <div className="container">
          <div className="row">
            <div className="favorite-outline">
              <div className="favorite-content">
                {[slideshow1, slideshow2].map((img, index) => (
                  <div className="favorite-item" key={index}> {/* آیتم محبوب - Popular item */}
                    <a href="/">
                      <img src={img} alt="" />
                      <div className="eye-heart">
                        <h4>
                          <i className="fas fa-eye"></i>
                          <span>120,000</span> بازدید {/* تعداد بازدید - View count */}
                        </h4>
                        <h4>
                          <i className="fas fa-heart"></i>
                          <span>85</span> {/* تعداد علاقه‌مندی - Likes count */}
                        </h4>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="favorite-title">
                <h1>محبوب ترین محصولات</h1> {/* عنوان بخش محبوب‌ها - Popular products title */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
