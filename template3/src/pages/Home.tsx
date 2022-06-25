import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import { sectionOneData, sectionOneData2, sectionOneData3 } from "../components/SectionOne/Data";
import SectionOne from "../components/SectionOne/SectionOne";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SectionTwo from "../components/SectionTwo/SectionTwo";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle}/>
			<HeroSection/>

			<SectionOne {...sectionOneData}/>
			<SectionOne {...sectionOneData2}/>
			<SectionOne {...sectionOneData3}/>

			<SectionTwo/>
		</>
	);
};

export default Home;
