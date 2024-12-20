var R=Object.defineProperty;var D=(s,e,t)=>e in s?R(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>D(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function c(){}function I(s){return s()}function P(){return Object.create(null)}function f(s){s.forEach(I)}function O(s){return typeof s=="function"}function L(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function N(s){return Object.keys(s).length===0}function u(s,e,t){s.insertBefore(e,t||null)}function d(s){s.parentNode&&s.parentNode.removeChild(s)}function _(s){return document.createElement(s)}function $(s){return document.createTextNode(s)}function G(){return $(" ")}function w(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function x(s){return Array.from(s.childNodes)}let y;function v(s){y=s}const h=[],A=[];let r=[];const j=[];function b(s){r.push(s)}const k=new Set;let p=0;function M(){if(p!==0)return;const s=y;do{try{for(;p<h.length;){const e=h[p];p++,v(e),T(e.$$)}}catch(e){throw h.length=0,p=0,e}for(v(null),h.length=0,p=0;A.length;)A.pop()();for(let e=0;e<r.length;e+=1){const t=r[e];k.has(t)||(k.add(t),t())}r.length=0}while(h.length);for(;j.length;)j.pop()();k.clear(),v(s)}function T(s){if(s.fragment!==null){s.update(),f(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(b)}}function V(s){const e=[],t=[];r.forEach(l=>s.indexOf(l)===-1?e.push(l):t.push(l)),t.forEach(l=>l()),r=e}const F=new Set;function E(s,e){s&&s.i&&(F.delete(s),s.i(e))}function K(s,e,t){const{fragment:l,after_update:a}=s.$$;l&&l.m(e,t),b(()=>{const i=s.$$.on_mount.map(I).filter(O);s.$$.on_destroy?s.$$.on_destroy.push(...i):f(i),s.$$.on_mount=[]}),a.forEach(b)}function z(s,e){const t=s.$$;t.fragment!==null&&(V(t.after_update),f(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function U(s,e,t,l,a,i,n=null,C=[-1]){const g=y;v(s);const o=s.$$={fragment:null,ctx:[],props:i,update:c,not_equal:a,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:P(),dirty:C,skip_bound:!1,root:e.target||g.$$.root};if(n&&n(o.root),o.ctx=[],o.update(),f(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const S=x(e.target);o.fragment&&o.fragment.l(S),S.forEach(d)}else o.fragment&&o.fragment.c();e.intro&&E(s.$$.fragment),K(s,e.target,e.anchor),M()}v(g)}class W{constructor(){m(this,"$$");m(this,"$$set")}$destroy(){z(this,1),this.$destroy=c}$on(e,t){if(!O(t))return c;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(t),()=>{const a=l.indexOf(t);a!==-1&&l.splice(a,1)}}$set(e){this.$$set&&!N(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const B="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(B);function X(s){let e,t,l;return{c(){e=_("div"),e.innerHTML='<div class="left svelte-6h6ps3">Portfolio</div> <div class="right svelte-6h6ps3"></div>',t=G(),l=_("div"),l.innerHTML=`<div class="sidebar svelte-6h6ps3"><img src="/portfolio-app/assets/img/profilepic.jpg" alt="" class="profile-pic svelte-6h6ps3"/> <h3 class="svelte-6h6ps3">Nefelie Hemrich</h3> <p class="svelte-6h6ps3">MEng Maritime Engineering graduate from the University of Southampton, UK.
      Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges and drive innovation in the maritime industry.</p> <a href="/portfolio-app/assets/docs/CV.pdf" download="Nefelie_Hemrich_CV.pdf" class="cv-download-button svelte-6h6ps3">Download CV</a> <div class="social-links svelte-6h6ps3"><a href="https://www.linkedin.com/in/nefeliehemrich/" target="_blank" class="social-link svelte-6h6ps3"><i class="fa-brands fa-linkedin svelte-6h6ps3"></i> LinkedIn</a> <a href="https://github.com/Nefelie" target="_blank" class="social-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i> GitHub</a></div> <section id="skills" class="sidebar-skills svelte-6h6ps3"><h3 class="svelte-6h6ps3">Skills</h3> <div class="tech-categories svelte-6h6ps3"><div class="tech-category svelte-6h6ps3"><h4 class="svelte-6h6ps3">Programming</h4> <div class="skills svelte-6h6ps3"><span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
              Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Java.svg" alt="Java" class="svelte-6h6ps3"/>
              Java</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/C++ (CPlusPlus).svg" alt="C++" class="svelte-6h6ps3"/> C++</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/MATLAB.svg" alt="MATLAB" class="svelte-6h6ps3"/>
              MATLAB</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Keras.svg" alt="Keras" class="svelte-6h6ps3"/> Keras</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/PyTorch.svg" alt="Pytorch" class="svelte-6h6ps3"/> Pytorch</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/scikit-learn.svg" alt="Scikit-learn" class="svelte-6h6ps3"/> Scikit-learn</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/OpenCV.svg" alt="OpenCV" class="svelte-6h6ps3"/>
              OpenCV</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Pandas.svg" alt="Pandas" class="svelte-6h6ps3"/>
              Pandas</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/NumPy.svg" alt="Numpy" class="svelte-6h6ps3"/> Numpy</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/SciPy.svg" alt="SciPy" class="svelte-6h6ps3"/> Scipy</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/GeoPandas.svg" alt="GeoPandas" class="svelte-6h6ps3"/>
              GeoPandas</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/netCDF.png" alt="netCDF" class="svelte-6h6ps3"/>
              netCDF</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/SQL.svg" alt="SQL" class="svelte-6h6ps3"/> SQL</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg" alt="ROS2" class="svelte-6h6ps3"/> ROS2</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Gazebo.svg" alt="Gazebo" class="svelte-6h6ps3"/>
              Gazebo</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/TypeScript.svg" alt="Typescript" class="svelte-6h6ps3"/> TypeScript</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Svelte.svg" alt="Svelte" class="svelte-6h6ps3"/>
              Svelte</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Vite.js.svg" alt="Vite" class="svelte-6h6ps3"/>
              Vite.js</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/FastAPI.svg" alt="FastAPI" class="svelte-6h6ps3"/> FastAPI</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Linux.svg" alt="Linux" class="svelte-6h6ps3"/> Linux</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Git.svg" alt="Git" class="svelte-6h6ps3"/> Git</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Docker.svg" alt="Docker" class="svelte-6h6ps3"/>
              Docker</span></div></div> <div class="tech-category svelte-6h6ps3"><h4 class="svelte-6h6ps3">Design</h4> <div class="skills svelte-6h6ps3"><span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/SOLIDWORKS.svg" alt="SOLIDWORKS" class="svelte-6h6ps3"/> SOLIDWORKS</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Rhinosceros3D.svg" alt="Rhinosceros3D" class="svelte-6h6ps3"/> Rhinosceros3D</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/AutoCAD.png" alt="AutoCAD" class="svelte-6h6ps3"/> AutoCAD</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/MAXSURF.png" alt="MAXSURF" class="svelte-6h6ps3"/>
              MAXSURF</span></div></div></div></section></div> <div id="app" class="svelte-6h6ps3"><main class="svelte-6h6ps3"><section id="projects" class="svelte-6h6ps3"><h2 class="svelte-6h6ps3">Projects</h2> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/MAChallenge.jpg" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">Marine Autonomy Challenge</h3> <p class="svelte-6h6ps3">Leader of the University of Southampton team (finalists),
              developed software for the autonomous operation of an uncrewed
              surface vehicle to map and detect hydrocarbon pollution &amp; ocean
              plastics. Developed a range of software functionalities: path
              planning and following, autonomous docking, obstacle avoidance,
              searching for and mapping an area of hydrocarbon pollution, object
              detection and identification (ocean plastics).</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/MAChallengeV3" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
                  Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/OpenCV.svg" alt="OpenCV" class="svelte-6h6ps3"/>
                  OpenCV</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/raspberrypi.png" alt="Raspberry Pi" class="svelte-6h6ps3"/>
                  Raspberry Pi</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/gsn3.png" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">Global Shipping Network using AIS Data, Graph Theory and Machine
              Learning</h3> <p class="svelte-6h6ps3">Constructed a global shipping network using machine learning (KNN,
              DBSCAN) and graph theory to model maritime routes and traffic
              patterns. Designed and implemented a data processing pipeline to
              clean AIS data and compress vessel trajectories. Analysed maritime
              traffic variability and congestion to provide insights into global
              shipping routes and supply chains.</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/AIS_GSN" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
                  Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/NetworkX.png" alt="NetworkX" class="svelte-6h6ps3"/>
                  NetworkX</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/scikit-learn.svg" alt="Scikit-learn" class="svelte-6h6ps3"/>
                  scikit-learn</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/GDP7.png" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">Simulation and Software Development of Perception System for an
              Autonomous Vessel (LiDAR and Stereo Cameras)</h3> <p class="svelte-6h6ps3">Designed and simulated a perception system using stereo cameras
              and LiDAR using Gazebo and ROS2 for autonomous navigation to
              enhance collision avoidance capabilities in dynamic marine
              environments. Developed object detection algorithms for vision and
              point cloud data under varying weather conditions. Integrated the
              perception system with obstacle avoidance sub-systems in a
              multidisciplinary team.</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/VRX-Camera-and-Lidar-Simulation" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg" alt="ROS2" class="svelte-6h6ps3"/>
                  ROS</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Gazebo.svg" alt="Gazebo" class="svelte-6h6ps3"/>
                  Gazebo</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
                  Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/PyTorch.svg" alt="PyTorch" class="svelte-6h6ps3"/>
                  PyTorch</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Linux.svg" alt="Linux" class="svelte-6h6ps3"/>
                  Linux</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/GlobalCorrosion.png" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">Global Shipping Corrosion Map using an Artifical Neural Network</h3> <p class="svelte-6h6ps3">Generated a global marine corrosion map for shipping using
              AI/machine learning for integration into a digital twin for marine
              structures, supporting improved ship design and maintenance
              strategies to reduce costs. Implemented and trained an artificial
              neural network to predict corrosion depth based on geospatial
              ocean datasets.</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/global_corrosion_map" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
                  Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/netCDF.png" alt="netCDF" class="svelte-6h6ps3"/>
                  netCDF</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Keras.svg" alt="Keras" class="svelte-6h6ps3"/>
                  Keras</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/ais-plotter.png" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">AIS Data Plotter Web App</h3> <p class="svelte-6h6ps3">An interactive web application for visualizing AIS (Automatic
              Identification System) data for ships. This tool enables users to
              dynamically upload and visualize ship position data from .pkl
              files on a map, with customizable color options for different
              datasets. The frontend is built with Svelte, MapLibre GL, and
              TypeScript, while the backend uses FastAPI.</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/ais-plotter" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/TypeScript.svg" alt="TypeScript" class="svelte-6h6ps3"/>
                  TypeScript</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Svelte.svg" alt="Svelte" class="svelte-6h6ps3"/>
                  Svelte</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Vite.js.svg" alt="Vite" class="svelte-6h6ps3"/>
                  Vite.js</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/FastAPI.svg" alt="FastAPI" class="svelte-6h6ps3"/>
                  FastAPI</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/imr.jpg" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">SLAM and Perception System Development for an Intelligent Mobile
              Robot</h3> <p class="svelte-6h6ps3">Worked with ZeroROS robot middleware and Webots simulation
              environment to develop software for the robot. Implemented
              state-space control, an EKF &amp; particle filter for probabilistic
              localisation and interpreted live LiDAR sensor data using a
              Gaussian Process Classifier and Regressor to detect walls and
              corners from the track as part of the perception system on the
              physical robotic platform. Developed a Graph SLAM algorithm</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/slam-wheeled-robot" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/zeroros.png" alt="ROS2" class="svelte-6h6ps3"/>
                  ZeroROS</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/webots.png" alt="webots" class="svelte-6h6ps3"/>
                  Webots</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/scikit-learn.svg" alt="scikit-learn" class="svelte-6h6ps3"/>
                  scikit-learn</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/raspberrypi.png" alt="Raspberry Pi" class="svelte-6h6ps3"/>
                  Raspberry Pi</span></div></div></div></div> <div class="project svelte-6h6ps3"><div class="project-image svelte-6h6ps3"><img src="/portfolio-app/assets/img/mr.jpg" alt="Project Image" class="svelte-6h6ps3"/></div> <div class="project-details svelte-6h6ps3"><h3 class="svelte-6h6ps3">Guidance, Control &amp; Navigation of an Autonomous Vessel</h3> <p class="svelte-6h6ps3">Implemented PID control, artificial potential fields for path
              planning, line of sight guidance for path following, and an
              Extended Kalman Filter for probabilistic localisation. Worked with
              actuators (motors using differential thrust) &amp; sensors, including
              an IMU for heading control and ArUco markers for localisation.</p> <div class="skills-container svelte-6h6ps3"><div class="skills svelte-6h6ps3"><a href="https://github.com/Nefelie/gnc-autonomous-vessel" target="_blank" class="skill-tag github-link svelte-6h6ps3"><i class="fa-brands fa-github svelte-6h6ps3"></i></a> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-6h6ps3"/>
                  Python</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/zeroros.png" alt="ROS2" class="svelte-6h6ps3"/>
                  ZeroROS</span> <span class="skill-tag svelte-6h6ps3"><img src="/portfolio-app/assets/icons/raspberrypi.png" alt="Raspberry Pi" class="svelte-6h6ps3"/>
                  Raspberry Pi</span></div></div></div></div></section></main></div>`,w(e,"class","navbar svelte-6h6ps3"),w(l,"class","layout svelte-6h6ps3")},m(a,i){u(a,e,i),u(a,t,i),u(a,l,i)},p:c,i:c,o:c,d(a){a&&(d(e),d(t),d(l))}}}class H extends W{constructor(e){super(),U(this,e,null,X,L,{})}}new H({target:document.getElementById("app")});
