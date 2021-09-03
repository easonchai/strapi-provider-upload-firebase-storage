"use strict";
const admin = require("firebase-admin");

module.exports = {
  init(config) {
    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
      storageBucket: config.bucketUrl,
      ...config.options,
    });
    const bucket = admin.storage().bucket(config.customBucket);

    const print = (...args) => {
      if (config.debug) console.log(...args);
    };

    return {
      upload(file) {
        return new Promise((resolve, reject) => {
          const filename = `${file.path ? `${file.path}/` : ""}${file.name}`;
          bucket.file(filename).save(
            file.buffer,
            {
              public: true,
              contentType: file.mime,
              ...config.uploadOptions,
            },
            (err) => {
              if (err) {
                print("UPLOAD: Error!", err);
                return reject(err);
              }
              file.url = `https://storage.googleapis.com/${config.bucketUrl}/${filename}`;
              print("UPLOAD: Success!", file.url);
              resolve();
            }
          );
        });
      },
      delete(file) {
        return new Promise((resolve, reject) => {
          const filename = `${file.path ? `${file.path}/` : ""}${file.name}`;
          bucket.file(filename).delete({ ...config.deleteOptions }, (err) => {
            if (err) {
              print("DELETE: Error!", err);
              return reject(err);
            }
            print("DELETE: Success!");
            resolve();
          });
        });
      },
    };
  },
};
