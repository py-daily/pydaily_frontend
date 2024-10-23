import Features from "./components/Home/Features";
import HeroPage from "./components/Home/HeroPage";
import Services from "./components/Home/Services";
import Subscribe from "./components/Home/Subscribe";
import WhatSay from "./components/Home/WhatSay";
import WhyChoose from "./components/Home/WhyChoose";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Features />
      <Services />
      <WhyChoose />
      <WhatSay />
      <Subscribe />
    </div>
  )
}