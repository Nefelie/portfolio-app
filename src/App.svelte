<script>
  import { onMount } from 'svelte';

  // Project data centralized with FULL original descriptions
  const projects = [
    {
      title: "Marine Autonomy Challenge",
      description: "Leader of the University of Southampton team (finalists), developed software for the autonomous operation of an uncrewed surface vehicle to map and detect hydrocarbon pollution & ocean plastics. Developed a range of software functionalities: path planning and following, autonomous docking, obstacle avoidance, searching for and mapping an area of hydrocarbon pollution, object detection and identification (ocean plastics).",
      image: "/portfolio-app/assets/img/MAChallenge.jpg",
      githubLink: "https://github.com/Nefelie/MarineAutonomyChallenge",
      skills: [
        { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
        { icon: "/portfolio-app/assets/icons/OpenCV.svg", name: "OpenCV" },
        { icon: "/portfolio-app/assets/icons/raspberrypi.png", name: "Raspberry Pi" }
      ]
    },
    {
      title: "Global Shipping Network using AIS Data, Graph Theory and Machine Learning",
      description: "Constructed a global shipping network using machine learning (KNN, DBSCAN) and graph theory to model maritime routes and traffic patterns. Designed and implemented a data processing pipeline to clean AIS data and compress vessel trajectories. Analysed maritime traffic variability and congestion to provide insights into global shipping routes and supply chains.",
      image: "/portfolio-app/assets/img/gsn3.png",
      githubLink: "https://github.com/Nefelie/AIS_GSN",
      skills: [
        { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
        { icon: "/portfolio-app/assets/icons/NetworkX.png", name: "NetworkX" },
        { icon: "/portfolio-app/assets/icons/scikit-learn.svg", name: "scikit-learn" }
      ]
    },
    {
      title: "Simulation and Software Development of Perception System for an Autonomous Vessel (LiDAR and Stereo Cameras)",
      description: "Designed and simulated a perception system using stereo cameras and LiDAR using Gazebo and ROS2 for autonomous navigation to enhance collision avoidance capabilities in dynamic marine environments. Developed object detection algorithms for vision and point cloud data under varying weather conditions. Integrated the perception system with obstacle avoidance sub-systems in a multidisciplinary team.",
      image: "/portfolio-app/assets/img/GDP7.png",
      githubLink: "https://github.com/Nefelie/VRX-Camera-and-Lidar-Simulation",
      skills: [
        { icon: "/portfolio-app/assets/icons/Robot Operating System (ROS).svg", name: "ROS" },
        { icon: "/portfolio-app/assets/icons/Gazebo.svg", name: "Gazebo" },
        { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
        { icon: "/portfolio-app/assets/icons/PyTorch.svg", name: "PyTorch" },
        { icon: "/portfolio-app/assets/icons/Linux.svg", name: "Linux" }
      ]
    },
    {
      title: "Global Shipping Corrosion Map using an Artifical Neural Network",
      description: "Generated a global marine corrosion map for shipping using AI/machine learning for integration into a digital twin for marine structures, supporting improved ship design and maintenance strategies to reduce costs. Implemented and trained an artificial neural network to predict corrosion depth based on geospatial ocean datasets.",
      image: "/portfolio-app/assets/img/GlobalCorrosion.png",
      githubLink: "https://github.com/Nefelie/global_corrosion_map",
      skills: [
        { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
        { icon: "/portfolio-app/assets/icons/netCDF.png", name: "netCDF" },
        { icon: "/portfolio-app/assets/icons/Keras.svg", name: "Keras" }
      ]
    },
    {
      title: "AIS Data Plotter Web App",
      description: "An interactive web application for visualizing AIS (Automatic Identification System) data for ships. This tool enables users to dynamically upload and visualize ship position data from .pkl files on a map, with customizable color options for different datasets. The frontend is built with Svelte, MapLibre GL, and TypeScript, while the backend uses FastAPI.",
      image: "/portfolio-app/assets/img/ais-plotter.png",
      githubLink: "https://github.com/Nefelie/ais-plotter",
      skills: [
        { icon: "/portfolio-app/assets/icons/TypeScript.svg", name: "TypeScript" },
        { icon: "/portfolio-app/assets/icons/Svelte.svg", name: "Svelte" },
        { icon: "/portfolio-app/assets/icons/Vite.js.svg", name: "Vite.js" },
        { icon: "/portfolio-app/assets/icons/FastAPI.svg", name: "FastAPI" }
      ]
    },
    {
      title: "SLAM and Perception System Development for an Intelligent Mobile Robot",
      description: "Worked with ZeroROS robot middleware and Webots simulation environment to develop software for the robot. Implemented state-space control, an EKF & particle filter for probabilistic localisation and interpreted live LiDAR sensor data using a Gaussian Process Classifier and Regressor to detect walls and corners from the track as part of the perception system on the physical robotic platform. Developed a Graph SLAM algorithm.",
      image: "/portfolio-app/assets/img/imr.jpg",
      githubLink: "https://github.com/Nefelie/slam-wheeled-robot",
      skills: [
        { icon: "/portfolio-app/assets/icons/zeroros.png", name: "ZeroROS" },
        { icon: "/portfolio-app/assets/icons/webots.png", name: "Webots" },
        { icon: "/portfolio-app/assets/icons/scikit-learn.svg", name: "scikit-learn" },
        { icon: "/portfolio-app/assets/icons/raspberrypi.png", name: "Raspberry Pi" }
      ]
    },
    {
      title: "Guidance, Control & Navigation of an Autonomous Vessel",
      description: "Implemented PID control, artificial potential fields (path planning), line of sight guidance (path following), and an Extended Kalman Filter (probabilistic localisation/sensor fusion) through python simulations. Worked with actuators (differential thrust motors) & sensors, including an IMU (heading control) and ArUco markers for localisation, to implement the software on the vessel.",
      image: "/portfolio-app/assets/img/mr.jpg",
      githubLink: "https://github.com/Nefelie/gnc-autonomous-vessel",
      skills: [
        { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
        { icon: "/portfolio-app/assets/icons/zeroros.png", name: "ZeroROS" },
        { icon: "/portfolio-app/assets/icons/raspberrypi.png", name: "Raspberry Pi" }
      ]
    }
  ];

  // Full skills data matching original
  const programmingSkills = [
    { icon: "/portfolio-app/assets/icons/Python.svg", name: "Python" },
    { icon: "/portfolio-app/assets/icons/Java.svg", name: "Java" },
    { icon: "/portfolio-app/assets/icons/C++ (CPlusPlus).svg", name: "C++" },
    { icon: "/portfolio-app/assets/icons/MATLAB.svg", name: "MATLAB" },
    { icon: "/portfolio-app/assets/icons/Keras.svg", name: "Keras" },
    { icon: "/portfolio-app/assets/icons/PyTorch.svg", name: "Pytorch" },
    { icon: "/portfolio-app/assets/icons/scikit-learn.svg", name: "Scikit-learn" },
    { icon: "/portfolio-app/assets/icons/OpenCV.svg", name: "OpenCV" },
    { icon: "/portfolio-app/assets/icons/Pandas.svg", name: "Pandas" },
    { icon: "/portfolio-app/assets/icons/NumPy.svg", name: "NumPy" },
    { icon: "/portfolio-app/assets/icons/SciPy.svg", name: "Scipy" },
    { icon: "/portfolio-app/assets/icons/GeoPandas.svg", name: "GeoPandas" },
    { icon: "/portfolio-app/assets/icons/netCDF.png", name: "netCDF" },
    { icon: "/portfolio-app/assets/icons/SQL.svg", name: "SQL" },
    { icon: "/portfolio-app/assets/icons/Robot Operating System (ROS).svg", name: "ROS2" },
    { icon: "/portfolio-app/assets/icons/Gazebo.svg", name: "Gazebo" },
    { icon: "/portfolio-app/assets/icons/TypeScript.svg", name: "TypeScript" },
    { icon: "/portfolio-app/assets/icons/Svelte.svg", name: "Svelte" },
    { icon: "/portfolio-app/assets/icons/Vite.js.svg", name: "Vite.js" },
    { icon: "/portfolio-app/assets/icons/FastAPI.svg", name: "FastAPI" },
    { icon: "/portfolio-app/assets/icons/Linux.svg", name: "Linux" },
    { icon: "/portfolio-app/assets/icons/Git.svg", name: "Git" },
    { icon: "/portfolio-app/assets/icons/Docker.svg", name: "Docker" }
  ];

  const designSkills = [
    { icon: "/portfolio-app/assets/icons/SOLIDWORKS.svg", name: "SOLIDWORKS" },
    { icon: "/portfolio-app/assets/icons/Rhinosceros3D.svg", name: "Rhinosceros3D" },
    { icon: "/portfolio-app/assets/icons/AutoCAD.png", name: "AutoCAD" },
    { icon: "/portfolio-app/assets/icons/MAXSURF.png", name: "MAXSURF" }
  ];



  const education = [
    {
      degree: "MEng Maritime Engineering",
      institution: "University of Southampton, UK",
      period: "2020 - 2024",
      logo: "/portfolio-app/public/assets/icons/UoS.jpg", 
      highlights: [
        "Grade: First Class Honours (average: 79%)", 
        'Best Performing Student prize (£1,000) awarded by <a href="https://www.shipwrights.co.uk/" target="_blank">UK Worshipful Company of Shipwrights</a>',
        "Specialised in <b>Robotics</b>",
        "<i>Relevant Modules</i>: Maritime Robotics, Intelligent Mobile Robotics, Machine Learning, Ship Manoeuvring and Control, System Design and Computing for Ships, Mechanics, Ship Resistance and Propulsion, Marine Hydrodynamics,  Ship Design and Economics, Project Risk Management, Maritime Safety: Risk, Environment and Law",
        "<i>Master’s Group Design Project</i>: Perception System Design for an Autonomous Surface Vessel",
        "<i>Bachelor’s Thesis</i>: “Constructing a Global Shipping Network Using AIS Data and Graph Theory to Enhance Maritime Situational Awareness” (see link)", 

      ]
    }
  ];

  const workExperience = [
    {
      title: "Research Assistant - AI/Machine Learning for Digital Twin in Shipping",
      company: "University of Southampton, Marine & Maritime Institute",
      period: "Jul 2023 - Aug 2023",
      logo: "/portfolio-app/public/assets/icons/UoS.jpg", 
      responsibilities: [
        "Generated a global marine corrosion map for shipping using AI/machine learning for integration into a digital twin for marine structures, supporting improved ship design and maintenance strategies to reduce costs.",
        "Implemented and trained an artificial neural network, employing k-fold cross validation to predict corrosion depth based on geospatial ocean datasets."
      ]
    },
    {
      title: "Research Assistant - Concept Design for LCO2 Carrier",
      company: "University of Southampton, Marine & Maritime Institute",
      period: "Jun 2022 - Sept 2022",
      logo: "/portfolio-app/public/assets/icons/UoS.jpg", 
      responsibilities: [
        "Produced a technical report and concept design for Shell Shipping & Maritime on a net-zero LCO2 bulk carrier with a carbon capture system to support UK's decarbonisation targets and developed a 3D model and render in Rhinoceros 3D."
      ]
    }
  ];
</script>

<div class="navbar">
  <div class="left">Portfolio</div>
  <div class="right">
    <a href="#education" class="nav-link">Education</a>
    <a href="#experience" class="nav-link">Work Experience</a>
    <a href="#projects" class="nav-link">Projects</a>
  </div>
</div>

<div class="layout">
  <!-- Left Sidebar -->
  <div class="sidebar">
    <img
      src="/portfolio-app/assets/img/profilepic.jpg"
      alt="Profile"
      class="profile-pic"
    />
    <h3>Nefelie Hemrich</h3>
    <p>
      MEng Maritime Engineering graduate from the University of Southampton, UK.
      Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges and drive innovation in the maritime industry.
    </p>
    <a
      href="/portfolio-app/assets/docs/CV.pdf"
      download="Nefelie_Hemrich_CV.pdf"
      class="cv-download-button"
    >
      Download CV
    </a>
    <div class="social-links">
      <a
        href="https://www.linkedin.com/in/nefeliehemrich/"
        target="_blank"
        class="social-link"
      >
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://github.com/Nefelie" target="_blank" class="social-link">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
    </div>

    <section id="skills" class="sidebar-skills">
      <h3>Skills</h3>
      <div class="tech-categories">
        <div class="tech-category">
          <h4>Programming</h4>
          <div class="skills">
            {#each programmingSkills as skill}
              <span class="skill-tag">
                <img src={skill.icon} alt={skill.name} />
                {skill.name}
              </span>
            {/each}
          </div>
        </div>
        <div class="tech-category">
          <h4>Design</h4>
          <div class="skills">
            {#each designSkills as skill}
              <span class="skill-tag">
                <img src={skill.icon} alt={skill.name} />
                {skill.name}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </section>

      



  </div>

  <!-- Main Content -->
  <div id="app">
    <main>

      <section id="education">
        <h2>Education</h2>
        {#each education as edu}
          <div class="experience-item">
            <div class="edu-header">
              <img src={edu.logo} alt="University Logo" class="edu-logo" />
              <div class="edu-info">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
              </div>
            </div>
            <p class="period">{edu.period}</p>
            <ul>
              {#each edu.highlights as highlight}
                <li>{@html highlight}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>

      <section id="experience">
        <h2>Work Experience</h2>
        {#each workExperience as exp}
          <div class="experience-item">
            {#if exp.logo}
              <div class="edu-header">
                <img src={exp.logo} alt="Company Logo" class="company-logo" />
                <div class="edu-info">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
              </div>
              <p class="period">{exp.period}</p>

            {/if}
            <ul>
              {#each exp.responsibilities as responsibility}
                <li>{responsibility}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
      


      <section id="projects">
        <h2>Projects</h2>
        {#each projects as project}
        <a 
        href={`${project.githubLink}/blob/main/README.md`} 
        target="_blank" 
        style="text-decoration: none; color: inherit;"
      >
            <div class="project">
              <div class="project-image">
                <img src={project.image} alt="Project Image" />
              </div>
              <div class="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div class="skills-container">
                  <div class="skills">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      class="skill-tag github-link"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    {#each project.skills as skill}
                      <span class="skill-tag">
                        <img src={skill.icon} alt={skill.name} />
                        {skill.name}
                      </span>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </section>



    </main>
  </div>
</div>



<style>
  /* Global Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Dark mode colors */
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --navbar-bg: #000000;
    --navbar-text: #ffffff;
    --project-bg: #494848;
    --button-bg: #4a4a4a;
    --button-hover: #5c5c5c;
    --skill-tag-bg: #c7e2ff;
    --skill-tag-text: #000000;
    --skill-tag-hover: #a0d0ff;
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bg-color: #f5f5f5;
      --text-color: #1a1a1a;
      --navbar-bg: #ffffff;
      --navbar-text: #000000;
      --project-bg: #ffffff;
      --button-bg: #8f8f8f;
      --button-hover: #4a4a4a;
      --skill-tag-bg: #e3f2fd;
      --skill-tag-text: #1a1a1a;
      --skill-tag-hover: #bbdefb;
    }
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.4;
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
  }

  .navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--navbar-bg);
  color: var(--navbar-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%; /* Adjust padding to match layout */
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid #e0e0e0;
}

/* For the left part of the navbar */
.navbar .left {
  font-size: 1.5rem;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
}

/* For the right part of the navbar */
.navbar .right {
  display: flex;
  gap: 2.5rem;
  font-size: 1.2rem;
  justify-content: flex-start; /* Align items to the left */
  margin-left: 5%; /* Match the left padding of the projects section */
}

/* For navbar links */
.navbar a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #c7e2ff;
}


  .layout {
    display: flex;
    margin-top: 60px;
    flex: 1;
  }

  /* Sidebar */
  .sidebar {
    width: clamp(200px, 20%, 350px);
    padding: 20px 20px;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 5%;
    border-radius: 10px;
    height: calc(100vh - 60px);
    position: absolute;
    top: 60px;
    left: 0;
    background-color: transparent;
  }

  .sidebar .profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    object-fit: cover;
    margin-bottom: 15px;
    align-self: flex-start;
  }

  .sidebar h3 {
    margin: 10px 0 0;
    font-size: 1.5rem;
    text-align: left;
    color: var(--text-color);
  }

  .sidebar p {
    margin: 10px 0 0;
    font-size: 0.9rem;
    text-align: left;
    color: var(--text-color);
  }

  /* Social Links */
  .social-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .social-link {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1rem;
    margin: 5px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
  }

  .social-link i {
    font-size: 1.2rem;
  }

  .social-link:hover {
    color: #c7e2ff;
  }

  .social-link span {
    font-size: 0.8rem;
    margin-left: 5px;
  }

  /* CV Download Button */
  .cv-download-button {
    background-color: var(--button-bg);
    color: #ffffff;
    padding: 8px 15px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 15px;
    display: inline-block;
    width: 120px;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .cv-download-button:hover {
    background-color: var(--button-hover);
  }

  /* Skills Section */
  .sidebar-skills {
    margin-top: 20px;
    width: 100%;
    text-align: left;
  }

  .sidebar-skills h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--text-color);
    text-align: left;
  }

  .sidebar .tech-category {
    margin-bottom: 10px;
    text-align: left;
  }

  .sidebar .tech-category h4 {
    font-size: 1rem;
    color: var(--text-color);
    margin-bottom: 5px;
    font-weight: normal;
  }

  /* Main Content */
  #app {
    flex: 1;
    margin-left: 25%;
    padding: 20px;
    box-sizing: border-box;
  }

  /* Projects Section */
  #projects {
    padding: 2rem 20px;
    display: flex;
    flex-direction: column;
    align-items: left;

  }

  #projects h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    color: var(--text-color);
  }

  .project {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--project-bg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 1200px;
    width: 100%;
    align-items: center;
    font-weight: normal;
  }

  .project:hover {
    transform: scale(1.02);
  }

  .project-image {
    flex: 1;
    max-width: 200px;
    margin-right: 20px;
    position: relative;
  }

  .project-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  .project-details {
    flex: 2;
    text-align: left;
  }

  .project-details h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--text-color);
  }

  .project-details p {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.4;
    color: var(--text-color);
  }

  /* Skills Container and Tags */
  .skills-container {
    display: flex;
    flex-wrap: wrap;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    background-color: var(--skill-tag-bg);
    color: var(--skill-tag-text);
    font-size: 0.9rem;
    border-radius: 20px;
    transition: background-color 0.3s ease;
  }

  .skill-tag img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  .skill-tag:hover {
    background-color: var(--skill-tag-hover);
    cursor: pointer;
  }

  /* GitHub Link in Projects */
  .skills .github-link {
    background-color: transparent !important;
    color: var(--text-color);
  }

  .github-link:hover {
    color: var(--text-color);
    opacity: 0.8;
    cursor: pointer;
  }

  .github-link i {
    font-size: 1rem;
  }

  /* Sidebar Skills Specific */
  .sidebar .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: flex-start;
  }

  .sidebar .skill-tag {
    padding: 3px 8px;
    font-size: 0.9rem;
  }

  .sidebar .skill-tag img {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }


  #education, #experience {
    padding: 2rem 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 1200px;
    width: 100%;
  }

  #education h2, #experience h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    color: var(--text-color);
  }

  .experience-item {
    background-color: var(--project-bg);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease;
  }

  .experience-item:hover {
    transform: scale(1.02);
  }

  .experience-item h3 {
    font-size: 1.3rem;
    color: var(--text-color);
    margin-bottom: 5px;
  }

  .experience-item h4 {
    font-size: 1.0rem;
    color: var(--text-color);
    margin-bottom: 5px;
    opacity: 0.8;
  }

  .experience-item .period {
    color: var(--text-color);
    margin-bottom: 10px;
    font-style: italic;
    opacity: 0.7;
  }

  .experience-item ul {
    padding-left: 20px;
    list-style-type: disc;
    color: var(--text-color);
  }

  .experience-item li {
    margin-bottom: 5px;
    line-height: 1.4;
  }


  .edu-header {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between the logo and text */
  line-height: 1.2; /* Reduce spacing between lines */
}

