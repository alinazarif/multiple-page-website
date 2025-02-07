'use client'
import { useState } from "react";

export default function Home() {
  // Initialize state for each input field
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the values of the input fields
    console.log("Username:", username);
    console.log("Contact:", contact);
    console.log("Email:", email);
  };

  return (
    <div className="mt-8">
      <h1 className="flex justify-center items-center font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl relative text-white mx-auto my-20 uppercase dark:text-white">
        CONTACT US
      </h1>
      <div className="min-h-screen flex justify-center items-center">
        <div className=" dark:bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">User Information</h2>

          {/* Form submission handler */}
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Handle change of username
            />

            {/* Contact Input */}
            <input
              type="tel"
              placeholder="Contact"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)} // Handle change of contact number
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle change of email address
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
