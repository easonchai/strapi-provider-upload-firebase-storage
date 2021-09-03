const plugin = require("../lib/index");

test("Fail deleting and print debug log", async () => {
  const instance = plugin.init({
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    uploadOptions: {},
    deleteOptions: {},
  });

  let throwFunction = async () => {
    return instance.delete({ path: "error", name: "fail" });
  };

  await expect(throwFunction()).rejects.toThrow();
});
