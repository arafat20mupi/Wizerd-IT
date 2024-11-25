import Blog from "./Blog";
import Header from "./Header";
import Marquee from "./Marquee";
import Price from "./Price";
import Process from "./Process";
import Services from "./Services";
import Testimonials from "./Testimonials";

const ServicePages = () => {
    return (
        <div>
            <Header />
            <Services />
            <Marquee />
            <Price />
            <Testimonials />
            <Process />
            <Blog />
        </div>
    );
};

export default ServicePages;