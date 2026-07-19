import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
} from "react";

// --- Type Definitions ---
interface Theme {
  background: string;
  textPrimary: string;
  textSecondary: string;
  cardBg: string;
  borderColor: string;
  // primary: string;
  textTertiary: string;
  textTertiaryHover: string;
  bgTertiary: string;
  bgTertiaryHover: string;
  // primaryHover: string;
  shadow: string;
}

interface Themes {
  [key: string]: Theme;
}

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  themes: Themes;
}

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  description: string[];
  techStack: string[];
}

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}

interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  resumeUrl: string;
  about: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: { [key: string]: string[] };
}

// --- Theme Setup ---
const themes: Themes = {
  dark: {
    background: "bg-slate-900",
    textPrimary: "text-white",
    textSecondary: "text-slate-300",
    cardBg: "bg-slate-800",
    borderColor: "border-slate-700",
    // primary: 'cyan-500',
    textTertiary: "text-cyan-500",
    textTertiaryHover: "hover:text-cyan-400",
    bgTertiary: "bg-cyan-500",
    bgTertiaryHover: "hover:bg-cyan-400",
    shadow: "shadow-cyan-500/20",
  },
  light: {
    background: "bg-gray-100",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    cardBg: "bg-white",
    borderColor: "border-gray-200",
    // primary: 'blue-600',
    // primaryHover: 'hover:bg-blue-500',
    textTertiary: "text-blue-600",
    textTertiaryHover: "hover:text-blue-500",
    bgTertiary: "bg-blue-600",
    bgTertiaryHover: "hover:bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Data from your resume ---
const portfolioData: PortfolioData = {
  name: "Niyam Muliya",
  title: "Software Engineer",
  email: "niyam239@gmail.com",
  phone: "+91 9879407741",
  location: "Surat, India",
  linkedin: "https://www.linkedin.com/in/niyam-muliya",
  github: "https://github.com/niyam239",
  photoUrl: "/portrait.png",
  resumeUrl: "#", // Placeholder for resume download link
  about:
    "I am a Full Stack Web Developer with 3+ years of experience building modern, scalable web applications. My core skills include React, TypeScript, and Node.js, with a strong focus on writing clean, maintainable code and delivering smooth user experiences. I have worked on improving backend API performance and developing features that add real value to users. I am also enthusiastic about AI and actively explore ways to learn and apply AI concepts to enhance development and create smarter solutions. I thrive in collaborative environments, adapt quickly to new challenges, and enjoy continuous learning to grow as a developer.",
  experience: [
    {
      title: "Software Engineer",
      company: "Jeavio India Pvt. Ltd.",
      dates: "May 2023 - Present",
      description: [
        "Optimized dashboard APIs by parallelizing MongoDB and PostgreSQL queries using Promises and refining aggregations, improving API performance by 75%.",
        "Contributed to two major data migrations, improving system performance and enabling better data hierarchy.",
        "Resolved a critical live QR code issue by identifying brand mismatches via error logs, ensuring accurate event tracking.",
        "Integrated AWS Rekognition for facial recognition-based image matching, improving automation in user identification workflows.",
        "Built reusable UI components as part of a shared design system, improving consistency across multiple event platforms.",
      ],
      techStack: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Postgres",
        "MongoDB",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Jeavio India Pvt. Ltd.",
      dates: "Dec 2022 - April 2023",
      description: [
        "Developed a Talent Management Application with features like multi-level approvals, role-based access, and client-specific team allocation.",
        "Worked within an Agile development environment, participating in sprints and daily stand-ups.",
        "Deployed the application on AWS, gaining hands-on experience with cloud hosting, environment configurations, and CI/CD pipelines.",
      ],
      techStack: ["React.js", "Node.js", "AWS", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "Student Forum",
      description:
        "A scalable socio-academic portal enabling 100+ students to share notes, post event updates, and ask academic questions. Developed with modular REST APIs.",
      tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      liveUrl: "#",
      repoUrl: "https://github.com/niyam239",
    },
  ],
  skills: {
    "Languages & Frameworks": [
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "C++",
      "Python",
    ],
    Databases: ["PostgreSQL", "MongoDB"],
    "Tools & Platforms": [
      "Git",
      "Docker",
      "Amazon Web Services (AWS)",
      "CI/CD",
      "Jest",
    ],
    Concepts: [
      "Distributed Systems",
      "REST APIs",
      "Data Structures",
      "Algorithms",
      "System Design",
    ],
  },
};

interface IconProps {
  className?: string;
}

// --- SVG Icons (as components for reusability) ---
const IconGithub: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const IconLinkedin: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const IconMail: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);
const IconExternalLink: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const IconMenu: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
const IconX: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const IconSun: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);
const IconMoon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

// --- Components ---

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Header must be used within a ThemeProvider");
  }
  const { theme, toggleTheme, themes: allThemes } = themeContext;
  const currentTheme = allThemes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];
  const headerBgClass = isScrolled
    ? theme === "dark"
      ? "bg-slate-900/80 backdrop-blur-lg shadow-lg"
      : "bg-white/80 backdrop-blur-lg shadow-lg"
    : "bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            aria-label={portfolioData.name}
            className={`flex items-center justify-center w-11 h-11 rounded-2xl   text-lg font-bold tracking-wide text-white ${currentTheme.bgTertiary} shadow-md`}
          >
            NM
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`${currentTheme.textSecondary} ${currentTheme.textTertiaryHover} transition-colors duration-300 font-medium`}
              >
                {link}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`${currentTheme.textSecondary} ${currentTheme.textTertiaryHover} transition-colors duration-300`}
            >
              {theme === "dark" ? (
                <IconSun className="w-6 h-6" />
              ) : (
                <IconMoon className="w-6 h-6" />
              )}
            </button>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`${currentTheme.textPrimary} mr-4`}
            >
              {theme === "dark" ? (
                <IconSun className="w-6 h-6" />
              ) : (
                <IconMoon className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={currentTheme.textPrimary}
            >
              {isOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden ${
          theme === "dark" ? "bg-slate-900/95" : "bg-white/95"
        } backdrop-blur-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                currentTheme.textSecondary
              } ${currentTheme.textTertiaryHover} ${
                theme === "dark" ? "hover:bg-slate-800" : "hover:bg-gray-200"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Hero must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${currentTheme.background} ${currentTheme.textPrimary} pt-20`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left Column (Text): Spans 3 columns on medium screens */}
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className={currentTheme.textTertiary}>
                {portfolioData.name}
              </span>
            </h1>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${currentTheme.textTertiary} mb-8`}
            >
              {portfolioData.title}
            </h2>
            <div className="flex justify-center md:justify-start items-center flex-wrap gap-4 mt-10">
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${
                  theme === "dark"
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-white hover:bg-gray-200 border border-gray-300"
                } text-${
                  currentTheme.textPrimary
                } font-semibold py-3 px-6 rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg`}
              >
                <IconLinkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${
                  theme === "dark"
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-white hover:bg-gray-200 border border-gray-300"
                } text-${
                  currentTheme.textPrimary
                } font-semibold py-3 px-6 rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg`}
              >
                <IconGithub className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>

          {/* Right Column (Image): Spans 2 columns on medium screens */}
          <div className="md:col-span-2 flex justify-center items-center mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-full blur-2xl opacity-100 animate-pulse-slow bg-gradient-to-br ${
                  theme === "dark"
                    ? "from-cyan-500 via-slate-800 to-slate-900"
                    : "from-blue-500 via-blue-100 to-white"
                }`}
              />

              {/* Border */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-500" />

              {/* Image Clip */}
              <div
                className="
              absolute
              inset-x-1
              bottom-1
              h-[108%]
              overflow-hidden
              rounded-b-full
          "
              >
                <img
                  src={portfolioData.photoUrl}
                  alt={portfolioData.name}
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    bottom-[-8px]
                    h-[115%]
                    w-auto
                    max-w-none
                    object-contain
                    z-10
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Section must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];
  return (
    <section id={id} className={`py-20 sm:py-28 ${currentTheme.background}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${currentTheme.textPrimary} mb-12 text-center`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("About must be used within a ThemeProvider");
  const { themes, theme } = themeContext;
  const currentTheme = themes[theme];
  return (
    <Section id="about" title="About Me">
      <div
        className={`max-w-4xl mx-auto text-center text-lg ${currentTheme.textSecondary} leading-relaxed`}
      >
        <p>{portfolioData.about}</p>
      </div>
    </Section>
  );
};

const Experience: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Experience must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative max-w-4xl mx-auto">
        <div
          className={`hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 ${
            theme === "dark" ? "bg-slate-700" : "bg-gray-300"
          }`}
          aria-hidden="true"
        ></div>
        <div className="space-y-16">
          {portfolioData.experience.map((job, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div
                className={`flex-1 md:text-right md:pr-12 mb-4 md:mb-0 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-3"
                }`}
              >
                <h3 className={`text-xl font-bold ${currentTheme.textPrimary}`}>
                  {job.title}
                </h3>
                <p className={`text-lg ${currentTheme.textTertiary}`}>
                  {job.company}
                </p>
                <p className={`text-sm ${currentTheme.textSecondary}`}>
                  {job.dates}
                </p>
              </div>
              <div
                className={`md:hidden w-0.5 h-6 ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-300"
                }`}
                aria-hidden="true"
              ></div>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full ${
                  currentTheme.bgTertiary
                } border-4 ${
                  theme === "dark" ? "border-slate-900" : "border-gray-100"
                } z-10 md:order-2`}
              ></div>
              <div
                className={`md:hidden w-0.5 h-6 ${
                  theme === "dark" ? "bg-slate-700" : "bg-gray-300"
                }`}
                aria-hidden="true"
              ></div>
              <div
                className={`flex-1 md:pl-12 ${
                  index % 2 === 0 ? "md:order-3" : "md:order-1"
                }`}
              >
                <div
                  className={`${currentTheme.cardBg} p-6 rounded-lg shadow-lg`}
                >
                  <ul
                    className={`list-disc list-inside space-y-2 ${currentTheme.textSecondary}`}
                  >
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Projects: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Projects must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className={`${currentTheme.cardBg} rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:-translate-y-2 hover:${currentTheme.shadow} max-w-sm mx-auto`}
          >
            <div className="p-6 flex-grow flex flex-col">
              <h3
                className={`text-xl font-bold ${currentTheme.textPrimary} mb-2`}
              >
                {project.title}
              </h3>
              <p className={`${currentTheme.textSecondary} mb-4 flex-grow`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`${
                      theme === "dark" ? "bg-slate-700" : "bg-gray-200"
                    } ${
                      currentTheme.textTertiary
                    } text-xs font-semibold px-2.5 py-1 rounded-full`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* <div
              className={`${currentTheme.cardBg}/50 flex items-center justify-end gap-4 mt-auto p-6 border-t ${currentTheme.borderColor}`}
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.textSecondary} ${currentTheme.textTertiaryHover} transition-colors`}
              >
                <IconGithub className="w-6 h-6" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.textSecondary} ${currentTheme.textTertiaryHover} transition-colors`}
              >
                <IconExternalLink className="w-6 h-6" />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </Section>
  );
};

