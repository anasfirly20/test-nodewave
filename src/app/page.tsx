// Views
import AppMade from "./views/AppMade";
import Hero from "./views/Hero";
import HowWeWork from "./views/HowWeWork";
import OurWorks from "./views/OurWorks";
import OurProduct from "./views/OurProduct";
import Services from "./views/Services";
import Testimony from "./views/Testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <OurProduct />
      <Testimony />
      <OurWorks />
      <HowWeWork />
      <AppMade />
      <Services />
    </>
  );
}
