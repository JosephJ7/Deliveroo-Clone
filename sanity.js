import sanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

const client =sanityClient({
    projectId: "o4ry775w",
    dataset: "production",
    useCdn:true,
    apiVersion:"2021-10-21",
})

const bulider= imageurlBuilder(client);
export const urlFor=(source) => bulider.image(source);

// sanity cors add http://localhost:19000

export default client;