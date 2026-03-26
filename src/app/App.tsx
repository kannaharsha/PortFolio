import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
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
  CheckCircle2
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ParticleBackground } from './components/ParticleBackground';

const skills = [
  { icon: Zap, title: 'Large Language Models (LLMs)', description: 'Fine-tuning, prompt engineering, and building agentic architectures with advanced LLMs' },
  { icon: Database, title: 'Machine Learning', description: 'Developing predictive models and deep learning networks in Python (Codebasics Data Science)' },
  { icon: Code2, title: 'Natural Language Processing', description: 'Extracting insights and sentiment from unstructured text data using modern NLP techniques' },
  { icon: Globe, title: 'Computer Vision', description: 'Implementing image recognition and classification pipelines (like Car Damage Prediction)' },
  { icon: Palette, title: 'AI Automation Agents', description: 'Connecting specialized AI models to automate workflows and accelerate digital solutions' },
  { icon: Smartphone, title: 'Technical Communication', description: 'Demystifying complex ML concepts and mentoring peers (Aadhrita Hack24 Coordinator)' },
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
  { title: "Codebasics Data Science & AI Bootcamp Graduate", org: "Codebasics (Main Certificate)", file: "/certifications/codebasics/CB-BT-3-611984.pdf" },
  { title: "AWS Academy Graduate - Data Engineering", org: "AWS", file: "/certifications/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20251212-30-ogpz2y.pdf" },
  { title: "AWS Cloud Practitioner", org: "AWS", file: "/certifications/23331A4207_AWS.pdf" },
  { title: "Gen AI and Agentic AI", org: "Codebasics", file: "/certifications/codebasics/Gen AI and Agentic AI.pdf" },
  { title: "Natural Language Processing", org: "Codebasics", file: "/certifications/codebasics/Natural langauge Processing.pdf" },
  { title: "Deep Learning", org: "Codebasics", file: "/certifications/codebasics/Deep learning.pdf" },
  { title: "Machine Learning", org: "Codebasics", file: "/certifications/codebasics/Machine Learning.pdf" },
  { title: "Math and Statistics", org: "Codebasics", file: "/certifications/codebasics/Math and Statistics.pdf" },
  { title: "SQL and Data Science", org: "Codebasics", file: "/certifications/codebasics/SQL and Data Science.pdf" },
  { title: "Python (Codebasics)", org: "Codebasics", file: "/certifications/codebasics/Python.pdf" },
  { title: "Python Essentials 2", org: "Cisco Networking", file: "/certifications/Python_Essentials_2_certificate_harshabokkena0001-gmail-com_06b97348-a3f1-45f6-96b6-31f6c1262973.pdf" },
  { title: "TATA Forage Virtual Simulation", org: "TATA", file: "/certifications/TATA Forage.pdf" },
  { title: "Cisco Networking Certificate", org: "Cisco", file: "/certifications/cisco on feb-5th issued.pdf" },
  { title: "Python & Django Framework", org: "Udemy / Online", file: "/certifications/python and django frame worrk and html5 stack completed course.pdf" },
  { title: "Python for Deep Learning & Neural Networks", org: "Udemy / Online", file: "/certifications/python for deep learning build neural networks in python.pdf" },
  { title: "Web & DevOps Certificate", org: "Online", file: "/certifications/wed-devops-certificate.pdf" },
  { title: "Artificial Intelligence & Machine Learning", org: "Online", file: "/certifications/AIML.pdf" },
  { title: "Quantum Computing", org: "Online", file: "/certifications/Quantam Computing.jpg" }
];

const internships = [
  { title: "AWS Data Engineering Internship", org: "AWS / AICTE", date: "2024", file: "/internships/AWS Data Engineering.pdf" },
  { title: "Java Full Stack Developer Virtual Internship", org: "EduSkills / AICTE", date: "2024", file: "/internships/Java Full Stack Developer Virtual Internship.pdf" },
  { title: "Smart Internz", org: "SmartInternz / AICTE", date: "2024", file: "/internships/Smart Internz.pdf" },
  { title: "Industrial Training 2024-2025", org: "Industry", date: "2024-2025", file: "/internships/industrial certificate 2024-2025 (dec-jan).jpg" }
];

const hackathons = [
  { title: "Aadhrita Hack24", role: "Technical Coordinator", file: "/hackathons/Aadhrita Hack24 - coordinator Certificate - Bokkena Harsha Teja.png" },
  { title: "Appreciation Certificate", role: "Participant / Contributor", file: "/hackathons/Bokkena_Harsha_Teja_Appreciation_Certificate.png" }
];

