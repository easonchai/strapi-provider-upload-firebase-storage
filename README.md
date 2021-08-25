# strapi-provider-upload-firebase-storage

The best Strapi Media Library provider for Firebase Storage 🔥

## Configurations

Your configuration is passed down to the provider. (e.g: `admin.initializeApp()`). You can see the complete list of options [here](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property)

See the [using a provider](https://strapi.io/documentation/developer-docs/latest/development/plugins/upload.html#using-a-provider) documentation for information on installing and using a provider. And see the [environment variables](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#environment-variables) for setting and using environment variables in your configs.

**Example**

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: require(env("SERVICE_ACCOUNT_KEY_PATH")),
      bucketUrl: env("STORAGE_BUCKET_URL"),
      debug: true,
      uploadOptions: {
        resumable: false,
      },
      deleteOptions: {},
    },
  },
  // ...
});
```
