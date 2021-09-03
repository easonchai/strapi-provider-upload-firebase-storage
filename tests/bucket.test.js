const plugin = require("../lib/index");

const pluginConfig = (customBucket) => {
  return {
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    customBucket,
    uploadOptions: {},
    deleteOptions: {},
  };
};

test("Get custom bucket", () => {
  const config = pluginConfig("testing");
  const instance = plugin.init(config);

  expect(instance).toBeDefined();
});
