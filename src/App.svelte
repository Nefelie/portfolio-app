<script>
  // Add any Svelte state or logic here if needed
</script>

<div class="navbar">
  <div class="left">Portfolio</div>
  <div class="right">
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
  </div>
</div>

<div class="layout">
  <!-- Left Sidebar -->
  <div class="sidebar">
    <img
      src="/portfolio-app/assets/img/profilepic.jpg"
      alt=""
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
      <!-- LinkedIn Link with Icon -->
      <a
        href="https://www.linkedin.com/in/nefeliehemrich/"
        target="_blank"
        class="social-link"
      >
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <!-- GitHub Link with Icon -->
      <a href="https://github.com/Nefelie" target="_blank" class="social-link">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
    </div>
  </div>

  <!-- Main Content -->
  <div id="app">
    <main>
      <section id="projects">
        <h2>Projects</h2>

        <!-- Marine Autonomy Challenge Project -->
        <div class="project">
          <div class="project-image">
            <img
              src="/portfolio-app/assets/img/MAChallenge.jpg"
              alt="Project Image"
            />
          </div>
          <div class="project-details">
            <h3>Marine Autonomy Challenge</h3>
            <p>
              Leader of the University of Southampton team, developed software
              for the autonomous operation of an uncrewed surface vehicle to map
              and detect hydrocarbon pollution & ocean plastics. Developed a
              range of software functionalities: path planning and following,
              autonomous docking, obstacle avoidance, searching for and mapping
              an area of hydrocarbon pollution, object detection and
              identification (ocean plastics).
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/MAChallengeV3"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Machine Learning</span>
                <span class="skill-tag">Data Science</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Global Shipping Network-->
        <div class="project">
          <div class="project-image">
            <img src="/portfolio-app/assets/img/gsn3.png" alt="Project Image" />
          </div>
          <div class="project-details">
            <h3>
              Global Shipping Network using AIS Data, Graph Theory and Machine
              Learning
            </h3>
            <p>
              Constructed a global shipping network using machine learning (KNN,
              DBSCAN) and graph theory to model maritime routes and traffic
              patterns. Designed and implemented a data processing pipeline to
              clean AIS data and compress vessel trajectories. Analysed maritime
              traffic variability and congestion to provide insights into global
              shipping routes and supply chains.
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/AIS_GSN"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Graph Theory</span>
                <span class="skill-tag">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AIS Data Plotter Web App Project -->
        <div class="project">
          <div class="project-image">
            <img
              src="/portfolio-app/assets/img/ais-plotter.png"
              alt="Project Image"
            />
          </div>
          <div class="project-details">
            <h3>AIS Data Plotter Web App</h3>
            <p>
              An interactive web application for visualizing AIS (Automatic
              Identification System) data for ships. This tool enables users to
              dynamically upload and visualize ship position data from .pkl
              files on a map, with customizable color options for different
              datasets. The frontend is built with Svelte, MapLibre GL, and
              TypeScript, while the backend uses FastAPI.
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/ais-plotter"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Web Development</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SLAM and Perception System Project -->
        <div class="project">
          <div class="project-image">
            <img src="/portfolio-app/assets/img/imr.jpg" alt="Project Image" />
          </div>
          <div class="project-details">
            <h3>
              SLAM and Perception System Development for an Intelligent Mobile
              Robot
            </h3>
            <p>
              Worked with ZeroROS robot middleware and Webots simulation
              environment to develop software for the robot. Implemented
              state-space control, an EKF & particle filter for probabilistic
              localisation and interpreted live LiDAR sensor data using a
              Gaussian Process Classifier and Regressor to detect walls and
              corners from the track as part of the perception system on the
              physical robotic platform. Developed a Graph SLAM algorithm
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/slam-wheeled-robot"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">ROS2</span>
                <span class="skill-tag">Gazebo</span>
                <span class="skill-tag">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Autonomous Vessel Project -->
        <div class="project">
          <div class="project-image">
            <img src="/portfolio-app/assets/img/mr.jpg" alt="Project Image" />
          </div>
          <div class="project-details">
            <h3>Guidance, Control & Navigation of an Autonomous Vessel</h3>
            <p>
              Implemented PID control, artificial potential fields for path
              planning, line of sight guidance for path following, and an
              Extended Kalman Filter for probabilistic localisation. Worked with
              actuators (motors using differential thrust) & sensors, including
              an IMU for heading control and ArUco markers for localisation.
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/gnc-autonomous-vessel"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">ZeroROS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- <section id="skills">
        <h2>Skills</h2>
        <p>List skills here...</p>
      </section> -->
      </section>
    </main>
  </div>
