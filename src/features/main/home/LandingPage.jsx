import { useState, useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import BackgroundOrbs from "./BackgroundOrbs";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ParksSection from "./ParksSection";
import Footer from "../footer/Footer";

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef();
  const parksRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % 3),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToParks = () =>
  {
    parksRef?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white overflow-x-hidden relative">
      <Navbar />
      <BackgroundOrbs mousePosition={mousePosition} />
      <HeroSection currentImage={currentImage} setCurrentImage={setCurrentImage} scrollToParks={scrollToParks} />
      <FeaturesSection isVisible={isVisible} />
      <div ref={parksRef}>
      <ParksSection isVisible={isVisible} />
      </div>
      <Footer />
    </div>
  );
}
