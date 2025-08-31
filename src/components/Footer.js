import React from "react";
// لوگوی اصلی سایت - Main site logo
import logo from  '../assets/y.png';
// مجوزهای نماد اعتماد - Trust license images
import license1 from "../assets/f1.png";
import license2 from "../assets/f2.png";
import license3 from "../assets/f3.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content">
          <div className="footer-about">
            <h3>درباره ما</h3>
            {/* متن معرفی فروشگاه - Store introduction text */}
            <p>
              به فروشگاه ما خوش آمدید! اینجا محلی برای کشف استایل جدید شماست. 
              با مجموعه‌ای از لباس‌های شیک و متنوع، بهترین انتخاب را برای خود داشته باشید.
              ما با کیفیت بالا و قیمت مناسب، به شما تجربه‌ای منحصر به فرد ارائه می‌دهیم.
              منتظر دیدار شما هستیم!
            </p>
          </div>

          <div className="footer-social">
            <h3>دنبال کنید</h3>
            {/* آیکون‌های شبکه‌های اجتماعی - Social media icons */}
            <ul>
              {["facebook", "twitter", "youtube", "instagram", "linkedin"].map(
                (social, index) => (
                  <li key={index}>
                    <a href="/">
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="footer-news-letter">
            <h3>دریافت آخرین اخبار</h3>
            {/* فرم عضویت در خبرنامه - Newsletter subscription form */}
            <form>
              <input type="text" placeholder="ایمیل خود را وارد کنید ..." />
              <button>عضویت</button>
            </form>
          </div>
        </div>

        <div className="row mt-2 pt-2 border-top justify-content">
          <div className="footer-customer-services">
            <h3>خدمات مشتریان</h3>
            {/* لینک‌های خدمات مشتریان - Customer service links */}
            <ul>
              {[
                "پرسش های متداول",
                "حریم خصوصی",
                "گارانتی بازگشت وجه",
                "شرایط استفاده",
              ].map((item, index) => (
                <li key={index}>
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-quick-access">
            <h3>دسترسی سریع</h3>
            {/* لینک‌های صفحات اصلی - Quick access links */}
            <ul>
              {["خانه", "درباره ما", "تماس با ما", "فروش حضوری  "].map(
                (item, index) => (
                  <li key={index}>
                    <a href="/">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="footer-license">
            <div className="information">
              {/* اطلاعات تماس و آدرس - Contact info and address */}
              <h4>تهران خیابان رودکی فاضلی سه سمت راست طبقه چهارم پلاک 16</h4>
              <h4>toplearn@gmail.com</h4>
            </div>
            <div className="license">
              {/* نمایش نمادهای مجوز - Display license icons */}
              {[license1, license2, license3].map((img, index) => (
                <img key={index} src={img} alt="images" />
              ))}
            </div>
          </div>

          <div className="footer-logo">
            {/* نمایش لوگو در فوتر - Footer logo display */}
            <img src={logo} alt="/" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
