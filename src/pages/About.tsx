import React from 'react';

export const About: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Vite for blazing fast development and optimized production builds',
    },
    {
      icon: '🎨',
      title: 'Modern CSS',
      description: 'Advanced CSS features including CSS Grid, Flexbox, animations, and responsive design',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfectly adapted for all screen sizes from mobile to desktop',
    },
    {
      icon: '🌙',
      title: 'Dark Mode Ready',
      description: 'Automatic dark mode support based on user system preferences',
    },
    {
      icon: '🔧',
      title: 'TypeScript',
      description: 'Fully typed with TypeScript for better development experience and fewer bugs',
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your todos are automatically saved and persist between sessions',
    },
    {
      icon: '🎯',
      title: 'Priority System',
      description: 'Organize todos by priority levels with visual indicators',
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Track your productivity with completion rates and statistics',
    },
  ];

  const technologies = [
    'Vite',
    'React 19',
    'TypeScript',
    'CSS Grid & Flexbox',
    'CSS Custom Properties',
    'CSS Animations',
    'React Router',
    'Local Storage API',
    'Modern ES6+',
  ];

  return (
    <div className="about-page">
      <div className="container py-xl">
        {/* Hero Section */}
        <section className="text-center mb-2xl">
          <h1 className="text-4xl font-bold mb-md">About Todo Master</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A modern, feature-rich todo application built to demonstrate 
            advanced CSS techniques and React best practices with Vite.
          </p>
        </section>

        {/* Features Grid */}
        <section className="mb-2xl">
          <h2 className="text-2xl font-bold text-center mb-xl">✨ Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-md">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-sm">{feature.title}</h3>
                  <p className="text-secondary text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-2xl">
          <h2 className="text-2xl font-bold text-center mb-xl">🛠️ Technologies Used</h2>
          <div className="card">
            <div className="flex flex-wrap gap-md justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="badge badge-primary animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CSS Showcase */}
        <section className="mb-2xl">
          <h2 className="text-2xl font-bold text-center mb-xl">🎨 CSS Features Demonstrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
            <div className="card">
              <h3 className="text-lg font-semibold mb-md">Layout & Structure</h3>
              <ul className="space-y-sm text-secondary">
                <li>• CSS Grid for responsive layouts</li>
                <li>• Flexbox for component alignment</li>
                <li>• CSS Custom Properties (variables)</li>
                <li>• Mobile-first responsive design</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-md">Visual Effects</h3>
              <ul className="space-y-sm text-secondary">
                <li>• CSS animations and transitions</li>
                <li>• Gradient backgrounds and text</li>
                <li>• Box shadows and blur effects</li>
                <li>• Backdrop filters for glassmorphism</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-md">Interactive Elements</h3>
              <ul className="space-y-sm text-secondary">
                <li>• Hover and focus states</li>
                <li>• Loading and success animations</li>
                <li>• Custom form styling</li>
                <li>• Interactive buttons and inputs</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-md">Modern Features</h3>
              <ul className="space-y-sm text-secondary">
                <li>• Dark mode support</li>
                <li>• Print-optimized styles</li>
                <li>• Accessibility improvements</li>
                <li>• Performance optimizations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="text-center">
          <div className="card">
            <h2 className="text-xl font-bold mb-md">🚀 Project Goals</h2>
            <p className="text-secondary mb-lg">
              This project serves as a comprehensive demonstration of modern web development 
              practices, showcasing how to build a production-ready application with clean, 
              maintainable code and exceptional user experience.
            </p>
            <div className="flex gap-md justify-center flex-wrap">
              <a href="/" className="btn btn-primary">
                ← Back to Todos
              </a>
              <button
                onClick={() => window.print()}
                className="btn btn-secondary"
              >
                🖨️ Print Page
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};