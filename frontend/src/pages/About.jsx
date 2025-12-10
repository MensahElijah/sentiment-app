import React from "react";

const reviews = [
  { name: "Alice Johnson", text: "Amazing work! Very professional and creative." },
  { name: "Bob Smith", text: "Delivered exactly what we needed. Highly recommend!" },
  { name: "Carol Lee", text: "Friendly, skilled, and always on time." },
];

export default function About() {
  return (
    <section className="page">
      <div className="card max-w-4xl mx-auto p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>
      
        {/* Picture + Summary */}
        <div>
          <img 
            src="./my pic.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <div className="text-gray-300">
            <strong>
                Eng. Elijah Mensah D.
            </strong>
            <p className="mb-4">
              I’m a developer passionate about building modern, intelligent, and user-friendly applications. 
              I specialize in <strong>React</strong>, <strong>Node.js</strong>, and <strong>R</strong>, creating solutions that blend software development with AI and data science.
            </p>
            <p>
              My goal is to keep improving every day and create tools that make a difference. 
              I value growth, quality, and delivering projects that exceed expectations.
            </p>
          </div>
        </div>

        {/* Experience / Stats */}
        <div className="mt-8 flex flex-wrap gap-6 text-center">
          <div className="flex-1 p-4 bg-[#111214] rounded-lg">
            <h2 className="text-3xl font-bold text-accent">5+</h2>
            <p className="text-gray-400 mt-1">Years of Experience</p>
          </div>
          <div className="flex-1 p-4 bg-[#111214] rounded-lg">
            <h2 className="text-3xl font-bold text-accent">12</h2>
            <p className="text-gray-400 mt-1">Projects Completed</p>
          </div>
          <div className="flex-1 p-4 bg-[#111214] rounded-lg">
            <h2 className="text-3xl font-bold text-accent">8</h2>
            <p className="text-gray-400 mt-1">Customers Worked For</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {reviews.map((rev, index) => (
              <div key={index} className="flex-1 p-4 bg-[#111214] rounded-lg border border-gray-700">
                <p className="text-gray-300 mb-2">"{rev.text}"</p>
                <p className="text-accent font-semibold">- {rev.name}</p>
              </div>
            ))}
          </div>
        </div>
        Design by: studdy_elijah @sentiment AI
      </div>
    </section>
  );
}
