const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  customName: { type: String },
  persnalOption: { type: String, required: true },
  expreeso: { type: String, required: true},
  quantity: { type: Number, required: true },
  sweet: { type: String, required: true },
  ice: { type: String, required: true },
  caffeins: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String },
  bookmark: { type: Boolean, required: true },
  price: { type: Number, required: true },

  //   password: { type: String, required: true, minlength: 6 },
  //   image: { type: String, required: true },
  //   places: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Menu", userSchema);
