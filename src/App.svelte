<script>
  import { onMount } from 'svelte';

  // Project data centralized with FULL original descriptions
  const projects = [
    {
      title: "Marine Autonomy Challenge",
      type: "robotics",
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
      type: "data-science",
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
      type: "robotics",
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
      type: "data-science",
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
      type: "data-science",
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
      type: "robotics",
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
      type: "robotics",
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


   // State for filtering
   let currentFilter = 'all';

  // Filtered projects computed property
  $: filteredProjects = currentFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === currentFilter);

  // Function to set filter
  function setFilter(filter) {
    currentFilter = filter;
  }

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
      logo: "/portfolio-app/assets/icons/UoS.jpg", 
      highlights: [
        "Grade: First Class Honours (average: 79%)", 
        'Best Performing Student prize (£1,000) awarded by <a href="https://www.shipwrights.co.uk/" target="_blank">UK Worshipful Company of Shipwrights</a>',
        'Specialised in <b style="font-weight: 600;">Robotics</b>',
        "<i>Relevant Modules</i>: Maritime Robotics, Intelligent Mobile Robotics, Machine Learning, Ship Manoeuvring and Control, System Design and Computing for Ships, Mechanics, Ship Resistance and Propulsion, Marine Hydrodynamics,  Ship Design and Economics, Project Risk Management, Maritime Safety: Risk, Environment and Law",
        "<i>Master’s Group Design Project</i>: Perception System Design for an Autonomous Surface Vessel",
        '<i>Bachelor’s Thesis</i>: "Constructing a Global Shipping Network Using AIS Data and Graph Theory to Enhance Maritime Situational Awareness"', 

      ]
    }
  ];

  const workExperience = [
  {
    title: "Research Assistant: AI/Machine Learning for Digital Twin in Shipping",
    company: "Marine & Maritime Institute, University of Southampton",
    period: "Jul 2023 - Aug 2023",
    logo: "/portfolio-app/assets/icons/UoS.jpg",
    responsibilities: [
      "Work with geospatial ocean datasets to tackle the multi-variate challenge of corrosion prediction for integration into a digital twin for marine structures.",
      "Enhance the geospatial and temporal fidelity of existing research on corrosion rates for ships globally.",
      "Assess how a map of global corrosion rates can factor in different climate change scenarios."
    ],
    achievements: [
      "Implemented an artificial neural network and compared different architectures and model types to predict corrosion rates globally.",
      "Developed a high resolution map predicting corrosion rates for vessels globally.",
      "Identified biases in original dataset which resulted in poor model performance."
    ]
  },
  {
    title: "Research Assistant: Concept Design of LCO2 Carrier for Shell Shipping & Maritime",
    company: "Marine & Maritime Institute, University of Southampton",
    period: "Jun 2022 - Sept 2022",
    logo: "/portfolio-app/assets/icons/UoS.jpg",
    responsibilities: [
      "Evaluate the transport efficiency of different vessel designs transporting novel future fuels including hydrogen and ammonia.",
      "Develop a concept design for a net-zero LCO2 bulk carrier to support the UK’s decarbonisation targets."
    ],
    achievements: [
      "Researched novel ways of obtaining a stability estimate for a new ship type to transport future fuels.",
      "Produced a technical report for Shell Maritime & Shipping.",
      "Developed a 3D model and render in Rhino and determined vessel hydrostatics.",
      "Published an article in The Naval Architect magazine (Royal Institute of Naval Architects)."
    ]
  }
];


const courses = [
    {
      degree: "Maritime Robotics & Informatics",
      institution: "Intelligent Transportation Systems Lab (Smart MOVE), University of the Aegean, Greece",
      period: "Jul 2023",
      logo: "/portfolio-app/assets/icons/PA.jpg", 
      highlights: [
        "Built and tested a Remotely Operated Vessel (ROV).",
        "Attended labs and seminars on maritime data analytics, machine learning for trajectory forecasting, collision avoidance, and digital twins.", 
      ]
    }, 
    {
      degree: "Machine Learning",
      institution: "Stanford University (Coursera Online)",
      period: "Sept 2021",
      logo: "/portfolio-app/assets/icons/SA.jpg", 
      highlights: [
        "Grade: 97%",
        "Covered single and multivariable linear regression, logistic regression, regularisation, neural networks, support vector machines, unsupervised learning, dimensionality reduction, anomaly detection, recommender systems, large scale machine learning, application of photo optical character recognition.", 
      ]
    },
    {
      degree: "Digital Engineering",
      institution: "Hasso Plattner Institute, University of Potsdam, Germany",
      period: "Aug 2019",
      logo: "/portfolio-app/assets/icons/HPI.jpg", 
      highlights: [
        "Explored methods of design thinking in order to identify and address problems in the areas of project management, software development in a team, web technology and working with APIs and implementing a telegram bot.", 
      ]
    }
  ];


</script>

