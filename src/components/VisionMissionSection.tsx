
import React from 'react';
import { Eye, Target, List } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const VisionMissionSection = () => {
  const missionPoints = [
    "Menyelenggarakan pendidikan yang berkualitas dan inklusif untuk semua siswa",
    "Mengembangkan potensi akademik, sosial, dan spiritual setiap siswa",
    "Membangun kemitraan aktif dengan orangtua dan masyarakat",
    "Menerapkan teknologi inovatif dalam proses pembelajaran",
    "Menciptakan lingkungan belajar yang aman, nyaman, dan mendukung",
    "Mengembangkan sikap kepemimpinan dan tanggung jawab sosial"
  ];

  return (
    <section id="vision-mission" className="py-20 bg-school-light">
      <div className="section-container">
        <h2 className="section-title opacity-0 animate-fade-in">Visi & Misi</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-none shadow-lg opacity-0 animate-fade-in animate-delay-100">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-school-primary/10 p-3 rounded-full">
                  <Eye className="h-6 w-6 text-school-primary" />
                </div>
                <h3 className="text-2xl font-bold text-school-primary">Visi</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700 leading-relaxed">
                Menjadi lembaga pendidikan terkemuka yang menghasilkan generasi berilmu, 
                berkarakter, dan berdaya saing global, yang mampu berkontribusi positif 
                bagi bangsa, negara, dan peradaban dunia.
              </p>
              <div className="mt-6 p-4 bg-school-primary/5 border-l-4 border-school-primary rounded">
                <p className="italic text-school-dark">
                  "Membentuk generasi unggul yang memiliki keseimbangan intelektual, 
                  emosional, dan spiritual untuk menjawab tantangan masa depan."
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg opacity-0 animate-fade-in animate-delay-200">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-school-secondary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-school-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-school-secondary">Misi</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-6">
                      <List className="h-5 w-5 text-school-secondary" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
