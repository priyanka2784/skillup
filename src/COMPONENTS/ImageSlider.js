import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import el1 from "../Assets/images/el1.png";
import onlinelearn from "../Assets/images/onlinelearn.jpg";
import el3 from "../Assets/images/el3.png";
import el4 from "../Assets/images/el4.png";
import el5 from "../Assets/images/el5.png";
import el6 from "../Assets/images/el6.png";
const ImageSlider = () => {
  const images = [el1, el5, el6, onlinelearn, el3, el4];

  return (
    <Swiper
      // effect="slide"
      slidesPerView={3} //show 4 images in a row
      spaceBetween={0}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      speed={800}
      // freeMode={true}
      grabCursor={true}
      modules={[Autoplay]}
      centeredSlides={false}
      slidesPerGroup={3}

      //   style={{ width: "80%", margin: "auto" }}
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "90%",
              height: "auto",
              // spaceBetween: 0,

              borderRadius: "10px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImageSlider;