</div>

<style>
  /* Navbar */
  /* Global Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #1a1a1a;
    color: #ffffff;
    overflow-x: hidden;
  }

  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%;
    z-index: 1000;
    transition: all 0.3s ease;
  }

  .navbar .left {
    font-size: 1.5rem;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .navbar .right {
    display: flex;
    gap: 1.5rem;
    font-size: 1.2rem;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }

  .navbar a:hover {
    color: #c7e2ff;
  }

  .layout {
    display: flex;
    margin-top: 60px; /* Keeps content below navbar */
    flex: 1;
  }

  /* Sidebar */
  .sidebar {
    width: clamp(200px, 20%, 350px);
    padding: 20px 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 5%;
    border-radius: 10px;
    height: calc(100vh - 60px);
    position: fixed; /* Keeps it fixed while scrolling */
    top: 60px;
    left: 0;
    background-color: #00000000;
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
  }

  .sidebar p {
    margin: 10px 0 0;
    font-size: 0.9rem;
    text-align: left;
  }

  /* Social Links */
  .social-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .social-link {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: color 0.3s;
  }

  .social-link i {
    font-size: 1.5rem;
  }

  .social-link:hover {
    color: #c7e2ff;
  }

  /* Main Content */
  #app {
    flex: 1;
    margin-left: 25%; /* Matches the width of the sidebar */
    padding: 20px; /* Adds spacing to the content */
    box-sizing: border-box; /* Ensures padding doesn't affect width */
  }

  /* CV Download Button */
  .cv-download-button {
    background-color: #c7e2ff;
    color: #000000;
    padding: 8px 15px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 15px;
    display: inline-block;
    width: 120px;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .cv-download-button:hover {
    background-color: #a0d0ff;
  }

  /* Projects Section */
  #projects {
    padding: 2rem 20px;
    display: flex;
    flex-direction: column;
    align-items: left; /* Align projects to the left */
  }

  #projects h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    color: #ffffff;
  }

  .project {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #494848;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    max-width: 1200px; /* Set maximum width for the project container */
    width: 100%; /* Ensure it scales to smaller screen sizes */
    align-items: center; /* Align items vertically in the center */
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
    color: #ffffff;
  }

  .project-details p {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.6;
  }

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
    background-color: #c7e2ff;
    color: #000000;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .skill-tag:hover {
    background-color: #a0d0ff;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    #projects {
      align-items: center; /* Center align the projects section */
      padding: 2rem 10px; /* Add some horizontal padding */
    }
    .project {
      flex-direction: column;
      align-items: center;
    }

    .project-image {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 15px; /* Add space between the image and the title */
    }

    .project-details {
      text-align: center; /* Optional, center-align the details for better aesthetics */
    }
  }

  /* Responsive Styles */
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
      margin-left: 10px; /* Small margin for smaller screens */
      padding: 20px;
      align-items: center;
      text-align: center;
    }

    .sidebar .profile-pic {
      width: 150px;
      height: 150px;
      align-self: center;
    }

    .sidebar h3,
    .sidebar p {
      text-align: center;
    }

    .social-links {
      flex-direction: row;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
    }

    .social-link {
      flex-direction: column;
      align-items: center;
    }

    .cv-download-button {
      width: auto;
      padding: 10px 20px;
    }

    #app {
      margin-left: 0; /* Reset left margin */
      width: 100%; /* Ensure it takes the full width */
      padding: 0 1rem; /* Add slight padding for better aesthetics */
    }

    #projects {
      align-items: center; /* Center align the projects section */
      padding: 2rem 10px; /* Add some horizontal padding */
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
