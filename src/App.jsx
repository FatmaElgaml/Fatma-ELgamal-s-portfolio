import { useEffect, useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile photo.jpeg";
import SpaceBackground from "./SpaceBackground";

import campSotra from "./assets/certifications/camp sotra.png";
import devStudentClub from "./assets/certifications/dev student club.jpeg";
import masteringGithub from "./assets/certifications/Mastering github.jpeg";
import aiCertifications from "./assets/certifications/AI certifications.jpeg";
import ibmInterview from "./assets/certifications/IBM Interview.jpeg";

function Network() {
  return (
    <svg
      className="network-svg"
      viewBox="0 0 760 650"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* ================= NETWORK CONNECTIONS ================= */}

      {/* Sensors → Embedded */}
      <path
        className="network-line cyan-line line-1"
        d="M70 90 C100 110, 110 135, 135 165"
      />

      {/* Embedded → Profile */}
      <path
        className="network-line cyan-line line-2"
        d="M145 175 C210 205, 270 245, 350 305"
      />

      {/* Devices → Embedded */}
      <path
        className="network-line blue-line line-3"
        d="M45 250 C75 220, 105 195, 135 175"
      />

      {/* Cloud → Profile */}
      <path
        className="network-line cyan-line line-4"
        d="M705 95 C640 120, 580 180, 510 225 C460 255, 420 285, 395 315"
      />

      {/* Profile → Security */}
      <path
        className="network-line purple-line line-5"
        d="M365 350 C300 405, 235 470, 150 570"
      />

      {/* Profile → AI */}
      <path
        className="network-line purple-line line-6"
        d="M410 350 C485 390, 570 450, 680 520"
      />

      {/* Security → AI */}
      <path
        className="network-line purple-line line-7"
        d="M165 575 C300 600, 470 590, 680 530"
      />

      {/* ================= DATA PARTICLES ================= */}

      <circle className="particle cyan-particle" r="4">
        <animateMotion
          dur="3s"
          begin="4s"
          repeatCount="indefinite"
          path="M70 90 C100 110, 110 135, 135 165"
        />
      </circle>

      <circle className="particle cyan-particle" r="4">
        <animateMotion
          dur="4s"
          begin="4.5s"
          repeatCount="indefinite"
          path="M145 175 C210 205, 270 245, 350 305"
        />
      </circle>

      <circle className="particle blue-particle" r="3">
        <animateMotion
          dur="3.5s"
          begin="5s"
          repeatCount="indefinite"
          path="M45 250 C75 220, 105 195, 135 175"
        />
      </circle>

      <circle className="particle cyan-particle" r="4">
        <animateMotion
          dur="5s"
          begin="5.5s"
          repeatCount="indefinite"
          path="M705 95 C640 120, 580 180, 510 225 C460 255, 420 285, 395 315"
        />
      </circle>

      <circle className="particle purple-particle" r="4">
        <animateMotion
          dur="4s"
          begin="6s"
          repeatCount="indefinite"
          path="M365 350 C300 405, 235 470, 150 570"
        />
      </circle>

      <circle className="particle purple-particle" r="4">
        <animateMotion
          dur="4s"
          begin="6.5s"
          repeatCount="indefinite"
          path="M410 350 C485 390, 570 450, 680 520"
        />
      </circle>

      {/* ================= CONNECTION POINTS ================= */}

      <circle className="connection-dot cyan-dot" cx="70" cy="90" r="4" />
      <circle className="connection-dot cyan-dot" cx="135" cy="165" r="4" />
      <circle className="connection-dot blue-dot" cx="45" cy="250" r="4" />
      <circle className="connection-dot cyan-dot" cx="705" cy="95" r="4" />

      <circle className="connection-dot purple-dot" cx="150" cy="570" r="4" />
      <circle className="connection-dot purple-dot" cx="680" cy="520" r="4" />

      {/* Ambient dots */}
      <circle className="tiny-dot" cx="90" cy="50" r="2" />
      <circle className="tiny-dot" cx="220" cy="100" r="2" />
      <circle className="tiny-dot" cx="620" cy="70" r="2" />
      <circle className="tiny-dot" cx="720" cy="180" r="2" />
      <circle className="tiny-dot" cx="90" cy="390" r="2" />
      <circle className="tiny-dot" cx="630" cy="350" r="2" />
      <circle className="tiny-dot" cx="250" cy="600" r="2" />
      <circle className="tiny-dot" cx="580" cy="600" r="2" />
    </svg>
  );
}


