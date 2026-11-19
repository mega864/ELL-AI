# ELL-AI — AI-Powered Physical Systems Validation Platform

> **"Engineers define what a system should do. ELL-AI discovers where it fails."**  
> *Find the boundaries. Discover the failures. Improve reliability.*

ELL comes from the Tamil word **"எல்லை"** (Ellai), meaning **Boundary**. Every physical system operates within defined engineering boundaries. ELL-AI transforms requirements into intelligent validation experiments, explores operating boundaries, analyzes failures, and recommends what to test next.

---

## 🚀 Key Platform Capabilities

- **Understand**: Parses functional specifications, signals, and implicit boundary constraints.
- **Experiment**: Synthesizes nominal vectors, edge boundary probes, and stress conditions across Simulation, HIL, and Physical Hardware.
- **Recommend**: Compares measured responses against mathematical expectations, isolating failure root-causes and driving continuous closed-loop testing.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: TypeScript
- **Target Deployment**: [Vercel](https://vercel.com/)

---

## 🏃 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

## ☁️ Deploying to Vercel

1. Push your commits to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete ELL-AI platform website"
   git push origin main
   ```
2. In Vercel, import the repository (`ELL-AI`).
3. Framework Preset will automatically detect **Next.js**.
4. Click **Deploy**.

---

## 👥 Founding Team

- **Kathiravan Rajendran** — Systems Architecture & Engineering
- **Govindaraj Shankar** — AI & Product Engineering
- **Meganathan R.** — Validation Systems & Automation
- **Arjun** — Systems Engineering & Research

---

## 🔒 Configuration

All central contact links (including the temporary WhatsApp placeholder `1234567`) are defined in:
`src/lib/constants.ts`
