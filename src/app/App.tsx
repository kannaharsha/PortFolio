import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowUp,
  ArrowRight,
  ChevronDown,
  Download,
  Loader2,
  CheckCircle2,
  GraduationCap,
  Phone,
  MapPin,
  Cpu
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ParticleBackground } from './components/ParticleBackground';

const roles = [
  "AI Engineer",
  "ML Engineer",
  "NLP Engineer",
  "Python Developer",
  "Web Developer"
];

const techBadges = [
  { name: 'Python', icon: Code2, level: 95 },
  { name: 'Java', icon: Code2, level: 85 },
  { name: 'Machine Learning', icon: Database, level: 92 },
  { name: 'Deep Learning', icon: Zap, level: 88 },
  { name: 'Gen AI & LLMs', icon: Zap, level: 95 },
  { name: 'NLP', icon: Code2, level: 90 },
  { name: 'Computer Vision', icon: Globe, level: 85 },
  { name: 'Agentic AI', icon: Zap, level: 88 },
  { name: 'SQL', icon: Database, level: 90 },
  { name: 'Data Engineering', icon: Database, level: 85 },
  { name: 'AWS', icon: Globe, level: 82 },
  { name: 'Math & Stats', icon: Code2, level: 88 },
  { name: 'Git', icon: Code2, level: 85 },
  { name: "C++", icon: Code2, level:82 }
];

const skillCategories = [
  {
    title: 'Generative AI & LLMs',
    skills: ['Gen AI', 'Large Language Models', 'Agentic AI', 'Prompt Eng.'],
    percentage: 95,
  },
  {
    title: 'Machine & Deep Learning',
    skills: ['Machine Learning', 'Deep Learning', 'Math & Stats'],
    percentage: 92,
  },
  {
    title: 'NLP & Computer Vision',
    skills: ['NLP', 'Sentiment Analysis', 'Image Pipelines'],
    percentage: 88,
  },
  {
    title: 'Web Development',
    skills: ['React', 'Node.js', 'APIs', 'SQL'],
    percentage: 88,
  }
];

const projects = [
  {
    title: 'Health Premium Prediction',
    description: 'A machine learning system built in Python to accurately predict health insurance premiums based on user data.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    tags: ['Python', 'Machine Learning', 'Healthcare ML'],
    link: 'https://github.com/kannaharsha/ml-project-premium-predection'
  },
  {
    title: 'Business Analysis Lab',
    description: 'A comprehensive suite of Business Analytics and Data Science lab programs and solutions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Data Science', 'Analytics'],
    link: 'https://github.com/kannaharsha/BusinessAnalysisLab'
  },
  {
    title: 'Credit Risk ML Model',
    description: 'A powerful machine learning model designed to accurately assess and predict financial credit risk.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    tags: ['Jupyter Notebook', 'Finance', 'ML'],
    link: 'https://github.com/kannaharsha/ml-credit-risk-model'
  },
  {
    title: 'Real Estate Research Tool',
    description: 'A Python analytics agent engineered for deep research into property values and market trends.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    tags: ['Python', 'Data Analytics', 'Real Estate'],
    link: 'https://github.com/kannaharsha/RealEstateReseachTool'
  },
  {
    title: 'Smart Weather Prediction',
    description: 'Predictive modeling application utilizing Python to generate highly accurate weather forecasts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80',
    tags: ['Python', 'Forecasting', 'Machine Learning'],
    link: 'https://github.com/kannaharsha/Smart-Weather-Predection'
  },
  {
    title: 'Car Damage Prediction',
    description: 'A computer vision pipeline utilizing advanced algorithms to predict and classify structural car damage.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    tags: ['Computer Vision', 'Deep Learning', 'Python'],
    link: 'https://github.com/kannaharsha/car_damage_predection'
  }
];

