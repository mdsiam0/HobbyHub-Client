import React from 'react';
import { FaSearch, FaUsers, FaCalendarCheck } from 'react-icons/fa';

const HowItWork = () => {
  return (
    <section className="base-100 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">How HobbyHub Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Groups</h3>
            <p>Explore a variety of hobby groups tailored to your interests.</p>
          </div>

          <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join or Create</h3>
            <p>Join existing groups or start your own with just a few clicks.</p>
          </div>

          <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
              <FaCalendarCheck />
            </div>
            <h3 className="text-xl font-semibold mb-2">Attend Events</h3>
            <p>Participate in online meetups and hobby events.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
