
import styles from "./page.module.css";
import Headernav from "@/components/Header/Headernav";
import Headericons from "@/components/Header/Header-icons";
import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import PopularCars from "@/components/PopularCars/PopularCars";
import Subscribe from "@/components/Subscribe/Subscribe";
import Rent from "@/components/Rent/Rent";
import Location from "@/components/Locations/Location";
import Questions from "@/components/Questions/Question";
import Footer from "@/components/Footer/Footer";

export default function Home({}) {
  return (
    <main className={styles.main}>
      <Headericons/>
      <Headernav/>
      <Hero/>
      <Banner/>
      <PopularCars/>
      <Subscribe/>
      <Rent/>
      <Location/>
      <Questions/>
      <Footer/>
    </main>
  );
}