/* =========================================================
   SYSTEM NODE
========================================================= */

function SystemNode({ icon, label, className }) {
  return (
    <div className={`system-node ${className}`}>
      <div className="node-circle">
        <div className="node-icon">
          {icon}
        </div>
      </div>

      <span className="node-label">
        {label}
      </span>
    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  const [showSitfit, setShowSitfit] = useState(false);

   // =====================================================
  // TYPING ANIMATION
  // =====================================================

  const fullTagline = "Where devices connect, data comes alive.";

  const [typedTagline, setTypedTagline] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedTagline(fullTagline.slice(0, index + 1));

      index++;

      if (index === fullTagline.length) {
        clearInterval(typing);
      }
    }, 55);

    return () => clearInterval(typing);
  }, []);


  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <a href="#home" className="brand">

          <div className="brand-logo">
            F<span>•</span>E
          </div>

          <span className="brand-name">
            FATMA ELGAMAL
          </span>

        </a>


        <div className="nav-links">

          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#journey">
            Journey
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <button className="menu-button">
          ☰
        </button>

      </nav>


      {/* =====================================================
          HERO
      ===================================================== */}

      <main className="hero" id="home">

        {/* Background */}

        <div className="background-glow glow-cyan"></div>
        <div className="background-glow glow-purple"></div>

        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <section className="hero-content">

          <div className="eyebrow">

  <span className="eyebrow-line"></span>

  <strong>CONNECTED SYSTEMS</strong>

  <span className="separator">
    •
  </span>

  AI & AUTOMATION

  <span className="separator">
    •
  </span>

  CLOUD

  <span className="separator">
    •
  </span>

  CYBERSECURITY

</div>


          <h1>

            <span className="name-solid">
              FATMA
            </span>

            <span className="name-gradient">
              ELGAMAL
            </span>

          </h1>


          <div className="tagline">

  <span className="tagline-first">
    {typedTagline.slice(0, 21)}
  </span>

  {typedTagline.length > 21 && (
    <strong className="tagline-gradient">
      {typedTagline.slice(21)}
    </strong>
  )}

  <span className="typing-cursor"></span>

</div>


         


          <div className="system-status">

            <span className="status-dot"></span>

            SYSTEM ONLINE

            <span className="status-line"></span>

            CONNECTED

          </div>

        </section>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <section className="hero-visual">

          <Network />


          {/* ================= SYSTEM NODES ================= */}

          <SystemNode
            icon="⌁"
            label="SENSORS"
            className="sensor-node"
          />


          <SystemNode
            icon="▦"
            label="EMBEDDED SYSTEMS"
            className="embedded-node"
          />


          <SystemNode
            icon="▣"
            label="DEVICES"
            className="device-node"
          />


          <SystemNode
            icon="☁"
            label="CLOUD"
            className="cloud-node"
          />


          <SystemNode
            icon="◇"
            label="SECURITY"
            className="security-node"
          />


          <SystemNode
            icon="✦"
            label="AI & AUTOMATION"
            className="ai-node"
            />


          {/* =================================================
              PROFILE SYSTEM
          ================================================= */}

          <div className="profile-system">

            <div className="profile-halo"></div>

            <div className="profile-ring ring-one"></div>

            <div className="profile-ring ring-two"></div>


            <div className="profile-frame">
            <div className="profile-inner">
            <img
                src={profilePhoto}
                alt="Fatma Elgamal"
                className="profile-photo"
            />
                </div>
                </div>

            {/* Data Ports */}

            <span className="data-port port-top"></span>

            <span className="data-port port-right"></span>

            <span className="data-port port-bottom"></span>

            <span className="data-port port-left"></span>

          </div>

        </section>


        {/* =================================================
            SCROLL
        ================================================= */}

        <div className="scroll-indicator">

          <div className="scroll-mouse">
            ↓
          </div>

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>

      </main>


      {/* =====================================================
          EVERYTHING AFTER HERO
      ===================================================== */}
      <div className="content-background">
        <SpaceBackground />

      {/* =====================================================
          MY PLACE
      ===================================================== */}

      {/* =====================================================
    ABOUT ME
===================================================== */}

