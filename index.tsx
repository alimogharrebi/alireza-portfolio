
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  User, 
  Code, 
  Briefcase, 
  Send, 
  Linkedin, 
  ExternalLink, 
  Cpu, 
  MessageSquare,
  ChevronDown,
  Download,
  Mail,
  Terminal,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  X,
  BarChart3,
  Database,
  Globe,
  GraduationCap,
  BookOpen,
  PieChart
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

// --- Resume Data (Alireza Mogharrebi) ---
const RESUME_DATA = {
  name: "علیرضا مقربی",
  birthYear: "۱۳۶۸",
  title: "تحلیلگر ارشد داده و متخصص هوش تجاری (BI)",
  about: "تحلیلگر ارشد داده در شرکت Coflow (استانبول) با بیش از ۱۲ سال تجربه در حوزه مهندسی و فناوری اطلاعات. متخصص در استخراج بینش از داده‌های حجیم و پیاده‌سازی داشبوردهای مدیریتی در سطح بین‌المللی. مدرس برتر دوره‌های Power BI و اکسل پیشرفته برای سازمان‌های بزرگ دولتی و خصوصی ایران.",
  stats: [
    { label: "سال تجربه", value: "۱۲+" },
    { label: "دوره آموزشی", value: "۲۰۰+" },
    { label: "سازمان همکار", value: "۵۰+" },
  ],
  skills: [
    { name: "Power BI & DAX", level: 100, icon: <BarChart3 size={20} />, color: "text-yellow-400" },
    { name: "SQL Server & Access", level: 95, icon: <Database size={20} />, color: "text-emerald-400" },
    { name: "Python (Data Analysis)", level: 90, icon: <Terminal size={20} />, color: "text-blue-400" },
    { name: "Excel (Advanced/VBA)", level: 100, icon: <Layers size={20} />, color: "text-green-400" },
    { name: "AI & Deep Learning", level: 85, icon: <Cpu size={20} />, color: "text-violet-400" },
  ],
  education: [
    { degree: "کارشناسی ارشد مهندسی فناوری اطلاعات - شبکه‌های کامپیوتری", univ: "دانشگاه آزاد اسلامی واحد پرند", year: "۱۳۹۹" },
    { degree: "کارشناسی مهندسی مکانیک (حرارت و سیالات)", univ: "دانشگاه آزاد اسلامی واحد کرج", year: "۱۳۹۱" }
  ],
  experience: [
    {
      company: "Coflow (استانبول)",
      role: "تحلیلگر ارشد داده",
      period: "۱۴۰۲ - اکنون",
      description: "مدیریت و تحلیل کلان‌داده‌ها و طراحی راهکارهای هوشمند تجاری برای بازارهای بین‌المللی."
    },
    {
      company: "مدرس و مشاور هوش تجاری",
      role: "سازمان‌ها و صنایع مادر (نفت، گاز، فولاد)",
      period: "۱۳۹۳ - اکنون",
      description: "برگزاری بیش از ۲۰۰ دوره تخصصی برای شرکت‌هایی نظیر نفت و گاز پارس، مس سرچشمه، پتروشیمی مارون و همراه اول."
    },
    {
      company: "بانک صادرات ایران",
      role: "مدرس و طراح داشبورد",
      period: "۱۴۰۱ - ۱۴۰۲",
      description: "آموزش و پیاده‌سازی گزارشات داده‌محور و داشبوردهای مالی تحت Power BI."
    }
  ],
  projects: [
    {
      title: "داشبورد فروش Kelebek Tekstil",
      description: "طراحی سیستم تحلیل فروش برند Perspective در ترکیه با هدف بهینه‌سازی زنجیره تامین و فروش خرده‌فروشی.",
      tags: ["Power BI", "DAX", "Retail"],
      link: "#"
    },
    {
      title: "داشبورد فروش Mad Parfüm",
      description: "پیاده‌سازی داشبورد مانیتورینگ عملکرد فروش شعب و بازاریابی برای برند مطرح Mad Parfüm.",
      tags: ["Turkey Market", "Sales Analytics"],
      link: "#"
    },
    {
      title: "داشبورد منابع انسانی نفت ایران",
      description: "طراحی داشبورد جامع حقوق، دستمزد و تحلیل پرسنلی شرکت ملی پالایش و پخش فرآورده‌های نفتی.",
      tags: ["HR BI", "Petroleum Industry"],
      link: "#"
    },
    {
      title: "داشبورد تولید مس ایران",
      description: "مانیتورینگ لحظه‌ای توقفات و تولید در امور تغلیظ دره‌زار شرکت ملی صنایع مس ایران.",
      tags: ["Industrial IoT", "Downtime Analysis"],
      link: "#"
    }
  ]
};

