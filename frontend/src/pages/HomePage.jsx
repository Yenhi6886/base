import { Card, Button } from '../components/common/index.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
          Welcome to Our App
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Build amazing applications with React, Vite, and Tailwind CSS. 
          This is a modern, scalable starter template for your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="⚡ Fast Development" className="text-center">
            <p className="text-gray-600">
              Built with Vite for lightning-fast development experience and hot module replacement.
            </p>
          </Card>
          
          <Card title="🎨 Beautiful UI" className="text-center">
            <p className="text-gray-600">
              Styled with Tailwind CSS for rapid prototyping and consistent design system.
            </p>
          </Card>
          
          <Card title="🔧 Ready to Scale" className="text-center">
            <p className="text-gray-600">
              Well-organized project structure with services, hooks, and components separation.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
        <p className="text-gray-600 mb-6">
          Start your next project with this powerful foundation.
        </p>
        <Link to="/about">
          <Button variant="primary" size="lg">
            Learn More About Us
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