const stats = [
  { number: '10+', label: 'Certifications' },
  { number: '3+', label: 'Internships' },
  { number: '2+', label: 'Hackathons' },
  { number: '15+', label: 'Technologies' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary font-sans relative">
      <ParticleBackground />
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl text-blue-500"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-blue-500' : 'text-white hover:text-blue-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl"
          >
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 text-white hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Ambient Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#020510]/80 z-0 pointer-events-none"></div>
        
        <motion.div  
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"
        ></motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
              >
                Hello, I'm
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl mb-4 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
              >
                Harsha Teja Bokkena
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium"
              >
                AI, ML & NLP Engineer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground mb-10 max-w-lg text-lg leading-relaxed"
              >
                Passionate about designing intelligent systems, advanced LLM agents, and robust machine learning infrastructure. Dedicated to solving complex problems using state-of-the-art Natural Language Processing and Deep Learning models.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="border border-border bg-white/5 backdrop-blur-sm text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Contact Me
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Harsha_Teja_Bokkena_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-white/5 backdrop-blur-sm text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  Resume
                  <Download size={20} />
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-8"
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://github.com/kannaharsha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="https://www.linkedin.com/in/bokkena-harsha-teja/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  href="mailto:harshadeveloper06@gmail.com"
                  className="text-white hover:text-blue-500 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
                {/* Concentric circles background - multiple layers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full rounded-full border border-blue-500/10"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[90%] h-[90%] rounded-full border border-blue-500/15"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[80%] h-[80%] rounded-full border border-blue-500/20"
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-500/5 to-transparent"
                  ></motion.div>
                </div>

                {/* Glowing effect behind image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[65%] h-[65%] bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-purple-500/20 rounded-full blur-3xl"></div>
                </div>

                {/* Main profile image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[60%] h-[60%] rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl z-10"
                  style={{
                    boxShadow: '0 0 60px rgba(59, 130, 246, 0.3), 0 0 100px rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <ImageWithFallback
                    src="/profile.jpg"
                    alt="Harsha Teja Bokkena - Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Accent dots/elements */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/4 right-0 w-3 h-3 bg-blue-500 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, delay: 1, repeat: Infinity }}
                  className="absolute bottom-1/3 left-0 w-2 h-2 bg-purple-500 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, delay: 2, repeat: Infinity }}
                  className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-blue-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background/40 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-12 text-center font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-muted-foreground text-lg leading-relaxed"
              >
                <p>
                  I am a specialized Artificial Intelligence Engineer entirely focused on Machine Learning, Natural Language Processing, and large language model (LLM) architectures. Over my academic and professional journey, I've earned over 10 industry-recognized certifications across AI, data science, and modern algorithms.
                </p>
                <p>
                  My work revolves around designing intelligent, agentic AI systems that bridge the gap between human language and machine execution. Whether I'm building computer vision pipelines, fine-tuning LLMs, or developing intelligent chatbots in Python, I am deeply passionate about the frontier of modern AI capabilities.
                </p>
                <p>
                  When I'm not training models, you'll find me exploring emerging computational fields like quantum computing or sharing my technical insights through hackathons like Aadhrita Hack24. I am always looking for the next challenging NLP or deep learning problem to solve!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass-panel rounded-2xl p-6 text-center"
                  >
                    <div className="text-4xl md:text-5xl text-primary font-bold mb-3">{stat.number}</div>
                    <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
              A diverse skill set covering the full spectrum of modern web development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-8 group border border-white/5"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-16 text-center font-bold">
              My <span className="text-primary">Experience & Credentials</span>
            </h2>

            <div className="space-y-16">
              {/* Internships */}
              <div>
                <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Code2 className="text-primary" /> Internships</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {internships.map((item, i) => (
                    <a href={item.file} target="_blank" rel="noopener noreferrer" key={i} className="block glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">{item.date}</span>
                          <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.org}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hackathons */}
              <div>
                <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Zap className="text-primary" /> Hackathons</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {hackathons.map((item, i) => (
                    <a href={item.file} target="_blank" rel="noopener noreferrer" key={i} className="block glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </div>
                      <p className="text-muted-foreground">{item.role}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Globe className="text-primary" /> Certifications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((item, i) => (
                    <a href={item.file} target="_blank" rel="noopener noreferrer" key={i} className="block glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors pr-4">{item.title}</h4>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{item.org}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background/40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
              A selection of my recent work showcasing various technologies and solutions
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="glass-panel glass-panel-hover rounded-2xl overflow-hidden group border border-white/5 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col relative z-20 -mt-8">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary/10 text-primary text-xs px-4 py-1.5 rounded-full border border-primary/20 font-medium tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      View on GitHub
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-center font-bold">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={handleFormSubmit}
              className="space-y-6 glass-panel p-8 md:p-12 rounded-3xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-3 text-muted-foreground font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-3 text-muted-foreground font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm mb-3 text-muted-foreground font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-3 text-muted-foreground font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full mt-6 bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle2 size={20} />
                    Message Sent!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <X size={20} />
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={20} />
                  </>
                )}
              </motion.button>
              
              {formStatus === 'success' && (
                <p className="text-green-500 text-center text-sm font-medium mt-4">
                  Thank you! Your message has been successfully sent.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500 text-center text-sm font-medium mt-4">
                  Something went wrong. Please ensure you have added a valid Web3Forms API Key or try again later.
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground text-sm font-medium tracking-wide">
              © 2026 Harsha Teja Bokkena. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/kannaharsha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bokkena-harsha-teja/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:harshadeveloper06@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }}
        style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 p-4 bg-primary text-primary-foreground rounded-full shadow-lg border border-white/10 z-50 hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}