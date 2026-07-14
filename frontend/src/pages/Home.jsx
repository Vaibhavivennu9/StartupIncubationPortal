import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import Workflow from "../components/Workflow";
import Features from "../components/Features";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Statistics />
      <Workflow />
      <Features />
      <SuccessStories />
      <Footer />
    </>
  );
};

export default Home;