

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="max-w-6xl mx-auto px-6 py-1">
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © {currentYear} Mohammed Aman. All rights reserved.
          </p>
          <div className="text-sm text-gray-500">
            <span className="text-xs">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Creator Info - Centered */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Created by <span className="font-medium text-black">Black Hacker</span></p>
          <p>
            <a
              href="mailto:dwmaster3.0@gmail.com"
              className="hover:text-blue-600"
            >
              Contact: dwmaster3.0@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
