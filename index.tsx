import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BarChart3, 
  Database, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Presentation, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Layers,
  FileSpreadsheet,
  BrainCircuit,
  Mail,
  Linkedin,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 w-full z-50 glass">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">علیرضا مقربی</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-blue-400 transition-colors">درباره من</a>
        <a href="#skills" className="hover:text-blue-400 transition-colors">مهارت‌ها</a>
        <a href="#teaching" className="hover:text-blue-400 transition-colors">سوابق تدریس</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">پروژه‌ها</a>
      </nav>
      <div className="flex gap-4">
         <a href="https://linkedin.com/in/alirezamogharrebi" target="_blank" rel="noopener noreferrer">
           <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer" />
         </a>
         <a href="mailto:contact@example.com">
           <Mail className="w-5 h-5 text-slate-400 hover:text-red-400 transition-colors cursor-pointer" />
         </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="about" className="pt-32 pb-24 hero-gradient text-white overflow-hidden relative border-b border-white/5">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 -mr-48 -mt-48"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-10 -ml-48 -mb-48"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-blue-400"></span>
          به نام خدا
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">علیرضا مقربی</h1>
        <p className="text-2xl text-slate-400 mb-8 font-light">تحلیلگر ارشد داده در شرکت <span className="text-blue-400 font-medium">Coflow</span> (مستقر در استانبول)</p>
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-slate-300 backdrop-blur-sm">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span>کارشناسی ارشد مهندسی فناوری اطلاعات</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-slate-300 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>استانبول / تهران</span>
          </div>
        </div>
        <a href="#teaching" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 inline-flex items-center gap-2">
          مشاهده سوابق تدریس
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

const SkillCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all group">
    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-7 h-7 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-[#0b0f19]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">مهارت‌ها و تخصص‌ها</h2>
        <p className="text-slate-500 text-lg">مجموعه ابزارها و دانش فنی در حوزه داده و هوش تجاری</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillCard 
          icon={BarChart3} 
          title="Power BI & DAX" 
          desc="طراحی داشبوردهای مدیریتی پیشرفته و مدل‌سازی داده‌های پیچیده مالی و صنعتی با تکیه بر فرمول‌نویسی DAX"
        />
        <SkillCard 
          icon={Code2} 
          title="Python" 
          desc="مسلط به کتابخانه‌های علمی و یادگیری عمیق از جمله TensorFlow، NumPy و Pandas برای تحلیل داده"
        />
        <SkillCard 
          icon={Database} 
          title="SQL & Databases" 
          desc="طراحی معماری و مدیریت پایگاه داده‌های رابطه‌ای با SQL Server و Microsoft Access"
        />
        <SkillCard 
          icon={FileSpreadsheet} 
          title="Advanced Excel" 
          desc="تخصص در اکسل پیشرفته، ماکرونویسی (VBA) و مدل‌سازی مالی و صنعتی"
        />
      </div>
    </div>
  </section>
);