const Skills: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Skills must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="max-w-6xl mx-auto space-y-8">
        {Object.entries(portfolioData.skills).map(([category, skillsList]) => (
          <div key={category}>
            <h3
              className={`text-xl font-semibold ${currentTheme.textTertiary} mb-4 text-center`}
            >
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skillsList.map((skill) => (
                <div
                  key={skill}
                  className={`${currentTheme.cardBg} ${
                    currentTheme.textSecondary
                  } font-medium py-2 px-5 rounded-lg shadow-md transition-all ${
                    theme === "dark"
                      ? "hover:bg-slate-700"
                      : "hover:bg-gray-200"
                  } hover:${currentTheme.textPrimary}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Contact: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Contact must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className={`text-lg ${currentTheme.textSecondary} mb-8`}>
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out if you have a project in mind, want to connect, or just
          say hi!
        </p>
        <a
          href={`mailto:${portfolioData.email}`}
          className={`inline-block ${currentTheme.bgTertiary} ${currentTheme.bgTertiaryHover} text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:-translate-y-1`}
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

const Footer: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("Footer must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];
  return (
    <footer
      className={`${currentTheme.background} border-t ${currentTheme.borderColor} text-slate-400`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.textTertiaryHover} transition-colors ${currentTheme.textSecondary}`}
          >
            <IconGithub className="w-6 h-6" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.textTertiaryHover} transition-colors ${currentTheme.textSecondary}`}
          >
            <IconLinkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className={`${currentTheme.textTertiaryHover} transition-colors ${currentTheme.textSecondary}`}
          >
            <IconMail className="w-6 h-6" />
          </a>
        </div>
        <p className={currentTheme.textSecondary}>
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext)
    throw new Error("AppContent must be used within a ThemeProvider");
  const { theme, themes } = themeContext;
  const currentTheme = themes[theme];

  return (
    <div className={`${currentTheme.background}`}>
      {/* Global styles for smooth scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes pulse-slow {
          50% {
            opacity: .4;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
