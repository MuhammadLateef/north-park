"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const handleSubscribe = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    if (email && agreedToTerms) {
      setIsSubscribed(true);

      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
        setAgreedToTerms(false);
      }, 3000);
    }
  };

  const quickLinks: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Tour", href: "/tour#" },
    { name: "Tracking", href: "#" },
    { name: "Hotels", href: "hotels" },
  ];

  const socialIcons: {
    icon: React.ElementType;
    href: string;
    color: string;
  }[] = [
    { icon: FaFacebookF, href: "#", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "https://www.instagram.com/hadii._786", color: "hover:text-pink-500" },
    { icon: CiYoutube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-white py-16 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="w-20 h-20">
                <Image className="w-full " src={Logo} alt="logo" />
              </Link>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Go north Pakistan, founded by Abdul Hadi, From K2 Base Camp to Deosai, we offer
              authentic tours, guided treks, and unforgettable experiences led
              by locals who call this land home.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-400 transition-all duration-300 hover:bg-blue-100 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Newsletter
            </h4>

            <p className="text-gray-600 text-sm mb-6">
              Subscribe to get our latest updates.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={!email || !agreedToTerms}
                  className="absolute right-2 top-2 w-8 h-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-blue-600 border-gray-300 rounded focus:ring-blue-500 transition-colors duration-300"
                />

                <span className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  I agree to terms and policies
                </span>
              </label>
            </div>

            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg animate-pulse">
                <p className="text-green-700 text-sm font-medium">
                  Successfully subscribed!
                </p>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Contact Us
            </h4>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Phone size={16} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Drop a line
                  </p>

                  <p className="text-sm text-gray-600">
                    +92 349+++++++
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Mail size={16} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Email address
                  </p>

                  <p className="text-sm text-gray-600">
                    gonorthp@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <MapPin size={16} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Visit Office
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Go, North Pakistan, Sadpara Rd, near Army Public School,
                    Devision, Gilgit, 16100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Go North Pak. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;