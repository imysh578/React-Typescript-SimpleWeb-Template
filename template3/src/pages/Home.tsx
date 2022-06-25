import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { sectionOneData } from "../components/SectionOne/Data";
import SectionOne from "../components/SectionOne";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SectionTwo from "../components/SectionTwo";
import Footer from "../components/Footer";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle: VoidFunction = () => {
    setIsOpen(!isOpen);
  }

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle}/>

			<HeroSection/>
			<SectionOne {...sectionOneData}/>
			<SectionTwo/>

			<Footer />
		</>
	);
};

export default Home;
