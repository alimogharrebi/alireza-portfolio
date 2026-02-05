
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
  User,
  ArrowLeft,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Cpu,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

// --- تنظیمات داده‌ها (رزومه علیرضا مقربی) ---

const TEACHING_RECORDS = [
  { id: 1, title: "کاربرد Power BI در کنترل پروژه", location: "صنعتی و معدنی گل‌گهر سیرجان", date: "زمستان 1404" },
  { id: 2, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "پتروشیمی مارون - ماهشهر", date: "زمستان 1404" },
  { id: 3, title: "اکسل پیشرفته", location: "پالایشگاه تهران", date: "زمستان 1404" },
  { id: 4, title: "پایگاه داده", location: "شرکت نفت ستاره خلیج فارس", date: "زمستان 1404" },
  { id: 5, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "پتروشیمی مارون–دفتر تهران", date: "زمستان 1404" },
  { id: 6, title: "ساخت کاربرد اکسل در منابع انسانی", location: "ستاد شرکت ملی نفت ایران", date: "زمستان 1404" },
  { id: 7, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "شرکت مس سرچشمه", date: "پاییز و زمستان 1404" },
  { id: 8, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "پتروشیمی خراسان", date: "پاییز 1404" },
  { id: 9, title: "برنامه‌نویسی پایتون برای تحلیل داده", location: "شرکت سیمان شهرکرد", date: "زمستان 1403" },
  { id: 10, title: "ساخت داشبوردهای مدیریتی با Power BI", location: "شرکت روبیکا", date: "زمستان 1403" },
  { id: 11, title: "تحلیل داده و ساخت داشبورد با Power BI", location: "بانک صادرات ایران", date: "بهار 1402" },
  { id: 12, title: "برنامه‌نویسی به زبان C++", location: "مجتمع گاز پارس جنوبی (عسلویه)", date: "پاییز 1401" },
  { id: 13, title: "هوش تجاری با Power BI", location: "مپنا پارس", date: "زمستان 1400" },
  { id: 14, title: "تحلیل داده با Power BI", location: "جهاد دانشگاهی صنعتی شریف", date: "پاییز 99" },
  { id: 15, title: "برنامه‌نویسی Python", location: "جهاد دانشگاهی صنعتی شریف", date: "بهار 99" },
];

const PROJECTS = [
  { id: 1, title: "طراحی داشبورد منابع انسانی", client: "خطوط لوله و مخابرات نفت ایران", year: "1404" },
  { id: 2, title: "طراحی داشبورد منابع انسانی", client: "شرکت نفت پارس", year: "1404" },
  { id: 3, title: "داشبورد توقفات و تولید", client: "ملی مس ایران (امور تغلیظ دره زار)", year: "1404" },
  { id: 4, title: "طراحی داشبورد فروش برند Perspective", client: "Kelebek Tekstil (ترکیه)", year: "2024" },
  { id: 5, title: "طراحی و نگه‌داری داشبورد فروش برند عطر Mad Parfüm", client: "ترکیه و زیر مجموعه‌ها", year: "2023" },
  { id: 6, title: "داشبورد منابع انسانی و حقوق و دستمزد", client: "ملی پالایش و پخش فرآورده‌های نفتی", year: "1402" },
  { id: 7, title: "پیاده سازی داشبورد کنترل پروژه (EPC)", client: "شرکت ویستافراز", year: "1399-1400" },
  { id: 8, title: "طراحی دیتابیس برنامه ریزی خطوط تولید", client: "شرکت شتابکار", year: "1395" },
];

const SKILLS = [
  {
    category: "هوش تجاری و داده",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
    skills: ["Power BI", "زبان DAX", "ساخت داشبوردهای مدیریتی", "طراحی هوش تجاری (BI)"]
  },
  {
    category: "برنامه‌نویسی و AI",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    skills: ["Python", "TensorFlow", "NumPy", "Pandas", "Deep Learning", "C++"]
  },
  {
    category: "پایگاه داده",
    icon: <Database className="w-8 h-8 text-purple-400" />,
    skills: ["SQL Server", "Microsoft Access", "طراحی دیتابیس رابطه‌ای", "VBA Programming"]
  },
  {
    category: "مهندسی و مالی",
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
    skills: ["Excel پیشرفته", "تحلیل داده‌های مالی", "Power Query & Pivot", "PowerPoint"]
  }
];

const TEACHING_TOPICS = [
  "هوش تجاری و تحلیل داده با Power BI",
  "برنامه‌نویسی پایتون (Python) در علم داده",
  "اکسل پیشرفته و کاربرد آن در مهندسی و مالی",
  "طراحی و مدیریت پایگاه داده (SQL Server & Access)",
  "کنترل پروژه و داشبوردهای مدیریتی",
  "برنامه‌نویسی VBA و خودکارسازی در اکسل",
  "یادگیری عمیق و هوش مصنوعی کاربردی"
];

