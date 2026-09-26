# Prathamesh Kumbar // 3D Personal Portfolio Website

> **B.Tech CSE-AIML Student** &bull; **Kishkinda University (Class of 2026, 8.5 CGPA)**  
> **Aspiring AI Engineer & Data Analyst** &bull; **Ballary, Karnataka, India**  
> **Contact:** [prathameshkumbar2007@gmail.com](mailto:prathameshkumbar2007@gmail.com) &bull; **Phone:** +91 9036877407

A premium, production-quality, highly immersive 3D personal portfolio website engineered with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js**. Designed under a futuristic **White + Electric Blue AI** aesthetic featuring interactive 3D neural topologies, authentic portrait framing, an embedded "Prathamesh AI" grounded chatbot, and verified project showcases.

---

## ⚡ Key Highlights & Architecture

- **Visual Brand System**: Clean white and off-white backdrop (`#FFFFFF` / `#F8FAFC`), deep navy structures (`#0A1128`), and electric blue glowing accents (`#0066FF` / `#00D2FF`).
- **Identity Preservation**: Uses the authentic portrait reference with refined modern professional hairstyle, subtle titanium-wire spectacles, confident expression, and studio lighting with soft electric blue rim light.
- **3D Three.js Environments**:
  - `NeuralNetworkCanvas`: Interactive background neural network with glowing synaptic fibers, 3D geometric ring, and mouse parallax.
  - `AboutNeuralSphere`: Interactive 3D AI neural sphere / brain node topology with drag-to-rotate interaction.
- **Featured Project Repositories**:
  1. **Smart Spectacles for Blind Using Ultrasonic Sensor**: Assistive wearable hardware with buzzer, vibration, and voice alerts.
  2. **AI Email Threat Detection & Geo-Forensics (CyberTrace AI)**: Live cloud-deployed cybersecurity platform with sender geolocation, header forensics, and threat scoring.
- **Grounded "Prathamesh AI" Chatbot**: Floating assistant answering questions strictly from verified portfolio facts without hallucinations.
- **Single Source of Truth**: All content is cleanly organized in `src/data/portfolioData.ts`.

---

## 📂 Project Structure

```
prathamesh-ai-portfolio/
├── public/
│   └── assets/
│       ├── prathamesh-portrait.jpg    # Primary refined tech portrait
│       ├── prathamesh-original.jpg    # Authentic uploaded reference photo
│       └── prathamesh-hero.jpg        # Hero asset
├── src/
│   ├── components/
│   │   ├── three/
│   │   │   ├── NeuralNetworkCanvas.tsx # 3D background neural network
│   │   │   └── AboutNeuralSphere.tsx   # Interactive 3D neural brain topology
│   │   ├── About.tsx                  # Biography & academic highlights
│   │   ├── Achievements.tsx           # "Learning, Building & Growing"
│   │   ├── AIChatbot.tsx              # Floating "Prathamesh AI" assistant
│   │   ├── BrandStatement.tsx         # "I don't just learn technology — I build with it."
│   │   ├── CareerFocus.tsx            # "Where I'm Headed" progression pipeline
│   │   ├── Certifications.tsx         # Verified credentials (Full Stack, GenAI, OCI)
│   │   ├── Contact.tsx                # Form validation, copy-to-clipboard, mailto
│   │   ├── CustomCursor.tsx           # Desktop electric blue reactive cursor
│   │   ├── Education.tsx              # 3D Kishkinda University timeline (8.5 CGPA)
│   │   ├── Experience.tsx             # Fresher standing & development focus
│   │   ├── Footer.tsx                 # Branding, links, location, copyright
│   │   ├── Hero.tsx                   # 3D portrait frame, headline & CTAs
│   │   ├── LoadingScreen.tsx          # "PRATHAMESH // AI × DATA × SOFTWARE"
│   │   ├── Navbar.tsx                 # Sticky navigation & "Resume — Coming Soon"
│   │   ├── ProjectModal.tsx           # Deep-dive architecture modal
│   │   ├── Projects.tsx               # 3D interactive project cards
│   │   └── Services.tsx               # "What I Can Build" (Web, Data, Python)
│   ├── data/
│   │   └── portfolioData.ts           # 🌟 Centralized content configuration
│   ├── hooks/
│   │   └── usePrefersReducedMotion.ts # Accessibility hook
│   ├── App.tsx                        # Layout assembly
│   ├── index.css                      # White + Electric Blue glassmorphism
│   └── main.tsx                       # Entrypoint
├── index.html                         # SEO metadata & Google Fonts
├── package.json
├── tailwind.config.js                 # Electric blue theme tokens
├── tsconfig.json
└── vite.config.ts                     # Vite config with manual chunking
```

---

## 🛠️ Quickstart

### Run Locally

```bash
# 1. Install dependencies
npm.cmd install

# 2. Run local development server
npm.cmd run dev

# 3. Build for production
npm.cmd run build

# 4. Preview production build
npm.cmd run preview
```

---

## 🌐 Verified Links

- **GitHub:** [github.com/prathameshkumbar2007](https://github.com/prathameshkumbar2007)
- **LinkedIn:** [linkedin.com/in/prathamesh-kumbar-6a9005384](https://www.linkedin.com/in/prathamesh-kumbar-6a9005384)
- **Instagram:** [@prathamk_2007](https://www.instagram.com/prathamk_2007)
- **CyberTrace AI:** [cybertrace-ai-mocha.vercel.app](https://cybertrace-ai-mocha.vercel.app/)
- **Smart Spectacles Demo:** [lnkd.in/p/dCnwA6gp](https://lnkd.in/p/dCnwA6gp)

&copy; 2026 Prathamesh Kumbar. All rights reserved.