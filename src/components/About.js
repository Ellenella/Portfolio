import React, { Component }  from 'react';
export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white space-x-10 space-y-10">
                Hi, I'm Ellen.
                <br/>
                <br className="hidden lg:inline-block space-y-5" />
                Exploring the vast realms of the AI universe
              </h1>
              <p className="mb-10 leading-relaxed text-lg">
              I am Ellen Berhe, a skilled and passionate Software Engineer and Data Scientist. With a strong background in computer science and expertise in both software engineering and data science, I thrive in solving complex problems and leveraging data-driven insights. I possess a deep understanding of programming languages, frameworks, and algorithms, coupled with a strong analytical mindset. Committed to continuous learning and innovation, I am dedicated to delivering impactful solutions and driving positive change. I am excited to contribute my skills and expertise to make a significant impact in the field of technology.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Personal and past projects
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
    );
}