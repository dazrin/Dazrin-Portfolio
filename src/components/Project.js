import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// import project from "../../reactportfolio/schemas/project.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "project"]{
            title, 
            date,
            place,
            projectImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
            projectType,
            link,
            github,
            tags
      }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-purple-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-6xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                ⬇️ Scroll down to view my projects! ⬇️
                </h2>
                <section className="grid grid-cols-1 gap-6">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-10">
                      <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-pink-400">
                          <a
                          href={project.link}
                          alt={project.title}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                            {project.title}
                          </a>
                      </h3>
                      
                      <div className="text-gray-500 text-xs space-x-4">
                        <span>
                            <strong className="font-bold">Finished on</strong>: {" "}
                            {new Date(project.date).toLocaleDateString()}
                        </span>
                        <span>
                            <strong className="font-bold">Company</strong>:{" "}
                            {project.place}
                        </span>
                        <span>
                            <strong className="font-bold">Type</strong>:{" "}
                            {project.projectType}
                        </span>

                        <p className="my-6 text-lg text-gray-700 leading-relaxed">
                            {project.description}
                        </p>
                        <a 
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="p-10 text-pink-700 font-bold hover:underline hover:text-pink-400 text-xl"
                        >
                            Deployed Link{" "}
                        <span role="img" aria-label="link">
                            🔗
                        </span>
                        </a>

                        <a 
                          href={project.github}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-purple-700 font-bold hover:underline hover:text-purple-400 text-xl"
                        >
                            Github Repo{" "}
                        <span role="img" aria-label="link">
                            🖥️
                        </span>
                        </a>

                        <div className="pt-4">
                        <a
                          href={project.link}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="hover:scale-150"
                        >
                            <img
                              src={project.projectImage.asset.url}
                              alt={project.projectImage.alt}
                              className="lg:full lg:h-64 rounded object-cover hover:scale-150"
                            />
                        </a>
                        </div>
                        
                      </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}