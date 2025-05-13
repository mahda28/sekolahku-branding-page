
import React from 'react';
import { Users, GraduationCap, ChartBar, FileText } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Data untuk statistik siswa berdasarkan kelas
const studentClassData = [
  { name: 'Kelas 1', value: 120 },
  { name: 'Kelas 2', value: 115 },
  { name: 'Kelas 3', value: 110 },
  { name: 'Kelas 4', value: 105 },
  { name: 'Kelas 5', value: 100 },
  { name: 'Kelas 6', value: 95 },
];

// Data untuk distribusi guru
const teacherDistributionData = [
  { name: 'Guru Kelas', value: 24 },
  { name: 'Guru Mata Pelajaran', value: 18 },
  { name: 'Guru BK', value: 6 },
  { name: 'Staff Administrasi', value: 12 },
];

// Data prestasi per tahun
const achievementData = [
  { year: '2018', akademik: 12, nonAkademik: 8 },
  { year: '2019', akademik: 15, nonAkademik: 10 },
  { year: '2020', akademik: 13, nonAkademik: 12 },
  { year: '2021', akademik: 18, nonAkademik: 15 },
  { year: '2022', akademik: 20, nonAkademik: 18 },
];

// Data detail guru berdasarkan pendidikan terakhir
const teacherEducationData = [
  { name: 'S2/S3', value: 15 },
  { name: 'S1', value: 35 },
  { name: 'D3', value: 8 },
  { name: 'SMA/SMK', value: 2 },
];

// Data siswa berdasarkan jenis kelamin
const studentGenderData = [
  { name: 'Laki-laki', value: 320 },
  { name: 'Perempuan', value: 325 },
];

const COLORS = ['#1e3a8a', '#0ea5e9', '#10b981', '#6b7280', '#f97316', '#8b5cf6'];

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title opacity-0 animate-fade-in">Data & Statistik</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="border-none shadow opacity-0 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-school-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-school-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jumlah Siswa</p>
                  <p className="text-3xl font-bold text-school-dark">645</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow opacity-0 animate-fade-in animate-delay-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-school-secondary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-school-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jumlah Guru</p>
                  <p className="text-3xl font-bold text-school-dark">60</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow opacity-0 animate-fade-in animate-delay-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-school-accent/10 p-3 rounded-full">
                  <ChartBar className="h-6 w-6 text-school-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prestasi</p>
                  <p className="text-3xl font-bold text-school-dark">108</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow opacity-0 animate-fade-in animate-delay-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Kelulusan</p>
                  <p className="text-3xl font-bold text-school-dark">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-school-dark">Jumlah Siswa per Kelas</h3>
            <Card className="border-none shadow h-80">
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={studentClassData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" name="Jumlah Siswa" fill="#1e3a8a" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-xl font-semibold mb-4 text-school-dark">Distribusi Guru & Staff</h3>
            <Card className="border-none shadow h-80">
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={teacherDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {teacherDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="opacity-0 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-school-dark">Pendidikan Terakhir Guru</h3>
            <Card className="border-none shadow h-80">
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={teacherEducationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {teacherEducationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <h3 className="text-xl font-semibold mb-4 text-school-dark">Siswa Berdasarkan Jenis Kelamin</h3>
            <Card className="border-none shadow h-80">
              <CardContent className="p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={studentGenderData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {studentGenderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in animate-delay-200">
          <h3 className="text-xl font-semibold mb-4 text-school-dark">Prestasi 5 Tahun Terakhir</h3>
          <Card className="border-none shadow h-80">
            <CardContent className="p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={achievementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="akademik" name="Prestasi Akademik" fill="#1e3a8a" />
                  <Bar dataKey="nonAkademik" name="Prestasi Non-Akademik" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
