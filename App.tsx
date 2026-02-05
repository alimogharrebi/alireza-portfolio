
import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  BookOpen, 
  Layout, 
  Award,
  Calendar,
  ChevronDown,
  Monitor,
  Database,
  BrainCircuit,
  PieChart,
  User,
  ArrowLeft
} from 'lucide-react';
import { SKILLS, TEACHING_RECORDS, PROJECTS, TEACHING_TOPICS } from './constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          علیرضا مقربی
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <li><a href="#about" className="hover:text-cyan-400 transition-colors">درباره من</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition-colors">مهارت‌ها</a></li>
          <li><a href="#topics" className="hover:text-cyan-400 transition-colors">مباحث تدریس</a></li>
          <li><a href="#teaching" className="hover:text-cyan-400 transition-colors">سوابق تدریس</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition-colors">پروژه‌ها</a></li>
        </ul>
        <a href="#contact" className="px-5 py-2 rounded-full bg-slate-800 text-sm hover:bg-slate-700 transition-colors border border-slate-700">
          تماس با من
        </a>
      </div>
    </nav>
  );
};

// Added optional operator to children property in SectionHeading component props to resolve TS error "Property 'children' is missing"
const SectionHeading = ({ children, icon: Icon, id }: { children?: React.ReactNode, icon: any, id: string }) => (
  <div id={id} className="flex items-center gap-3 mb-12 scroll-mt-24">
    <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold">{children}</h2>
    <div className="flex-1 h-px bg-slate-800 mr-6"></div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full opacity-50"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              تحلیل‌گر <span className="bg-gradient-to-l from-cyan-400 to-blue-500 bg-clip-text text-transparent">ارشد داده</span> و مدرس تخصصی هوش تجاری
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              علیرضا مقربی، تحلیل‌گر ارشد داده در شرکت Coflow استانبول. متخصص در پیاده‌سازی سیستم‌های هوش تجاری (BI) و آموزش مفاهیم پایتون و علم داده در بزرگترین صنایع کشور.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-sm text-slate-300">
                <Calendar size={16} className="text-cyan-400" />
                <span>متولد ۱۳۶۸</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-sm text-slate-300">
                <Monitor size={16} className="text-cyan-400" />
                <span>Coflow (استانبول)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About / Education */}
      <section id="about" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeading icon={GraduationCap} id="education">تحصیلات و مدارک</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">کارشناسی ارشد مهندسی IT</h3>
              <p className="text-slate-300 mb-2">گرایش شبکه‌های کامپیوتری</p>
              <span className="text-sm text-slate-500">دانشگاه آزاد اسلامی واحد پرند (۱۳۹۹)</span>
            </div>
            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">کارشناسی مهندسی مکانیک</h3>
              <p className="text-slate-300 mb-2">گرایش حرارت و سیالات</p>
              <span className="text-sm text-slate-500">دانشگاه آزاد اسلامی واحد کرج (۱۳۹۱)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Code} id="skills-section">مهارت‌های تخصصی</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800">
                <div className="text-4xl mb-6">{group.icon}</div>
                <h3 className="text-lg font-bold mb-6 text-slate-100">{group.category}</h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
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
      <section id="topics" className="py-20 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <SectionHeading icon={BookOpen} id="teaching-topics">مباحث تدریس</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHING_TOPICS.map((topic, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  {idx + 1}
                </div>
                <span className="font-medium text-slate-200">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching History */}
      <section id="teaching" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Award} id="teaching-history">برخی از سوابق تدریس</SectionHeading>
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="p-6 font-bold text-slate-300">عنوان دوره</th>
                  <th className="p-6 font-bold text-slate-300">مجموعه / سازمان</th>
                  <th className="p-6 font-bold text-slate-300 text-left">زمان</th>
                </tr>
              </thead>
              <tbody>
                {TEACHING_RECORDS.map((record) => (
                  <tr key={record.id} className="border-b border-slate-800/50 hover:bg-cyan-500/5 transition-colors">
                    <td className="p-6 text-slate-200 font-medium">{record.title}</td>
                    <td className="p-6 text-slate-400">{record.location}</td>
                    <td className="p-6 text-slate-500 text-left">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-6 bg-slate-900/20 text-center text-sm text-slate-500 italic">
              و صدها دوره دیگر در سازمان‌های مختلف...
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Layout} id="projects-section">پروژه‌های انجام شده</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <PieChart size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-1">{project.client}</p>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  مشاهده جزئیات <ArrowLeft size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 italic">با من در ارتباط باشید</h2>
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="p-4 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all">
              <Monitor size={24} />
            </a>
            <a href="#" className="p-4 rounded-full bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all">
              <User size={24} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            تمامی حقوق محفوظ است © {new Date().getFullYear()} - علیرضا مقربی
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
