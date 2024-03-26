import Chooseme from "@/components/Chooseme";
import Contact from "@/components/Contact";
import Editiorial from "@/components/Editiorial";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Review from "@/components/Review";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Service />
      <Chooseme />
      <Review />
      {/* <Pricing />
      <Editiorial /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
