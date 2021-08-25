# strapi-provider-upload-firebase-storage

The best Strapi Media Library provider for Firebase Storage 🔥

## Getting Started

To install the package, you can either use npm or yarn

```bash
npm i strapi-provider-upload-firebase-storage
# or
yarn add strapi-provider-upload-firebase-storage
```

Then, you need to add a plugin config in order to use `strapi-provider-upload-firebase-storage`.

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

There are two environment variables you need to create in your `.env`.

**Example**

`.env`

```env
SERVICE_ACCOUNT_KEY_PATH='../serviceAccountKey.json'
STORAGE_BUCKET_URL=<PROJECT_NAME>.appspot.com
```

| Environment Variables      | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `SERVICE_ACCOUNT_KEY_PATH` | The path to your service account key generated in the Firebase console.                                                               |
| `STORAGE_BUCKET_URL`       | The name of your Firebase storage bucket. E.g. `gs://<PROJECT_NAME>.appspot.com` but omit the `gs://` when entering it in your `.env` |

**⚠ Important Note!**
You should add your service account key (.json file) in your .gitignore to prevent it from being pushed to your repository!

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
