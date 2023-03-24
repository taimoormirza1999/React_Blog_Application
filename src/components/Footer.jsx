import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 ">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Navigation
            </div>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              About
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Services
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Projects
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Blog
            </span>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Follow Us
            </div>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Twitter
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Facebook
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Instagram
            </span>
            <span href="#" className="my-3 block text-gray-300 hover:text-white">
              Linkedin
            </span>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Contact Us
            </div>
            <div className="my-3 block text-gray-300 hover:text-white">
              <i className="fa fa-map-marker-alt mx-2"></i> New York, NY
            </div>
            <div className="my-3 block text-gray-300 hover:text-white">
              <i className="fa fa-phone-alt mx-2"></i> +1 917-123-4567
            </div>
            <div className="my-3 block text-gray-300 hover:text-white">
              <i className="fa fa-envelope mx-2"></i> info@example.com
            </div>
          </div>
        </div>

        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col
          md:flex-row max-w-6xl"
          >
            <div className="mt-2 text-center md:flex-grow md:mt-0">
              © 2023 Company, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
