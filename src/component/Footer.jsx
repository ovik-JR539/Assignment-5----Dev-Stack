function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600 border-t border-gray-200 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand Info */}
          <div className="space-y-4 max-w-xs">

            <img
              src="/logo-text.png"
              alt="Dev Stack logo"
              className="w-40 object-contain"
            />

            <p className="text-base text-gray-600 leading-7">
              Explore tools, technologies, and resources to build modern
              software and improve your development skills.
            </p>

            <div className="flex gap-5 pt-2 text-sm font-medium">
              <a href="#github" className="hover:text-pink-500 transition-colors">
                GitHub
              </a>

              <a href="#twitter" className="hover:text-pink-500 transition-colors">
                Twitter
              </a>

              <a href="#linkedin" className="hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>

          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-base">
              <li><a href="#home" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-base">
              <li><a href="#about" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-pink-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-base">
              <li><a href="#privacy-policy" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-pink-500 transition-colors">
              Privacy
            </a>

            <a href="#terms" className="hover:text-pink-500 transition-colors">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;