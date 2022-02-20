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
      const dir = file.fieldname;
      cb(null, `${dir}/${Date.now().toString() + extension}`);
    },
  }),
  // limits: { fileSize: 5 * 1024 * 1024 }, // 용량 제한
});

const emptyBucketDir = (prefix, cb) => {
  let params = {
    Bucket: BUCKET_NAME,
    Prefix: `${prefix}/`,
  };

  s3.listObjects(params, function (err, data) {
    if (err) return cb(err);
    if (data.Contents.length == 0) return cb();

    params = { Bucket: BUCKET_NAME };
    params.Delete = { Objects: [] };

    data.Contents.forEach(function (content) {
      params.Delete.Objects.push({ Key: content.Key });
    });

    s3.deleteObjects(params, function (err, data) {
      if (err) return cb(err);
      if (data.Deleted.length == 1000) emptyBucketDir(BUCKET_NAME, cb);
      else cb();
    });
  });
};

module.exports = { upload, emptyBucketDir };