// --- اجزای صفحه ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'درباره من', href: '#about' },
    { label: 'مهارت‌ها', href: '#skills' },
    { label: 'مباحث تدریس', href: '#topics' },
    { label: 'سوابق تدریس', href: '#teaching' },
    { label: 'پروژه‌ها', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          علیرضا مقربی
        </div>
        <ul className="hidden lg:flex gap-10 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-cyan-400 transition-all duration-300 relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
            ارتباط مستقیم
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, icon: Icon, id }: { children: React.ReactNode, icon: any, id: string }) => (
  <div id={id} className="flex items-center gap-4 mb-16 scroll-mt-28">
    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-inner border border-cyan-500/10">
      <Icon size={28} />
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-black text-white">{children}</h2>
      <div className="h-1.5 w-1/3 bg-gradient-to-r from-cyan-500 to-transparent mt-2 rounded-full"></div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] -z-10 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              آماده برای همکاری و تدریس
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.15] animate-fade-in-up">
              تحلیل‌گر <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">ارشد داده</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed animate-fade-in-up">
              علیرضا مقربی، تحلیل‌گر ارشد داده در شرکت <strong>Coflow</strong> استانبول. با بیش از ۱۰ سال سابقه تدریس تخصصی هوش تجاری و پایتون در صنایع نفت، گاز و پتروشیمی.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in-up">
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-6 py-3 rounded-2xl text-slate-300">
                <Monitor size={20} className="text-cyan-400" />
                <span className="font-medium">تحلیل‌گر ارشد @ Coflow</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 px-6 py-3 rounded-2xl text-slate-300">
                <Calendar size={20} className="text-blue-400" />
                <span className="font-medium">متولد ۱۳۶۸</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Education */}
      <section id="about" className="py-24 bg-slate-950/50 border-y border-slate-900/50">
        <div className="container mx-auto px-6">
          <SectionHeading icon={GraduationCap} id="education">تحصیلات و مدارک</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">کارشناسی ارشد مهندسی IT</h3>
              <p className="text-lg text-slate-300 mb-2">گرایش شبکه‌های کامپیوتری</p>
              <p className="text-slate-500">دانشگاه آزاد اسلامی واحد پرند (۱۳۹۹)</p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">کارشناسی مهندسی مکانیک</h3>
              <p className="text-lg text-slate-300 mb-2">گرایش حرارت و سیالات</p>
              <p className="text-slate-500">دانشگاه آزاد اسلامی واحد کرج (۱۳۹۱)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Code} id="skills-section">مهارت‌های تخصصی</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((group, idx) => (
              <div key={idx} className="flex flex-col p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 transition-all duration-500">
                <div className="mb-8 p-4 rounded-2xl bg-slate-950/50 border border-slate-800 inline-block w-fit">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-8 text-white">{group.category}</h3>
                <ul className="space-y-4 flex-1">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/60"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Topics */}
      <section id="topics" className="py-32 bg-cyan-500/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading icon={BookOpen} id="teaching-topics">مباحث مورد تدریس</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHING_TOPICS.map((topic, idx) => (
              <div key={idx} className="flex items-center gap-5 p-6 rounded-[1.5rem] bg-slate-900/80 border border-slate-800/50 hover:bg-slate-800 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-black text-xl">
                  {idx + 1}
                </div>
                <span className="font-bold text-slate-200">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching History */}
      <section id="teaching" className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Award} id="teaching-history">سوابق تدریس سازمانی</SectionHeading>
          <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/30 backdrop-blur-md overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800">
                  <th className="p-8 font-black text-slate-400 uppercase tracking-widest text-sm">عنوان دوره آموزشی</th>
                  <th className="p-8 font-black text-slate-400 uppercase tracking-widest text-sm">نام سازمان / شرکت</th>
                  <th className="p-8 font-black text-slate-400 uppercase tracking-widest text-sm text-left">تاریخ برگزاری</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {TEACHING_RECORDS.map((record) => (
                  <tr key={record.id} className="hover:bg-cyan-500/5 transition-all group">
                    <td className="p-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-cyan-500 opacity-0 group-hover:opacity-100" />
                        <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{record.title}</span>
                      </div>
                    </td>
                    <td className="p-8 text-slate-400 font-medium">{record.location}</td>
                    <td className="p-8 text-slate-500 font-mono text-left">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-slate-950/80">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Layout} id="projects-section">پروژه‌های شاخص</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="flex flex-col p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all duration-700">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-5 rounded-2xl bg-blue-500/10 text-blue-400">
                    <PieChart size={32} />
                  </div>
                  <span className="text-xs font-black tracking-widest text-slate-500 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-5 text-white leading-snug">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10 flex-1">{project.client}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                  جزئیات پروژه <ArrowLeft size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-32 border-t border-slate-900/50 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-12 italic text-white">منتظر شنیدن صدای شما هستم</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-20">
              <a href="mailto:example@email.com" className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <Mail className="text-cyan-400" />
                <span className="font-bold text-white">ایمیل مستقیم</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
                <Linkedin className="text-blue-400" />
                <span className="font-bold text-white">لینکدین</span>
              </a>
            </div>
            <p className="text-sm font-medium opacity-60">
              تمامی حقوق محفوظ است © {new Date().getFullYear()} - علیرضا مقربی
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Rendering
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
