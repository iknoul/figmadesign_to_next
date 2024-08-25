import styles from "./page.module.css";
import Header from "./components/NavBar/Header";
import BookCarMain from "./components/BookCar/BookCarMain";
import BookCarMobile from "./components/BookCar/BookCarMobile";
import CorousalCars from "./components/CorousalCars/CorousalCars";
import PopularCars from "./components/PopularCars/PopularCars";
import SubscribtionMain from "./components/Subscribion/SubscribtionMain";
import RentStep from "./components/RentSteps/Rensteps";
import Locations from "./components/Locations/Locations";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <BookCarMain />
      <BookCarMobile />
      <CorousalCars />
      <PopularCars />
      <SubscribtionMain />
      <RentStep />
      <Locations />
      <Questions />
      <Footer />
    </main>
  );
}
