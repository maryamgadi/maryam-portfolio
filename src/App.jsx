import { useState } from 'react'
import profilePhoto from './assets/profile.png'
import './App.css'

const content = {
  fr: {
    nav: ['À propos', 'Expériences', 'Projets', 'Parcours', 'Contact'],
    available: 'Candidate · More Than a Hack 2027',
    eyebrow: 'Étudiante ingénieure · IA, data & systèmes',
    title: <>Je transforme les données<br /><em>en décisions intelligentes.</em></>,
    intro: "Étudiante en 5ème année du cycle ingénieur en Génie Informatique à l'ENSA de Fès. Passionnée par l'IA, la data et le développement de solutions utiles, je souhaite contribuer à des projets qui font progresser la performance dans le sport.",
    cta: 'Découvrir mon travail',
    contact: 'Me contacter',
    location: 'Fès, Maroc',
    aboutLabel: '01 — À propos',
    aboutTitle: 'Une ingénieure curieuse, entre données et impact.',
    aboutText: "Passionnée par l'Intelligence Artificielle, le Machine Learning et l'analyse de données, j'aime transformer des informations complexes en outils simples et utiles. Mon parcours combine rigueur algorithmique, développement et culture DevOps — des bases que je souhaite mettre au service d'une équipe pluridisciplinaire dans le sport.",
    stats: [['05', 'ème année ingénieur'], ['09', 'projets réalisés'], ['03', 'langues parlées']],
    experienceLabel: '02 — Expériences professionnelles',
    experienceTitleSection: 'Des expériences qui relient<br />la technologie au réel.',
    experienceItems: [
      { number: '01', title: 'Reconnaissance automatique de plans architecturaux', meta: 'Wed3v · GH Travaux · Projet de fin d’année', description: "Conception d’un système d’IA capable d’extraire automatiquement, à partir de plans d’architecte, les quantités nécessaires à l’établissement d’un avant-métré pour un pré-devis de construction. Contribution au moteur d’extraction, au moteur de gammes de métré, à la base de connaissances métier et au blog pédagogique de ghtravaux.com.", tags: ['Python', 'Computer Vision', 'OCR', 'Pydantic', 'YAML'] },
      { number: '02', title: 'Étude d’une infrastructure hyperconvergée', meta: 'ENSAF · Stage d’initiation', description: 'Étude comparative et dimensionnement d’une solution Dell VxRail afin d’optimiser les performances, la disponibilité et la scalabilité du datacenter de l’ENSA de Fès.', tags: ['Dell VxRail', 'HCI', 'Datacenter', 'Infrastructure'] },
    ],
    projectLabel: '03 — Projets sélectionnés',
    projectTitle: 'Des projets qui répondent<br />à de vrais enjeux.',
    projectHint: 'Une sélection de projets qui illustrent mon profil technique',
    projects: [
      { number: '01', name: 'ClaimGuardAI', type: 'IA · Hackathon', description: "Système intelligent de validation de documents pour automatiser la vérification des dossiers d'assurance.", tags: ['Python', 'OCR', 'NLP', 'Flask'] },
      { number: '02', name: 'ImageLab', type: 'Générative AI', description: "Application Streamlit de génération d'images avec Stable Diffusion et LoRA, et historique stocké dans SQLite.", tags: ['Python', 'Streamlit', 'LoRA', 'SQLite'] },
      { number: '03', name: 'AWS TerraDeploy', type: 'Cloud · DevOps', description: "Infrastructure AWS automatisée avec Terraform pour déployer une application conteneurisée à Stockholm.", tags: ['AWS', 'Terraform', 'Docker'] },
      { number: '04', name: 'SNCF Sales', type: 'Data · BI', description: "Pipeline BI complet pour analyser les performances et la ponctualité du trafic ferroviaire.", tags: ['Talend', 'SQL', 'Power BI'] },
    ],
    journeyLabel: '04 — Parcours & expertise',
    journeyTitle: 'Construire une base solide,<br />un projet après l’autre.',
    education: 'Formation',
    educationItems: [
      ['2022 — aujourd’hui', 'Cycle Ingénieur en Génie Informatique · 5ème année', 'ENSA de Fès'],
      ['2022 — 2024', 'Cycle préparatoire', 'ENSA de Fès'],
      ['2022', 'Baccalauréat Sciences Mathématiques B', 'Institut Maison des Sciences'],
    ],
    skills: 'Compétences',
    skillGroups: [
      ['Développement', 'Python · C/C++ · Java · .NET · Spring Boot'],
      ['IA & Data', 'Machine Learning · NLP · OCR · Power BI'],
      ['Cloud & DevOps', 'Docker · Kubernetes · AWS · Terraform · GitHub Actions'],
      ['Bases de données', 'SQL · MongoDB · Cassandra · Neo4j'],
    ],
    contactLabel: '04 — Échangeons',
    contactTitle: <>Un projet ambitieux<br /><em>en tête ?</em></>,
    contactText: "Je suis prête à apprendre, collaborer et construire avec une équipe des solutions capables de transformer la donnée sportive en véritables insights.",
    email: 'Écrire un email',
    footer: 'Conçu et développé avec React · 2026',
  },
  en: {
    nav: ['About', 'Experience', 'Projects', 'Journey', 'Contact'],
    available: 'Candidate · More Than a Hack 2027',
    eyebrow: 'Engineering student · AI, data & systems',
    title: <>I turn data<br /><em>into intelligent decisions.</em></>,
    intro: "Final-year Computer Engineering student at ENSA Fez. Passionate about AI, data and useful software, I want to contribute to projects that help improve performance in sport.",
    cta: 'Explore my work',
    contact: 'Get in touch',
    location: 'Fez, Morocco',
    aboutLabel: '01 — About',
    aboutTitle: 'A curious engineer, between data and impact.',
    aboutText: 'Passionate about Artificial Intelligence, Machine Learning and data analysis, I enjoy turning complex information into simple, useful tools. My background combines algorithmic thinking, development and a DevOps mindset — foundations I want to bring to a multidisciplinary sports team.',
    stats: [['05', 'th year of engineering'], ['09', 'projects completed'], ['03', 'spoken languages']],
    experienceLabel: '02 — Professional experience',
    experienceTitleSection: 'Experiences that connect<br />technology to real needs.',
    experienceItems: [
      { number: '01', title: 'Architectural plans recognition system', meta: 'Wed3v · GH Travaux · Year-end project', description: 'Designed an AI system that automatically extracts, from architectural drawings, the quantities required to produce a preliminary bill of quantities for construction estimates. Contributed to the extraction engine, quantity-surveying rules, domain knowledge base and educational blog for ghtravaux.com.', tags: ['Python', 'Computer Vision', 'OCR', 'Pydantic', 'YAML'] },
      { number: '02', title: 'Hyperconverged infrastructure study', meta: 'ENSAF · Introductory internship', description: 'Compared and sized a Dell VxRail solution to improve the performance, availability and scalability of the ENSA Fez data center.', tags: ['Dell VxRail', 'HCI', 'Data center', 'Infrastructure'] },
    ],
    projectLabel: '03 — Selected projects',
    projectTitle: 'Projects that answer<br />real-world challenges.',
    projectHint: 'A selection of projects that showcase my technical profile',
    projects: [
      { number: '01', name: 'ClaimGuardAI', type: 'AI · Hackathon', description: 'Intelligent document validation system that automates the review of insurance claims.', tags: ['Python', 'OCR', 'NLP', 'Flask'] },
      { number: '02', name: 'ImageLab', type: 'Generative AI', description: 'Streamlit image generation app using Stable Diffusion and LoRA, with history stored in SQLite.', tags: ['Python', 'Streamlit', 'LoRA', 'SQLite'] },
      { number: '03', name: 'AWS TerraDeploy', type: 'Cloud · DevOps', description: 'Terraform-powered AWS infrastructure for deploying a containerized application in Stockholm.', tags: ['AWS', 'Terraform', 'Docker'] },
      { number: '04', name: 'SNCF Sales', type: 'Data · BI', description: 'Complete BI pipeline for analyzing railway traffic performance and punctuality.', tags: ['Talend', 'SQL', 'Power BI'] },
    ],
    journeyLabel: '04 — Journey & expertise',
    journeyTitle: 'Building a strong foundation,<br />one project at a time.',
    education: 'Education',
    educationItems: [
      ['2022 — present', 'Computer Engineering degree · Final year', 'ENSA Fez'],
      ['2022 — 2024', 'Preparatory cycle', 'ENSA Fez'],
      ['2022', 'Scientific Baccalaureate', 'Institut Maison des Sciences'],
    ],
    skills: 'Skills',
    skillGroups: [
      ['Development', 'Python · C/C++ · Java · .NET · Spring Boot'],
      ['AI & Data', 'Machine Learning · NLP · OCR · Power BI'],
      ['Cloud & DevOps', 'Docker · Kubernetes · AWS · Terraform · GitHub Actions'],
      ['Databases', 'SQL · MongoDB · Cassandra · Neo4j'],
    ],
    contactLabel: '04 — Let’s connect',
    contactTitle: <>Have an ambitious<br /><em>project in mind?</em></>,
    contactText: 'I am ready to learn, collaborate and build solutions that turn sports data into meaningful insights.',
    email: 'Send an email',
    footer: 'Designed and built with React · 2026',
  },
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  const [language, setLanguage] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]

  const navigate = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <button className="brand" onClick={() => navigate('top')} aria-label="Back to top">MG<span>.</span></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {t.nav.map((item, index) => <button key={item} onClick={() => navigate(['about', 'experience', 'projects', 'journey', 'contact'][index])}>{item}</button>)}
          <div className="language-switcher">
            <button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')}>FR</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" />{t.available}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => navigate('projects')}>{t.cta} <Arrow /></button>
              <button className="text-link" onClick={() => navigate('contact')}>{t.contact} <Arrow /></button>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="photo-halo" />
            <div className="photo-frame">
              <img src={profilePhoto} alt="Maryam Gadi" />
            </div>
            <div className="photo-orbit orbit-one" />
            <div className="photo-orbit orbit-two" />
            <div className="art-label label-top">AI / ML</div>
            <div className="art-label label-bottom">FULL-STACK<br />& CLOUD</div>
          </div>
          <div className="scroll-hint"><span>↓</span> Scroll to explore</div>
        </section>

        <section id="about" className="section-wrap about-section">
          <div className="section-heading"><p className="section-label">{t.aboutLabel}</p><span className="heading-line" /></div>
          <div className="about-grid">
            <h2>{t.aboutTitle}</h2>
            <div><p className="large-copy">{t.aboutText}</p><div className="stats">{t.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div>
          </div>
        </section>

        <section id="experience" className="section-wrap experience-section">
          <div className="section-heading"><p className="section-label">{t.experienceLabel}</p><span className="heading-line" /></div>
          <div className="projects-intro"><h2 dangerouslySetInnerHTML={{ __html: t.experienceTitleSection }} /></div>
          <div className="experience-list">{t.experienceItems.map((item) => <article className="professional-card" key={item.title}><span className="project-number">{item.number}</span><div><h3>{item.title}</h3><span className="professional-meta">{item.meta}</span><p>{item.description}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Arrow /></article>)}</div>
        </section>

        <section id="projects" className="section-wrap projects-section">
          <div className="section-heading"><p className="section-label">{t.projectLabel}</p><span className="heading-line" /></div>
          <div className="projects-intro"><h2 dangerouslySetInnerHTML={{ __html: t.projectTitle }} /><p>{t.projectHint}</p></div>
          <div className="project-list">{t.projects.map((project) => <article className="project-card" key={project.name}><span className="project-number">{project.number}</span><div className="project-main"><div className="project-title-row"><h3>{project.name}</h3><span className="project-type">{project.type}</span></div><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><Arrow /></article>)}</div>
        </section>

        <section id="journey" className="section-wrap journey-section">
          <div className="section-heading"><p className="section-label">{t.journeyLabel}</p><span className="heading-line" /></div>
          <h2 dangerouslySetInnerHTML={{ __html: t.journeyTitle }} />
          <div className="journey-grid">
            <div><h3 className="subheading">{t.education}</h3>{t.educationItems.map(([date, title, place]) => <div className="timeline-item" key={date}><span>{date}</span><div><strong>{title}</strong><small>{place}</small></div></div>)}</div>
            <div><h3 className="subheading">{t.skills}</h3>{t.skillGroups.map(([group, skills]) => <div className="skill-row" key={group}><span>{group}</span><strong>{skills}</strong></div>)}</div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner"><p className="section-label">{t.contactLabel}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="button button-light" href="mailto:maryam04gadi@gmail.com">{t.email} <Arrow /></a><div className="contact-links"><a href="https://github.com/maryamgadi" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/maryam-gadi" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><span>{t.location}</span></div></div>
        </section>
      </main>
      <footer><span>Maryam Gadi<span className="orange">.</span></span><span>{t.footer}</span><a href="#top">↑</a></footer>
    </div>
  )
}

export default App
