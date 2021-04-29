import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import background from "../universe_bg.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
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
              className="absolute w-full"
            />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-900 bg-opacity-90 rounded-lg shadow-2xl lg:flex p-20">
                    <img
                      src={urlFor(author.authorImage).url()}
                      className="rounded w-32 h-32 lg:w-full lg:h-full mr-8"
                      alt={author.name}
                    />
                    <div
                      className="text-lg flex flex-col justify-center"
                    >
                        <h1 className="cursive text-7xl text-purple-100 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-yellow-200">
                              {author.name}
                            </span>
                        </h1>
                        <div className="prose lg:prose text-white">
                            <BlockContent
                              blocks={author.bio}
                              projectId="olfmsbp0"
                              dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}