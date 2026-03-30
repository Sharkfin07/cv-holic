# CV-Holic

A dynamic, real-time CV / Resume Builder built with ReactJS. This project is a part of **The Odin Project** curriculum (CV Application). I mainly made this project as a refresher to front-end development (to be frank, i have forgotten many things after venturing to mobile development with Flutter).

## Features

- **Real-Time Preview**: See your CV update instantly on the right panel as you type on the left.
- **Dynamic Sections**: Easily add, edit, and remove multiple entries for your Education and Work Experience.
- **Customizable Typography**: Switch between elegant fonts (Sans Serif, Serif, Monospace) to match your professional style.
- **Fully Responsive**: Optimized for both Desktop (split-pane view) and Mobile (stacked column view) to edit your CV anywhere.
- **Reusable UI Components**: Built with a sleek, modular UI approach using Tailwind CSS.

## Built With

- **Frontend**: React 19 (Hooks, Functional Components)
- **Tooling**: Vite (Lightning fast dev server)
- **Language**: TypeScript (Strict type safety)
- **Styling**: Tailwind CSS v4
- **Icons**: Custom SVGs configured with `vite-plugin-svgr`

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/cv-holic.git
   ```
2. Navigate to the project directory
   ```sh
   cd cv-holic
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

## ��� Project Structure

- `src/components/editor/`: Contains the form inputs, dynamic dynamic sections (Education, Experience), and font selectors.
- `src/components/paper/`: The visual representation/preview of the CV.
- `src/components/ui/`: Reusable, generic UI base components (Buttons, Text Inputs).
- `src/styles/`: Global stylesheets and Tailwind configurations.

## ��� Acknowledgments

- Designed and built for [The Odin Project](https://www.theodinproject.com/).
