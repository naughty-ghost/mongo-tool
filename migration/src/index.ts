import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comment: [{ nody: String, date: Date }],
  date: { type: Date, default: Date.now },
  active: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  }
});

async function main() {
  const doc = await mongoose.connect("mongodb://root:passwordmongo@localhost:27017/document?authSource=admin");
  // collection作成 
  const blogModel = doc.model("blogs", blogSchema);
  await blogModel.create({
    title: "テスト",
    author: "ホゲホゲ",
    comment: [{ nody: "aaaa", date: new Date() }],
    active: true,
  });
  return Promise.resolve();
}

main();