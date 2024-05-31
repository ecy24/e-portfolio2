import React, { useEffect } from "react";
import "./styles/GlobalStyles.css";
import socialMediaData from "./data/socialMediaData";

import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/social-link/SocialMedia";
import EmailLink from "./components/email-link/EmailLink";
import IntroAboutMe from "./components/IntroAboutMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "My Portfolio"; // Set your desired tab title here
  }, []);
  return (
    <>
      <ParticleBackground />
      <NavBar />
      <SocialMedia type="left" socials={socialMediaData} />
      <EmailLink />

      <div id="body-content">
        <IntroAboutMe />
        <AboutMe />
        <Education />
        <WorkExperience />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
