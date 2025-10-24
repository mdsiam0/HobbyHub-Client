import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

import img1 from '../assets/slider2.jpg';
import img2 from '../assets/slider1.jpg';
import img3 from '../assets/slider3.jpg';

const Banner = () => {
  const slides = [
    {
      title: "Discover What You Love",
      subtitle: "Join thousands exploring new hobbies every day.",
      image: img1,
      button: "Browse Groups",
      link: "/all-groups"
    },
    {
      title: "Meet People Who Share Your Interests",
      subtitle: "Join local hobby groups and make lifelong connections.",
      image: img2,
      button: "Join a Group",
      link: "/all-groups"
    },
    {
      title: "Start Your Own Group",
      subtitle: "Can’t find your hobby? Be the first to build the community.",
      image: img3,
      button: "Create a Group",
      link: "/create-group"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-xl overflow-hidden h-96"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[60vh] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <Typewriter
                    words={[slide.title]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <Link
                  to={slide.link}
                  className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md text-white font-medium"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
