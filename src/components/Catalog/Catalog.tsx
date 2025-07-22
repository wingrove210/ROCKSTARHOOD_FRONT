import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Category from "./Category";
import FirstSection from "./FirstSection";
export default function Catalog() {


  return (
    <>
      <Header textColor="white" burgerColor="white"/>
      <FirstSection/>
      <Category/>
      <Footer/>
    </>
  );
}