<section className="place-section" id="about">

  <div className="section-container">

    <div className="about-panel">

      {/* ================= VISUAL ================= */}

      <div className="place-visual">

        <div className="place-orbit orbit-one"></div>

        <div className="place-orbit orbit-two"></div>

        <div className="place-core">
          <span>
            CONNECTED
          </span>

          <strong>
            SYSTEMS
          </strong>
        </div>

        <div className="place-mini-node node-one">
          IoT
        </div>

        <div className="place-mini-node node-two">
          CLOUD
        </div>

        <div className="place-mini-node node-three">
          SECURITY
        </div>

        <div className="place-mini-node node-four">
          EMBEDDED
        </div>

      </div>


      {/* ================= TEXT ================= */}

      <div className="place-text">

        <p className="small-title">
          ABOUT ME
        </p>

        <h2>
          Building systems that
          <span> connect technology.</span>
        </h2>

        <p className="place-description">
          My goal is to build <strong>connected systems through IoT</strong>,
          bringing together devices, data, and technology to create something meaningful.
        </p>

        <p className="place-description">
          To get there, I’ve been exploring the different layers that make
          these systems work — <strong>Embedded Systems, Linux, AI, Cloud & AWS,
          Cybersecurity, and Automation.</strong>
        </p>

        <p className="about-closing">
          Learning across fields, connecting the pieces, and building toward one goal:
          <span> IoT.</span>
        </p>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
    MY JOURNEY
===================================================== */}

<section className="journey-section" id="journey">

  <div className="section-container">

    <div className="journey-panel">

      {/* ================= SECTION TITLE ================= */}

      <div className="journey-title">

        <p className="small-title">
          JOURNEY
        </p>

        <h2>
          From foundations to
          <span> connected systems.</span>
        </h2>

      </div>


      {/* ================= JOURNEY TIMELINE ================= */}

      <div className="journey-timeline">


        {/* ================= 01 ================= */}

        <div className="journey-item">

          <div className="journey-marker">
            <span>01</span>
          </div>

          <div className="journey-card">

            <div className="journey-card-top">

              <span className="journey-category">
                FOUNDATIONS
              </span>

              <span className="journey-number">
                01
              </span>

            </div>

            <h3>
              Understanding how systems work.
            </h3>

            <p>
              IT fundamentals, networking, Linux, and the core concepts
              that helped me understand how technology communicates
              and works as a system.
            </p>

            <div className="journey-tags">

              <span>IT</span>
              <span>Networking</span>
              <span>Linux</span>
              <span>TCP/IP</span>

            </div>

          </div>

        </div>


        {/* ================= 02 ================= */}

        <div className="journey-item">

          <div className="journey-marker">
            <span>02</span>
          </div>

          <div className="journey-card">

            <div className="journey-card-top">

              <span className="journey-category">
                BUILDING INTELLIGENCE
              </span>

              <span className="journey-number">
                02
              </span>

            </div>

            <h3>
              Turning data into intelligent systems.
            </h3>

            <p>
              Exploring AI and machine learning introduced me to
              working with data and building systems that can learn,
              understand, and respond.
            </p>

            <div className="journey-tags">

              <span>AI</span>
              <span>Machine Learning</span>
              <span>Python</span>
              <span>NLP</span>
              <span>Computer Vision</span>

            </div>

          </div>

        </div>


        {/* ================= 03 ================= */}

        <div className="journey-item">

          <div className="journey-marker">
            <span>03</span>
          </div>

          <div className="journey-card">

            <div className="journey-card-top">

              <span className="journey-category">
                INFRASTRUCTURE & SECURITY
              </span>

              <span className="journey-number">
                03
              </span>

            </div>

            <h3>
              Building and protecting the infrastructure behind systems.
            </h3>

            <p>
              Cloud and cybersecurity expanded my perspective from
              individual components to scalable, secure infrastructure.
            </p>

            <div className="journey-tags">

              <span>AWS</span>
              <span>Cloud</span>
              <span>EC2</span>
              <span>VPC</span>
              <span>IAM</span>
              <span>Security</span>

            </div>

          </div>

        </div>


        {/* ================= 04 ================= */}

        <div className="journey-item">

          <div className="journey-marker">
            <span>04</span>
          </div>

          <div className="journey-card">

            <div className="journey-card-top">

              <span className="journey-category">
                CONNECTED SYSTEMS
              </span>

              <span className="journey-number">
                04
              </span>

            </div>

            <h3>
              Bringing the pieces together.
            </h3>

            <p>
              Exploring embedded systems, sensors, cloud, AI, and
              security led me toward one goal — building connected
              systems where devices, data, and intelligent technology
              work together.
            </p>

            <div className="journey-tags">

              <span>IoT</span>
              <span>Embedded Systems</span>
              <span>Sensors</span>
              <span>Cloud</span>
              <span>AI</span>

            </div>

          </div>

        </div>


      </div>

    </div>

  </div>

