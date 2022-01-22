const AWS = require('aws-sdk');

let multer = require('multer');
let multerS3 = require('multer-s3');

const path = require('path');

const config = require('../config/key');
const { AWS_config_region, AWS_IDENTITYPOOLID, BUCKET_NAME } = config;

AWS.config.region = AWS_config_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: AWS_IDENTITYPOOLID,
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: BUCKET_NAME },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE, // 자동으로 콘텐츠 타입 세팅
    acl: 'public-read',
    key: (req, file, cb) => {
      let extension = path.extname(file.originalname);
      const dir = req.params.name;
      console.log('dir', dir);
      if (file.fieldname === 'hero') {
        return cb(null, dir + '/hero-' + Date.now().toString() + extension);
      }
      if (file.fieldname === 'thumb') {
        return cb(null, dir + '/thumb-' + Date.now().toString() + extension);
      }
      cb(null, dir + '/' + Date.now().toString() + extension);
    },
  }),
  // limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});

module.exports = upload;
