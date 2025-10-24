import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        

        <div>
          <h2 className="text-2xl font-bold">HobbyHub</h2>
          <p className="mt-2 text-sm">Connect. Create. Collaborate. Find your tribe today!</p>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/all-groups" className="hover:underline">All Groups</Link></li>
            <li><Link to="/create-group" className="hover:underline">Create Group</Link></li>
            <li><Link to="/my-groups" className="hover:underline">My Groups</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="" className="hover:underline">Privacy Policy</a></li>
            <li><a href="" className="hover:underline">Terms of Service</a></li>
            <li><a href="" className="hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-300"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-300"><FaGithub /></a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center text-sm border-t border-indigo-500 pt-4">
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
