const admin = require("firebase-admin");

module.exports = {
  init(config) {
    admin.initializeApp({
      credential: admin.credential.cert(config.serviceAccount),
      storageBucket: config.bucketUrl,
    });

    return {
      upload(file) {
        // upload the file in the provider
      },
      delete(file) {
        // delete the file in the provider
      },
    };
  },
};
