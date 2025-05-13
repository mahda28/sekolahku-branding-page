
import React from 'react';
import { Building, Target, Flag } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section id="profile" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title opacity-0 animate-fade-in">Profil Sekolahku</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-100">
            <h3 className="section-subtitle flex items-center gap-2">
              <Building className="h-6 w-6 text-school-primary" />
              Tentang Kami
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sekolahku didirikan pada tahun 1985 dengan komitmen untuk menyediakan pendidikan 
              berkualitas tinggi yang mempersiapkan siswa untuk masa depan yang cerah. 
              Selama lebih dari 35 tahun, kami telah mengembangkan metode pembelajaran yang 
              mengintegrasikan pengetahuan akademik, keterampilan praktis, dan nilai-nilai moral.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan menggabungkan kurikulum nasional dan elemen internasional, 
              kami menciptakan lingkungan belajar yang menstimulasi pemikiran kritis, 
              kreativitas, dan kolaborasi. Pendidikan di Sekolahku tidak hanya tentang 
              nilai akademis, tetapi juga tentang pengembangan karakter dan kesiapan menghadapi 
              tantangan global.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-school-light border-none">
                <CardContent className="p-4 text-center">
                  <p className="text-4xl font-bold text-school-primary">35+</p>
                  <p className="text-sm text-gray-600 mt-1">Tahun Pengalaman</p>
                </CardContent>
              </Card>
              
              <Card className="bg-school-light border-none">
                <CardContent className="p-4 text-center">
                  <p className="text-4xl font-bold text-school-secondary">A+</p>
                  <p className="text-sm text-gray-600 mt-1">Akreditasi</p>
                </CardContent>
              </Card>
              
              <Card className="bg-school-light border-none">
                <CardContent className="p-4 text-center">
                  <p className="text-4xl font-bold text-school-accent">100%</p>
                  <p className="text-sm text-gray-600 mt-1">Kelulusan</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Gedung Sekolahku" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-school-primary">
              <div className="flex gap-3 items-center">
                <Flag className="h-12 w-12 text-school-primary" />
                <div>
                  <h4 className="font-semibold text-school-dark">Didirikan</h4>
                  <p className="text-3xl font-bold text-school-primary">1985</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
