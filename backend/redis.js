import { createClient } from "redis";

const client = await createClient({
      url: "redis://localhost:6379",

}).on("error", (err) => console.log("Redis Client Error", err))
  .connect();


  export default client;