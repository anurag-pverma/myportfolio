import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Mails } from "lucide-react";

function Contact() {
return (
  <div className="bg-stone-900 py-20 px-4 min-h-screen">
    <div className="container mx-auto max-w-4xl">
      <div className="animation-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h2 className="text-3xl font-bold font-mono mb-8 flex items-center">
          <span className="text-emerald-300 mr-3">04.</span>
          <span className="text-amber-800">Get In Touch</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="animation-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <p className="text-slate-400 mb-8 font-mono">
            I'm currently looking for new opportunities and my inbox is
            always open. Whether you have a question or just want to say
            Hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-5">
            <a
              href="mailto:anurag.premaverma@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-emerald-300 transition-colors font-mono"
            >
              <Mail className="mr-3 text-amber-800" size={20} />
              <span>anurag.premaverma@gmail.com</span>
            </a>

            <a
              href="tel:+918004833682"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-emerald-300 transition-colors font-mono"
            >
              <Phone className="mr-3 text-amber-800" size={20} />
              <span>+91 8004833682</span>
            </a>

            <a
              href="#"
              className="flex items-center text-slate-400 hover:text-emerald-300 transition-colors font-mono"
            >
              <MapPin className="mr-3 text-amber-800" size={20} />
              <span>Pratapgarh, UP, India</span>
            </a>

            <div className="pt-8 flex space-x-4">
              <a
                href="https://github.com/anurag-pverma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full text-slate-400 hover:text-emerald-300 hover:border-amber-800 border border-stone-700 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/anurag-verma-935bbb138/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full text-slate-400 hover:text-emerald-300 hover:border-amber-800 border border-stone-700 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:anurag.premaverma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 p-3 rounded-full text-slate-400 hover:text-emerald-300 hover:border-amber-800 border border-stone-700 transition-all duration-300"
                aria-label="Email"
              >
                <Mails size={20} />
              </a>
            </div>
          </div>
        </div>

        <div 
          className="bg-stone-800 rounded-lg border border-stone-700 p-6 shadow-lg animation-fadeIn" 
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <form className="space-y-5">
            <h3 className="text-xl font-bold font-mono text-slate-200 mb-2">
              Send a Message
            </h3>
            <p className="text-sm font-mono text-slate-400 mb-6">
              Fill out this form and I'll get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium font-mono text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-stone-700 border border-stone-600 text-slate-200 text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 font-mono"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium font-mono text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  className="bg-stone-700 border border-stone-600 text-slate-200 text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium font-mono text-slate-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-stone-700 border border-stone-600 text-slate-200 text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 font-mono"
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium font-mono text-slate-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="bg-stone-700 border border-stone-600 text-slate-200 text-sm rounded-lg focus:ring-amber-800 focus:border-amber-800 block w-full p-2.5 font-mono"
                placeholder="Your message here..."
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-800 hover:bg-amber-700 text-slate-200 font-bold py-2.5 px-5 rounded-lg font-mono transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Contact;