const certifications = [
  { title: "Codebasics Data Science & AI Bootcamp Graduate", org: "Codebasics", file: "/certifications/codebasics/PDF's/Final Certificate.pdf", featured: true, highlight: "BootCamp Certificate" },
  { title: "AWS Academy - Data Engineering", org: "AWS", file: "/certifications/AWS/23331A4207_AWS.pdf", featured: true, highlight: "AWS Certified" },
  { title: "Gen AI and Agentic AI", org: "Codebasics", file: "/certifications/codebasics/PDF's/Gen AI and Agentic AI.pdf", featured: true, highlight: "Specialized" },
  { title: "Natural Language Processing", org: "Codebasics", file: "/certifications/codebasics/PDF's/Natural langauge Processing.pdf", featured: true, highlight: "Specialized" },
  { title: "Deep Learning", org: "Codebasics", file: "/certifications/codebasics/PDF's/Deep learning.pdf", featured: true, highlight: "Specialized" },
  { title: "Machine Learning", org: "Codebasics", file: "/certifications/codebasics/PDF's/Machine Learning.pdf" },
  { title: "Math and Statistics", org: "Codebasics", file: "/certifications/codebasics/PDF's/Math and Statistics.pdf" },
  { title: "SQL and Data Science", org: "Codebasics", file: "/certifications/codebasics/PDF's/SQL and Data Science.pdf" },
  { title: "Python (Codebasics)", org: "Codebasics", file: "/certifications/codebasics/PDF's/Python.pdf" },
  { title: "Python Essentials 2", org: "Cisco Networking", file: "/certifications/CISCO/Python Essentials 2.pdf" },
  { title: "TATA Forage Virtual Simulation", org: "TATA", file: "/certifications/TATA Forage.pdf" },
  { title: "Python & Django Framework", org: "Udemy", file: "/certifications/Udemy/python and django frame worrk and html5 stack completed course.pdf" },
  { title: "Python for Deep Learning & Neural Networks", org: "Udemy", file: "/certifications/Udemy/python for deep learning build neural networks in python.pdf" },
  { title: "Web & DevOps Certificate", org: "Udemy", file: "/certifications/Udemy/wed-devops-certificate.pdf" },
  { title: "Artificial Intelligence & Machine Learning", org: "Udemy", file: "/certifications/Udemy/AIML.pdf" },
  { title: "Quantum Computing", org: "Wiser | Qubitech", file: "/certifications/Quantam Computing.jpg" },
  { title: "Lean Six Sigma White Belt", org: "Management and Strategy Institute", file: "/certifications/Lean Six Sigma White Belt.pdf" },
  { title: "SQL Basic", org: "HackerRank", file: "/certifications/SQL Basic.pdf" }
];

const internships = [
  { title: "AWS Data Engineering Internship", org: "AWS / AICTE", date: "2024", file: "/internships/EDUSKILLS/Smart Internz.pdf" },
  { title: "Java Full Stack Developer Virtual Internship", org: "EduSkills / AICTE", date: "2024", file: "/internships/1STOP/Internship_Certificate - B_Harsha_teja.pdf" },
  { title: "Research Internship", org: "INTRINZ", date: "2024", file: "/internships/iNTRINZ/internship.pdf" },
  { title: "Machine Learning", org: "1Stop", date:"2025", file: "/internships/1STOP/Internship_Certificate.pdf"}
];

const hackathons = [
  { title: "Aadhrita Hack24", role: "Technical Coordinator & Mentor", file: "/hackathons/Aadhrita Hack24 - coordinator Certificate.png" },
  { title: "GenzPluz Hack24", role: "Technical Coordinator", file: "/hackathons/GenzPluz Hack24 - coordinator Certificate.png" },
  { title: "Google Solution Challenge", role: "Participant & Innovator", file: "/hackathons/Solution Challange.pdf" },
  { title: "Hack With Vizag", role: "Participant", file: "/hackathons/Hack With Vizag.pdf" },
  { title: "Sankalp Hackathon", role: "Participant & Solutions Architect", file: "/hackathons/Sankalp.pdf" }
];

const stats = [
  { number: '10+', label: 'Certifications' },
  { number: '3+', label: 'Internships' },
  { number: '2+', label: 'Hackathons' },
  { number: '15+', label: 'Technologies' },
];