// --- Components ---

const BackgroundEffect = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
    <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-indigo-500/10 blur-[100px] rounded-full" />
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className={`max-w-6xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass rounded-full shadow-2xl mx-4' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <PieChart className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-l from-white to-slate-400 bg-clip-text text-transparent hidden sm:block">
            {RESUME_DATA.name}
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['درباره', 'تحصیلات', 'مهارت‌ها', 'پروژه‌ها'].map((item, idx) => (
            <a 
              key={idx} 
              href={`#${['about', 'edu', 'skills', 'projects'][idx]}`} 
              className="text-slate-400 hover:text-blue-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 transition-all active:scale-95 flex items-center gap-2">
          <Download size={16} />
          رزومه کامل (PDF)
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] border-2 border-white/10 p-2 glass transition-transform duration-500 hover:rotate-2">
          <div className="w-full h-full rounded-[2rem] bg-slate-800 flex items-center justify-center overflow-hidden border border-white/5">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AlirezaMogharrebi" alt={RESUME_DATA.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-2xl shadow-xl"
        >
          <BarChart3 size={24} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          داستان داده‌ها را <br/> با <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">هوش تجاری</span> روایت کنید
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {RESUME_DATA.title}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl overflow-hidden shadow-2xl transition-all hover:shadow-blue-500/20">
            <span className="relative z-10 flex items-center gap-2">پروژه‌ها و تدریس <Send size={18} /></span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <div className="flex gap-3">
            {[<Linkedin />, <Globe />, <Mail />].map((icon, idx) => (
              <button key={idx} className="w-14 h-14 glass flex items-center justify-center rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-8 md:gap-16 mt-8">
        {RESUME_DATA.stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
            <div className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-widest mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: `سلام! من دستیار هوشمند ${RESUME_DATA.name} هستم. می‌توانید درباره دوره‌های آموزشی، پروژه‌های Power BI یا نحوه همکاری با من صحبت کنید.` }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `You are a professional AI assistant for ${RESUME_DATA.name}, a Senior Data Analyst.
        Context: ${JSON.stringify(RESUME_DATA)}
        Respond in Persian. Be professional, direct, and highlighting his expertise in Power BI and teaching for major oil/gas companies.
        User question: ${userMsg}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "متاسفانه مشکلی پیش آمد." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "ارتباط با مرکز داده قطع شده است!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-8 left-8 z-50 group">
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-[2rem] shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center gap-3">
          <MessageSquare size={28} />
          <span className="hidden md:inline font-bold">بپرسید</span>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 left-8 z-50 w-[90vw] max-w-[420px] h-[600px] glass rounded-[2.5rem] flex flex-col overflow-hidden border border-white/10 shadow-2xl">
            <div className="p-6 bg-blue-600/10 border-b border-white/5 flex justify-between items-center">
              <span className="font-bold flex items-center gap-2"><Sparkles size={18} className="text-blue-400" /> تحلیلگر هوشمند</span>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-2xl max-w-[85%] text-sm ${m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'}`}>{m.text}</div>
                </div>
              ))}
              {loading && <div className="text-xs text-slate-500 animate-pulse">در حال تحلیل داده‌ها...</div>}
            </div>
            <div className="p-4 border-t border-white/5">
              <div className="relative flex items-center">
                <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="سوال خود را بپرسید..." className="w-full bg-slate-900 rounded-xl px-4 py-3 outline-none border border-white/10" />
                <button onClick={handleSend} className="absolute left-2 bg-blue-600 p-2 rounded-lg"><Send size={16} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Skills = () => (
  <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-black mb-4">جعبه ابزار <span className="text-blue-400">تخصصی</span></h2>
      <p className="text-slate-500">تسلط کامل بر پیشرفته‌ترین ابزارهای تحلیل داده و هوش تجاری.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {RESUME_DATA.skills.map((skill, i) => (
        <motion.div key={i} whileHover={{ y: -5 }} className="glass p-8 rounded-3xl border border-white/5 group">
          <div className="flex justify-between items-center mb-6">
            <div className={`p-4 rounded-2xl bg-white/5 ${skill.color}`}>{skill.icon}</div>
            <span className="text-2xl font-black">{skill.level}%</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Education = () => (
  <section id="edu" className="py-24 px-4 max-w-6xl mx-auto">
    <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/5">
       <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
        <GraduationCap size={40} className="text-blue-400" /> سوابق تحصیلی
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {RESUME_DATA.education.map((edu, i) => (
          <div key={i} className="relative pr-8 border-r-2 border-blue-500/20">
            <div className="absolute top-0 right-[-6px] w-3 h-3 bg-blue-500 rounded-full" />
            <div className="text-blue-400 font-bold mb-2">{edu.year}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
            <p className="text-slate-400">{edu.univ}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeachingHistory = () => (
  <section className="py-24 px-4 max-w-6xl mx-auto overflow-hidden">
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-4">
        <BookOpen size={40} className="text-emerald-400" /> سوابق تدریس <span className="text-slate-600 text-lg font-medium">۱۴۰۳ - ۱۴۰۴</span>
      </h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        "صنعتی و معدنی گل‌گهر سیرجان - Power BI",
        "پتروشیمی مارون - داشبوردهای مدیریتی",
        "پالایشگاه تهران - اکسل پیشرفته",
        "نفت ستاره خلیج فارس - پایگاه داده",
        "شرکت مس سرچشمه - Power BI",
        "نفت و گاز پارس - تحلیل داده",
        "همراه اول (روبیکا) - اکسل کاربردی",
        "بانک صادرات ایران - هوش تجاری",
        "مجتمع گاز پارس جنوبی - برنامه‌نویسی",
        "شرکت فولاد خوزستان - Power BI",
        "جهاد دانشگاهی صنعتی شریف - پایتون",
        "پژوهشگاه فضایی ایران - Power BI"
      ].map((course, i) => (
        <div key={i} className="flex items-center gap-3 p-4 glass rounded-2xl border border-white/5 text-sm text-slate-300">
          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
          {course}
        </div>
      ))}
    </div>
    <div className="mt-8 text-center text-slate-500 text-sm italic">
      + بیش از ۱۸۰ دوره آموزشی دیگر در بازه زمانی ۱۳۹۳ تا ۱۴۰۳
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-3xl md:text-5xl font-black">پروژه‌های <span className="text-blue-400">منتخب</span></h2>
      <button className="text-blue-400 flex items-center gap-2 font-bold">نمونه‌های بیشتر <ExternalLink size={18} /></button>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {RESUME_DATA.projects.map((p, i) => (
        <motion.div key={i} whileHover={{ y: -10 }} className="glass rounded-[2.5rem] overflow-hidden group border border-white/5">
          <div className="h-48 bg-slate-900 flex items-center justify-center p-12">
            <BarChart3 size={80} className="text-slate-800 group-hover:text-blue-500/20 transition-all duration-500" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
            <p className="text-slate-400 mb-6 line-clamp-2">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t, j) => <span key={j} className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full text-blue-400">{t}</span>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 text-center">
    <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto flex items-center justify-center text-white font-black text-xl mb-4">A</div>
    <h3 className="text-xl font-bold">{RESUME_DATA.name}</h3>
    <p className="text-slate-500 text-sm mb-6">{RESUME_DATA.title}</p>
    <div className="text-slate-600 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} Professional Portfolio</div>
  </footer>
);

const App = () => (
  <div className="bg-[#030712] text-slate-200 min-h-screen">
    <BackgroundEffect />
    <Navbar />
    <Hero />
    <section id="about" className="py-24 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-blue-400 font-black uppercase tracking-widest mb-8">درباره من</h2>
      <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-300">"{RESUME_DATA.about}"</p>
    </section>
    <Education />
    <Skills />
    <TeachingHistory />
    <Projects />
    <AIChat />
    <Footer />
  </div>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
