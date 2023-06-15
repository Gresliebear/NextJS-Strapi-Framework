import Strapi from "strapi-sdk-js"; // https://strapi-sdk-js.netlify.app/

const strapi = new Strapi({
    url: "http://localhost:1337",
    prefix: "/api",
    store: {
      key: process.env.NEXT_PUBLIC_STRAPI_API,
      useLocalStorage: false,
      cookieOptions: { path: "/" },
    },
    axiosOptions: {},
  });

export default strapi;