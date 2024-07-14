import React from 'react';

function About() {
    return (
      <section id="resume" className="container mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-white">My Resume</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <p className="text-white">Experienced software engineer and excellent team leader propelling full stack projects and teams to peak results with minimal supervision. Desire to learn superior communication, analytical, technical, and interpersonal skills with relevant and strong academic background.</p>
            <h3 className="text-2xl font-medium text-white mt-8">Skills</h3>
            <ul className="list-none mt-4 text-gray-400">
              <li><strong>Programming Languages & Web Technologies:</strong> C#, Java, Python, JavaScript, SQL, HTML, CSS, React, SASS, Webpack, ASP.NET MVC</li>
              <li><strong>Frameworks & Tools:</strong> .NET, Azure, AWS, Git, Docker, DevOps</li>
              <li><strong>CMS & Prototyping Tools:</strong> Adobe Experience Cloud, Webflow, Sketch, InVision, Figma</li>
              <li><strong>Testing, Optimization & Analytics:</strong> A/B Testing, Performance Tuning, Advanced Analytics Dashboards, Real-Time Data Insights</li>
              <li><strong>SEO, Accessibility & Project Management:</strong> Best Practices Implementation, Cross-Functional Collaboration, Process Improvement</li>
            </ul>
            <h3 className="text-2xl font-medium text-white mt-8">Education</h3>
            <ul className="list-none mt-4 text-gray-400">
              <li>Master of Business Administration ITM (2021) - Southern New Hampshire University</li>
              <li>Bachelor of Science in Computer Science Cum Laude - Southern New Hampshire University</li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h3 className="text-2xl font-medium text-white">Professional Experience</h3>
            <div className="mt-4">
              <h4 className="text-xl text-white">Applications Developer</h4>
              <p className="text-gray-400">Mascot Media, Remote - Fayetteville, AR (01/2020 to Present)</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Design, develop, and maintain web-based applications and systems using various programming languages and tools.</li>
                <li>Translating complex business requirements into architectural designs.</li>
                <li>Working directly with a variety of clients and stakeholders to solve problems and support both external and internal homegrown applications.</li>
                <li>Helping scale client-facing digital platforms to increase client onboarding.</li>
                <li>Developing proofs-of-concept providing estimates on range of alternatives to stakeholders</li>
                <li>Improving functionality and reliability of existing applications by developing enhancements, monitoring app performance, and implementing application development best practices.</li>
                <li>Management of various sizes of projects from inception to deployment working with product managers, clients, and stakeholders.</li>
                <li>Writing unit testing for CI/CD coupled with manual testing to decrease time to deployment.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-xl text-white">Software Development Analyst</h4>
              <p className="text-gray-400">Goodyear Tire and Rubber Company, Remote – Fort Smith, AR (01/2018 – 01/2020)</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Gathering, analyzing, and validating business requirements handling front-end development tasks writing advanced stored SQL procedures and Views Triggers and proposing solutions to improve development process.</li>
                <li>Augmented network support team’s efficiency through developing and deploying a new network support ticket system.</li>
                <li>Transformed classic ASP and VB.NET customer-facing sales and inventory application to ASP.NET and created technical documentation for existing systems and training materials for support desk and software development.</li>
                <li>Maintained the reputation of a “go-to” person for all software and applications requests of users from across the nation.</li>
                <li>Streamlined system support process and enhanced productivity by documenting procedures and creating a knowledgebase to ensure effective company-wide information sharing.</li>
                <li>Provided overarching technical support to users and promptly resolved tickets by using system analysis and documented procedures to communicate clearly with users while logging activity in ticket system.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-xl text-white">Systems Support Analyst</h4>
              <p className="text-gray-400">Goodyear Tire and Rubber Company, Remote – Fort Smith, AR (11/2015 – 01/2018)</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Gathering, analyzing, and validating business requirements handling front-end development tasks writing advanced stored SQL procedures and Views Triggers and proposing solutions to improve development process.</li>
                <li>Augmented network support team’s efficiency through developing and deploying a new network support ticket system.</li>
                <li>Transformed classic ASP and VB.NET customer-facing sales and inventory application to ASP.NET and created technical documentation for existing systems and training materials for support desk and software development.</li>
                <li>Maintained the reputation of a “go-to” person for all software and applications requests of users from across the nation.</li>
                <li>Streamlined system support process and enhanced productivity by documenting procedures and creating a knowledgebase to ensure effective company-wide information sharing.</li>
                <li>Provided overarching technical support to users and promptly resolved tickets by using system analysis and documented procedures to communicate clearly with users while logging activity in ticket system.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default About;
