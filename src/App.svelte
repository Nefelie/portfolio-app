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
    <img src="/src/assets/profilepic.jpg" alt="" class="profile-pic" />
    <h3>Nefelie Hemrich</h3>
    <p>
      MEng Maritime Engineering graduate from the University of Southampton, UK.
      Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges and drive innovation in the maritime industry.
    </p>
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

        <!-- Example Project 1 -->
        <div class="project">
          <div class="project-image">
            <img src="/src/assets/MAChallenge.jpg" alt="Project Image" />
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
            <div class="skills">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Machine Learning</span>
              <span class="skill-tag">Data Science</span>
            </div>
          </div>
        </div>

        <!-- Example Project 2 -->
        <div class="project">
          <div class="project-image">
            <img src="src/assets/ais-plotter.png" alt="Project Image" />
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
            <div class="skills">
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Web Development</span>
            </div>
          </div>
        </div>

        <!-- Example Project 3 -->
        <div class="project">
          <div class="project-image">
            <img src="src/assets/imr.jpg" alt="Project Image" />
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
            <div class="skills">
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">Web Development</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>List skills here...</p>
      </section>
    </main>
  </div>
</div>

<style>
  /* Navbar */
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
    padding: 10px 200px; /* 200px padding on both sides */
    z-index: 1000;
  }

  .navbar .left {
    font-size: 1.5rem;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center; /* Vertically center the "Portfolio" text */
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
    color: gray;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }

  .layout {
    display: flex;
    margin-top: 60px; /* Space for navbar */
    padding-left: 430px; /* Width of sidebar (250px) + margin (180px) */
  }

  .sidebar {
    width: 250px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 180px;
    border-radius: 10px;
    height: calc(100vh - 60px); /* Full height minus navbar */
    position: fixed; /* Keep it fixed */
    top: 60px; /* Keeps alignment with the navbar */
    left: 0; /* Ensures it stays on the left side */
  }

  #app {
    flex: 1;
    padding: 20px;
    padding-right: 200px; /* Maintain original right padding */
    width: calc(100% - 250px); /* Adjust width to account for sidebar */
  }

  .profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    object-fit: cover;
    margin-bottom: 15px;
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
    color: gray;
  }

  /* Main Content */
  #app {
    flex: 1;
    padding: 20px;
    padding-right: 200px; /* Additional padding on the right */
  }

  /* Projects Section */
  #projects {
    padding: 2rem;
  }

  #projects h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left; /* Align "Projects" title to the left */
  }

  .project {
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #494848;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    flex: 1;
    max-width: 200px;
    margin-right: 20px;
  }

  .project-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  .project-details {
    flex: 2;
    text-align: left; /* Ensure text within the project box is left-aligned */
  }

  .project-details h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: left; /* Align project title to the left */
  }

  .project-details p {
    font-size: 1rem;
    margin-bottom: 15px;
    line-height: 1.6;
    text-align: left; /* Align project description to the left */
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    background-color: #c7e2ff;
    color: #333;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.9rem;
    display: inline-block;
  }

  .skill-tag:hover {
    background-color: #bbb;
    cursor: pointer;
  }

  main {
    padding: 2rem;
  }
</style>
