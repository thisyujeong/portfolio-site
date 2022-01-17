const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: {
    type: Number,
    unique: 1,
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
  info: {
    type: String,
    require: true,
  },
  tech: {
    type: [],
  },
  git: {
    type: String,
  },
  site: {
    type: String,
  },
  member: {
    type: Number,
    default: 1,
  },
  due: {
    type: String,
  },
  lock: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  html: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
