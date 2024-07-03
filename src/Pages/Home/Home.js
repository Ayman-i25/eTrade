import NavBar from "../../Components/NavBar/NavBar";
import Landing from "./Landing/Landing";
import Category from "./Category/Category";
import DontMiss from "./DontMiss/DontMiss";
import Products from "./Products/Products";
import UserFeedback from "./userFeedback/UserFeedback";
import NewArrivals from "./NewArrivals/NewArrivals";
import MostSold from "./MostSold/MostSold";
import WhyUs from "./whyUs/WhyUs";
import Poster from "./Poster/Poster";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import Service from "../../Components/Service/Service";
function Home() {
  return (
    <>
        <div className="pt-4" style={{ backgroundColor: "#f9f3f0" }}>
          <NavBar />
        </div>
        <Landing />
        <Category />
        <DontMiss />
        <Products />
        <UserFeedback />
        <NewArrivals />
        <MostSold />
        <WhyUs />
        <Poster />
        <Newsletter />
        <Service />
        <Footer />
    </>
  );
}

export default Home;
