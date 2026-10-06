# Ramya U — Personal Portfolio Website

A modern, placement-ready personal portfolio website built with clean HTML5, CSS3, and Vanilla JavaScript.

Designed specifically for:
- College placements & campus recruitment drives
- Internship applications (Data Analytics, AI/ML, Software Engineering)
- Off-campus opportunities
- Recruiter evaluations

---

## 📁 1. Project Folder Structure

```text
ramya-portfolio/
│
├── index.html              # Main HTML document containing all portfolio sections
├── vercel.json             # Vercel deployment configuration
├── README.md               # Complete setup, customization, and deployment guide
│
├── css/
│   └── style.css           # Premium dark theme styling, responsive layout & animations
│
├── js/
│   └── main.js            # Mobile navigation, scrollspy, reveal effects & contact handler
│
└── assets/
    ├── favicon.svg         # Modern glowing "RU" monogram vector favicon
    └── resume.pdf          # Your resume PDF file (ready for replacement)
```

---

## 🚀 2. How to Run the Portfolio Locally

### Option A: Direct Browser Preview (Fastest)
Simply double-click `index.html` or right-click `index.html` → **Open With** → **Google Chrome** (or Edge/Brave/Firefox).

### Option B: Local HTTP Server with Python (Recommended)
Open a terminal in the `ramya-portfolio` directory and run:
```bash
python -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your web browser.

### Option C: VS Code Live Server Extension
1. Open the `ramya-portfolio` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 📄 3. Where to Put Your Resume PDF

1. Prepare your finalized resume file and name it `resume.pdf`.
2. Move/copy your `resume.pdf` into the `assets/` folder:
   ```text
   ramya-portfolio/assets/resume.pdf
   ```
3. That's it! Both the **"Resume"** button in the top navigation bar and the **"Download Resume"** button in the hero section are already linked to `assets/resume.pdf` with automatic download attributes.

---

## 🔗 4. Where to Add Your LinkedIn URL

Open `index.html` and search for `[ADD LINK LATER]`. You will find two locations:

1. **Hero Social Bar** (around line 125):
   ```html
   <!-- Before: -->
   <a href="#contact" class="social-btn placeholder-btn" aria-label="LinkedIn Profile placeholder">
     ...
     <span>LinkedIn <small class="tag-badge">[ADD LINK LATER]</small></span>
   </a>

   <!-- Change to: -->
   <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" class="social-btn">
     ...
     <span>LinkedIn</span>
   </a>
   ```

2. **Contact Section** (around line 470):
   ```html
   <!-- Replace the placeholder card with your live link: -->
   <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noopener noreferrer" class="glass-card contact-card">
     ...
     <span class="contact-value">linkedin.com/in/YOUR_LINKEDIN_USERNAME</span>
   </a>
   ```

---

## 💻 5. Where to Add Project Links & Details

Open `index.html` and scroll to the `<section id="projects">` area (around lines 290–380).

For each project card (e.g. `Project 01`, `Project 02`, `Project 03`):
```html
<article class="glass-card project-card">
  <div class="project-card-header">
    <div class="project-badge">Project 01</div>
    <div class="project-status-tag">Completed</div>
  </div>

  <!-- 1. Change Project Title -->
  <h3 class="project-title">Your Project Name Here</h3>
  
  <!-- 2. Change Project Description -->
  <p class="project-desc">
    Brief description explaining the problem solved, architecture, and results.
  </p>

  <!-- 3. Change Technologies -->
  <div class="project-tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">Flask</span>
    <span class="tech-tag">SQLite</span>
  </div>

  <div class="project-links">
    <!-- 4. Add GitHub Repo Link -->
    <a href="https://github.com/ramya-666-u/your-repo" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline project-link-btn">
      <span>GitHub Repo</span>
    </a>

    <!-- 5. Add Live Demo Link (or remove if not hosted) -->
    <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary project-link-btn">
      <span>Live Demo</span>
    </a>
  </div>
</article>
```

---

## 🏆 6. Where to Add Achievements

Open `index.html` and scroll to the `<section id="achievements">` area (around line 430).
Find:
```html
<div class="achieve-content placeholder-box">
  <p class="placeholder-text">[ADD ACHIEVEMENTS LATER]</p>
  <span class="placeholder-hint">Ready to display awards, competitive coding recognitions, or academic honors.</span>
</div>
```
Replace the placeholder with your actual achievements, for example:
```html
<ul class="timeline-bullets" style="padding-left: 1.2rem;">
  <li>Achieved top rank in departmental coding challenge at VSB College of Engineering.</li>
  <li>Completed 100+ algorithmic problem-solving challenges on LeetCode/HackerRank.</li>
</ul>
```

---

## 📜 7. Where to Add Additional Certifications

Open `index.html` and navigate to `<section id="certifications">` (around line 400).
You will see the existing **IoT Certification — Infosys** card.

To add another certification, copy the card block:
```html
<div class="glass-card cert-card">
  <div class="cert-icon-wrap">
    <svg class="icon" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  </div>
  
  <div class="cert-body">
    <div class="cert-issuer-badge">Platform / Organization</div>
    <h3 class="cert-title">Certification Name</h3>
    <p class="cert-organization">Issuer Name</p>
    <p class="cert-desc">
      Brief summary of core skills covered.
    </p>
  </div>
</div>
```

---

## ☁️ 8. How to Deploy to Vercel (Free & Instant)

### Method 1: Deploy with GitHub (Most Popular)
1. Initialize a Git repository inside `ramya-portfolio`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on your GitHub account (`https://github.com/ramya-666-u/portfolio`).
3. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/ramya-666-u/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
5. Click **"Add New..."** → **"Project"**.
6. Select your `portfolio` repository and click **"Deploy"**.
7. Vercel will instantly publish your site with a free `https://your-portfolio.vercel.app` URL and free SSL! Whenever you push updates to GitHub, Vercel updates automatically.

### Method 2: Deploy with Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run in the `ramya-portfolio` folder:
   ```bash
   vercel
   ```
3. Follow the on-screen prompts to deploy in seconds.
