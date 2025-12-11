import React from "react";

const reviews = [
  { name: <strong>"Alice Johnson"</strong>, text: "Amazing work! Very professional and creative." },
  { name: <strong>"Bob Smith"</strong>, text: "Delivered exactly what we needed. Highly recommend!" },
  { name: <strong>"Carol Lee"</strong>, text: "Friendly, skilled, and always on time." },
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
               I am a passionate and versatile professional with a strong background in <strong>Mechanical Engineering</strong>, 
               combined with hands-on experience in <strong>Web and App Development</strong>, <strong>Data Science</strong>, <strong>Computer Repair</strong>, and <strong>Networking</strong>.
                My unique blend of engineering knowledge and digital skills allows me to approach problems with both analytical 
                precision and creative technical solutions.

                Over the years, I’ve worked on diverse projects—ranging from building full-stack web applications and mobile 
                interfaces to analyzing complex datasets and repairing computer systems. 
                Whether it’s developing efficient digital tools, solving hardware and network issues, or applying engineering 
                principles to real-world challenges, I deliver results with excellence and reliability.

                I enjoy learning, adapting, and upgrading my skills to meet modern industry demands. My goal is to create 
                solutions that are not only functional but also innovative, user-friendly, and impactful.

                If you are looking for someone who combines engineering discipline with modern tech expertise, I am always 
                ready to collaborate and bring value to your project or team.
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
