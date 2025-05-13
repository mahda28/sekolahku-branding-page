
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const GallerySection = () => {
  // Daftar foto untuk ditampilkan dalam galeri
  const photos = [
    {
      id: 1,
      title: "Kegiatan Belajar",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      alt: "Siswa sedang belajar di kelas"
    },
    {
      id: 2,
      title: "Kegiatan Olahraga",
      src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Kegiatan olahraga di lapangan sekolah"
    },
    {
      id: 3,
      title: "Perpustakaan",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      alt: "Perpustakaan sekolah"
    },
    {
      id: 4,
      title: "Lab Komputer",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1232&q=80",
      alt: "Laboratorium komputer"
    },
    {
      id: 5,
      title: "Kegiatan Seni",
      src: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Kegiatan seni dan budaya"
    },
    {
      id: 6,
      title: "Upacara Bendera",
      src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      alt: "Upacara bendera"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-school-light">
      <div className="section-container">
        <h2 className="section-title opacity-0 animate-fade-in">Galeri Sekolah</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-100">
          Lihat berbagai kegiatan dan fasilitas yang ada di sekolah kami melalui galeri foto berikut.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 opacity-0 animate-fade-in animate-delay-200">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-sm text-gray-600">{photo.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 bg-school-primary text-white py-2 px-4 rounded-md hover:bg-school-primary/90 transition-colors">
            <Image className="w-5 h-5" />
            <span>Lihat Semua Foto</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
