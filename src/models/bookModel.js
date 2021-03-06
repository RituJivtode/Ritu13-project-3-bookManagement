const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//structure of document
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, required: true, trim: true },

    userId: { type: ObjectId, ref: "user", required: true, trim: true },
    ISBN: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    subcategory: [{ type: String, required: true, trim: true }],
    reviews: { type: Number, default: 0, trim: true },
    deletedAt: { type: String, trim: true },
    isDeleted: { type: Boolean, default: false },
    releasedAt: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", bookSchema);
//model will create document using above structure of document
