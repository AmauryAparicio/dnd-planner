/* eslint-disable no-restricted-properties */
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.on("error", (err) => {
  console.error("db client error", err);
});
export const db = drizzle(pool, {
  schema,
  logger: process.env.NODE_ENV === "development",
});

export type DB = typeof db;