const TeachingFields = () => (
  <section className="py-24 bg-[#080c14] border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-16 justify-center text-center flex-col">
        <Presentation className="w-12 h-12 text-blue-500 mb-2" />
        <h2 className="text-4xl font-bold text-white">حوزه‌های تدریس</h2>
        <p className="text-slate-500 max-w-2xl">ارائه بیش از ۱۰۰ دوره آموزشی در تخصص‌های زیر برای سازمان‌های دولتی و خصوصی</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "هوش تجاری با Power BI و زبان DAX",
          "برنامه‌نویسی پایتون و تحلیل داده",
          "اکسل پیشرفته و داشبوردهای اکسلی",
          "طراحی پایگاه داده (SQL Server / Access)",
          "مدیریت و کنترل پروژه در اکسل",
          "اکسل کاربردی در حسابداری و منابع انسانی"
        ].map((field, i) => (
          <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/40 rounded-2xl border border-white/5 hover:bg-slate-900/60 transition-colors group">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-medium text-lg">{field}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeachingHistory = () => {
  const [showAll, setShowAll] = useState(false);
  const teachingList = [
    { title: "کاربرد Power BI در کنترل پروژه", org: "صنعتی و معدنی گلگهر سیرجان", date: "زمستان 1404" },
    { title: "ساخت داشبوردهای مدیریتی با Power BI", org: "پتروشیمی مارون - ماهشهر", date: "زمستان 1404" },
    { title: "اکسل پیشرفته", org: "پالایشگاه تهران", date: "زمستان 1404" },
    { title: "پایگاه داده", org: "شرکت نفت ستاره خلیج فارس", date: "زمستان 1404" },
    { title: "اکسل در منابع انسانی", org: "ستاد شرکت ملی نفت ایران", date: "زمستان 1404" },
    { title: "ساخت داشبوردهای مدیریتی با Power BI", org: "شرکت مس سرچشمه", date: "پاییز و زمستان 1404" },
    { title: "ساخت داشبوردهای مدیریتی با Power BI", org: "پتروشیمی خراسان", date: "پاییز 1404" },
    { title: "برنامه‌نویسی پایتون برای تحلیل داده", org: "شرکت سیمان شهرکرد", date: "زمستان 1403" },
    { title: "هوش تجاری با Power BI", org: "بانک صادرات ایران", date: "بهار 1402" },
    { title: "تحلیل داده با Power BI", org: "شرکت حمل و نقل ریلی رجا", date: "پاییز 1401" },
    { title: "برنامه‌نویسی C++", org: "مجتمع گاز پارس جنوبی (SPGC)", date: "پاییز 1401" },
    { title: "هوش تجاری با Power BI", org: "شرکت مهندسی و ساخت ژنراتور مپنا پارس", date: "زمستان 1400" },
    { title: "تحلیل داده با Power BI", org: "جهاد دانشگاهی صنعتی شریف", date: "پاییز 99" },
    { title: "اکسل پیشرفته", org: "شرکت دیجی کالا", date: "تیر 98" },
    { title: "VBA در اکسل", org: "شرکت فولاد هرمزگان", date: "بهمن 97" }
  ];

  return (
    <section id="teaching" className="py-24 bg-[#0b0f19]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-bold text-white mb-4">برخی از سوابق تدریس</h2>
            <p className="text-slate-400 text-lg">بیش از ۱۰۰ دوره تخصصی در صنایع نفت، گاز، پتروشیمی و بانکداری</p>
          </div>
          <Layers className="w-12 h-12 text-slate-700 hidden lg:block" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? teachingList : teachingList.slice(0, 9)).map((item, i) => (
            <div key={i} className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all">
              <div className="text-blue-400 font-bold text-sm mb-3 px-3 py-1 bg-blue-900/20 rounded-full inline-block">{item.date}</div>
              <h4 className="text-slate-100 font-bold text-xl mb-3">{item.title}</h4>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Briefcase className="w-4 h-4 text-slate-500" />
                <span>{item.org}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group text-blue-400 font-bold text-lg inline-flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            {showAll ? "مشاهده سوابق کمتر" : "مشاهده تمام سوابق تدریس"}
            <ChevronDown className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { title: "طراحی داشبورد منابع انسانی", client: "شرکت خطوط لوله و مخابرات نفت ایران", year: "1404" },
    { title: "داشبورد توقفات و تولید", client: "شرکت ملی مس ایران (دره زار)", year: "1404" },
    { title: "طراحی داشبورد فروش برند Perspective", client: "شرکت Kelebek Tekstil - ترکیه", year: "2024" },
    { title: "داشبورد فروش برند Mad Parfüm", client: "ترکیه و زیرمجموعه‌ها", year: "2023" },
    { title: "داشبورد HR و حقوق و دستمزد", client: "شرکت ملی پالایش و پخش فرآورده‌های نفتی", year: "1402" },
    { title: "طراحی دیتابیس برنامه‌ریزی خطوط تولید", client: "شرکت شتابکار", year: "1395" }
  ];

  return (
    <section id="projects" className="py-24 bg-[#080c14] relative border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">برخی از سوابق کاری و پروژه‌ها</h2>
          <p className="text-slate-500">طراحی و پیاده‌سازی پروژه‌های هوش تجاری در ابعاد ملی و بین‌المللی</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative bg-[#0b0f19] rounded-3xl overflow-hidden aspect-video flex flex-col justify-end p-8 border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                <div className="w-full h-full bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                   <BarChart3 className="w-24 h-24 text-white/5" />
                </div>
              </div>
              <div className="relative z-20">
                <span className="text-blue-500 text-sm font-bold block mb-2">{p.year}</span>
                <h4 className="text-white text-2xl font-bold mb-2">{p.title}</h4>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {p.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section className="py-24 bg-[#0b0f19]">
    <div className="container mx-auto px-6">
       <div className="max-w-4xl mx-auto bg-slate-900/40 rounded-[2.5rem] p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="w-10 h-10 text-blue-500" />
            تحصیلات و مدارک آکادمیک
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 relative group">
              <div className="w-1 h-full bg-blue-500/20 absolute right-[23px] top-12 group-last:hidden"></div>
              <div className="w-12 h-12 bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 border border-blue-500/30">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">کارشناسی ارشد مهندسی فناوری اطلاعات</h4>
                <p className="text-blue-400 font-medium mb-2">گرایش شبکه‌های کامپیوتری</p>
                <p className="text-slate-500">دانشگاه آزاد اسلامی واحد پرند (فارغ‌التحصیل ۱۳۹۹)</p>
              </div>
            </div>
            <div className="flex gap-6 relative group">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 border border-white/5">
                <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">کارشناسی مهندسی مکانیک</h4>
                <p className="text-blue-400 font-medium mb-2">گرایش حرارت و سیالات</p>
                <p className="text-slate-500">دانشگاه آزاد اسلامی واحد کرج (فارغ‌التحصیل ۱۳۹۱)</p>
              </div>
            </div>
          </div>
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020617] text-white py-16 border-t border-white/5">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-6 tracking-tight">علیرضا مقربی</h3>
      <p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
        تحلیلگر ارشد داده، مدرس دوره‌های هوش تجاری و متخصص پیاده‌سازی سیستم‌های گزارش‌دهی در مقیاس سازمانی.
      </p>
      <div className="flex justify-center gap-8 mb-16">
        <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1 border border-white/5">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-500 transition-all hover:-translate-y-1 border border-white/5">
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <div className="text-slate-600 text-sm border-t border-white/5 pt-10">
        © ۲۰۲۵ - تمامی حقوق برای علیرضا مقربی محفوظ است.
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Header />
      <Hero />
      <Skills />
      <TeachingFields />
      <TeachingHistory />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}