const codeSnippets = [
  "def predict(X_test):",
  "model.fit(X, y)",
  "import torch.nn as nn",
  "TransformerBlock(dim=512)",
  "z = self.attention(q, k, v)",
  "const [data, setData] = useState()",
  "export default function App()",
  "loss = criterion(out, labels)",
  "Optimizing gradients...",
  "epoch_loss: 0.0421",
  "accuracy = correct / total",
  "pd.read_csv('dataset.csv')",
  "plt.imshow(image_tensor)",
  "np.mean(residuals**2)",
  "class AgenticAI(LLM):"
];

function AmbientCodeLayer() {
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none select-none font-mono text-[10px] text-blue-300/15">
      {codeSnippets.map((code, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: (i * 7) % 100 + "%", 
            y: "110%",
            rotate: (i * 15) % 40 - 20
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: "-10%",
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity, 
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute whitespace-nowrap"
        >
          {code}
        </motion.div>
      ))}
    </div>
  );
}

function FloatingOrbs() {
  const orbs = [
    { size: 400, x: "5%", y: "15%", color: "rgba(59,130,246,0.06)", dur: 12 },
    { size: 300, x: "75%", y: "55%", color: "rgba(59,130,246,0.04)", dur: 16 },
    { size: 200, x: "40%", y: "80%", color: "rgba(147,197,253,0.04)", dur: 10 },
  ];
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          style={{
            position: "absolute",
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: orb.color,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}

function SectionHeader({ title, highlight, subtitle }: { title: string; highlight: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
        {title} <span className="text-blue-400">{highlight}</span>
      </h2>
      <div className="relative w-12 h-1 bg-blue-500 mx-auto rounded-full mb-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
        />
      </div>
      {subtitle && <p className="text-blue-200/80 text-sm max-w-lg mx-auto leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

function CardReveal({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionReveal({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SkillBadge({ skill, index }: { skill: typeof techBadges[0]; index: number }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border border-white/5 hover:border-blue-400/50 transition-all cursor-default group relative"
    >
      <skill.icon className="text-blue-400" size={16} />
      <span className="font-semibold text-sm text-white">{skill.name}</span>
      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-2 py-1 rounded transition-all whitespace-nowrap z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        {skill.level}%
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-500" />
      </div>
    </motion.div>
  );
}

function SkillCategoryCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => setIsActive(!isActive)}
      className={`p-5 rounded-2xl glass-panel border border-white/5 transition-all flex flex-col justify-between group cursor-pointer ${isActive ? 'border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.1)]' : 'hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]'}`}
    >
      <div>
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
        </div>
        <h3 className={`text-base font-bold text-white mb-2 transition-colors ${isActive ? 'text-blue-400' : 'group-hover:text-blue-400'}`}>{category.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {category.skills.map((skill, idx) => (
            <span key={idx} className={`text-xs font-semibold px-2.5 py-1 rounded-md border transition-colors ${isActive ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-white/5 text-blue-100/90 border-white/10 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/20'}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-between text-xs font-semibold text-blue-300/70 mb-2 transition-all">
          <span>Proficiency</span>
          <span className={`text-blue-400 font-black transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
            {category.percentage}%
          </span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: isActive ? `${category.percentage}%` : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-blue-500 rounded-full" 
          />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-[340px] w-full group cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => !isFlipped && setIsFlipped(true)}
      onMouseLeave={() => isFlipped && setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500`}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-500/40 transition-colors"
          style={{ backfaceVisibility: "hidden" }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-30 scale-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-[#080810]/50 to-transparent" />
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Tap for Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 rounded-2xl flex flex-col bg-[#080810] border-2 border-blue-500/30 p-5 overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(59,130,246,1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="relative z-10 flex flex-col h-full">
            <h4 className="text-base font-bold text-white mb-2">{project.title}</h4>
            <p className="text-blue-200/80 text-xs leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-bold uppercase px-2.5 py-1 bg-blue-900/30 text-blue-400 border border-blue-500/20 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-white text-[#080810] font-black uppercase tracking-widest text-sm py-3 rounded-xl transition-all"
              >
                GitHub Repo <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProfileGraphic() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex justify-center lg:justify-end p-4"
    >
      <div 
        className="relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] group mx-auto lg:mr-0 cursor-pointer"
        onMouseEnter={() => setIsScanning(true)}
        onMouseLeave={() => setIsScanning(false)}
        onClick={() => setIsScanning(!isScanning)}
      >
        <div className={`absolute -top-4 -left-4 w-12 h-12 border-t-[3.5px] border-l-[3.5px] rounded-tl-2xl z-20 pointer-events-none transition-colors duration-500 ${isScanning ? 'border-blue-400' : 'border-blue-500/70'}`} />
        <div className={`absolute -top-4 -right-4 w-12 h-12 border-t-[3.5px] border-r-[3.5px] rounded-tr-2xl z-20 pointer-events-none transition-colors duration-500 ${isScanning ? 'border-blue-400' : 'border-blue-500/70'}`} />
        <div className={`absolute -bottom-4 -left-4 w-12 h-12 border-b-[3.5px] border-l-[3.5px] rounded-bl-2xl z-20 pointer-events-none transition-colors duration-500 ${isScanning ? 'border-blue-400' : 'border-blue-500/70'}`} />
        <div className={`absolute -bottom-4 -right-4 w-12 h-12 border-b-[3.5px] border-r-[3.5px] rounded-br-2xl z-20 pointer-events-none transition-colors duration-500 ${isScanning ? 'border-blue-400' : 'border-blue-500/70'}`} />

        <div className={`w-full h-full p-3 rounded-3xl glass-panel border border-white/10 relative z-10 transition-shadow duration-700 ${isScanning ? 'shadow-[0_0_60px_rgba(59,130,246,0.3)]' : 'shadow-[0_0_40px_rgba(59,130,246,0.1)]'}`}>
          <div className="w-full h-full rounded-2xl overflow-hidden relative border border-blue-500/10 bg-[#0B0C10]">
            <motion.div 
              animate={isScanning ? { y: ["-30%", "130%"] } : { y: "-100%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className={`absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-blue-500/15 to-blue-500/40 border-b-[2.5px] border-blue-400 shadow-[0_15px_40px_rgba(59,130,246,0.5)] z-30 pointer-events-none transition-opacity duration-300 ${isScanning ? 'opacity-100' : 'opacity-0'}`} 
            />
            <ImageWithFallback
              src="/profile.jpg"
              alt="Bokkena Harsha Teja"
              className={`w-full h-full object-cover transition-all duration-[1s] relative z-10 ${isScanning ? 'grayscale-0 scale-[1.03]' : 'grayscale-[80%] scale-100'}`}
            />
            <div className={`absolute inset-0 transition-colors duration-700 z-20 pointer-events-none ${isScanning ? 'bg-transparent' : 'bg-blue-500/5'}`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '9b189e10-489c-447c-b217-4f7ed2861b9a',
          ...formData
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 25 : 45);

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleTyping, 150);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const [activeArsenalTab, setActiveArsenalTab] = useState('internships');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary font-sans relative">
      <FloatingOrbs />
      <AmbientCodeLayer />
      <ParticleBackground />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-colors">
                <Code2 className="text-primary" size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                Bokkena Harsha <span className="text-primary">teja</span>
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10 capitalize">{item}</span>
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left capitalize px-4 py-3 rounded-xl transition-all ${
                      activeSection === item 
                        ? 'bg-primary/20 text-primary font-semibold' 
                        : 'text-muted-foreground hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-blue-500 font-semibold tracking-wide text-lg"
              >
                Hello, I'm
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 leading-tight pb-2"
                >
                  Bokkena <br />
                  Harsha Teja
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl md:text-4xl text-blue-200/80 font-bold tracking-tight h-[48px] flex items-center"
                >
                  <span className="text-blue-500 mr-2">{displayText}</span>
                  <span className="w-1 h-8 bg-blue-500 animate-[pulse_1s_infinite]" />
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-blue-100/90 max-w-lg text-[17px] leading-relaxed font-medium"
              >
                Engineer specializing in Agentic AI, NLP, and scalable architectures—transforming complex data models into seamless, production-grade applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-5 pt-4"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-500 text-[#0B0C10] px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2"
                >
                  View My Work <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3.5 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-white/5 hover:border-blue-500/50 transition-all"
                >
                  Contact Me
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3.5 glass-panel border-blue-500/20 text-blue-400 font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:bg-blue-500/10 hover:border-blue-500/50 transition-all flex items-center gap-2"
                >
                  Resume <Download size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 items-center pt-8 text-blue-200/80"
              >
                <a href="https://github.com/kannaharsha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/bokkena-harsha-teja/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:harshadeveloper06@gmail.com" className="hover:text-blue-500 transition-colors">
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>

            <ProfileGraphic />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={28} className="text-blue-500/70" />
        </motion.div>
      </section>

      <SectionReveal id="about" className="py-24 relative">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="About" highlight="Me" subtitle="Specialized AI Engineer dedicated to pioneering Agentic AI, NLP, and LLM architecture solutions at scale." />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-blue-100/90 text-base leading-relaxed">
                I am a results-driven AI & Machine Learning Engineer with hands-on experience building intelligent systems. Currently pursuing my B.Tech in CSE (AIML) at MVGR College of Engineering, my expertise spans Machine Learning, Natural Language Processing, and Agentic AI architectures.
              </p>
              <p className="text-blue-200/80 text-base leading-relaxed">
                My professional journey includes specialized internships in Data Engineering at AWS and Full Stack Development at EduSkills. I am deeply passionate about bridging human intent with autonomous machine execution, backed by 15+ industry-recognized certifications across cloud, deep learning, and data science.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Location", value: "Vizianagaram, India" },
                  { label: "Focus", value: "Agentic AI / NLP" },
                  { label: "Education", value: "B.Tech CSE (AIML)" },
                  { label: "Status", value: "🟢 Open for Roles" }
                ].map((item, i) => (
                  <CardReveal key={i} index={i}>
                    <motion.div
                      whileHover={{ y: -2, borderColor: "rgba(59,130,246,0.4)" }}
                      className="p-5 rounded-xl glass-panel border border-white/5 transition-all h-full"
                    >
                      <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-1">{item.label}</div>
                      <div className="text-white text-base font-semibold">{item.value}</div>
                    </motion.div>
                  </CardReveal>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <CardReveal key={i} index={i}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: "0 0 30px rgba(59,130,246,0.2)" }}
                      className="p-6 rounded-2xl glass-panel border border-white/5 hover:border-blue-400/30 text-center transition-all group"
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                        className="text-4xl font-black text-blue-400 mb-2"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-sm font-bold text-blue-200/80 uppercase tracking-wide">{stat.label}</div>
                    </motion.div>
                  </CardReveal>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 flex-shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-base font-bold text-white mb-1">Continuous Learner</div>
                  <div className="text-sm text-blue-200/80">Certified in 15+ modern AI and cloud technologies</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="skills" className="py-24 relative bg-blue-500/[0.03]">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 xl:px-16 relative z-10">
          <SectionHeader title="Technical" highlight="Arsenal" subtitle="A comprehensive matrix of expertise across the AI and Machine Learning landscape." />

          <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-4xl mx-auto">
            {techBadges.map((skill, index) => (
              <SkillBadge key={index} skill={skill} index={index} />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="experience" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h3 className="text-3xl font-bold flex items-center justify-center gap-3 text-white">
                <GraduationCap className="text-blue-400" size={28} />
                Educational <span className="text-blue-400">Journey</span>
              </h3>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-6 md:left-1/2 top-4 md:top-0 bottom-4 w-[2px] bg-blue-900/40 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.1)]"></div>
              
              <div className="relative flex flex-col md:flex-row md:justify-between items-center mb-16 md:mb-24 w-full pl-16 md:pl-0">
                <div className="md:hidden absolute left-6 top-6 -translate-x-[7px] w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#0B0C10] z-10"></div>
                <div className="w-full md:w-[45%] flex md:justify-end justify-start">
                  <div className="glass-panel p-6 md:p-8 rounded-2xl border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)] relative w-full group overflow-hidden hover:border-blue-500/60 transition-colors">
                    <div className="hidden md:block absolute top-[40%] -right-[12%] w-[12%] h-[2px] bg-blue-500/30 group-hover:bg-blue-400 transition-colors pointer-events-none"></div>
                    <motion.div 
                      initial={{ y: "-100%" }}
                      whileInView={{ y: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "linear", delay: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-10 pointer-events-none opacity-30" 
                    />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] pointer-events-none rounded-full"></div>
                    <div className="flex flex-col md:text-right text-left relative z-10">
                      <div className="flex items-center md:justify-end justify-start gap-2 text-blue-400 mb-4">
                        <span className="text-sm font-bold tracking-widest order-2 md:order-1">2023 - 2027</span>
                        <div className="bg-blue-900/40 p-2 rounded-lg border border-blue-800/50 order-1 md:order-2"><GraduationCap size={16} /></div>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">B.Tech in AIML CSE</h4>
                      <p className="text-sm md:text-base text-blue-200/80 mb-6 flex flex-wrap items-center md:justify-end justify-start gap-1.5 leading-snug">
                        MVGR College of Engineering <span className="text-blue-500 font-black text-xs leading-none">•</span> Vizianagaram
                      </p>
                      <div className="flex items-center md:justify-end justify-start">
                          <div className="bg-[#0B1A24]/90 border border-blue-900/40 text-blue-400 text-sm px-4 py-1.5 rounded-full font-bold tracking-wide shadow-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                            Current CGPA: 8.29
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#0B0C10] z-20 transition-transform hover:scale-150"></div>
                <div className="hidden md:block w-[45%]"></div>
              </div>

              <div className="relative flex flex-col md:flex-row justify-between items-center w-full pl-16 md:pl-0">
                <div className="md:hidden absolute left-6 top-6 -translate-x-[7px] w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#0B0C10] z-10"></div>
                <div className="hidden md:block w-[45%]"></div>
                <div className="hidden md:block absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#0B0C10] z-20 transition-transform hover:scale-150"></div>
                <div className="w-full md:w-[45%] flex justify-start">
                  <div className="glass-panel p-6 md:p-8 rounded-2xl border-blue-500/20 hover:border-blue-500/50 shadow-lg relative w-full group transition-colors overflow-hidden">
                    <div className="hidden md:block absolute top-[40%] -left-[12%] w-[12%] h-[2px] bg-blue-500/20 group-hover:bg-blue-400 transition-colors pointer-events-none"></div>
                    <motion.div 
                      initial={{ y: "-100%" }}
                      whileInView={{ y: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-10 pointer-events-none opacity-30" 
                    />
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 blur-[40px] pointer-events-none rounded-full"></div>
                    <div className="flex flex-col text-left relative z-10">
                      <div className="flex items-center justify-start gap-2 text-blue-400 mb-4">
                        <div className="bg-blue-900/20 p-2 rounded-lg border border-blue-800/30"><GraduationCap size={16} /></div>
                        <span className="text-sm font-bold tracking-widest text-blue-400">2021 - 2023</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">Higher Secondary (12th)</h4>
                      <p className="text-sm md:text-base text-blue-200/80 mb-6 flex flex-wrap items-center justify-start gap-1.5 leading-snug">
                        Sasi Education Institutions <span className="text-blue-600 font-black text-xs leading-none">•</span> Vizag Boyapalam
                      </p>
                      <div className="flex items-center justify-start">
                          <div className="bg-[#0B1A24]/90 border border-blue-900/40 text-blue-400 text-sm px-4 py-1.5 rounded-full font-bold tracking-wide shadow-sm flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-blue-500" />
                            Scored 96.4%
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-16">
            <SectionHeader title="Professional" highlight="Arsenal" subtitle="A curated showcase of industry experience, certified credentials, and leadership in tech." />

            <div className="space-y-12">
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                {[
                  { id: 'internships', label: 'Experience', icon: Database },
                  { id: 'certifications', label: 'Certifications', icon: GraduationCap },
                  { id: 'leadership', label: 'Leadership', icon: Zap }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveArsenalTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl glass-panel border transition-all duration-300 font-bold uppercase tracking-widest text-xs md:text-sm
                      ${activeArsenalTab === tab.id 
                        ? 'border-blue-500 bg-blue-500/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                        : 'border-white/5 text-blue-200/80 hover:border-white/20 hover:bg-white/5'}`}
                  >
                    <tab.icon size={14} className={activeArsenalTab === tab.id ? 'text-blue-500' : 'text-blue-300/70'} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeArsenalTab === 'internships' && (
                  <motion.div
                    key="internships"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid gap-6"
                  >
                    {internships.map((item, i) => (
                      <CardReveal key={i} index={i}>
                        <motion.div 
                          whileHover={{ x: 4, borderColor: "rgba(59,130,246,0.4)" }}
                          className="flex items-center gap-5 p-5 rounded-2xl glass-panel border border-white/5 group transition-all relative overflow-hidden"
                        >
                          <motion.div 
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "linear", delay: 0.2 }}
                            className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent z-10 pointer-events-none opacity-40 ml-[-50px]" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-blue-900/20 border border-blue-800/30 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                            <Cpu size={18} />
                            <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <div className="flex-grow min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-black uppercase tracking-widest px-2.5 py-0.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 rounded-full">{item.date}</span>
                              <span className="text-xs font-bold text-blue-300/70 uppercase tracking-widest truncate">{item.org}</span>
                            </div>
                            <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h4>
                          </div>

                          <a 
                            href={item.file} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-500/10 hover:border-blue-500/40 transition-all flex items-center gap-1.5"
                          >
                            Doc <ExternalLink size={12} />
                          </a>
                        </motion.div>
                      </CardReveal>
                    ))}
                  </motion.div>
                )}

                {activeArsenalTab === 'certifications' && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {certifications.map((item, i) => (
                      <motion.a 
                        href={item.file} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        key={i}
                        whileHover={{ y: -3 }}
                        className={`p-4 rounded-xl glass-panel border transition-all block group relative ${item.featured ? 'border-blue-500/50 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'border-white/5'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <CheckCircle2 size={16} className={`${item.featured ? 'text-blue-400' : 'text-blue-500/50'} group-hover:text-blue-500 transition-colors`} />
                          {item.highlight && (
                            <span className={`text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md ${item.featured ? 'bg-blue-500 text-black' : 'bg-blue-500/20 text-blue-400'}`}>
                              {item.highlight}
                            </span>
                          )}
                        </div>
                        <h4 className={`text-sm font-bold group-hover:text-blue-400 transition-colors mb-1 leading-tight ${item.featured ? 'text-white' : 'text-blue-100/90'}`}>{item.title}</h4>
                        <p className="text-xs text-blue-300/70 uppercase font-bold tracking-wider">{item.org}</p>
                      </motion.a>
                    ))}
                  </motion.div>
                )}

                {activeArsenalTab === 'leadership' && (
                  <motion.div
                    key="leadership"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {hackathons.map((item, i) => (
                      <motion.div 
                        key={i}
                        className="p-8 rounded-3xl glass-panel border-white/5 border-l-2 border-l-blue-500/40 group overflow-hidden"
                      >
                        <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">Technical Leadership</div>
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-base text-blue-200/80 mb-6">{item.role}</p>
                        <a href={item.file} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-500 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
                          View Credentials <ArrowRight size={14} />
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="projects" className="py-24 relative bg-blue-500/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="AI" highlight="Projects" subtitle="A showcase of advanced machine learning models and intelligent software systems." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.a
              href="https://github.com/kannaharsha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass-panel border border-white/10 hover:border-blue-400/30 font-bold text-sm transition-all"
            >
              <Github size={20} className="text-blue-400" />
              Explore All AI Repositories
            </motion.a>
          </div>
        </div>
      </SectionReveal>


      <section id="contact" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader title="Get In" highlight="Touch" subtitle="Have a project in mind or want to collaborate? Let's build something amazing together." />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-[35%] space-y-4 flex-shrink-0">
                {[
                  { icon: Mail, label: "Email", value: "harshadeveloper06@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 8328185775" },
                  { icon: MapPin, label: "Location", value: "Vizianagaram, Andhra Pradesh, India" }
                ].map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2, borderColor: "rgba(59,130,246,0.4)" }}
                    className="glass-panel p-5 rounded-2xl flex items-center gap-5 border border-white/5 transition-all group bg-[#0a0a0f]/80"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-300/70 mb-0.5">{label}</p>
                      <p className="text-white text-sm md:text-base font-semibold">{value}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <p className="text-xs font-semibold text-blue-300/70 mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    {[  
                      { href: "https://github.com/kannaharsha", icon: Github },
                      { href: "https://www.linkedin.com/in/bokkena-harsha-teja/", icon: Linkedin }
                    ].map(({ href, icon: Icon }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, borderColor: "rgba(59,130,246,0.4)", color: "#60a5fa" }}
                        className="w-12 h-12 rounded-xl glass-panel border border-white/5 bg-[#0a0a0f]/80 flex items-center justify-center text-blue-200/80 transition-all"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:w-[65%]">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-blue-500/50 rounded-tl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-blue-500/50 rounded-br pointer-events-none" />
                
                <div className="glass-panel p-8 rounded-2xl border border-white/5 min-h-[400px] flex flex-col justify-center relative overflow-hidden bg-[#0a0a0f]/40 backdrop-blur-md">
                  <AnimatePresence mode="wait">
                    {formStatus === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center text-center py-12"
                      >
                        <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                          <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Message Received</h3>
                        <p className="text-blue-200/80 text-sm max-w-sm leading-relaxed">
                          Thank you for reaching out. Your message has been safely routed to my inbox, and I will get back to you within 24-48 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleFormSubmit}
                        className="flex flex-col gap-5"
                      >
                        <div className="flex flex-col gap-5">
                          {[
                            { label: "Name", type: "text", field: "name", placeholder: "Enter your name" },
                            { label: "Email", type: "email", field: "email", placeholder: "Enter your email" }
                          ].map(({ label, type, field, placeholder }) => (
                            <div key={field}>
                              <label className="block text-xs mb-2 text-blue-200/80 font-medium">{label}</label>
                              <input
                                required
                                type={type}
                                value={formData[field as keyof typeof formData]}
                                onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                                className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-600 text-sm transition-all"
                                placeholder={placeholder}
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <label className="block text-xs mb-2 text-blue-200/80 font-medium">Message</label>
                          <textarea
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full bg-[#050508]/80 border border-white/5 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-600 text-sm resize-none transition-all"
                            placeholder="Enter your message"
                          />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        >
                          {formStatus === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : null}
                          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                          {formStatus !== 'submitting' && (
                            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 2L11 13" />
                              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                            </svg>
                          )}
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 relative overflow-hidden bg-[#030306]">
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="w-full px-6 md:px-12 xl:px-20 relative z-10 max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
            <div className="flex flex-col items-center lg:items-start max-w-sm text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <Code2 className="text-blue-400" size={16} />
                </div>
                <span className="font-bold text-lg tracking-wider text-white">Bokkena Harsha <span className="text-blue-400">teja</span></span>
              </div>
              <p className="text-blue-200/80 text-xs leading-relaxed">
                Building the next generation of scalable intelligence systems. Specialized in Machine Learning, Generative AI, and Full Stack Development.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-blue-200/80 hover:text-blue-400 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-colors" /> {item}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://github.com/kannaharsha", icon: Github },
                { href: "https://www.linkedin.com/in/bokkena-harsha-teja/", icon: Linkedin },
                { href: "mailto:harshadeveloper06@gmail.com", icon: Mail }
              ].map(({ href, icon: Icon }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, backgroundColor: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)" }} 
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-blue-200/80 hover:text-blue-400 transition-all shadow-sm bg-white/5 lg:bg-transparent"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-blue-300/70 font-mono tracking-wider">
              © {new Date().getFullYear()} BOKKENA HARSHA TEJA
            </div>
            <div className="text-xs text-blue-300/70 tracking-wide flex items-center gap-2">
              Designed with precision <Zap size={12} className="text-blue-500" /> Vizianagaram, India
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-50 hover:scale-110 transition-transform"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
