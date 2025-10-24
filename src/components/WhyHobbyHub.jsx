import React from 'react';
import { FaHandshake, FaBullseye, FaPlusCircle } from 'react-icons/fa';

const WhyHobbyHub = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Join HobbyHub?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
            <FaHandshake />
          </div>
          <h3 className="text-xl font-semibold mb-2">Meet Like-Minded People</h3>
          <p>Find and connect with people who share your interests, passions, and hobbies.</p>
        </div>

        <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-semibold mb-2">Explore New Hobbies</h3>
          <p>Browse a wide range of hobby groups to try something new and exciting.</p>
        </div>

        <div className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div className="text-indigo-600 text-4xl mb-2 mx-auto w-fit">
            <FaPlusCircle />
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Your Own Group</h3>
          <p>Cant find your hobby listed? Be the one to start a new group.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHobbyHub;