</section>




{/* =====================================================
    PROJECTS
===================================================== */}

<section className="projects-section" id="projects">
  <div className="section-container">

    <div className="projects-header">
      <p className="small-title">PROJECTS</p>

      <h2>
        Ideas turned into
        <span> connected systems.</span>
      </h2>

      <p className="projects-intro">
        A selection of concepts and systems I explored
        across AI, sensors, and connected technology.
      </p>
    </div>

    <div className="project-feature">

      <div className="project-number">
        01
      </div>

      <div className="project-content">

        

        <span className="project-label">
          CONNECTED POSTURE SYSTEM
        </span>

        <h3>
          SitFit
        </h3>

        <p>
          A startup concept exploring how sensors,
          AI, and mobile technology can work together
          to create a connected posture awareness system.
        </p>

        <div className="project-tags">
          <span>AI</span>
          <span>IoT</span>
          <span>Sensors</span>
          <span>ESP32</span>
        </div>

        <button
  className="project-explore"
  onClick={() => setShowSitfit(true)}
>
  EXPLORE
  <span>→</span>
</button>

      </div>

      <div className="project-visual">

  <img
    src="/src/assets/projects/sitfit-logo.png"
    alt="SitFit logo"
    className="sitfit-logo"
  />

</div>

    </div>

  </div>
</section>


<section className="certifications-section" id="certifications">

  <div className="section-container">

    <div className="certifications-header">
      <p className="small-title">
        CERTIFICATIONS
      </p>

      <h2>
        Certificates &amp; credentials.
      </h2>
    </div>

    <div className="certifications-grid">

      <button
        className="certificate-card"
        onClick={() => window.open(campSotra, "_blank")}
      >
        <img
          src={campSotra}
          alt="Camp Sotra certificate"
        />

        <div className="certificate-overlay">
          <span>VIEW</span>
        </div>
      </button>

      <button
        className="certificate-card"
        onClick={() => window.open(devStudentClub, "_blank")}
      >
        <img
          src={devStudentClub}
          alt="Dev Student Club certificate"
        />

        <div className="certificate-overlay">
          <span>VIEW</span>
        </div>
      </button>

      <button
        className="certificate-card"
        onClick={() => window.open(masteringGithub, "_blank")}
      >
        <img
          src={masteringGithub}
          alt="Mastering GitHub certificate"
        />

        <div className="certificate-overlay">
          <span>VIEW</span>
        </div>
      </button>

      <button
        className="certificate-card"
        onClick={() => window.open(aiCertifications, "_blank")}
      >
        <img
          src={aiCertifications}
          alt="AI certification"
        />

        <div className="certificate-overlay">
          <span>VIEW</span>
        </div>
      </button>

      <button
  className="certificate-card"
  onClick={() => window.open(ibmInterview, "_blank")}
>
  <img
    src={ibmInterview}
    alt="IBM Interview certificate"
  />
  <div className="certificate-overlay">
    <span>VIEW</span>
  </div>
</button>
      

    </div>

  </div>

</section>


{/* =====================================================
    SITFIT DETAILS
===================================================== */}

