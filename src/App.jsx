import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import NewArrivals from './components/TrendingProducts.jsx'
import WhyChooseUs from './components/WhyChoseUs.jsx'
import Footer from './components/Footer.jsx'
import PromoSection from './components/PromoSection.jsx'
import DiscoverProducts from "./components/DiscoverProducts.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DiscoverProducts />
      <PromoSection />
      <NewArrivals />
      <WhyChooseUs />
      <Footer />
      <h1 className="bg-[#ffe2c7] w-full items-center shadow-lg">@stanley</h1>
    </div>
  );
}

export default App