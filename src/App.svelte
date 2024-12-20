<script>
  // Add any Svelte state or logic here if needed
</script>

<div class="navbar">
  <div class="left">Portfolio</div>
  <div class="right">
    <!-- <a href="#projects">Projects</a>
    <a href="#skills">Skills</a> -->
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

    <section id="skills" class="sidebar-skills">
      <h3>Skills</h3>
      <div class="tech-categories">
        <div class="tech-category">
          <h4>Programming</h4>
          <div class="skills">
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" />
              Python</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Java.svg" alt="Java" />
              Java</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/C++ (CPlusPlus).svg"
                alt="C++"
              /> C++</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/MATLAB.svg" alt="MATLAB" />
              MATLAB</span
            >

            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Keras.svg" alt="Keras" /> Keras</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/PyTorch.svg"
                alt="Pytorch"
              /> Pytorch</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/scikit-learn.svg"
                alt="Scikit-learn"
              /> Scikit-learn</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/OpenCV.svg" alt="OpenCV" />
              OpenCV</span
            >

            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Pandas.svg" alt="Pandas" />
              Pandas</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/NumPy.svg" alt="Numpy" /> Numpy</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/SciPy.svg" alt="SciPy" /> Scipy</span
            >

            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/GeoPandas.svg"
                alt="GeoPandas"
              />
              GeoPandas</span
            >

            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/netCDF.png" alt="netCDF" />
              netCDF</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/SQL.svg" alt="SQL" /> SQL</span
            >

            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg"
                alt="ROS2"
              /> ROS2</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Gazebo.svg" alt="Gazebo" />
              Gazebo</span
            >

            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/TypeScript.svg"
                alt="Typescript"
              /> TypeScript</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Svelte.svg" alt="Svelte" />
              Svelte</span
            >
            <span class="skill-tag">
              <img src="/portfolio-app/assets/icons/Vite.js.svg" alt="Vite" />
              Vite.js
            </span>
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/FastAPI.svg"
                alt="FastAPI"
              /> FastAPI</span
            >

            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Linux.svg" alt="Linux" /> Linux</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Git.svg" alt="Git" /> Git</span
            >
            <span class="skill-tag"
              ><img src="/portfolio-app/assets/icons/Docker.svg" alt="Docker" />
              Docker</span
            >
          </div>
        </div>

        <div class="tech-category">
          <h4>Design</h4>
          <div class="skills">
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/SOLIDWORKS.svg"
                alt="SOLIDWORKS"
              /> SOLIDWORKS</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/Rhinosceros3D.svg"
                alt="Rhinosceros3D"
              /> Rhinosceros3D</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/AutoCAD.png"
                alt="AutoCAD"
              /> AutoCAD</span
            >
            <span class="skill-tag"
              ><img
                src="/portfolio-app/assets/icons/MAXSURF.png"
                alt="MAXSURF"
              />
              MAXSURF</span
            >
          </div>
        </div>
      </div>
    </section>
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
              Leader of the University of Southampton team (finalists),
              developed software for the autonomous operation of an uncrewed
              surface vehicle to map and detect hydrocarbon pollution & ocean
              plastics. Developed a range of software functionalities: path
              planning and following, autonomous docking, obstacle avoidance,
              searching for and mapping an area of hydrocarbon pollution, object
              detection and identification (ocean plastics).
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
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Python.svg"
                    alt="Python"
                  />
                  Python
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/OpenCV.svg"
                    alt="OpenCV"
                  />
                  OpenCV
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/raspberrypi.png"
                    alt="Raspberry Pi"
                  />
                  Raspberry Pi</span
                >
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
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Python.svg"
                    alt="Python"
                  />
                  Python
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/NetworkX.png"
                    alt="NetworkX"
                  />
                  NetworkX
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/scikit-learn.svg"
                    alt="Scikit-learn"
                  />
                  scikit-learn
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Perception System Design for an Autonomous Vessel based on LiDAR
              and Stero Cameras -->
        <div class="project">
          <div class="project-image">
            <img src="/portfolio-app/assets/img/GDP7.png" alt="Project Image" />
          </div>
          <div class="project-details">
            <h3>
              Simulation and Software Development of Perception System for an
              Autonomous Vessel (LiDAR and Stereo Cameras)
            </h3>
            <p>
              Designed and simulated a perception system using stereo cameras
              and LiDAR using Gazebo and ROS2 for autonomous navigation to
              enhance collision avoidance capabilities in dynamic marine
              environments. Developed object detection algorithms for vision and
              point cloud data under varying weather conditions. Integrated the
              perception system with obstacle avoidance sub-systems in a
              multidisciplinary team.
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/VRX-Camera-and-Lidar-Simulation"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg"
                    alt="ROS2"
                  />
                  ROS
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Gazebo.svg"
                    alt="Gazebo"
                  />
                  Gazebo
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Python.svg"
                    alt="Python"
                  />
                  Python
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/PyTorch.svg"
                    alt="PyTorch"
                  />
                  PyTorch
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Linux.svg"
                    alt="Linux"
                  />
                  Linux
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Global Corrosion Map for Shipping -->
        <div class="project">
          <div class="project-image">
            <img
              src="/portfolio-app/assets/img/GlobalCorrosion.png"
              alt="Project Image"
            />
          </div>
          <div class="project-details">
            <h3>
              Global Shipping Corrosion Map using an Artifical Neural Network
            </h3>
            <p>
              Generated a global marine corrosion map for shipping using
              AI/machine learning for integration into a digital twin for marine
              structures, supporting improved ship design and maintenance
              strategies to reduce costs. Implemented and trained an artificial
              neural network to predict corrosion depth based on geospatial
              ocean datasets.
            </p>
            <div class="skills-container">
              <div class="skills">
                <a
                  href="https://github.com/Nefelie/global_corrosion_map"
                  target="_blank"
                  class="skill-tag github-link"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Python.svg"
                    alt="Python"
                  />
                  Python
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/netCDF.png"
                    alt="netCDF"
                  />
                  netCDF
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Keras.svg"
                    alt="Keras"
                  />
                  Keras
                </span>
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
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/TypeScript.svg"
                    alt="TypeScript"
                  />
                  TypeScript
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Svelte.svg"
                    alt="Svelte"
                  />
                  Svelte
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Vite.js.svg"
                    alt="Vite"
                  />
                  Vite.js
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/FastAPI.svg"
                    alt="FastAPI"
                  />
                  FastAPI
                </span>
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
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/zeroros.png"
                    alt="ROS2"
                  />
                  ZeroROS
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/webots.png"
                    alt="webots"
                  />
                  Webots</span
                >

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/scikit-learn.svg"
                    alt="scikit-learn"
                  />
                  scikit-learn</span
                >

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/raspberrypi.png"
                    alt="Raspberry Pi"
                  />
                  Raspberry Pi</span
                >
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
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/Python.svg"
                    alt="Python"
                  />
                  Python
                </span>
                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/zeroros.png"
                    alt="ROS2"
                  />
                  ZeroROS
                </span>

                <span class="skill-tag">
                  <img
                    src="/portfolio-app/assets/icons/raspberrypi.png"
                    alt="Raspberry Pi"
                  />
                  Raspberry Pi</span
                >
              </div>
            </div>
          </div>
        </div>
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
      --navbar-bg: #a8a8a8;
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
    line-height: 1.6;
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
  }

  /* Navbar */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--navbar-bg);
    color: var(--navbar-text);
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
    line-height: 1.6;
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
