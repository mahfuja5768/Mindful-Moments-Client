
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/banner/ban1.jpg'
import img2 from '../../../assets/home/banner/ban2.jpg'
import img3 from '../../../assets/home/banner/ban3.jpg'
import img4 from '../../../assets/home/banner/ban4.jpg'
const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-20">
            <Carousel autoPlay>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;