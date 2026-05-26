# LiftUpLabs 🚀

Welcome to the **LiftUpLabs** repository! This is a modern, enterprise-grade web application built to showcase our technical domains, specialized solutions, and our core principles, all through a premium interactive user experience.

## 🌟 About the Project

LiftUpLabs is designed as a high-fidelity digital presence. It is a comprehensive corporate portfolio that highlights our capabilities in building scalable software, enterprise solutions, and cutting-edge web applications. The site focuses on immersive aesthetics, smooth page transitions, and an intuitive layout.

### Key Features:
- **Interactive UI & Animations:** Uses Framer Motion, GSAP, and Embla Carousel to power interactive scroll-based animations and fluid micro-interactions.
- **Dark Mode Support:** A sleek and consistent design system using Tailwind CSS variables.
- **Accessible & Responsive:** Built on top of Radix UI to ensure accessibility (a11y) out of the box, optimized for mobile and desktop screens.
- **Robust Forms:** Form handling and validation for the contact page using `react-hook-form` and `zod`.
- **Dynamic Profile Sharing & Deep Linking:** Added share options to the Team and Advisory Board profile modals. Using query parameters (`?member=Name`), users can copy deep links directly to a team member's card, triggering smooth auto-scroll and opening the modal upon page load. Support for both Web Share API and automatic clipboard copy fallback with animated success feedback.

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, v16 Canary)
- **Library:** [React](https://react.dev/) (v19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Primitives) & Custom building blocks
- **Data Visualization:** [Recharts](https://recharts.org/)

---

## 📁 Project Structure & Key Files

The project follows a standard Next.js App Router structure, with a custom UI components folder architecture.

```text
liftuplabs-main/
├── app/                  # Next.js App Router routing & pages
│   ├── about/            # About page
│   ├── colophon/         # Colophon page
│   ├── contact/          # Contact page with validation
│   ├── principles/       # Core principles details page
│   ├── solutions/        # Enterprise solutions & services
│   ├── globals.css       # Global stylesheet (alternative)
│   ├── layout.tsx        # Root layout configuration
│   └── page.tsx          # Homepage showing all key sections
├── components/           # Custom React/TSX components
│   ├── ui/               # Reusable primitives (modals, inputs, buttons, etc.)
│   ├── about-section.tsx # About section with Team/Advisory modal & dynamic share
│   ├── scramble-text.tsx # Interactive text animations on mount/hover
│   ├── side-nav.tsx      # Sidebar navigation panel
│   └── ...               # Various custom interactive page elements
├── hooks/                # Custom React hooks (use-mobile, use-toast, etc.)
├── lib/                  # Helper utilities (cn utility, constants)
├── public/               # Static assets (images, logos, fonts, SVGs)
│   ├── team/             # Team member avatar photos
│   └── solutions/        # Solutions graphics/illustrations
├── styles/               # Styling configuration & global CSS
│   └── globals.css       # Root design tokens & variables
├── package.json          # Dependency and script manager
├── tailwind.config.ts    # Tailwind styling config
└── tsconfig.json         # TypeScript compiler configurations
```

### `/app` Directory (Routing)
The core routing and pages for the application:
- **`app/page.tsx`**: The main landing/home page, showcasing our hero section and general overview.
- **`app/about/`**: The About page detailing the company's background and our talented team.
- **`app/contact/`**: Contact forms and reach-out information, integrated with validation logic.
- **`app/solutions/`**: Explores the specialized solutions and technical domains LiftUpLabs offers.
- **`app/principles/`**: Details the core methodologies, ethics, and practices that guide our engineering process.
- **`app/colophon/`**: Provides details on the typography, design systems, and tools used to build the site.
- **`app/layout.tsx` & `globals.css`**: The root layout wrapping all pages and the global CSS styling definitions.

### `/components` Directory
Contains all modular React components:
- **`components/ui/`**: Reusable primitive components like Buttons, Cards, Inputs, and Modals (Dialogs), largely built around Radix UI primitives.
- **`components/work-section.tsx`**: Specific feature blocks, such as sections showcasing portfolio projects or case studies.

### `/hooks` & `/lib` Directories
- **`hooks/`**: Custom React hooks (e.g., `use-mobile.ts`, `use-toast.ts`) that handle responsive state and UI notifications.
- **`lib/`**: Utility functions like `utils.ts` (using `clsx` and `tailwind-merge`) to help dynamically merge CSS classes safely across components.

### Configuration Files
- **`package.json`**: Lists all dependencies, scripts (like `npm run dev`), and project metadata.
- **`next.config.mjs`**: Next.js configuration settings.
- **`tailwind.config.ts` / `postcss.config.mjs`**: Configuration files handling styling plugins, color tokens, and layout variables.
- **`tsconfig.json`**: TypeScript compiler options ensuring strong type safety across the project.

---

## 🚀 Getting Started

To run the project on your local machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devabokare/liftuplabs-main.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd liftuplabs-main
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open your browser and navigate to `http://localhost:3000` to see the application running.

---
*Built with ❤️ by LiftUpLabs.*
