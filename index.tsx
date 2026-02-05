
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  BookOpen, 
  Layout, 
  Award,
  Calendar,
  Monitor,
  Database,
  PieChart,
  ArrowLeft,
  Mail,
  Linkedin,
  ChevronDown,
  Cpu,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

// --- DATA ---
const TEACHING_RECORDS = [
  { id: 1, title: "کاربرد Power BI در کنترل پروژه", location: "صنعتی و معدنی گل‌گهر سیرجان", date: "زمستان 1404" },
  { id: 2, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "پتروشیمی مارون - ماهشهر", date: "زمستان 1404" },
  { id: 3, title: "اکسل پیشرفته", location: "پالایشگاه تهران", date: "زمستان 1404" },
  { id: 4, title: "پایگاه داده", location: "شرکت نفت ستاره خلیج فارس", date: "زمستان 1404" },
  { id: 5, title: "تحلیل داده با Power BI", location: "بانک صادرات ایران", date: "بهار 1402" },
  { id: 6, title: "برنامه‌نویسی Python", location: "جهاد دانشگاهی صنعتی شریف", date: "بهار 99" }
];

const PROJECTS = [
  { id: 1, title: "داشبورد منابع انسانی", client: "خطوط لوله و مخابرات نفت ایران", year: "1404" },
  { id: 2, title: "داشبورد توقفات و تولید", client: "ملی مس ایران (دره زار)", year: "1404" },
  { id: 3, title: "داشبورد فروش Perspective", client: "Kelebek Tekstil (ترکیه)", year: "2024" },
  { id: 4, title: "داشبورد کنترل پروژه", client: "شرکت ویستافراز", year: "1400" }
];

const SKILLS = [
  { category: "هوش تجاری", icon: <BarChart3 className="w-8 h-8 text-cyan-400" />, skills: ["Power BI", "DAX", "داشبورد سازی"] },
  { category: "برنامه‌نویسی", icon: <Cpu className="w-8 h-8 text-blue-400" />, skills: ["Python", "Pandas", "Deep Learning"] },
  { category: "پایگاه داده", icon: <Database className="w-8 h-8 text-purple-400" />, skills: ["SQL Server", "Access", "VBA"] },
  { category: "مهندسی", icon: <Briefcase className="w-8 h-8 text-emerald-400" />, skills: ["Excel پیشرفته", "تحلیل مالی"] }
];

// --- COMPONENTS ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black text-white">علیرضا مقربی</div>
        <ul className="hidden md:flex gap-8 text-sm text-slate-400">
          <li><a href="#about" className="hover:text-cyan-400 transition-colors">درباره</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors">مهارت‌ها</a></li>
          <li><a href="#teaching" className="hover:text-cyan-400 transition-colors">تدریس</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">پروژه‌ها</a></li>
        </ul>
        <a href="#contact" className="bg-cyan-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 transition-all">تماس</a>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 container mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            تحلیل‌گر <br /> <span className="text-cyan-400">ارشد داده</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
            مدرس تخصصی هوش تجاری و تحلیل داده در صنایع بزرگ. مستقر در استانبول (شرکت Coflow).
          </p>
          <div className="flex gap-4">
            <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3">
              <Monitor className="text-cyan-400" /> <span>Coflow Istanbul</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-3">
              <Calendar className="text-blue-400" /> <span>۱۳۶۸</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16">مهارت‌های تخصصی</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {SKILLS.map((s, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-6">{s.category}</h3>
                <ul className="space-y-3 text-slate-400 text-sm">
                  {s.skills.map((sk, j) => <li key={j} className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full" />{sk}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching History */}
      <section id="teaching" className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16">سوابق تدریس</h2>
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-800/50">
              <tr>
                <th className="p-6">دوره آموزشی</th>
                <th className="p-6">سازمان</th>
                <th className="p-6 text-left">تاریخ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {TEACHING_RECORDS.map(r => (
                <tr key={r.id} className="hover:bg-cyan-500/5">
                  <td className="p-6 font-bold">{r.title}</td>
                  <td className="p-6 text-slate-400">{r.location}</td>
                  <td className="p-6 text-slate-500 text-left">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16">پروژه‌ها</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map(p => (
              <div key={p.id} className="bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col h-full">
                <span className="text-xs text-slate-500 mb-4">{p.year}</span>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-1">{p.client}</p>
                <div className="text-cyan-400 flex items-center gap-2 text-xs font-bold">جزئیات <ArrowLeft size={14} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-slate-900 text-center">
        <h2 className="text-4xl font-black mb-12 italic">در ارتباط باشید</h2>
        <div className="flex justify-center gap-8">
          <a href="#" className="p-4 bg-slate-900 rounded-full hover:text-cyan-400 transition-colors"><Mail /></a>
          <a href="#" className="p-4 bg-slate-900 rounded-full hover:text-blue-400 transition-colors"><Linkedin /></a>
        </div>
        <p className="mt-16 text-slate-600 text-sm">© {new Date().getFullYear()} علیرضا مقربی</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
