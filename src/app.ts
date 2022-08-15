import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from './routes/user.routers'
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";


const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(userRoutes)
app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema,
    })
  );

export default app;

