const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pageSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 64,
  },
  creator: {
    type: userSchema,
    required: true,
  },
});
