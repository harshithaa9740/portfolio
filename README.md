# Harshitha — Software Engineer Portfolio Website

A clean, polished, and production-ready portfolio website engineered for **Harshitha**, highlighting her core technical work across **Computer Vision & OCR**, **Machine Learning**, and **Full-Stack Systems**.

---

## 🚀 Quick Launch (How to Open)

### Method 1: Instant 1-Click Browser Launch (Fastest)
Double-click **`OPEN_PORTFOLIO.bat`** in this folder.
- Opens `index.html` immediately in your default browser (Chrome, Edge, Brave, Firefox) with zero installation required.

### Method 2: Local HTTP Server Launcher
Double-click **`start-dev-server.bat`** (or right-click `server.ps1` -> Run with PowerShell).
- Launches a native PowerShell web server at `http://localhost:8080/` (or next free port) and opens your browser automatically.

---

## 🎯 Portfolio Highlights & Structure

### 1. Centerpiece Projects (Résumé-Grade Rigor)
Each project presents a clear, authentic engineering narrative without invented metrics:
1. **ForgeCAD: OCR-Based CAD Processing & Tracking Platform**
   - **Problem Addressed:** Tedious manual data entry and error-prone transcription of engineering blueprint dimensions and tolerances across disconnected manufacturing schedules.
   - **Technical Implementation:** 6-stage canvas image preprocessing and OCR pipeline, interactive coordinate HUD (`X: 000 | Y: 000`), two-way synchronized bounding boxes between the CAD viewport and measurements table, and Kanban production board.
   - **Role:** Full-Stack & Computer Vision Developer
   - **Tech Stack:** JavaScript (ES6+), HTML5 Canvas, SVG HUD, Python / OpenCV, OCR Pipeline, Kanban State Engine, BOM Inventory.
   - **Customizable Outcome Slot:** `[Add your custom outcome metric here, e.g., "Reduced drawing review turnaround time by 75%"]`

2. **AURAVISION: AI Human Activity Recognition & SOP Protocol Validator**
   - **Problem Addressed:** Protocol compliance in laboratory environments is difficult to monitor without fatigue, while cloud computer vision introduces latency and privacy risks in isolated labs.
   - **Technical Implementation:** Multi-stream optical perception engine (webcam, lab video recordings, synthetic keypoint simulation), deterministic sequence validator (`PICK_TOOL` -> `OPEN_CONTAINER` -> `TAKE_SAMPLE` -> `PLACE_SAMPLE` -> `CLOSE_CONTAINER`), violation detection (`STEP_SKIPPED`, `OUT_OF_SEQUENCE`), and hands-free voice alerts (TTS + Web Audio API).
   - **Role:** AI & Vision Developer (Smart India Hackathon Project)
   - **Tech Stack:** Python, Computer Vision, Real-Time Video Pipeline, Keypoint / Pose Estimation, JavaScript & Web Audio API, Pytest, Supabase.
   - **Customizable Outcome Slot:** `[Add your SIH validation benchmark metric, e.g., "Maintained sub-50ms inference latency across 6 experimental test scenarios"]`

3. **AI Placement Predictor & Career Analytics Engine**
   - **Problem Addressed:** Students and placement cells lack data-driven foresight into recruitment readiness, struggling to identify specific academic or skill bottlenecks early.
   - **Technical Implementation:** Exploratory data analysis, feature scaling, and supervised classification (Random Forest, Logistic Regression) computing readiness probability scores and Gini feature importances.
   - **Role:** Machine Learning & Software Engineer
   - **Tech Stack:** Python, Scikit-learn, Pandas, NumPy, Feature Engineering, Classification Models, Interactive Dashboard.
   - **Customizable Outcome Slot:** `[Add your validation accuracy and dataset details, e.g., "Achieved 87% predictive accuracy on validation split"]`

### 2. Built-in "Fill-in Slots Helper" Mode
- At the top of the portfolio, click the **"Highlight Fill-in Slots"** button.
- Every placeholder where you can plug in your exact graduation year, college name, LinkedIn link, or project benchmark will glow with an amber indicator so you can locate and edit them easily in `index.html`.

### 3. Additional Features
- **Dark & Light Mode Toggle:** Smooth theme transition with preference saved in `localStorage`.
- **Interactive Architecture Modals:** Click "Architecture Deep Dive" or "SIH System Details" on any project card to open comprehensive technical modal dialogues.
- **Copy Email with Toast:** 1-click copy for `harshithatdk2006@gmail.com` with instant visual confirmation.
- **Project Filter Tabs:** Filter seamlessly by `All`, `Computer Vision & OCR`, `Machine Learning`, or `Full-Stack`.
- **Zero Dependencies:** Pure HTML5, CSS3, and modern Vanilla JavaScript — ultra-fast loading, zero build steps, and works 100% offline.

---

## 🌐 Deploying to GitHub Pages (Free Hosting in 2 Minutes)

Because this website uses zero build tools and vanilla web standards, you can publish it directly to GitHub Pages:

1. Create a repository on your GitHub account (`harshithaa9740`):
   - Name it `harshithaa9740.github.io` (for a root portfolio domain) or `portfolio`.
2. Push the files in this directory to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Software Engineer portfolio"
   git branch -M main
   git remote add origin https://github.com/harshithaa9740/harshithaa9740.github.io.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** &rarr; **Pages** &rarr; Under **Source**, select **`main`** branch and click **Save**.
4. Your website will be live at `https://harshithaa9740.github.io/`!

---

## ✏️ Customization Cheat Sheet

Open `index.html` in VS Code and search for:
- `<span class="placeholder-slot">`: Jump to any slot waiting for your custom metric, college name, or link.
- `harshithatdk2006@gmail.com`: Update or add secondary email addresses.
- `https://github.com/harshithaa9740`: Direct link to your GitHub repositories.
