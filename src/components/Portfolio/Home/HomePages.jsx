
import Blog from "../Blog";
import Contact from "../Contact";
import Header from "../Header";
import ImageScale from "../ImageScale";
import Marquee from "../Marquee";
import Services from "../Services";
import ServicesTab from "../ServicesTab";
import Team from "../Team";
import Testimonials from "../Testimonials";

const HomePages = () => {
    return (
        <div>
            <Header />
              <Marquee />
              <ImageScale />
              <Services />
              <ServicesTab />
              <Team />
              <Testimonials />
              <Blog />
              <Contact />
        </div>
    );
};

export default HomePages;