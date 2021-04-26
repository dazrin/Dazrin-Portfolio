import React, { useState, useEffect } from "react"
import sanityClient from "../client.js";
import image from "../background.jpg";
//import imageUrlBuilder from "@sanity/image-url";

/*const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}*/

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
        <main>
            <img 
            src={image} 
            alt="universe background" 
            className="absolute object-cover w-full h-full"
            />
            <section className="relative grid justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-pink-400 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm <span className="text-yellow-200">Dazrin.</span></h1>


            </section>
            
        </main>
    )
}
/* User Image
                  <img
                      src={urlFor(author.authorImage).url()}
                      className="mx-auto rounded w-32 h-32 lg:w-64 lg:h-64 "
                      alt={author.name}
                  />
*/