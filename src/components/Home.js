import React, { useState, useEffect } from "react"
import sanityClient from "../client.js";
import background from "../background.jpg";
import imageUrlBuilder from "@sanity/image-url";
import html from "../icons/html.png";
import css from "../icons/css.png";
import js from "../icons/js.png";
import node from "../icons/nodejs.png";
import mongo from "../icons/mongo.png";
import react from "../icons/react.png";
import express from "../icons/express.png";
import graphql from "../icons/graphql.png";
import tailwind from "../icons/tailwind.png";
import semantic from "../icons/semantic.png";
import bootstrap from "../icons/bootstrap.png";
import mysql from "../icons/mysql.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function Home() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`
          *[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
    <main className="relative">
        <img
          src={background}
          alt="background"
          className="absolute object-cover w-full"
        />
        
        <div className="p-10 lg:pt-48 container mx-auto relative">
            
            <section className="bg-gray-900 bg-opacity-80 rounded-lg shadow-2xl lg:flex p-20">
                <img
                  src={urlFor(author.authorImage).url()}
                  className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
                  alt={author.name}
                />
                <div
                  className="text-lg flex flex-col justify-center"
                >
                    <h1 className="text-4xl text-pink-100 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm <span className="text-yellow-300">Dazrin.</span></h1>
                    <h1 className="cursive text-5xl text-blue-100 mb-4">
                        I'm a full-stack developer based in Vancouver, BC
                    </h1>
                    <div className="prose lg:prose text-white">

                    </div>
                </div>
                
            </section>

            <section className="mt-20 bg-pink-100 bg-opacity-10 rounded-lg shadow-2xl lg:flex p-10">
            <div className="row text-lg flex justify-center">

            <div className="p-2">
                <img
                  src={html}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"HTML"}
                />                
            </div>
            <div className="p-2">
            <img
                  src={css}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"CSS"}
                />
            </div>
            <div className="p-2">
            <img
                  src={js}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"JavaScript"}
                />
            </div>
            <div className="p-2">
            <img
                  src={graphql}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"Node"}
                />
            </div>
            <div className="p-2">
            <img
                  src={mongo}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"MongoDB"}
                />
            </div>
            <div className="p-2">
            <img
                  src={express}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"Express"}
                />
            </div>
            <div className="p-2">
            <img
                  src={react}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"React"}
                />
            </div>
            <div className="p-2">
            <img
                  src={node}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"NodeJS"}
                />
            </div>
            <div className="p-2">
            <img
                  src={tailwind}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"TailwindCSS"}
                />
            </div>
            <div className="p-2">
            <img
                  src={semantic}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"Semantic UI"}
                />
            </div>
            <div className="p-2">
            <img
                  src={bootstrap}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"Bootstrap"}
                />
            </div>
            <div className="p-2">
            <img
                  src={mysql}
                  className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
                  alt={"MySQL"}
                />
            </div>
            
        </div>
        </section>
        </div>
    </main>
    )
}
