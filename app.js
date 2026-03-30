const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  // async code to create a user
  let createdUser = await userModel.create({
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  });
  res.send(createdUser);
});

app.get("/update", async (req, res) => {
  // async code to update a user
  let updatedUser = await userModel.findOneAndUpdate(
    { email: "john@example.com" },
    { name: "John Smith" },
    { new: true },
  );
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  // async code to read a user
  let user = await userModel.find();
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
