import Header from "../../components/Layout/Header/Header";
import FirstSection from "./FirstSection";
import Footer from "../../components/Layout/Footer/Footer";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

export default function Home() {
  return (
    <>
      <Header textColor="black" burgerColor="black"/>
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <Footer/>
    </>
  );
}
