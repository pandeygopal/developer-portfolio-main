import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// import Blog from "./components/homepage/blog"; // REMOVE THIS
import Certificates from "./components/homepage/certificates"; // ADD THIS
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// REMOVE THIS FUNCTION, no longer needed for the homepage
// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   const data = await res.json();
//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
//   return filtered;
// };

export default async function Home() {
  // const blogs = await getData(); // REMOVE THIS

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */} {/* REPLACE THIS... */}
      <Certificates />             {/* ...WITH THIS */}
      <ContactSection />
    </div>
  )
};