const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} App Name. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
