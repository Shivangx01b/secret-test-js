headers: {
  Authorization: 'Bearer test-access-token',
  apikey: process.env.NGINX_API_KEY
}
return "credit-central-web"

// reactStrictMode: true,
basePath: process.env.BASE_PATH,
env: {
  BASE_PATH: process.env.BASE_PATH,
  PORT: process.env.PORT,
  SSL_URL: process.env.SSL_URL,
  API_URL: process.env.API_URL_NGINX,
  API_KEY: process.env.API_KEY,
  API_KEY_NGINX: process.env.API_KEY_NGINX,
  API_KEY_REVIEW_QUEUE: process.env.API_KEY_REVIEW_QUEUE,
  ENV_REVIEW_QUEUE: process.env.ENV_REVIEW_QUEUE,
  BASE_ENV: process.env.API_ENV,
  PUBLIC_PATHS: JSON.stringify(["/login"]),
  COINS_ENABLED_PRODUCTS: process.env.COINS_ENABLED_PRODUCTS,
  OTEL_AUTH_SECRET: process.env.OTEL_AUTH_SECRET,
  OTEL_ENDPOINT: process.env.OTEL_ENDPOINT,
  ECS_API_KEY: process.env.ECS_API_KEY,
  API_KEY_NGINX_SC: process.env.API_KEY_NGINX_SC,
  API_ENV_SC: process.env.API_ENV_SC,
  ACMI_URL: process.env.ACMI_URL,
  MORTGAGE_TYPE_PRODUCTS: process.env.MORTGAGE_TYPE_PRODUCTS,
  CRYPTO_TYPE_PRODUCTS: process.env.CRYPTO_TYPE_PRODUCTS,
  DK_DIGITAL_VERIFICATION_VIEW_ENABLED: process.env.DK_DIGITAL_VERIFICATION_VIEW_ENABLED,
  USER_MANUAL_DOC_ID: process.env.USER_MANUAL_DOC_ID,
  USER_MANUAL_VERSION: process.env.USER_MANUAL_VERSION,
  DOCUMENT_DOWNLOAD_ACCESS: process.env.DOCUMENT_DOWNLOAD_ACCESS,
  DATA_CENTRAL_PRODUCTS: process.env.DATA_CENTRAL_PRODUCTS,
},
eslint: {
  ignoreDuringBuilds: true // This allows production builds to successfully complete
}
