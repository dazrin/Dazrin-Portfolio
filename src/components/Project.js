import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// import project from "../../reactportfolio/schemas/project.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);
    /*
            `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    */
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
            body,
            description,
            projectType,
            link,
            tags
      }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-purple-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                      <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-purple-700">
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
                          className="text-blue-500 font-bold hover:underline hover:text-blue-400 text-xl"
                        >
                            View The Project{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                        <img
                              src={project.projectImage.asset.url}
                              alt={project.projectImage.alt}
                              className=" lg:w-full lg:h-full rounded object-cover "
                            />
                        </a>
                      </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}