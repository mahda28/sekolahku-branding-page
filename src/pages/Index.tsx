
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import VisionMissionSection from '@/components/VisionMissionSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Trigger animations when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with opacity-0 class
    document.querySelectorAll('.opacity-0').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <VisionMissionSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
