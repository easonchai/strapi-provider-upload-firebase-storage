"use strict";
const admin = require("firebase-admin");

module.exports = {
  init(config) {
    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
      storageBucket: config.bucketUrl,
    });
    const bucket = admin.storage().bucket();

    const print = (message) => {
      if (config.debug) {
        console.error(message);
      }
    };

    return {
      upload(file) {
        return new Promise((resolve, reject) => {
          const path = file.path ? `${file.path}/` : "";
          const filename = `${path}${file.name}`;
          const bucketFile = bucket.file(filename);
          bucketFile.save(
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
          const path = file.path ? `${file.path}/` : "";
          const filename = `${path}${file.name}`;
          const bucketFile = bucket.file(filename);
          bucketFile.delete({ ...config.deleteOptions }, (err) => {
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
