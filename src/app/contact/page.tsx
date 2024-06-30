/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function contact() {
  return (
    <div className="bg-[#151412] py-12 h-full md:h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[100px] lg:mt-0">
        <div className="text-center">
          <h2 className="text-base text-white/70 font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white/80 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white/70 lg:mx-auto">
            We'd love to hear from you! Reach out to us through any of the
            following ways.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <FaMapMarkerAlt className="mx-auto h-12 w-12 text-indigo-600" />
              <h3 className="mt-2 text-xl font-semibold text-white/90">
                Our Address
              </h3>
              <p className="mt-2 text-white/70">
                123 Coffee Street, Cappuccino City, CA 12345
              </p>
            </div>
            <div className="text-center">
              <FaPhone className="mx-auto h-12 w-12 text-indigo-600" />
              <h3 className="mt-2 text-xl font-semibold text-white/90">
                Phone
              </h3>
              <p className="mt-2 text-white/70">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <FaEnvelope className="mx-auto h-12 w-12 text-indigo-600" />
              <h3 className="mt-2 text-xl font-semibold text-white/90">
                Email
              </h3>
              <p className="mt-2 text-white/70">contact@cappuccino.com</p>
            </div>
            <div className="text-center col-span-1 sm:col-span-2 lg:col-span-3">
              <h3 className="mt-2 text-xl font-semibold text-white/90">
                Follow Us
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white/90"
                >
                  <FaFacebook className="h-8 w-8" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white/90"
                >
                  <FaTwitter className="h-8 w-8" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white/90"
                >
                  <FaInstagram className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
