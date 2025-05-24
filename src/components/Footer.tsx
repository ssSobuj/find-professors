import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 bg-gradient-to-br from-indigo-900 to-blue-900 text-white px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/ddddafbc-db8c-4079-9147-70aea8fcab0d.png"
              alt="MailProfessor Logo"
              className="h-10 mr-2"
            />
            <p className="text-sm text-gray-300">
              © 2025 Md Sabuj Mia. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
