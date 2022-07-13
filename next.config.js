/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: '048742D9-8D35-4EA0-A6AB-8D1FE1E3FF82\n' +
      'EF628101-C07D-4702-90BC-FA5E7CE17354\n' +
      'AF018E91-F95B-455B-A8B8-1E0C5A8D41EE\n' +
      'BA190DBE-59ED-478D-97E1-BB6EE95F9E7B\n' +
      'E6D2C4F1-B409-4F35-84BB-984A89B257FE'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api' // development api
      : 'http://localhost:3000/api' // production api
  }
}