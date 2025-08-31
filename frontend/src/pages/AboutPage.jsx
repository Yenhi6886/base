import { Card } from '../components/common/index.jsx';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission and the technology behind this application.
        </p>
      </div>

      <Card title="Our Mission">
        <p className="text-gray-600 leading-relaxed">
          We believe in creating beautiful, functional, and scalable web applications 
          that provide exceptional user experiences. This starter template demonstrates 
          our commitment to modern development practices and clean architecture.
        </p>
      </Card>

      <Card title="Technology Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• React 19 - Modern UI library</li>
              <li>• Vite - Fast build tool</li>
              <li>• Tailwind CSS - Utility-first CSS</li>
              <li>• React Router - Client-side routing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Development</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• ESLint - Code linting</li>
              <li>• Axios - HTTP client</li>
              <li>• Custom hooks - Reusable logic</li>
              <li>• Component library - UI consistency</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="Project Structure">
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <div className="space-y-1">
            <div>📁 src/</div>
            <div className="ml-4">📁 components/ - Reusable UI components</div>
            <div className="ml-4">📁 pages/ - Page components</div>
            <div className="ml-4">📁 layouts/ - Layout components</div>
            <div className="ml-4">📁 hooks/ - Custom React hooks</div>
            <div className="ml-4">📁 services/ - API services</div>
            <div className="ml-4">📁 routes/ - Routing configuration</div>
            <div className="ml-4">📁 utils/ - Utility functions</div>
            <div className="ml-4">📁 assets/ - Static assets</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutPage;
