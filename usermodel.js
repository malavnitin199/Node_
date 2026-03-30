const mongoose = (require = require("mongoose"));

mongoose.connect("mongodb://localhost:27017/myapp");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User
;
