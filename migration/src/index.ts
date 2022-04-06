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
  },
  role: Boolean
});
const db = mongoose.createConnection();  // まだ開かない

// ハンドラ登録
// eslint-disable-next-line no-console
db.on('open' , () => { console.log('open'); });
// eslint-disable-next-line no-console
db.on('close', () => { console.log('close'); });
async function main() {
  const doc = await db.openUri("mongodb://root:passwordmongo@localhost:27017/document?authSource=admin");
  // collection作成 
  const blogModel = doc.model("blogs", blogSchema);
  const result = await blogModel.create({
    title: "テスト",
    author: "ホゲホゲ",
    comment: [{ nody: "aaaa", date: new Date() }],
    active: true,
  });
  await blogModel.findByIdAndUpdate(result.id, {
    title: "タイトル変更",
    role: true,
  });
  // コネクション切断
  await mongoose.disconnect();
}

main();