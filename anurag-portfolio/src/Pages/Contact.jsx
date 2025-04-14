import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Mails } from "lucide-react";

function Contact() {
  return (
    <div>
      <div className="py-20 px-4 bg-stone-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="Section-headeing text-slate-400">
            <span className="font-mono mr-2">0.5</span> GEt In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-slate-400 mb-6">
                I'm Currentlt looking for the new opportunities and my inbox is
                always open. Whether you have a question or just want to say
                Hi.. , I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:anurag.premaverma@gmail.com"
                  target="_blank"
                  className="flex items-center text-slate-400 hover:text-amber-800 transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <span className="">anurag.premaverma@gmail.com</span>
                </a>

                <a
                  href="tel:+918004833682"
                  target="_blank"
                  className="flex items-center text-slate-400 hover:text-amber-800 transition-colors"
                >
                  <Phone className="mr-3" size={20} />
                  <span>+91 8004833682</span>
                </a>

                <a
                  href="#"
                  className="flex items-center text-slate-400 hover:text-amber-800 transition-colors"
                >
                  <MapPin className="mr-3" size={20} />
                  <span>Pratapgarh, UP, India</span>
                </a>

                <div className="pt-6 flex space-x-4">
                  <a
                    href="https://github.com/anurag-pverma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#AF1AC7;] p-3 rounded-full text-slate-400 hover:text-amber-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anurag-verma-935bbb138/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#AF1AC7;] p-3 rounded-full text-slate-400 hover:text-amber-800 transition-colors"
                    aria-label="Linkedin"
                  >
                    <Linkedin size={20} />
                  </a>

                  <a
                    href="mailto:anurag.premaverma@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#AF1AC7;] p-3 rounded-full text-slate-400 hover:text-amber-800 transition-colors"
                    aria-label="Linkedin"
                  >
                    <Mails size={20} />
                  </a>
                </div>
              </div>
            </div>
            

            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-5 dark:bg-[#2b4400] dark:border-gray-700">
              <form className="space-y-4" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  Send a Messages
                </h5>
                <p className="text-sm font-medium text-amber-800 dark:text-slate-400">
                  Fill out this form and I'll back to you as soon as possible.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                     type="email"
                      name="email"
                      id="email"
                      placeholder="@email.com"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                </div>


                <div>
                    <label
                      for="ubject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="subject"
                      id="subject"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Subject"
                      required
                    />
                </div>


                <div>
                    <label
                      for="ubject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>

                    <textarea 
                        name="subject"
                        type="subject"
                        id="subject"
                        rows={4}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="text area"
                    
                    />

                </div>


        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
   
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
