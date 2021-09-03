const plugin = require("../lib/index");
const consoleSpy = jest.spyOn(console, "log");
const file = {};

test("Success deleting and print debug log", () => {
  const instance = plugin.init({
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    debug: true,
    uploadOptions: {},
    deleteOptions: {},
  });

  return instance.upload(file).then(() => {
    return instance
      .delete({
        name: `undefined`,
      })
      .then(() => {
        expect(consoleSpy).toHaveBeenCalledWith("DELETE: Success!");
      });
  });
});
