import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
  },
);

const Author = mongoose.model("Author", authorSchema);

export default Author;
