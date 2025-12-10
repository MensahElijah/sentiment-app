import React from "react";

export default function Contact() {
  return (
    <section className="page">
      <div className="card max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Me</h1>

        {/* Contact Info */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-accent mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-2">
            <strong>Phone:</strong> +233 245 030 441
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Email:</strong> elijahstuddy@gmail.com
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Website:</strong> <a href="https://elimovieworld.netlify.app/" className="text-accent hover:underline">Movie Trailers</a>
          </p>
          <p>
            <strong>Website:</strong> <a href="https://codelinkedafrica.netlify.app/" className="text-accent hover:underline">Codelinkedafrica</a>
          </p>
          <p>
            <strong>Website:</strong> <a href="https://sites.google.com/view/it-services-kasoa/home" className="text-accent hover:underline">IT Service</a> 
          </p>
        </div>
       
        {/* Social Media */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-accent mb-4">Follow Me</h2>
          <div className="flex gap-6">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">Twitter</a>
            <br></br>
            <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">LinkedIn</a>
            <br></br>
            <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">GitHub</a>
            <br></br>
            <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent">Instagram</a>
          </div>
        </div>

        {/* Optional Message Section */}
        <div>
          <h2 className="text-2xl font-semibold text-accent mb-4">Send Me a Message</h2>
          <textarea
            className="w-full p-4 rounded-lg bg-[#111214] border border-gray-700 text-gray-300"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
          <button className="mt-4 bg-accent text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">
            Send Message
          </button>
        </div>
         Design by: studdy_elijah @sentiment AI
      </div>
    </section>
  );
  
}
