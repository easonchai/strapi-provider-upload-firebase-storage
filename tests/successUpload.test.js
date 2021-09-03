const plugin = require("../lib/index");
const consoleSpy = jest.spyOn(console, "log");
const file = { path: "test", name: "undefined" };

test("Success uploading and print debug log", () => {
  const instance = plugin.init({
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    debug: true,
    uploadOptions: {},
    deleteOptions: {},
  });

  return instance.upload(file).then((res) => {
    expect(consoleSpy).toHaveBeenCalledWith(
      "UPLOAD: Success!",
      `https://storage.googleapis.com/${process.env.STORAGE_BUCKET_URL}/test/undefined`
    );
  });
});
