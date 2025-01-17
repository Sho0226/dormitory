import { config } from "dotenv";
import { z } from "zod";

config({ path: "../client/.env" });
config();

const SERVER_PORT = +z
  .string()
  .regex(/^\d+$/)
  .parse(process.env.NEXT_PUBLIC_SERVER_PORT);
const API_BASE_PATH = z
  .string()
  .startsWith("/")
  .parse(process.env.NEXT_PUBLIC_API_BASE_PATH);
const COGNITO_POOL_ENDPOINT = z
  .string()
  .parse(process.env.NEXT_PUBLIC_COGNITO_POOL_ENDPOINT);
const COGNITO_USER_POOL_ID = z
  .string()
  .parse(process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID);
const COGNITO_USER_POOL_CLIENT_ID = z
  .string()
  .parse(process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID);
const S3_ENDPOINT = z.string().parse(process.env.S3_ENDPOINT ?? "");
const S3_BUCKET = z.string().parse(process.env.S3_BUCKET ?? "");
const S3_PUBLIC_ENDPOINT =
  z.string().url().optional().parse(process.env.S3_PUBLIC_ENDPOINT) ??
  `${S3_ENDPOINT}/${S3_BUCKET}`;
const S3_ACCESS_KEY = z.string().parse(process.env.S3_ACCESS_KEY ?? "");
const S3_SECRET_KEY = z.string().parse(process.env.S3_SECRET_KEY ?? "");
const S3_REGION = z.string().parse(process.env.S3_REGION ?? "");
const OPENAI_BASE_URL = z.string().url().parse(process.env.OPENAI_BASE_URL);
const OPENAI_KEY = z.string().parse(process.env.OPENAI_KEY);
const DeepL_KEY = z.string().parse(process.env.NEXT_PUBLIC_DEEPL_AUTH_KEY);
const Shop_KEY = z.string().parse(process.env.HOTPEPPER_API_KEY);

export {
  API_BASE_PATH,
  COGNITO_POOL_ENDPOINT,
  COGNITO_USER_POOL_CLIENT_ID,
  COGNITO_USER_POOL_ID,
  OPENAI_BASE_URL,
  OPENAI_KEY,
  S3_ACCESS_KEY,
  S3_BUCKET,
  S3_ENDPOINT,
  S3_PUBLIC_ENDPOINT,
  S3_REGION,
  S3_SECRET_KEY,
  SERVER_PORT,
  DeepL_KEY,
  Shop_KEY,
};
