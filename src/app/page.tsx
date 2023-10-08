// Views
import AppMade from "./views/AppMade";
import Hero from "./views/Hero";
import OurWorks from "./views/OurWorks";
import Product from "./views/Product";
import Services from "./views/Services";
import Testimony from "./views/Testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <Testimony />
      <OurWorks />
      <AppMade />
      <Services />
    </>
  );
}