<div class="navbar">
  <div class="left">Portfolio: Nefelie Hemrich</div>
  <div class="right">
    <a href="#education" class="nav-link">Education</a>
    <a href="#experience" class="nav-link">Work Experience</a>
    <a href="#courses" class="nav-link">Further Training</a>
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
    <h4>MEng Maritime Engineering | University of Southampton, UK</h4>
    <p>
      Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges in the maritime field, with a focus on advancing maritime safety and preserving ocean health.
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
            <h5>Responsibilities</h5>
            <ul>
              {#each exp.responsibilities as responsibility}
                <li>{responsibility}</li>
              {/each}
            </ul>
            <h5>Achievements</h5>
            <ul>
              {#each exp.achievements as achievement}
                <li>{achievement}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </section>
      

      <section id="courses">
        <h2>Further Training </h2>
        {#each courses as course}
          <div class="experience-item">
            {#if course.logo}
              <div class="edu-header">
                <img src={course.logo} alt="Company Logo" class="company-logo" />
                <div class="edu-info">
                  <h3>{course.degree}</h3>
                  <h4>{course.institution}</h4>
                </div>
              </div>
              <p class="period">{course.period}</p>
            {/if}
            <ul>
              {#each course.highlights as highlight}
                <li>{@html highlight}</li>
              {/each}
            </ul>
          </div>
        {/each}
      


        <div id="projects">
          <h2>Projects</h2>
          
          <!-- Filter Buttons -->
          <div class="project-filters">
            <button 
              class={currentFilter === 'all' ? 'active' : ''} 
              on:click={() => setFilter('all')}
            >
              All
            </button>
            <button 
              class={currentFilter === 'robotics' ? 'active' : ''} 
              on:click={() => setFilter('robotics')}
            >
              Robotics
            </button>
            <button 
              class={currentFilter === 'data-science' ? 'active' : ''} 
              on:click={() => setFilter('data-science')}
            >
              Data Science
            </button>
          </div>
        
          {#each filteredProjects as project}
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
        </div>


    </main>
  </div>
</div>



<style>
  /* Global Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ffffff;
    
  }

  :root {
  /* Light mode colors (default) */
  --bg-color: #f5f5f5;
  --text-color: #1a1a1a;
  --navbar-bg: #ffffff;
  --navbar-text: #000000;
  --project-bg: #ffffff;
  --button-bg: #e1e1e1;
  --button-hover: #a7a7a7;
  --skill-tag-bg: #c4e7fd;
  --skill-tag-text: #1a1a1a;
  --skill-tag-hover: #bbdefb;
}


/* Comment out this media query to disable dark mode
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --navbar-bg: #151515;
    --navbar-text: #ffffff;
    --project-bg: #323232;
    --button-bg: #4a4a4a;
    --button-hover: #8b8b8b;
    --skill-tag-bg: #c7e2ff;
    --skill-tag-text: #000000;
    --skill-tag-hover: #a0d0ff;
  }
} */

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.4;
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
  }
  a { color: #007bff } /* Globally */

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
  border-bottom: 2px solid #e0e0e0;
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
  font-weight:600;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #007bff;
}


.layout {
  display: flex;
  padding-top: 60px; /* Instead of margin */
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

.sidebar h4 {
  text-align: left;
  font-weight: normal;
  color: var(--text-color);
}


.sidebar p {
  margin: 5px 0 0;
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
  color: #007bff;
}

.social-link span {
  font-size: 0.8rem;
  margin-left: 5px;
}

/* CV Download Button */
.cv-download-button {
  background-color: var(--button-bg);
  color: var(--navbar-text);
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
  font-size: 1.3rem;
  /* margin-bottom: 10px; */
  color: var(--text-color);
  text-align: left;
  font-weight: 600;
}

.sidebar .tech-category {
  margin-bottom: 10px;
  text-align: left;
}

.sidebar .tech-category h4 {
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 5px;
  font-weight: 600;
}

/* Main Content */
#app {
  flex: 1;
  margin-left: 25%;
  padding: 20px;
  box-sizing: border-box;
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
  font-weight: 600;
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


#education, #experience, #courses, #projects {
  padding: 1rem 20px; /* First value vertical padding*/
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 0px; /* Adjust this value to reduce or increase space between sections */
}



#education h2, #experience h2, #courses h2, #projects h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: left;
  color: var(--text-color);
  font-weight: 600;

}

#education a {
  color: inherit !important;
  text-decoration: underline !important;
  font-weight: normal !important;
}



.education-section, .work-experience-section, .projects-section {
  margin-bottom: 10px; /* Adjust this value to reduce or increase space between sections */
}

.experience-item {
  background-color: var(--project-bg);
  padding: 20px;
  margin-bottom: 20px; /* space between individual experience items */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease;
}

.experience-item:hover {
  transform: scale(1.02);
}

.experience-item h3 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 5px;
  font-weight: 600;

}

.experience-item h4 {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 5px;
  opacity: 0.8;
  font-weight: 600;

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

h5 {
  font-size: 1.0em;  /* Slightly larger than the default font size */
  font-weight: 600;
  margin-top: 1rem;
  color: var(--text-color);

}


.project-filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .project-filters button {
    background-color: var(--button-bg);
    color: var(--text-color);
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .project-filters button.active,
  .project-filters button:hover {
    background-color: var(--button-hover);
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
      align-items: left;
      padding: 2rem 10px;
    }

    .project {
    display: flex;  /* Use flexbox layout */
    flex-direction: column;  /* Stack children vertically */
    align-items: flex-start;  /* Align the items (including the image) to the left */
  }

    .project-image {
      max-width: 100%;
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

  .experience-item ul {
    font-size: 0.9rem;  /* Matches the font size of project details */
  }

  .experience-item h5 {
    font-size: 1.1rem;  /* Slightly larger than the list items */
    color: var(--text-color);
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
