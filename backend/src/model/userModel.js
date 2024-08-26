const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  isVerified:{
    type : Boolean,
    default : false
},
 verifyToken:{
  type : String,
  default : null
},
forgotPasswordToken:{
  type : String,
  default : null,
},
tokenValidity:{
  type:Date,
}
  // role: { type: "string", default: "user", enum: ["user", "admin"] },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.SECRET_KEY, { expiresIn: "2d" });
};

userSchema.methods.verifyPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
