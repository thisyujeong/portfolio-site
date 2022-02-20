const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/Users');
const { Post } = require('./models/Posts');
const { auth } = require('./middleware/auth');
const path = require('path');

const config = require('./config/key');
const port = config.PORT || 5000;

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
const { upload } = require('./utils/s3');

// client/build 폴더를 static 파일로 사용할 수 있도록
app.use(express.static(path.join(__dirname, '../client/build')));

// / 요청
app.get('/', (req, res) => {
  console.log(__dirname);
  // index.html 파일 응답
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

mongoose
  .connect(config.mongoURI)
  .then(() => console.log('mongoDB Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/api/hello', (req, res) => {
  res.send('hello react!');
});

/* Register */
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body); // user instance // user = collection 명
  user.save((err, userInfo) => {
    // mongoDB method; save into User Model
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

/* login */
app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 DB에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '제공된 이메일에 해당하는 유저가 없습니다.',
      });
    }
    // 요청된 이메일이 있다면 비밀번호가 일치하는가
    // 입력한 비밀번호와 DB에 있는 암호화된 비밀번호 일치 여부 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      // 비밀번호까지 일치하다면 토큰 생성
      user.generateToken((err, user) => {
        // user에는 받아온 토큰이 들어있음
        if (err) return res.status(400).send(err);
        // token을 저장한다. 어디에? 쿠키, 로컬스토리지
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

/* auth */
app.get('/api/users/auth', auth, (req, res) => {
  // auth 미들웨어
  res.status(200).json({
    _id: req.user_id,
    isAdmin: req.user.role == 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

/* post */
app.post('/api/posts/note', (req, res) => {
  const post = new Post(req.body);
  Post.findOne({ title: req.body.title }, (err, result) => {
    if (err) return res.json({ success: false, err });
    if (result) return res.json({ success: false, overlap: true });
    post.save((err, postInfo) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
        post: postInfo,
      });
    });
  });
});

/* post delete */
app.post('/api/posts/delete', (req, res) => {
  // Post.findOne({ id: req.body.id }, (err, result) => {
  //   if (err) return res.json({ success: false, err });
  //   emptyBucketDir(result.title, (err, data) => {
  //     if (err) return res.json({ success: false, err });
  //   });
  // })
  Post.deleteOne({ id: req.body.id }, (err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      result,
    });
  });
});

/* posts list */
app.get('/api/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) return res.json({ success: false, error: 'database failure' });
    return res.status(200).json({
      success: true,
      data: posts,
    });
  });
});

/* upload fileFields */
const fileFields = upload.fields([
  { name: 'thumb', maxCount: 1 },
  { name: 'hero', maxCount: 1 },
  { name: 'content' },
]);

/* post edit */
app.post('/api/posts/edit/:id', fileFields, (req, res) => {
  Post.findOneAndUpdate({ id: req.params.id }, { ...req.body }, (err, post) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
      post: post,
    });
  });
});

// post info
app.get('/api/posts/info/:id', (req, res) => {
  Post.findOne({ id: req.params.id }, (err, post) => {
    if (err)
      return res.json({ success: false, error: `not found the ID: ${req.params.id}` });
    return res.status(200).send({
      findSuccess: true,
      post: post,
    });
  });
});

/* image upload */
app.post('/api/upload/:name', fileFields, (req, res) => {
  let file = {};
  if (req.files['thumb']) {
    file = {
      ...file,
      thumb: req.files['thumb'][0].location,
      thumbName: req.files['thumb'][0].originalname,
    };
  }
  if (req.files['hero']) {
    file = {
      ...file,
      hero: req.files['hero'][0].location,
      heroName: req.files['hero'][0].originalname,
    };
  }

  if (req.files['content']) {
    return res.status(200).send({
      updateSuccess: true,
      location: req.files['content'][0].location,
    });
  }
  Post.findOneAndUpdate(
    { title: req.params.name },
    file,
    { multi: true },
    (err, post) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        updateSuccess: true,
        post: post,
      });
    }
  );
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
