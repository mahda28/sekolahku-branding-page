
import React from 'react';
import { GraduationCap, Book, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-school-light">
      <div className="absolute inset-0 bg-gradient-to-br from-school-primary/10 to-school-secondary/5 z-0"></div>
      
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-school-dark leading-tight">
            Membentuk Masa Depan Cemerlang
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl">
            Sekolahku adalah tempat di mana para siswa tumbuh dan berkembang menjadi individu berilmu, berakhlak mulia, dan siap menghadapi tantangan global.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-school-primary hover:bg-school-primary/90 text-white" 
              size="lg"
            >
              Pelajari Lebih Lanjut
            </Button>
            <Button 
              variant="outline" 
              className="border-school-primary text-school-primary hover:bg-school-primary/10"
              size="lg"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg opacity-0 animate-fade-in animate-delay-100">
            <GraduationCap className="w-10 h-10 text-school-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pendidikan Berkualitas</h3>
            <p className="text-gray-600">Kurikulum modern dan metode pembelajaran yang efektif.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg opacity-0 animate-fade-in animate-delay-200">
            <Book className="w-10 h-10 text-school-secondary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fasilitas Lengkap</h3>
            <p className="text-gray-600">Perpustakaan digital dan laboratorium modern.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg opacity-0 animate-fade-in animate-delay-300">
            <Users className="w-10 h-10 text-school-accent mb-4" />
            <h3 className="text-lg font-semibold mb-2">Guru Profesional</h3>
            <p className="text-gray-600">Tenaga pengajar berpengalaman dan bersertifikasi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
