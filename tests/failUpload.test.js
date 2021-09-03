const plugin = require("../lib/index");
const consoleSpy = jest.spyOn(console, "log");
const file = { buffer: 1 };

test("Fail uploading and print debug log", () => {
  const instance = plugin.init({
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    debug: true,
    uploadOptions: {},
    deleteOptions: {},
  });

  return instance.upload(file).catch(() => {
    expect(consoleSpy).toHaveBeenCalledWith(
      "UPLOAD: Error!",
      new Error(
        `The "chunk" argument must be one of type string or Buffer. Received type number`
      )
    );
  });
});
