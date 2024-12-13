var $=Object.defineProperty;var I=(s,t,e)=>t in s?$(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var y=(s,t,e)=>I(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();function r(){}function A(s){return s()}function b(){return Object.create(null)}function f(s){s.forEach(A)}function j(s){return typeof s=="function"}function N(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function O(s){return Object.keys(s).length===0}function h(s,t,e){s.insertBefore(t,e||null)}function k(s){s.parentNode&&s.parentNode.removeChild(s)}function _(s){return document.createElement(s)}function M(s){return document.createTextNode(s)}function C(){return M(" ")}function S(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function G(s){return Array.from(s.childNodes)}let x;function d(s){x=s}const v=[],P=[];let p=[];const w=[];function m(s){p.push(s)}const u=new Set;let c=0;function T(){if(c!==0)return;const s=x;do{try{for(;c<v.length;){const t=v[c];c++,d(t),D(t.$$)}}catch(t){throw v.length=0,c=0,t}for(d(null),v.length=0,c=0;P.length;)P.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];u.has(e)||(u.add(e),e())}p.length=0}while(v.length);for(;w.length;)w.pop()();u.clear(),d(s)}function D(s){if(s.fragment!==null){s.update(),f(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(m)}}function R(s){const t=[],e=[];p.forEach(l=>s.indexOf(l)===-1?t.push(l):e.push(l)),e.forEach(l=>l()),p=t}const E=new Set;function V(s,t){s&&s.i&&(E.delete(s),s.i(t))}function z(s,t,e){const{fragment:l,after_update:a}=s.$$;l&&l.m(t,e),m(()=>{const i=s.$$.on_mount.map(A).filter(j);s.$$.on_destroy?s.$$.on_destroy.push(...i):f(i),s.$$.on_mount=[]}),a.forEach(m)}function K(s,t){const e=s.$$;e.fragment!==null&&(R(e.after_update),f(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function B(s,t,e,l,a,i,o=null,L=[-1]){const g=x;d(s);const n=s.$$={fragment:null,ctx:[],props:i,update:r,not_equal:a,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:b(),dirty:L,skip_bound:!1,root:t.target||g.$$.root};if(o&&o(n.root),n.ctx=[],n.update(),f(n.before_update),n.fragment=l?l(n.ctx):!1,t.target){if(t.hydrate){const q=G(t.target);n.fragment&&n.fragment.l(q),q.forEach(k)}else n.fragment&&n.fragment.c();t.intro&&V(s.$$.fragment),z(s,t.target,t.anchor),T()}d(g)}class F{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){K(this,1),this.$destroy=r}$on(t,e){if(!j(e))return r;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(e),()=>{const a=l.indexOf(e);a!==-1&&l.splice(a,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const U="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(U);function H(s){let t,e,l;return{c(){t=_("div"),t.innerHTML='<div class="left svelte-qtykxs">Portfolio</div> <div class="right svelte-qtykxs"></div>',e=C(),l=_("div"),l.innerHTML=`<div class="sidebar svelte-qtykxs"><img src="/portfolio-app/assets/img/profilepic.jpg" alt="" class="profile-pic svelte-qtykxs"/> <h3 class="svelte-qtykxs">Nefelie Hemrich</h3> <p class="svelte-qtykxs">MEng Maritime Engineering graduate from the University of Southampton, UK.
      Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges and drive innovation in the maritime industry.</p> <a href="/portfolio-app/assets/docs/CV.pdf" download="Nefelie_Hemrich_CV.pdf" class="cv-download-button svelte-qtykxs">Download CV</a> <div class="social-links svelte-qtykxs"><a href="https://www.linkedin.com/in/nefeliehemrich/" target="_blank" class="social-link svelte-qtykxs"><i class="fa-brands fa-linkedin svelte-qtykxs"></i> LinkedIn</a> <a href="https://github.com/Nefelie" target="_blank" class="social-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i> GitHub</a></div> <section id="skills" class="sidebar-skills svelte-qtykxs"><h3 class="svelte-qtykxs">Skills</h3> <div class="tech-categories svelte-qtykxs"><div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Programming Languages</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-qtykxs"/>
              Python</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Java.svg" alt="Java" class="svelte-qtykxs"/>
              Java</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/C++ (CPlusPlus).svg" alt="C++" class="svelte-qtykxs"/> C++</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/MATLAB.svg" alt="MATLAB" class="svelte-qtykxs"/>
              MATLAB</span></div></div> <div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Machine Learning</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Keras.svg" alt="Keras" class="svelte-qtykxs"/> Keras</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/PyTorch.svg" alt="Pytorch" class="svelte-qtykxs"/> Pytorch</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/scikit-learn.svg" alt="Scikit-learn" class="svelte-qtykxs"/> Scikit-learn</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/OpenCV.svg" alt="OpenCV" class="svelte-qtykxs"/>
              OpenCV</span></div></div> <div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Data Manipulation &amp; Management</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Pandas.svg" alt="Pandas" class="svelte-qtykxs"/>
              Pandas</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/NumPy.svg" alt="Numpy" class="svelte-qtykxs"/> Numpy</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/SciPy.svg" alt="SciPy" class="svelte-qtykxs"/> Scipy</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/SQL.svg" alt="SQL" class="svelte-qtykxs"/> SQL</span></div></div> <div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Robotics</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg" alt="ROS2" class="svelte-qtykxs"/> ROS2</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Gazebo.svg" alt="Gazebo" class="svelte-qtykxs"/>
              Gazebo</span></div></div> <div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Web Development</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/TypeScript.svg" alt="Typescript" class="svelte-qtykxs"/> TypeScript</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Svelte.svg" alt="Svelte" class="svelte-qtykxs"/>
              Svelte</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/FastAPI.svg" alt="FastAPI" class="svelte-qtykxs"/> FastAPI</span></div></div> <div class="tech-category svelte-qtykxs"><h4 class="svelte-qtykxs">Other</h4> <div class="skills svelte-qtykxs"><span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Linux.svg" alt="Linux" class="svelte-qtykxs"/> Linux</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Git.svg" alt="Git" class="svelte-qtykxs"/> Git</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Docker.svg" alt="Docker" class="svelte-qtykxs"/>
              Docker</span></div></div></div></section></div> <div id="app" class="svelte-qtykxs"><main class="svelte-qtykxs"><section id="projects" class="svelte-qtykxs"><h2 class="svelte-qtykxs">Projects</h2> <div class="project svelte-qtykxs"><div class="project-image svelte-qtykxs"><img src="/portfolio-app/assets/img/MAChallenge.jpg" alt="Project Image" class="svelte-qtykxs"/></div> <div class="project-details svelte-qtykxs"><h3 class="svelte-qtykxs">Marine Autonomy Challenge</h3> <p class="svelte-qtykxs">Leader of the University of Southampton team, developed software
              for the autonomous operation of an uncrewed surface vehicle to map
              and detect hydrocarbon pollution &amp; ocean plastics. Developed a
              range of software functionalities: path planning and following,
              autonomous docking, obstacle avoidance, searching for and mapping
              an area of hydrocarbon pollution, object detection and
              identification (ocean plastics).</p> <div class="skills-container svelte-qtykxs"><div class="skills svelte-qtykxs"><a href="https://github.com/Nefelie/MAChallengeV3" target="_blank" class="skill-tag github-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i></a> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-qtykxs"/>
                  Python</span> <span class="skill-tag svelte-qtykxs">Machine Learning</span> <span class="skill-tag svelte-qtykxs">Data Science</span></div></div></div></div> <div class="project svelte-qtykxs"><div class="project-image svelte-qtykxs"><img src="/portfolio-app/assets/img/gsn3.png" alt="Project Image" class="svelte-qtykxs"/></div> <div class="project-details svelte-qtykxs"><h3 class="svelte-qtykxs">Global Shipping Network using AIS Data, Graph Theory and Machine
              Learning</h3> <p class="svelte-qtykxs">Constructed a global shipping network using machine learning (KNN,
              DBSCAN) and graph theory to model maritime routes and traffic
              patterns. Designed and implemented a data processing pipeline to
              clean AIS data and compress vessel trajectories. Analysed maritime
              traffic variability and congestion to provide insights into global
              shipping routes and supply chains.</p> <div class="skills-container svelte-qtykxs"><div class="skills svelte-qtykxs"><a href="https://github.com/Nefelie/AIS_GSN" target="_blank" class="skill-tag github-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i></a> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-qtykxs"/>
                  Python</span> <span class="skill-tag svelte-qtykxs">Graph Theory</span> <span class="skill-tag svelte-qtykxs">Machine Learning</span></div></div></div></div> <div class="project svelte-qtykxs"><div class="project-image svelte-qtykxs"><img src="/portfolio-app/assets/img/ais-plotter.png" alt="Project Image" class="svelte-qtykxs"/></div> <div class="project-details svelte-qtykxs"><h3 class="svelte-qtykxs">AIS Data Plotter Web App</h3> <p class="svelte-qtykxs">An interactive web application for visualizing AIS (Automatic
              Identification System) data for ships. This tool enables users to
              dynamically upload and visualize ship position data from .pkl
              files on a map, with customizable color options for different
              datasets. The frontend is built with Svelte, MapLibre GL, and
              TypeScript, while the backend uses FastAPI.</p> <div class="skills-container svelte-qtykxs"><div class="skills svelte-qtykxs"><a href="https://github.com/Nefelie/ais-plotter" target="_blank" class="skill-tag github-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i></a> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/TypeScript.svg" alt="TypeScript" class="svelte-qtykxs"/>
                  TypeScript</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Svelte.svg" alt="Svelte" class="svelte-qtykxs"/>
                  Svelte</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Vite.js.svg" alt="Vite" class="svelte-qtykxs"/>
                  Vite.js</span></div></div></div></div> <div class="project svelte-qtykxs"><div class="project-image svelte-qtykxs"><img src="/portfolio-app/assets/img/imr.jpg" alt="Project Image" class="svelte-qtykxs"/></div> <div class="project-details svelte-qtykxs"><h3 class="svelte-qtykxs">SLAM and Perception System Development for an Intelligent Mobile
              Robot</h3> <p class="svelte-qtykxs">Worked with ZeroROS robot middleware and Webots simulation
              environment to develop software for the robot. Implemented
              state-space control, an EKF &amp; particle filter for probabilistic
              localisation and interpreted live LiDAR sensor data using a
              Gaussian Process Classifier and Regressor to detect walls and
              corners from the track as part of the perception system on the
              physical robotic platform. Developed a Graph SLAM algorithm</p> <div class="skills-container svelte-qtykxs"><div class="skills svelte-qtykxs"><a href="https://github.com/Nefelie/slam-wheeled-robot" target="_blank" class="skill-tag github-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i></a> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Robot Operating System (ROS).svg" alt="ROS2" class="svelte-qtykxs"/>
                  ROS</span> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Gazebo.svg" alt="Gazebo" class="svelte-qtykxs"/>
                  Gazebo</span> <span class="skill-tag svelte-qtykxs">Machine Learning</span></div></div></div></div> <div class="project svelte-qtykxs"><div class="project-image svelte-qtykxs"><img src="/portfolio-app/assets/img/mr.jpg" alt="Project Image" class="svelte-qtykxs"/></div> <div class="project-details svelte-qtykxs"><h3 class="svelte-qtykxs">Guidance, Control &amp; Navigation of an Autonomous Vessel</h3> <p class="svelte-qtykxs">Implemented PID control, artificial potential fields for path
              planning, line of sight guidance for path following, and an
              Extended Kalman Filter for probabilistic localisation. Worked with
              actuators (motors using differential thrust) &amp; sensors, including
              an IMU for heading control and ArUco markers for localisation.</p> <div class="skills-container svelte-qtykxs"><div class="skills svelte-qtykxs"><a href="https://github.com/Nefelie/gnc-autonomous-vessel" target="_blank" class="skill-tag github-link svelte-qtykxs"><i class="fa-brands fa-github svelte-qtykxs"></i></a> <span class="skill-tag svelte-qtykxs"><img src="/portfolio-app/assets/icons/Python.svg" alt="Python" class="svelte-qtykxs"/>
                  Python</span> <span class="skill-tag svelte-qtykxs">ZeroROS</span></div></div></div></div></section></main></div>`,S(t,"class","navbar svelte-qtykxs"),S(l,"class","layout svelte-qtykxs")},m(a,i){h(a,t,i),h(a,e,i),h(a,l,i)},p:r,i:r,o:r,d(a){a&&(k(t),k(e),k(l))}}}class W extends F{constructor(t){super(),B(this,t,null,H,N,{})}}new W({target:document.getElementById("app")});