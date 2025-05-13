
import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-dark text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-school-secondary" />
              <span className="font-bold text-xl">Sekolahku</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Membentuk generasi unggul yang memiliki keseimbangan intelektual, emosional, dan spiritual.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-school-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-school-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-school-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-school-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-school-secondary transition-colors">Beranda</a></li>
              <li><a href="#profile" className="hover:text-school-secondary transition-colors">Profil</a></li>
              <li><a href="#vision-mission" className="hover:text-school-secondary transition-colors">Visi & Misi</a></li>
              <li><a href="#stats" className="hover:text-school-secondary transition-colors">Data & Statistik</a></li>
              <li><a href="#" className="hover:text-school-secondary transition-colors">Program Unggulan</a></li>
              <li><a href="#" className="hover:text-school-secondary transition-colors">Galeri</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-school-secondary mt-1 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Kota Jakarta, Indonesia 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-school-secondary flex-shrink-0" />
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-school-secondary flex-shrink-0" />
                <span>info@sekolahku.ac.id</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Jam Operasional</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span>07:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu:</span>
                <span>07:30 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu:</span>
                <span>Tutup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sekolahku. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