.edu-logo {
  width: 50px; /* Adjust size as needed */
  height: auto;
  border-radius: 4px; /* Optional: Rounded corners */
}

.edu-info {
  display: flex;
  flex-direction: column;
}


.company-logo {
    width: 50px; /* Adjust the size */
    height: auto;
    vertical-align: middle; /* Aligns the logo vertically with text */
    border-radius: 4px; /* Optional: Rounded corners */
  }




  /* Media Queries */
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    #projects {
      align-items: center;
      padding: 2rem 10px;
    }
    .project {
      flex-direction: column;
      align-items: center;
    }
    .project-image {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }
    .project-details {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar {
      padding: 10px 20px;
      flex-direction: column;
      align-items: center;
    }

    .navbar .right {
      margin-top: 10px;
      gap: 1rem;
    }

    .layout {
      flex-direction: column;
      margin-top: 120px;
      padding-left: 0;
    }

    .sidebar {
      position: static;
      width: 100%;
      height: auto;
      margin-left: 10px;
      padding: 20px;
      align-items: flex-start; /* Changed from center to flex-start */
      text-align: left; /* Changed from center to left */
    }

    .sidebar .profile-pic {
      width: 100px;
      height: 100px;
      align-self: flex-start; /* Changed from center to flex-start */
    }

    .sidebar h3,
    .sidebar p {
      text-align: left; /* Changed from center to left */
    }

    .social-links {
      flex-direction: column;
      align-items: flex-start; /* Changed from center to flex-start */
      gap: 8px;
      margin-top: 12px;
    }

    .social-link {
      flex-direction: row;
      justify-content: flex-start; /* Changed from center to flex-start */
      align-items: center;
      gap: 6px;
      width: 120px;
      margin: 0;
    }

    .social-link i {
      font-size: 1.1rem;
    }
    .cv-download-button {
      width: auto;
      padding: 10px 20px;
    }

    #app {
      margin-left: 0;
      width: 100%;
      padding: 0 1rem;
    }

    #projects {
      align-items: center;
      padding: 2rem 10px;
    }

    .project {
      flex-direction: column;
      align-items: center;
    }

    .project-image {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }

    .project-details {
      width: 100%;
    }

    main {
      padding: 1rem;
    }

    body {
      font-size: 16px;
    }

    .navbar .left {
      font-size: 1.3rem;
    }

    .navbar .right {
      font-size: 1rem;
    }

    .project-details h3 {
      font-size: 1.3rem;
    }

    .project-details p {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 480px) {
    .social-links {
      flex-direction: column;
      align-items: center;
    }

    .social-link {
      margin: 10px 0;
    }

    .skill-tag {
      font-size: 0.8rem;
    }
  }
</style>
