// App.jsx
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { About, Header, Skills, Work, ContactForm } from "./components/export";
import Navbar from "./components/Navbar/Navbar";
import NavigationDots from "./components/Navbar/Navigationdots";
import AppWrap from "./components/wrapper/AppWrap";

const App = () => {
  const [active, setActive] = useState("home"); // Active section state
  const sectionRefs = useRef({}); // Store refs for all sections
  const scrollTimeout = useRef(null); // Timeout for debounce logic
  const isAutoScrolling = useRef(false); // Prevent loop during auto-scroll

  const WrappedHeader = AppWrap(Header, "home");
  const WrappedAbout = AppWrap(About, "about");
  const WrappedSkills = AppWrap(Skills, "skills");
  const WrappedWork = AppWrap(Work, "work");
  const WrappedContact = AppWrap(ContactForm, "contact");

  // Scroll programmatically to a specific section
  const scrollToSection = (section) => {
    const sectionElement = sectionRefs.current[section];
    if (sectionElement) {
      isAutoScrolling.current = true;
      setActive(section); // Set active section
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Release the lock after the scroll animation completes
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isAutoScrolling.current = false;
      }, 800); // Match animation duration
    }
  };

  // Automatically detect and scroll when a section is more than 50% visible
  useEffect(() => {
    const observerOptions = {
      root: null, // Viewport as root
      threshold: [0.5, 0.6], // Trigger when 50%-60% of a section is visible
    };

    const observerCallback = (entries) => {
      if (isAutoScrolling.current) return; // Prevent updates during auto-scroll

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id; // Get section ID

          // Automatically scroll to the section if it's not the active one
          if (sectionId !== active) {
            setActive(sectionId); // Update active state
            scrollToSection(sectionId); // Automatically scroll
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = Object.values(sectionRefs.current);
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer
    return () => observer.disconnect();
  }, [active]); // Re-run if the active section changes

  return (
    <div className="app">
      {/* Navbar with scrollToSection passed as a prop */}
      <Navbar onHeaderClick={scrollToSection} />

      {/* Sections */}
      <Box
        ref={(el) => (sectionRefs.current["home"] = el)}
        id="home"
        sx={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <WrappedHeader />
      </Box>

      <Box
        ref={(el) => (sectionRefs.current["about"] = el)}
        id="about"
        sx={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <WrappedAbout />
      </Box>

      <Box
        ref={(el) => (sectionRefs.current["work"] = el)}
        id="work"
        sx={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <WrappedWork />
      </Box>

      <Box
        ref={(el) => (sectionRefs.current["skills"] = el)}
        id="skills"
        sx={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <WrappedSkills />
      </Box>

      <Box
        ref={(el)=>(sectionRefs.current['contact']=el)}
        id="contact"
        sx={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        <WrappedContact />
      </Box>

      {/* Navigation Dots */}
      <NavigationDots
        active={active}
        onDotClick={scrollToSection} // Smooth scroll on click
      />
    </div>
  );
};

export default App;
