import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);
// 실제 db에서 컬렉션 이름은 'posts'로 자동 변환된다.
// 이게 싫다면 세 번째 파라미터에 직접 원하는 이름을 삽입하면 된다.
export default Post;
