import { useState } from 'react';
import { Card, Input, Button } from '../components/common/index.jsx';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
          <Button onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card title="Send us a message">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
            
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
            
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="input-field resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              loading={loading}
              disabled={loading}
            >
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card title="Get in touch">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-primary-600 mt-1">📧</div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary-600 mt-1">📱</div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary-600 mt-1">📍</div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    123 Business St.<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card title="Office Hours">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
