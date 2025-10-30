import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Logos from "./components/Logos";
import Meals from "./components/Meals";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import TryForFree from "./components/TryForFree";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Logos />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <TryForFree />
      </main>
      <Footer />
    </div>
  );
}
