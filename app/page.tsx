const focusAreas = [
  {
    number: "01",
    title: "Distributed Learning",
    description:
      "Federated and decentralized systems that learn reliably across heterogeneous clients.",
    tags: ["Federated learning", "Client heterogeneity"],
  },
  {
    number: "02",
    title: "Efficient Medical AI",
    description:
      "Compact, interpretable models for medical imaging and longitudinal clinical data.",
    tags: ["3D segmentation", "Knowledge distillation"],
  },
  {
    number: "03",
    title: "Multimodal Fusion",
    description:
      "Data fusion methods for images, graphs, and medical data under real-world constraints.",
    tags: ["Multimodal learning", "Model efficiency"],
  },
];

const highlights = [
  ["Early Accept", "MICCAI 2026 · top 9%"],
  ["<10M", "Parameters in an efficient 3D segmenter"],
  ["4.0 / 4.0", "Ph.D. GPA at UAB"],
  ["3", "Modalities: images, graphs, medical data"],
];

const featuredPublications = [
  {
    type: "Conference · 2026",
    title:
      "Detail Consistent Stage-Wise Distillation for Efficient 3D MRI Segmentation",
    authors:
      "Mengchen Fan, Baocheng Geng, Xi Xiao, Tianyang Wang, Siyuan Mei, Pulin Che, Xiaoqian Jiang, Qizhen Lan",
    venue: "MICCAI 2026",
    note: "Early Accept · Top 9%",
    accent: "mesh-one",
  },
  {
    type: "Conference · 2026",
    title:
      "On Optimal Modality Compression for Bandwidth Constrained Multimodal Fusion",
    authors: "Mengchen Fan, Fei Zhao, Chengcui Zhang, Shuya Feng, Baocheng Geng",
    venue: "IEEE IRI 2026",
    note: "Multimodal fusion",
    accent: "mesh-two",
  },
  {
    type: "Journal · 2025",
    title:
      "A Unified DNN Weight Compression Framework Using Reweighted Optimization Methods",
    authors:
      "Mengchen Fan, Tianyun Zhang, Xiaolong Ma, Jiacheng Guo, Zheng Zhan, et al.",
    venue: "Intelligent Systems with Applications",
    note: "Volume 27",
    accent: "mesh-three",
  },
  {
    type: "Conference · 2025",
    title:
      "PFedDST: Personalized Federated Learning with Decentralized Selection Training",
    authors: "Mengchen Fan, Keren Li, Tianyun Zhang, Qing Tian, Baocheng Geng",
    venue: "IEEE IJCNN 2025",
    note: "Personalized FL",
    accent: "mesh-four",
  },
];

const otherPublications = [
  {
    year: "2025",
    title:
      "A Unified Framework for the Convergence and Weight Pruning in Federated Learning",
    venue: "ACM Multimedia Asia",
  },
  {
    year: "2025",
    title: "Distributed Collaborative Learning with Representative Knowledge Sharing",
    venue: "Mathematics · 13(6), 1004",
  },
  {
    year: "2024",
    title:
      "Interpretable Data Fusion for Distributed Learning: A Representative Approach via Gradient Matching",
    venue: "International Conference on Information Fusion",
  },
  {
    year: "2024",
    title: "Impact of Phased COVID-19 Vaccine Rollout on Anxiety and Depression",
    venue: "The Lancet Regional Health — Americas",
  },
];

