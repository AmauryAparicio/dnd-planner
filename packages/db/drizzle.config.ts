// import type { Config } from "drizzle-kit";

// if (!process.env.POSTGRES_URL) {
//   throw new Error("Missing POSTGRES_URL");
// }

// export default {
//   schema: "./src/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: { url: process.env.POSTGRES_URL },
// } satisfies Config;
import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const nonPoolingUrl = process.env.POSTGRES_URL.replace(":6543", ":5432");

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
} satisfies Config;
