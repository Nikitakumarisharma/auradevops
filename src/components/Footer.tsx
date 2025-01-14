import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      {/* Call-to-Action Section */}
      <div className="bg-orange-400 text-white text-center py-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-2">
          <div>
            <h2 className="text-2xl font-bold">Ready for a next project?</h2>
            <p className="text-lg">Let get started!</p>
          </div>

          <Link href="/Contact">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 text-[10px] text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">AURA DevOps</h3>
            <p className="text-sm mt-2">
              Specialized in different app/software development with years of
              experience
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" className="hover:underline">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Further Information */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a
                  href="mailto:xyz@gmail.com"
                  className="hover:underline"
                  title="Send an email to xyz@gmail.com"
                >
                  xyz@gmail.com
                </a>
              </li>

              <li>98 xxxx xxxx</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex space-x-3 mt-3">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-purple-500"
              >
                f<i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-purple-500"
              >
                L<i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-purple-500"
              >
                {" "}
                I<i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black text-center py-4 font-bold">
        © All rights reserved
      </div>
    </div>
  );
};

export default Footer;
