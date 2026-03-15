import express from "express";

const app = express(); // Create an express app

app.use(express.json());

export default app;
