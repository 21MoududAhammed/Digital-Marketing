import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgOne from "../assets/sliderImages/slider-img-1.webp";
import bgTwo from "../assets/sliderImages/slider-img-2.webp";
import bgThree from "../assets/sliderImages/slider-img-3.webp";
import bgFour from "../assets/sliderImages/slider-img-4.webp";

function LazyLoad() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative ">
          <div className="absolute left-2 top-2 space-y-0">
            <h1 className='text-9xl'>Benjon</h1>
            <h1 className='relative left-5text-9xl'>Website</h1>
            <h1 className='text-9xl'>2012</h1>
          </div>
          <div className='grid grid-cols-2'>
            <div>
            </div>
            <div>
              <img src={bgOne} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Benjon</h1>
            <h1>Website</h1>
            <h1>2012</h1>
          </div>
          <div>
            <img src={bgTwo} alt="" />
          </div>
        </div>
        <div>
          <div>
            <h1>Benjon</h1>
            <h1>Website</h1>
            <h1>2012</h1>
          </div>
          <div>
            <img src={bgThree} alt="" />
          </div>
        </div>
        <div>
          <div>
            <h1>Benjon</h1>
            <h1>Website</h1>
            <h1>2012</h1>
          </div>
          <div>
            <img src={bgFour} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;
