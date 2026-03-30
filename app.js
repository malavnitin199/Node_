const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// const userModel = require("./usermodel");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/read", async (req, res) => {
  let allusers = await userModel.find({});
  res.render("read.ejs", { users: allusers });
});

// app.get("/create", async (req, res) => {
//   // async code to create a user
//   let createdUser = await userModel.create({
//     name: "John Doe",
//     email: "john@example.com",
//     password: "password123",
//   });
//   res.send(createdUser);
// });

// app.get("/update", async (req, res) => {
//   // async code to update a user
//   let updatedUser = await userModel.findOneAndUpdate(
//     { email: "john@example.com" },
//     { name: "John Smith" },
//     { new: true },
//   );
//   res.send(updatedUser);
// });

// app.get("/read", async (req, res) => {
//   // async code to read a user
//   let user = await userModel.find();
//   res.send(user);
// });

// app.get("/delete", async (req, res) => {
//   // async code to delete a user
//   let deletedUser = await userModel.findOneAndDelete({
//     email: "john@example.com",
//   });
//   res.send(deletedUser);
// });

const userModel = require("./model/user");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", async (req, res) => {
  // async code to create a user
  let createdUser = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
  });
  res.send(createdUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