const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "University of Alabama at Birmingham",
    meta: "2022 — Present · GPA 4.0 / 4.0",
  },
  {
    degree: "M.S. in Computer Engineering",
    school: "Syracuse University",
    meta: "2017 — 2019 · GPA 3.867 / 4.0",
  },
  {
    degree: "B.S. in Electrical Engineering",
    school: "North China Electric Power University",
    meta: "2012 — 2016",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "C++",
  "C",
  "Java",
  "C#",
  "SQL",
  "JavaScript",
  "Spring",
  "Angular",
  "Oracle",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Mengchen Fan, home">
          <span className="wordmark-mark">MF</span>
          <span>Mengchen Fan</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-kicker">
            <span className="status-dot" aria-hidden="true" />
            Doctoral researcher · UAB Computer Science
          </div>
          <div className="hero-grid">
            <div>
              <h1>
                Learning across
                <br />
                <em>boundaries.</em>
              </h1>
            </div>
            <div className="hero-intro">
              <p>
                I&apos;m <strong>Mengchen Fan</strong>, a Ph.D. researcher building
                interpretable and reliable learning systems for diverse,
                distributed data.
              </p>
              <div className="hero-links" aria-label="Profile links">
                <a href="mailto:fanm@uab.edu">Email ↗</a>
                <a href="https://scholar.google.com/citations?user=777vHFUAAAAJ&hl=en">
                  Scholar ↗
                </a>
                <a href="https://github.com/distributedFan">GitHub ↗</a>
              </div>
            </div>
          </div>
          <div className="hero-rule" aria-hidden="true">
            <span>Heterogeneous AI</span>
            <span>Birmingham, Alabama</span>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-heading">
            <p className="eyebrow">Research focus</p>
            <h2>Systems that stay useful when the data stops being uniform.</h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="focus-card" key={area.number}>
                <span className="card-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="tag-list" aria-label={`${area.title} topics`}>
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="metrics" aria-label="Research highlights">
          {highlights.map(([value, label]) => (
            <div className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="publications-section" id="publications">
          <div className="dark-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Research, made concrete.</h2>
            </div>
            <a
              className="arrow-link"
              href="https://scholar.google.com/citations?user=777vHFUAAAAJ&hl=en"
            >
              All publications ↗
            </a>
          </div>

          <div className="publication-grid">
            {featuredPublications.map((publication, index) => (
              <article className="publication-card" key={publication.title}>
                <div className={`publication-visual ${publication.accent}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i aria-hidden="true" />
                </div>
                <div className="publication-copy">
                  <p className="publication-type">{publication.type}</p>
                  <h3>{publication.title}</h3>
                  <p className="authors">{publication.authors}</p>
                  <div className="publication-meta">
                    <strong>{publication.venue}</strong>
                    <span>{publication.note}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="other-publications">
            <p className="eyebrow">Also published</p>
            <div>
              {otherPublications.map((publication) => (
                <article className="publication-row" key={publication.title}>
                  <span>{publication.year}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.venue}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="experience">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Experience</p>
            <h2>From production systems to distributed intelligence.</h2>
          </div>
          <div className="journey-grid">
            <article className="journey-item featured-journey">
              <p className="journey-date">Aug 2022 — Present</p>
              <div>
                <h3>Doctoral Researcher</h3>
                <h4>University of Alabama at Birmingham</h4>
                <p>
                  Developing efficient medical AI, longitudinal-data benchmarks,
                  and federated learning methods that are stable across diverse
                  clients and data modalities.
                </p>
                <div className="outcome">
                  <span>Recent outcome</span>
                  <strong>MICCAI 2026 Early Accept + Spotlight</strong>
                </div>
              </div>
            </article>
            <article className="journey-item">
              <p className="journey-date">Dec 2020 — Aug 2022</p>
              <div>
                <h3>Java Full Stack Developer</h3>
                <h4>Citi Group · Shanghai</h4>
                <p>
                  Led full-stack work on an SMA platform for Basel IV
                  operational-risk calculations using Spring, Java, Angular,
                  JavaScript, and Oracle.
                </p>
              </div>
            </article>
            <article className="journey-item talk-item">
              <p className="journey-date">Invited talk · Jun 2024</p>
              <div>
                <h3>WNAR / IMS / Graybill Conference</h3>
                <h4>Colorado State University</h4>
                <p>Fort Collins, Colorado</p>
              </div>
            </article>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="education-heading">
            <p className="eyebrow">Education</p>
            <p>
              A foundation across computer science, computer engineering, and
              electrical engineering.
            </p>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <article key={item.degree}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <strong>{item.meta}</strong>
              </article>
            ))}
          </div>
          <div className="skills-block">
            <p className="eyebrow">Working toolkit</p>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">Collaborate</p>
          <h2>
            Let&apos;s make distributed AI
            <br />
            work in the <em>real world.</em>
          </h2>
          <div className="contact-bottom">
            <a className="contact-button" href="mailto:fanm@uab.edu">
              Start a conversation ↗
            </a>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/mengchenfan/">LinkedIn</a>
              <a href="https://github.com/distributedFan">GitHub</a>
              <a href="https://scholar.google.com/citations?user=777vHFUAAAAJ&hl=en">
                Google Scholar
              </a>
              <a href="/Mengchen_Fan_CV.pdf">Download CV</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Mengchen Fan</span>
        <span>Birmingham, Alabama · fanm@uab.edu</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
