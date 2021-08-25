const admin = require("firebase-admin");

module.exports = {
  init(config) {
    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
      storageBucket: config.bucketUrl,
    });
    const bucket = admin.storage().bucket();

    return {
      upload(file, customParams = {}) {
        return new Promise((resolve, reject) => {
          const path = file.path ? `${file.path}/` : "";
          const filename = `${path}${file.name}`;
          const bucketFile = bucket.file(filename);
          bucketFile.save(
            file.buffer,
            {
              public: true,
              contentType: file.mime,
              ...customParams,
            },
            (err) => {
              if (err) {
                reject(err);
              }
              file.url = `https://storage.googleapis.com/${config.bucketUrl}/${filename}`;
              resolve();
            }
          );
        });
      },
      delete(file) {
        // delete the file in the provider
      },
    };
  },
};
