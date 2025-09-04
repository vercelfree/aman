// Footer.jsx - Fully Responsive
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1">
      <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            © {currentYear} Mohammed Aman. All rights reserved.
          </p>
          <div className="text-xs sm:text-sm text-gray-500 text-center md:text-right">
            <span className="text-xs">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Creator Info - Centered */}
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
          <p className="mb-1">Created by <span className="font-medium text-black">Black Hacker</span></p>
          <p>
            <a
              href="mailto:dwmaster3.0@gmail.com"
              className="hover:text-blue-600 transition-colors duration-200 break-all sm:break-normal"
            >
              Contact: dwmaster3.0@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}