import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", chatRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});