{showSitfit && (
  <div className="sitfit-overlay">

    <div className="sitfit-details">

      <button
  className="sitfit-close"
  onClick={() => setShowSitfit(false)}
>
  ×
</button>

<div className="sitfit-header">

  <span className="sitfit-eyebrow">
    CONNECTED POSTURE SYSTEM
  </span>

  <h2>
    SitFit
  </h2>

  <p>
    A startup concept exploring how sensors, AI,
    and mobile technology can work together to
    create a connected posture awareness system.
  </p>

</div>



<div className="sitfit-architecture">

  <span className="sitfit-section-title">
    SYSTEM ARCHITECTURE
  </span>

  <div className="architecture-flow">

    <div className="architecture-node">
      <strong>FSR ×4</strong>
      <span>Pressure Sensors</span>
    </div>

    <div className="architecture-arrow">
      →
    </div>

    <div className="architecture-node">
      <strong>Hall Sensor</strong>
      <span>Movement Detection</span>
    </div>

    <div className="architecture-arrow">
      →
    </div>

    <div className="architecture-node highlight">
      <strong>ESP32</strong>
      <span>Sensor Controller</span>
    </div>

    <div className="architecture-arrow">
      →
    </div>

    <div className="architecture-node">
      <strong>AI</strong>
      <span>Posture Classification</span>
    </div>

    <div className="architecture-arrow">
      →
    </div>

    <div className="architecture-node">
      <strong>Mobile App</strong>
      <span>Feedback</span>
    </div>

  </div>

</div>



<div className="sitfit-section sensor-design">

  <span className="sitfit-section-title">
    SENSOR DESIGN
  </span>

  <div className="sensor-design-grid">

    <div className="sensor-card">
      <div className="sensor-count">
        04
      </div>

      <div>
        <strong>FSR Sensors</strong>
        <p>
          Four pressure sensors placed across the
          upper and lower areas of the back-support.
        </p>
      </div>

      <div className="sensor-placement">
        <span>2 Upper</span>
        <span>2 Lower</span>
      </div>
    </div>

    <div className="sensor-card hall-card">
      <div className="sensor-count">
        01
      </div>

      <div>
        <strong>Hall-Effect Sensor</strong>
        <p>
          Explored for detecting relative movement
          or displacement of the upper support.
        </p>
      </div>

      <div className="sensor-placement">
        <span>Movement</span>
        <span>Position</span>
      </div>
    </div>

  </div>

</div>



      <span className="project-label">
        CONNECTED POSTURE SYSTEM
      </span>

      <h2>
        SitFit
      </h2>

      <p className="sitfit-description">
        A startup concept exploring how sensors, AI,
        and mobile technology can work together to
        create a connected posture awareness system.
      </p>

      <div className="sitfit-section">
        <span>THE IDEA</span>

        <p>
          A smart attachable back-support concept designed
          to work with different chairs and explore how
          connected sensors can understand sitting patterns
          and provide timely feedback.
        </p>
      </div>

      <div className="sitfit-section">
        <span>MY ROLE</span>

        <p>
          AI & Sensor Systems — exploring the sensor
          architecture, data flow, and AI concept for
          posture classification.
        </p>
      </div>



      <div className="sitfit-section technologies-section">

  <span className="sitfit-section-title">
    TECHNOLOGIES
  </span>

  <div className="technology-list">
    <span>AI</span>
    <span>IoT</span>
    <span>Sensors</span>
    <span>ESP32</span>
    <span>FSR</span>
    <span>Hall Sensor</span>
    <span>FastAPI</span>
    <span>Mobile App</span>
  </div>

</div>

<div className="sitfit-section status-section">

  <span className="sitfit-section-title">
    STATUS
  </span>

  <div className="status-content">

    <div className="status-main">
      STARTUP CONCEPT
    </div>

    <div className="status-details">
      <span>SYSTEM DESIGN</span>
      <span>SIMULATION</span>
    </div>

  </div>

  <p className="status-note">
    A conceptual system explored through architecture,
    sensor design, and simulated data flow. No physical
    prototype has been built yet.
  </p>

</div>

    </div>

  </div>
)}


<section className="contact-section" id="contact">

  <div className="contact-container">

    <p className="contact-label">
      CONTACT
    </p>

    <h2>
      Let’s build something
      <span> meaningful.</span>
    </h2>

    <p className="contact-text">
      Open to opportunities, collaborations, and conversations
      around AI, cloud, cybersecurity, and connected systems.
    </p>

    
<div className="contact-links">

  <a
    href="https://www.linkedin.com/in/fatma-elgamal"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.06 2.06 0 1 0 5.25 7.12 2.06 2.06 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.85-5.07-4.32-5.07a3.75 3.75 0 0 0-3.39 1.86h-.05V8.5H9.44V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.24-6.58Z"
      />
    </svg>

    <span className="contact-link-text">LINKEDIN</span>
    <span className="contact-arrow">↗</span>
  </a>


  <a
    href="https://github.com/FatmaElgaml"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.55-3.9-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.45-2.31 1.19-3.12-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.12 0 4.45-2.71 5.44-5.29 5.73.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>

    <span className="contact-link-text">GITHUB</span>
    <span className="contact-arrow">↗</span>
  </a>


  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=fa15elgamal@gmail.com"
    target="_blank"
    rel="noreferrer"
  >
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5h18v13H3z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4 7 8 6 8-6"
      />
    </svg>

    <span className="contact-link-text">EMAIL</span>
    <span className="contact-arrow">↗</span>
  </a>

</div>



  </div>

</section>


      {/* =====================================================
          FOOTER PLACEHOLDER
      ===================================================== */}

      <section
        className="end-section"
        id="contact"
      >

        <div>

          <span>
            MORE TO COME
          </span>

          <h2>
            Let's build what
            <br />
            comes next.
          </h2>

        </div>

      </section>

      </div>
    </div>
  );
}

export default App;