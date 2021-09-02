const plugin = require("../lib/index");

test("Fail from incorrect service account", () => {
  const pluginConfig = {
    upload: {
      provider: "firebase-storage",
      providerOptions: {
        serviceAccount: "wrong_format",
        bucketUrl: process.env.STORAGE_BUCKET_URL,
        uploadOptions: {},
        deleteOptions: {},
      },
    },
  };

  expect(() => {
    plugin.init(pluginConfig);
  }).toThrow();
});
