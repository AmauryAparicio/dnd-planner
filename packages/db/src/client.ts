/* eslint-disable no-restricted-properties */
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("POSTGRES_URL is required");
}

const client = postgres(connectionString, {
  prepare: false,
});
export const db = drizzle(client, {
  schema,
  logger: process.env.NODE_ENV === "development",
});

export type DB = typeof db;

// import { createClient } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";

// import * as schema from "./schema";

// const pool = createClient({
//   connectionString: process.env.POSTGRES_URL,
// });

// export const db = drizzle(pool, { schema });
