const mongoose = require('mongoose');
const Counter = require('./Counter');
const postSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    maxlength: 50,
    require: true,
  },
  type: {
    type: String,
    default: 'personal',
  },
  info: String,
  tech: [],
  git: String,
  site: String,
  due: String,
  role: String,
  desc: String,
  markdown: String,
  html: String,
  member: {
    type: Number,
    default: 0,
  },
  hero: {
    type: String,
    default: '',
  },
  thumb: {
    type: String,
    default: '',
  },
  heroName: {
    type: String,
    default: '',
  },
  thumbName: {
    type: String,
    default: '',
  },
  lock: {
    type: Boolean,
    default: false,
  },
});

// 글 번호 (id)
postSchema.pre('save', async function (next) {
  // 유저 정보를 저장하기 전 실행 함수
  const post = this; // post 스키마
  if (post.isNew) {
    // post 가 저장되면 (isNew: true)
    counter = await Counter.findOne({ name: 'posts' }).exec(); // Couter collection에 posts 이름을 가진 DB 할당
    if (!counter) counter = await Counter.create({ name: 'posts' }); // posts 가 undefined 라면 DB 생성
    counter.count++; // 글 번호 업데이트
    counter.save();
    post.id = counter.count;
  }
  return next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
