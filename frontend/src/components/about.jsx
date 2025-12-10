export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">About Me</h1>

        <p className="text-lg leading-relaxed text-gray-300">
          I’m a developer who enjoys building clean, modern, and intelligent digital experiences.
          My work lives at the intersection of <span className="text-white font-semibold">frontend development</span>,{" "}
          <span className="text-white font-semibold">AI</span>, and{" "}
          <span className="text-white font-semibold">data science</span> — where ideas turn into powerful, working tools.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          I build with React, Node.js, and R, creating applications that feel smooth, perform well,
          and solve real problems. Every project teaches me something new — and I enjoy stacking those skills.
        </p>

        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          I’m driven by growth. My goal is simple:
          <span className="text-white font-semibold"> keep creating, keep improving, and build things that matter.</span>
        </p>

        <p className="mt-8 text-md text-gray-400 italic">
          Thanks for stopping by — the journey continues.
        </p>
      </div>
    </div>
  );
}
