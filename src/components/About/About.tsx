import React from 'react'

export default function About() {
  return (
    <section id="about" className="min-h-screen text-white px-6 py-24">
      <div className="container mx-auto max-w-5xl">
                <h2 className="text-xl md:text-2xl font-light tracking-wider mb-12 text-gray-400">A BIT ABOUT ME</h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-light leading-relaxed text-gray-300">
                    I am a <span className="text-white">Full Stack Developer</span> who is passionate about creating beautiful and joyful digital experiences. Besides development, I love <span className="text-white">music, games and travelling</span>.
                </p>
            </div>
    </section>
  );
}