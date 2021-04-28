import React, { useState, useEffect } from "react"
import sanityClient from "../client.js";
import background from "../background.jpg";
import imageUrlBuilder from "@sanity/image-url";

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
            
            <section className="bg-gray-900 bg-opacity-70 rounded-lg shadow-2xl lg:flex p-20">
                <img
                  src={urlFor(author.authorImage).url()}
                  className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                  alt={author.name}
                />
                <div
                  className="text-lg flex flex-col justify-center"
                >
                    <h1 className="text-4xl text-pink-200 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm <span className="text-yellow-300">Dazrin.</span></h1>
                    <h1 className="cursive text-5xl text-pink-100 mb-4">
                        I'm a full-stack developer based in Vancouver, BC
                    </h1>
                    <div className="prose lg:prose text-white">

                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}
