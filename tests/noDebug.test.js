const plugin = require("../lib/index");
const consoleSpy = jest.spyOn(console, "log");

test("Fail deleting and print debug log", async () => {
  const instance = plugin.init({
    serviceAccount: JSON.parse(process.env.SERVICE_ACCOUNT_JSON),
    bucketUrl: process.env.STORAGE_BUCKET_URL,
    debug: true,
    uploadOptions: {},
    deleteOptions: {},
  });

  return instance.delete({ name: "fail" }).catch(() => {
    expect(consoleSpy).toHaveBeenCalledWith(
      "DELETE: Error!",
      new Error(`No such object: ${process.env.STORAGE_BUCKET_URL}/fail`)
    );
  });
});
