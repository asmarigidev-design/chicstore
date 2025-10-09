import React, { useState, useEffect } from "react";
// کامپوننت نوار پیشرفت برای اسلایدر - Progress bar component for slider
import { NProgress } from "@tanem/react-nprogress";
// تصاویر اسلایدها - Slider images
import img1 from '../assets/slider3.jpg';
import img2 from '../assets/slider2.jpg';
import img3 from '../assets/slider1.jpg';

// آرایه اسلایدها با عنوان و متن - Slides array with title and description
const slides = [
  {
    id: 1,
    img: img1,
    title: "استایل خاص، قیمت عالی!",
    text: "با جدیدترین مدل‌های پوشاک، استایل خود را به سطح بالاتری ببرید."
  },
  {
    id: 2,
    img: img2,
    title: "تنوعی بی‌نظیر برای همه!",
    text: "از لباس‌های رسمی تا راحتی، همه چیز را اینجا پیدا کنید."
  },
  {
    id: 3,
    img: img3,
    title: "بهترین کیفیت، بهترین انتخاب!",
    text: "لباس‌هایی با کیفیت بالا و طراحی شیک، فقط برای شما."
  },
];

const Slider = () => {
  // ایندکس اسلاید فعال - Active slide index
  const [index, setIndex] = useState(0);
  const duration = 6000; // مدت زمان نمایش هر اسلاید - Slide display duration
  const [progress, setProgress] = useState(0); // مقدار پیشرفت نوار - Progress bar value

  // کنترل نوار پیشرفت هنگام تغییر اسلاید - Handle progress bar on slide change
  useEffect(() => {
    let mounted = true;
    setProgress(0);

    // افزایش تدریجی مقدار progress - Gradual progress increment
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + (60 / duration);
        return next >= 1 ? 1 : next;
      });
    }, 60);

    // توقف تایمر هنگام تکمیل - Stop interval when complete
    const cleanup = () => {
      clearInterval(interval);
    };

    if (mounted) {
      // اجرای محافظتی در صورت تغییر کامپوننت - Guard for component change
    }

    return () => {
      mounted = false;
      cleanup();
    };
  }, [index]); // وابسته به تغییر ایندکس - Runs on index change

  // تعویض خودکار اسلایدها - Auto slide switching
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, duration);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider">
      {/* نوار پیشرفت بالای اسلایدر - Top progress bar */}
      <NProgress isAnimating={progress > 0 && progress < 1}>
        {({ progress: ngr } ) => (
          <div className="progress" style={{
            width: `${progress * 100}%`,
            height: "10px",
            backgroundColor: "#c00",
            transition: "width 60ms linear",
            zIndex: 9999
          }} />
        )}
      </NProgress>

      {/* نمایش اسلایدها - Slide rendering */}
      <div className="slider-item">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`item ${i === index ? "active" : ""}`}>
            <div className="img" style={{ backgroundImage: `url(${slide.img})` }}></div>
            <div className="caption">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* کنترل‌های دستی اسلایدر - Manual slider controls */}
      <div className="controls">
        <div className="prev" onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="next" onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Slider;
