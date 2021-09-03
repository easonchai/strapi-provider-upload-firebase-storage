const plugin = require("../lib/index");

const pluginConfig = (serviceAccount) => {
  return {
    serviceAccount,
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    uploadOptions: {},
    deleteOptions: {},
  };
};

test("Fail from incorrect service account", () => {
  const config = pluginConfig("wrong_format");

  expect(() => {
    plugin.init(config);
  }).toThrow();
});

test("Successfully init module", () => {
  const config = pluginConfig(JSON.parse(process.env.SERVICE_ACCOUNT_JSON));

  expect(() => {
    plugin.init(config);
  }).toBeDefined();
});
